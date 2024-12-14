const Firebase = require('firebase-admin');
const serviceAccount = require('../drive-fa7ba-firebase-adminsdk-q74q1-95993ee9b9.json');

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-fa7ba.firebasestorage.app'
})

module.exports = Firebase;