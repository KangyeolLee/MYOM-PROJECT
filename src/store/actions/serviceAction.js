import firebase from 'firebase/app';

export const _buy_service = (service_id, service, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userInfo = getState().firebase.auth;
    const userRef = firestore.collection('users').doc(userInfo.uid);

    let userPurchase = {
      service_id: service_id,
      request: false,
      review: false,
      date: new Date(),
      imgURL: service.imgURL,
      provider: service.serviceProvider,
      options: '니가 고른 옵션',
    }
    
    firestore.runTransaction(transaction => {
      return transaction.get(userRef).then(doc => {
        if(!doc.data().purchaseHistory) {
          transaction.set(userRef, {
            purchaseHistory: [userPurchase],
          }, {merge: true})
        } else {
          const purchaseHistory = doc.data().purchaseHistory;
          purchaseHistory.push(userPurchase);
          transaction.update(userRef, { purchaseHistory: purchaseHistory })
        }
      })
    })
    .then(() => {
      dispatch({ type: 'BUY_SERVICE_SUCCESS'});
      history.push('/purchasedone');
    }).catch((err) => {
      dispatch({ type: 'BUY_SERVICE_ERROR', err })
    })
  }
}