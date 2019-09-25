const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const { resolvers, fragmentReplacements } = require('./resolver');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/auth');
var path = require('path');
const express = require('express');
const Multer = require('multer');
const imgUpload = require('./util/ImgUpload');
const ImgDelete = require('./util/ImgDelete');

module.exports = db = new Prisma({
    fragmentReplacements: fragmentReplacements,
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466/',
    secret: 'jwt-secret',
    debug: false
});

const server = new GraphQLServer({
    typeDefs: 'src/resolver/schema.graphql',
    resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    },
    context: req => ({
        ...req,
        db
    })
});

//view Engine
server.express.set('views', path.join(__dirname, 'views'));
server.express.set('view engine', 'ejs');

//static 파일 라우팅
server.express.use(express.static(path.join(__dirname, '../resource')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.express.get('/api/usermgmt', function(req, res) {
    res.locals.mode = req.query.mode;
    res.render('usermgmt.ejs');
});


server.express.post('/api/upload/image', multer.single('image'), imgUpload.uploadToGcs, function(request, response, next) {
    const data = request.body;
    if (request.file && request.file.cloudStoragePublicUrl) {
        data.imageUrl = request.file.cloudStoragePublicUrl;
    }
    response.send(data);
})

server.post('/api/delete/image', function (req, res, next) {
    try {
        ImgDelete(req.body.path);
        return res.status(200).send();
    } catch(err) {
        console.log(err)
        return res.status(401).send(err);
    }
});

server.express.post(
    server.options.endpoint,
    authMiddleware,
    (err, req, res, next) => {
        if (err) {
            console.error('>> [ERROR]', err.message);
            return res.status(401).send(err);
        }
        next();
    }
);

const multer = Multer({
    storage: Multer.MemoryStorage,
    fileSize: 5 * 1024 * 1024
  });


server.start(() => {
    console.log(`>> Server is running on http://localhost:4000`);
});
