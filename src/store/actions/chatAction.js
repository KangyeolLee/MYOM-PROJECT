import firebase from 'firebase/app';

export const sendMessage = (chatData, chatId) => {
	return(dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('chats').doc(chatId).update({
			messages: firebase.firestore.FieldValue.arrayUnion({
				sender: chatData.sender,
				message: chatData.message
			})
		})
		.then(()=> {
			dispatch({type: 'SEND_MESSAGE_SUCCESS'})
		}).catch((err) => {
			dispatch({type: 'SEND_MESSAGE_ERROR'}, err)
		});
	}
}