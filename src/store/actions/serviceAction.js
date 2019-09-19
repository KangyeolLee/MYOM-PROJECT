import firebase from 'firebase/app';

export const _buy_service = (service_id, service, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userInfo = getState().firebase.auth;
    // const userRef = firestore.collection('users').doc(userInfo.uid);
    // const providerRef = firestore.collection('users').doc(service.serviceProvider);
    const listRef = firestore.collection('purchaseList');

    let userPurchase = {
      service_id: service_id,
      category: service.category,
      review: null,
      date: new Date(),
      imgURL: service.imgURL,
      provider_id: service.serviceProvider,
      buyer_id: userInfo.uid,
      options: '니가 고른 옵션',
    }
    
    listRef.add({
      ...userPurchase,
    })
    // firestore.runTransaction(transaction => {
    //   return transaction.get(userRef).then(doc => {
    //     if(!doc.data().purchaseHistory) {
    //       transaction.set(userRef, {
    //         purchaseHistory: [userPurchase],
    //       }, {merge: true})
    //     } else {
    //       const purchaseHistory = doc.data().purchaseHistory;
    //       purchaseHistory.push(userPurchase);
    //       transaction.update(userRef, { purchaseHistory: purchaseHistory })
    //     }
    //   })
    // })
    // .then(() => {
    //   firestore.runTransaction(transaction => {
    //     return transaction.get(providerRef).then(doc => {
    //       if(!doc.data().workingList) {
    //         transaction.set(providerRef, {
    //           workingList: [userPurchase],
    //         }, {merge: true})
    //       } else {
    //         const workingList = doc.data().workingList;
    //         workingList.push(userPurchase);
    //         transaction.update(providerRef, { workingList: workingList })
    //       }
    //     })
    //   })
    // })
    .then(() => {
      dispatch({ type: 'BUY_SERVICE_SUCCESS'});
      history.push('/purchasedone/' + service_id);
    }).catch((err) => {
      dispatch({ type: 'BUY_SERVICE_ERROR', err })
    })
  }
}

export const _proceed_order = (purchaseList_id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userInfo = getState();
    const listRef = firestore.collection('purchaseList').doc(purchaseList_id);

    listRef.update({
      request: true,
      proceed: true,
      review: false,
      request: false,
    })
    .then(() => {
      dispatch({ type: 'PROCEED_ORDER_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type: 'PROCEED_ORDER_ERROR', err })
    })  
  }
}

export const _complete_order = (purchaseList_id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userInfo = getState();
    const listRef = firestore.collection('purchaseList').doc(purchaseList_id);

    listRef.update({
      proceed: false,
    })
    .then(() => {
      dispatch({ type : 'COMPLETE_ORDER_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type : 'COMPLETE_ORDER_ERROR', err })
    })
  }
}

export const _cancel_order = (purchaseList_id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userInfo = getState();
    const listRef = firestore.collection('purchaseList').doc(purchaseList_id);

    listRef.update({
      cancel: true,
      request: false,
      proceed: null,
      review: null,
    })
    .then(() => {
      dispatch({ type : 'CANCEL_ORDER_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type : 'CANCEL_ORDER_ERROR', err })
    })
  }
}