import firebase from 'firebase/app';

export const sendMessage = (chatData, chatId) => {
	return(dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		let docRef = firestore.collection('chats').doc(chatId);
		let progressBar = document.getElementById('dvProgressBar');
		let cbProgress = (snapshot) => {
			let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
			progressBar.style.width= progress + '%';
		}
		if(chatData.file){
			let storageRef = firebase.storage().ref('files/chats/' + docRef.id).child(chatData.file.name);
			storageRef.put(chatData.file)
			.then(()=> {
				storageRef.getDownloadURL()
				.then((url) => {
					// let httpsReference = firebase.storage().refFromURL(url);
					// console.log(httpsReference);
					// console.log(url);
					docRef.update({
						messages: firebase.firestore.FieldValue.arrayUnion({
							sender: chatData.sender,
							message: chatData.message,
							file: url,
							fileName: chatData.file.name,
							sendAt: new Date(),
						}),
            receiverHasRead: false,
            updatedAt: new Date(),
					})
				})
			})
		} else{
				docRef.update({
					messages: firebase.firestore.FieldValue.arrayUnion({
						sender: chatData.sender,
						message: chatData.message,
						sendAt: new Date(),
					}),
          receiverHasRead: false,
          updatedAt: new Date(),
				})
				.then(()=> {
					dispatch({type: 'SEND_MESSAGE_SUCCESS'})
				}).catch((err) => {
					dispatch({type: 'SEND_MESSAGE_ERROR'}, err)
				});
			}
	}
}

export const readMessage = (chatId) => {
	return(dispatch, getState, { getFirestore}) => {
		const firestore = getFirestore();
		firestore.collection('chats').doc(chatId).update({
			receiverHasRead: true
		})
		.then(() => {
			dispatch({type: 'READ_MESSAGE_SUCCESS'})
		}).catch((err) => {
			dispatch({type: 'READ_MESSAGE_ERROR', err})
		});
	}
}