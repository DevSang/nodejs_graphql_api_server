const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const { resolvers, fragmentReplacements } = require('./resolver');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/auth');
var path = require('path');
const express = require('express');

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
    res.render('usermgmt.ejs');
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

server.start(() => {
    console.log(`>> Server is running on http://localhost:4000`);
});
