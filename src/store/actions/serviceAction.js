import firebase from 'firebase/app';

export const _buy_service = (service_id, service, price, plus, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userInfo = getState().firebase.auth;
    const userProfile = getState().firebase.profile;
    // const userRef = firestore.collection('users').doc(userInfo.uid);
    // const providerRef = firestore.collection('users').doc(service.serviceProvider);
    const listRef = firestore.collection('purchaseList').doc();
    const chatRef = firestore.collection('chats').doc(userInfo.email+':'+ service.provider_email);
    const totalPrice = plus.total_price ? plus.total_price : price.price;
    const plusMinute = plus.plus_time ? plus.plus_time : '';
    let userPurchase = {
      service_id: service_id,
      service_title: service.service_title,
      // category: service.category,
      price: totalPrice,
      plusMinute,
      runningTime: price.runningTime,
      additionalCost: price.additional_price,
      working: price.working,
      review: null,
      purchasedAt: new Date(),
      imgURL: service.images.thumbnail,
      provider_id: service.provider_id,
      provider_nickName: service.provider_nickName,
      provider_email: service.provider_email,
      buyer_id: userInfo.uid,
      buyer_nickName: userProfile.initials,
      options: price.chips,
      type: price.type,
      isPaid: false,
    }
    
    listRef.set({
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
     chatRef.get().then(doc => {
       if(doc.exists){
         chatRef.update({
           deal: true,
           messages: firebase.firestore.FieldValue.arrayUnion(
             {
              message: '구매해주셔서 감사합니다, 추가 문의사항은 언제든지 남겨주시기 바랍니다.',
              sender: service.provider_nickName,
              sendAt: new Date(),
             }
           )
         })
       }else{
         chatRef.set({
           deal: true,
           users_email: [
             userInfo.email,
             service.provider_email,
           ],
           users_nickName : [
             userProfile.initials,
             service.provider_nickName,
           ],
           messages: [
             {
               message: '구매해주셔서 감사합니다, 추가 문의사항은 언제든지 남겨주시기 바랍니다.',
               sender: service.provider_nickName,
               sendAt: new Date(),
             }
           ]
         })
       }
     })
    })
    .then(() => {
      dispatch({ type: 'BUY_SERVICE_SUCCESS'});
      history.push('/purchasedone/' + listRef.id);
    }).catch((err) => {
      dispatch({ type: 'BUY_SERVICE_ERROR', err })
    })
  }
}

export const _proceed_order = (purchaseList_id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const listRef = firestore.collection('purchaseList').doc(purchaseList_id);

    listRef.update({
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

export const _confirm_order = (purchaseList_id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const listRef = firestore.collection('purchaseList').doc(purchaseList_id);

    listRef.update({
      review: true,
    })
    .then(() => {
      dispatch({ type : 'CONFIRM_ORDER_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type : 'CONFIRM_ORDER_ERROR', err })
    })
  }
}

export const chatCreate = (userProfileImg, userEmail, userNickName, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userInfo = getState().firebase.auth;
    const userProfile = getState().firebase.profile;
    const docRef = firestore.collection('chats').doc(userInfo.email+':'+ userEmail);
    
    docRef.get().then(doc=> {
      if(doc.exists){
        return ;
      } else if(userProfile.email === userEmail) {
        history.push('/chatDashboard');
        return;
      } else{
        docRef.set({ 
          [userEmail]: userProfile.profileImgURL,
          [userInfo.email]: userProfileImg,
          deal: false, 
          users_email: [
            userInfo.email, // buyer
            userEmail,      // provider
          ],
          users_nickName : [
            userProfile.initials,
            userNickName,
          ],
          messages: [
            {
              message: '반갑습니다, 자유롭게 문의주시기바랍니다.',
              sender: userNickName,
              sendAt: new Date(),
            }
          ]
        })
      }
    })
    .then(() => {
      dispatch({type: 'CHAT_CREATE_SUCCESS'});
      history.push('/chatDashboard');
    })
    .catch((err) => {
      dispatch({type:'CHAT_CREATE_ERROR'});
    })
  }
}
