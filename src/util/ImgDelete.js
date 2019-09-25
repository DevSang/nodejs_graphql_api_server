const {Storage} = require('@google-cloud/storage');

const gcs = new Storage({
  projectId: 'looncup',
  keyFilename: '../key/looncup-access-storage.json'
});

const bucketName = 'loon_img'
const bucket = gcs.bucket(bucketName);

const ImgDelete = (deleteFile) => {
  console.log(`imgDelete ${deleteFile}`)
  const df = bucket.file(deleteFile);
  df.delete()
  .then(data => {
      console.log(`delete file ${deleteFile}`)
      return deleteFile;
  }).catch(err => console.log(err))
}
module.exports = ImgDelete;