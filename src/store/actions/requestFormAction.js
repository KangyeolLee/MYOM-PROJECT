import { firestore } from "firebase";

export const sendRequest = (requestData) => {
	return(dispatch, getState, { getFirestore }) => {
		const senderProfile = getState().firebase.profile;
		const firestore = getFirestore();
		firestore.collection('request').doc().set({
			requestData,
			orderer: senderProfile.initials,
		})
		.then(()=>{
			dispatch({type: 'SEND_REQUEST_SUCCESS'})
		})
		.catch((err) => {
			dispatch({type: 'SEND_REQUEST_ERROR'})
		})
	}
}