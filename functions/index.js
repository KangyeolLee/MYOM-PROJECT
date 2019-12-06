const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.newMessagesArriveded = functions.firestore.document('chats/{chatRoomId}')