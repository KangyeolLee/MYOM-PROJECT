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
					createAt: new Date(),
					comments: [],
					// comments: firebase.firestore.FieldValue.arrayUnion({
					// 	comment: '',
					// 	writer: '',
					// })
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

export const commentRegister = (docID, commentData) => {
	return(dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const userAuth = getState().firebase.auth;
		const profile = getState().firebase.profile;
		firestore.collection('posts').doc(docID).update({
				comments: firebase.firestore.FieldValue.arrayUnion({
				comment: commentData.comment,
				likes: 0,
				userID: profile.initials,
				userProfile: profile.profileImgURL,
				uid: userAuth.uid,
				timestamp: new Date(),
			})
		}).then(() => {
			dispatch({type: 'CREATE_COMMENTS_SUCCESS', commentData})
		}).catch((err) => {
			dispatch({type: 'CREATE_COMMENTS_ERROR'}, err)
		})
	}
}

export const postDelete = (docID, history) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		let docRef = firestore.collection('posts').doc(docID);
		docRef.delete()
		.then(() => {
			dispatch({type: 'DELETE_POST_SUCCESS'});
			history.push('/community/admin')
		}).catch((err) => {
			dispatch({type: 'DELETE_POST_ERROR'});
		})

	}
}

export const _delete_comment = (post_id, commentData) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const docRef = firestore.collection('posts').doc(post_id);
			docRef.update({
				comments: firebase.firestore.FieldValue.arrayRemove(commentData)
			})
			.then(() => {
				dispatch({type: 'DELETE_COMMENT_SUCCESS'});
			})
			.catch((err) => {
				dispatch({type: 'DELETE_COMMENT_ERROR'});
		})
	}
}

export const _update_comment = (post_id, comment_id, updating_data) => {
	return (dispatch, getState, {getFirestore}) => {
		const firestore = getFirestore();
		const docRef = firestore.collection('posts').doc(post_id);
		// docRef.update({
		// 	comments: firebase.firestore.FieldValue.arrayUnion({
		// 		comment: updating_data
		// 	})
		// })
		// .then(() => {
		// 	dispatch({type: 'UPDATE_COMMENT_SUCCESS'});
		// })
		// .catch((err) => {
		// 	dispatch({type: 'UPDATE_COMMENT_ERROR', err});
		// }) 
		firestore.runTransaction(transaction => {
			return transaction.get(docRef).then(doc => {
				const commentHistory = doc.data().comments;
				const one = commentHistory[comment_id];
				one.comment = updating_data
				transaction.update(docRef, { comments: commentHistory})
			})
		})
		.then(() => {
			dispatch({type: 'UPDATE_COMMENT_SUCCESS'});
		})
		.catch((err) => {
			dispatch({type: 'UPDATE_COMMENT_ERROR', err});
		})
	}
}

export const _report_badUser = () => {
  return (dispatch) => {
    dispatch({type: 'REPORT_BADUSER_SUCCESS'})
  }
}