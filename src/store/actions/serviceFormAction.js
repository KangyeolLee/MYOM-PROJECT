import firebase from 'firebase/app';

export const serviceRegister = (serviceData, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userAuth = getState().firebase.auth;
    let docRef = firestore.collection('services').doc();
    let storageRef = firebase.storage().ref('images/services/' + docRef.id).child(serviceData.service_img.name);
    storageRef.put(serviceData.service_img)
      .then(() => {
        storageRef.getDownloadURL()
          .then((url) => {
            // services collection's document
            docRef.set({
              serviceProvider: userAuth.uid,
              category: serviceData.service_type,
              description: [
                { title: '서비스 설명', contents: serviceData.service_desc},
                { title: '작업 과정', contents: serviceData.service_process},
                { title: '작업 방식', contents: serviceData.service_doing},
                { title: '작업 스타일', contents: serviceData.service_style},
              ],
              filter: null,
              imgURL: url,
              inquiryCount: 0,
              reviewCount: 0,
              prices: [
                { price: serviceData.service_price_standard, contents: serviceData.standard_desc },
                { price: serviceData.service_price_deluxe, contents: serviceData.deluxe_desc },
                { price: serviceData.service_price_premium, contents: serviceData.premium_desc },
              ],
              timestamp: new Date(),
            });
            // services collections's sub-collection's document: reviews
            // docRef.collection('reviews').add({
            //   contents: '',
            //   profile: '',
            //   starts: '',
            //   timestamp: '',
            //   userID: '',
            //   uid: '',
            // });
            // services collections's sub-collection's document: inquiry
            // docRef.collection('inquiry').add({
            //   comment: null,
            //   contents: '',
            //   timestamp: '',
            //   userID: '',
            //   uid: '',
            // });
          });
      })
    .then(() => {
      dispatch({ type: 'REGISTER_SERVICE_SUCCESS', serviceData });
      console.log(docRef);
      history.push('/mypageProvider/myServices');
    }).catch((err) => {
      dispatch({ type: 'REGISTER_SERVICE_ERROR', err })
    })
  }
}

export const inquiryRegister = (docID, inquiryData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userAuth = getState().firebase.auth;
    firestore.collection('services').doc(docID).collection('inquiry').add({
      comment: [],
      contents: inquiryData.inquiry_contents,
      userID: userAuth.email,
      uid: userAuth.uid,
      timestamp: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_INQUIRY', inquiryData})
    }).catch((err) => {
      dispatch({type: 'CREATE_INQUIRY_ERROR', err})
    })
  }
}

export const reviewsRegister = (docID, reviewsData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userAuth = getState().firebase.auth;
    const userProfile = getState().firebase.profile;
    firestore.collection('services').doc(docID).collection('reviews').add({
      comment: [],
      stars: '',
      profile: userProfile,
      contents: reviewsData.reviews_contents,
      userID: userAuth.email,
      uid: userAuth.uid,
      timestamp: new Date(),
    }).then(() => {
      dispatch({type: 'CREATE_REVIEWS', reviewsData})
    }).catch((err) => {
      dispatch({type: 'CREATE_REVIEWS_ERROR', err})
    })
  }
}