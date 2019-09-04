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
      history.push('/mypageProvider/myServices');
    }).catch((err) => {
      dispatch({ type: 'REGISTER_SERVICE_ERROR', err })
    })
  }
}

export const serviceDelete = (curInstance, id, password) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const credentials = firebase.auth.EmailAuthProvider.credential(user.email, password);
    let docRef = firestore.collection('services').doc(id);

    let subColl = docRef.collection('inquiry');
    
    user.reauthenticateWithCredential(credentials)
      .then(() => {
        docRef.get().then((doc) => {
          if(doc.exists) {
            docRef.collection('inquiry').get().then(sub => {    // if inquiry sub-collection exists
              if(sub.docs.length <= 0) {
                dispatch({ type: 'DELETE_SERVICE_ERROR_WITH_INQUIRY' });
                return;
              }
            });
            docRef.collection('reviews').get().then(sub => {  // if reviews sub-collection exists
              if(sub.docs.length <= 0) {
                dispatch({ type: 'DELETE_SERVICE_ERROR_WITH_REVIEWS' });
                return;
              }
            })
          }

          const fromURL = doc.data().imgURL;
          const storageRef = firebase.storage().refFromURL(fromURL);

          storageRef.delete().then(() => {
            docRef.delete();
            curInstance.close();
        })
      })
    }).then(() => {
      dispatch({ type: 'DELETE_SERVICE_SUCCESS', })
      // history.push('/mypageProvider/myServices');
    }).catch((err) => {
      switch(err.code) {
        case "auth/wrong-password":
          console.log(err)
          dispatch({type: 'CHECK_PASSWORD_ERROR', err});
          break;
        
        case "auth/too-many-requests":
          console.log(err);
          dispatch({type: 'TOO_MANY_REQUESTS_FOR_VERIFICATION'});
          break;

        default:
          console.log(err)
          dispatch({ type: 'DELETE_SERVICE_ERROR' });
      }
    })   
  }
}
export const serviceUpdate = (serviceData, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    let docRef = firestore.collection('services').doc(serviceData.service_id);
    let storageRef = firebase.storage().ref('images/services/' + docRef.id);

    docRef.get().then((doc) => {
      const fromURL = doc.data().imgURL;
      const httpsRef = firebase.storage().refFromURL(fromURL);
      
      httpsRef.delete()
        .then(() => {
          storageRef.child(serviceData.service_img.name).put(serviceData.service_img)
          .then(() => {
            storageRef.child(serviceData.service_img.name).getDownloadURL()
              .then((url) => {
                docRef.update({
                  category: serviceData.service_type,
                  description: [
                    { title: '서비스 설명', contents: serviceData.service_desc},
                    { title: '작업 과정', contents: serviceData.service_process},
                    { title: '작업 방식', contents: serviceData.service_doing},
                    { title: '작업 스타일', contents: serviceData.service_style},
                  ],
                  imgURL: url,
                  prices: [
                    { price: serviceData.service_price_standard, contents: serviceData.standard_desc },
                    { price: serviceData.service_price_deluxe, contents: serviceData.deluxe_desc },
                    { price: serviceData.service_price_premium, contents: serviceData.premium_desc },
                  ],
                  updatedAt: new Date(),
                })
              })
          })
        }).then(()=> {
          dispatch({ type: 'UPDATE_SERVICE_SUCCESS', serviceData });
          history.push('/mypageProvider/myServices');
        }).catch((err) => {
          dispatch({ type: 'UPDATE_SERVICE_ERROR', err })
        })
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
      dispatch({type: 'CREATE_INQUIRY_SUCCESS', inquiryData})
    }).catch((err) => {
      dispatch({type: 'CREATE_INQUIRY_ERROR', err})
    })
  }
}

export const reviewsRegister = (docID, reviewsData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userAuth = getState().firebase.auth;
    //const userProfile = getState().firebase.profile;
    firestore.collection('services').doc(docID).collection('reviews').add({
      comment: [],
      stars: '',
      //profile: userProfile,
      contents: reviewsData.reviews_contents,
      userID: userAuth.email,
      uid: userAuth.uid,
      timestamp: new Date(),
    }).then(() => {
      dispatch({type: 'CREATE_REVIEWS_SUCCESS', reviewsData})
    }).catch((err) => {
      dispatch({type: 'CREATE_REVIEWS_ERROR', err})
    })
  }
}

export const _init_authError = (authError) => {
  return (dispatch) => {
    if(authError) dispatch({ type : 'INIT_AUTHERROR_SUCCESS'})
  }
}