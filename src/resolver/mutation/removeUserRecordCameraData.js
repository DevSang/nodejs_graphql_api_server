const request = require('request-promise-native');
const moment = require('moment');
const {Storage} = require('@google-cloud/storage');


module.exports = async (
    parent,
    { id },
    ctx,
    info
) => {
    // 삭제된 경우 GCP에서 예전 사진 삭제
    let imgInfo = await ctx.db.query.userRecordCameraDataByTimes({where: {id}});
    if(imgInfo.length == 0 ) return new Error('No Record Camera Data');
    imgInfo = imgInfo[0]
    const gcs = new Storage({
        projectId: 'looncup',
        keyFilename: '../key/looncup-access-storage.json'
      });
      
    const bucket = gcs.bucket('loon_img');
      
    const imgPath = imgInfo.imagePath.replace('https://storage.googleapis.com/loon_img/', '')
    const deleteFile = bucket.file(imgPath);
    try {
        const result = await deleteFile.delete();
    } catch(err) {
        console.log(err)
    }
    return ctx.db.mutation.deleteUserRecordCameraDataByTime({where: {id}})
};
