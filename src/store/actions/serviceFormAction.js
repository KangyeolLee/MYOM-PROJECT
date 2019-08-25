import firebase from 'firebase/app';

export const serviceRegister = (serviceData, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    let docRef = firestore.collection('services').doc();
    let storageRef = firebase.storage().ref('images/services/' + docRef.id).child(serviceData.service_img.name);
    storageRef.put(serviceData.service_img)
      .then(() => {
        storageRef.getDownloadURL()
          .then((url) => {
            // services collection's document
            docRef.set({
              serviceProvider: serviceData.service_provider,
              category: serviceData.service_type,
              description: [
                { title: '서비스 설명', contents: serviceData.service_desc},
                { title: '작업 과정', contents: serviceData.service_process},
                { title: '작업 방식', contents: serviceData.service_doing},
                { title: '작업 스타일', contents: serviceData.service_style},
              ],
              filter: null,
              imgURL: url,
              prices: [
                { price: serviceData.service_price_standard, contents: serviceData.standard_desc },
                { price: serviceData.service_price_deluxe, contents: serviceData.deluxe_desc },
                { price: serviceData.service_price_premium, contents: serviceData.premium_desc },
              ]
            });
            // services collections's sub-collection's document: reviews
            docRef.collection('reviews').add({
              contents: '',
              profile: '',
              starts: '',
              timestamp: '',
              userID: '',
            });
            // services collections's sub-collection's document: inquiry
            docRef.collection('inquiry').add({
              comment: null,
              contents: '',
              timestamp: '',
              userID: '',
            });
          });
      })
    .then(() => {
      dispatch({ type: 'REGISTER_SERVICE_SUCCESS', serviceData });
      history.push('/mypageProvider/myServices');
    }).catch((err) => {
      dispatch({ type: 'REGISTER_SERVICE_ERROR', err })
    })
  }
}