const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-fa7ba-firebase-adminsdk-q74q1-95993ee9b9.json')

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-fa7ba.firebasestorage.app',//drive-222ea.appspot.com 
    unique:true,
})

const upload = multer({
    storage: storage,
})

module.exports = upload;