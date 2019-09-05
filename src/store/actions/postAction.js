import firebase from 'firebase/app';

export const createPost = (postData, category, history) => {
	return(dispatch, getState, { getFirestore }) => {
		//make async call to databasae
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		let docRef = firestore.collection('posts').doc();
		let storageRef = firebase.storage().ref('images/posts/' + docRef.id).child(postData.post_img.name);
		storageRef.put(postData.post_img)
		.then(() => {
			storageRef.getDownloadURL()
			.then((url) => {
			//posts collection's document
				docRef.set({
					title: postData.title,
					content: postData.content,
					category: category,
					post_img: url,
					author: profile.initials,
					author_profileImg: profile.profileImgURL,
					authorId: authorId,
					createAt: new Date()
				}).then(() => {
					dispatch({type: 'CREATE_POST', postData});
					history.push('/community/'+category);
				}).catch((err) => {
					dispatch({type: 'CREATE_POST_ERROR', err})
				});
			});
		});
	}
}

export const postUpdate = (postData, category, history) => {
	return(dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		let docRef = firestore.collection('posts').doc(postData.post_id);
		let storageRef = firebase.storage().ref('images/posts/' + docRef.id);

		docRef.get().then((doc) => {
			const fromURL = doc.data().post_img;
			const httpsRef = firebase.storage().refFromURL(fromURL);

			httpsRef.delete()
				.then(() => {
					storageRef.child(postData.post_img.name).put(postData.post_img)
					.then(() => {
						storageRef.child(postData.post_img.name).getDownloadURL()
							.then((url) => {
								docRef.update({
									title: postData.title,
									content: postData.content,
									post_img: url,
								})
							})
					})
				}).then(()=> {
					dispatch({type: 'UPDATE_POST_SUCCESS', postData});
					history.push('/post/' + postData.post_id);
				}).catch((err) => {
					dispatch({type: 'UPDATE_POST_ERROR', err})
				})
		})
	}
}