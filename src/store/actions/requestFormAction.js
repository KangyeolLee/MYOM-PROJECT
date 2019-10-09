import { firestore } from "firebase";

export const sendRequest = (requestData, history, purchased_id) => {
	return(dispatch, getState, { getFirestore }) => {
		const senderProfile = getState().firebase.profile;
		const user = getState().firebase.auth;
		const firestore = getFirestore();
		firestore.collection('purchaseList').doc(purchased_id).update({
			requestData,
			orderer_nickName: senderProfile.initials,
			orderer_email : senderProfile.email,
			//구매자 uid 판매자 uid 이메일 닉네임 purchased_id : match.params
		})
		.then(()=>{
			dispatch({type: 'SEND_REQUEST_SUCCESS'});
			history.push('/purchaseDetails/' + purchased_id);
		})
		.catch((err) => {
			dispatch({type: 'SEND_REQUEST_ERROR'})
		})
	}
}