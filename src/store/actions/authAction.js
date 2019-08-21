import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const signIn = (cred) => {
  return(dispatch, getState, { getFirebase }) => {
    //const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      cred.email,
      cred.password
    ).then(() => { 
      dispatch({type:'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({type:'LOGIN_ERROR', err})
    })
  }
}

export const signOut = () => {
  return(dispatch, getState, { getFirebase }) => {
    //const firebase = getFirebase();
    firebase.auth().signOut()
      .then(() => {
        dispatch({type: 'SIGNOUT_SUCCESS'})
      })
  }
}

export const signUp = (newUser) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {
    //const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'SIGNUP_ERROR', err})
    })
  }
}

export const withdrawal = (user) => {
  return(dispatch, getState, { getFirebase }) =>{
    //const firebase = getFirebase();
    let userInfo = firebase.auth().currentUser;
    // if(user.email === userInfo.email){
    //   userInfo.delete()
    //   .then(() => {
    //     dispatch( {type: 'DELETE_SUCCESS'})
    //   }).catch((err) => {
    //     dispatch({type: 'DELETE_ERROR', err})
    //   })
    // }
    if(user.email !== userInfo.email) {
      alert('아이디가 일치하지 않습니다')
    } else {
      userInfo.delete()
        .then(() => {
        dispatch({type:'DELETE_SUCCESS'})
      }).catch((err) => {
        dispatch({type:'DELETE_ERROR', err})
      });
    }
  }
}