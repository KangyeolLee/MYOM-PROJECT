import firebase from 'firebase/app';

export const registerIntroduction = (introData) => {
	return(dispatch, getState, {getFirestore}) => {
		const firestore = getFirestore();
		const user = firebase.auth().currentUser;
		let docRef = firestore.collection('users').doc(user.uid);
		let storageRef = firebase.storage().ref('images/editors/' + docRef.id).child(introData.editor_profileImg_file.name);
		storageRef.put(introData.editor_profileImg_file)
		.then(() => {
			storageRef.getDownloadURL()
			.then((url) => {
				docRef.update({
					editor_profileImg_file: url,
					editor_introduction: introData.introduction,
					editor_career_year: introData.career_year,
					editor_career: introData.career,
					editor_portfolio: introData.portfolio,
				})
			})
		})
		.then(() => {
			dispatch({type: 'INTRODUCTION_REGISTER_SUCCESS'})
		})
		.catch((err) => {
			dispatch({type: 'INTRODUCTION_REGISTER_ERROR'}, err)
		});
	}
}