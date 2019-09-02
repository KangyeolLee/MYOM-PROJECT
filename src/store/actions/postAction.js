import firebase from 'firebase/app';

export const createPost = (postData) => {
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
					...postData,
					post_img: url,
					author: profile.initials,
					author_profileImg: profile.profileImgURL,
					authorId: authorId,
					createAt: new Date()
				}).then(() => {
					dispatch({type: 'CREATE_POST', postData});
				}).catch((err) => {
					dispatch({type: 'CREATE_POST_ERROR', err})
				});
			});
		});
	}
}