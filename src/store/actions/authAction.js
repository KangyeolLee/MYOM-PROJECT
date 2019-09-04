import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

export const signIn = (cred) => {
  return(dispatch) => {
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
  return(dispatch) => {
    //const firebase = getFirebase();
    firebase.auth().signOut()
      .then(() => {
        dispatch({type: 'SIGNOUT_SUCCESS'})
      })
  }
}

export const signUp = (newUser) => {
  return(dispatch, getState, { getFirestore }) => {
    //const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        email: newUser.email
      })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch((err) => {
      switch(err.code) {
        case 'auth/email-already-in-use':
          dispatch({type: 'EMAILUSED_ERROR'});
          break;
        case 'auth/invalid-email':
          dispatch({type: 'EMAILINVALID_ERROR'});
          break;
        case 'auth/operation-not-allowed':
          dispatch({type: 'OPERATION_ERROR'});
          break;
        case 'auth/weak-password':
          dispatch({type: 'WEAKPWD_ERROR'});
          break;
        default: 
          dispatch({type: 'SIGNUP_ERROR', err});
      }
    })
  }
}

export const withdrawal = (user) => {
  return(dispatch, getState, { getFirestore }) =>{
    //const firebase = getFirebase();
    const userInfo = firebase.auth().currentUser;
    const firestore = getFirestore();
    if(user.email !== userInfo.email) {
      alert('아이디가 일치하지 않습니다')
    } else {
        firestore.collection('users').doc(userInfo.uid).delete()
        .then(() => {
          userInfo.delete()
          .then(() => {
          dispatch({type:'DELETE_SUCCESS'})
          }).catch((err) => {
          dispatch({type:'DELETE_ERROR', err})
        });
      });
    }
  }
}

// export const changePwd = (email, oldpwd, newpwd, chknewpwd) => {
//   return(dispatch) => {
//     let user = firebase.auth().currentUser;
//     let cred = firebase.auth.EmailAuthProvider.credential(email, oldpwd)
//     user.reauthenticateWithCredential(cred)
//     .then((newpwd, chknewpwd) => {
//       if(newpwd !== chknewpwd){
//         alert('입력하신 새로운 비밀번호가 다릅니다.')
//       } else{
//         user.updatePassword(newpwd)
//         .then(() => {
//           dispatch({type:'PWDUPDATE_SUCCESS'})
//         }).catch((err) => {
//           dispatch({type:'PWDUPDATE_ERROR', err})
//         });
//       }
//     }).catch((err) => {
//       dispatch({type: 'UPDATE_ERROR', err})
//     });
//   }
// }

export const changePwd = (pwdInfo, history) => {
  // const reauthenticate = (currentPassword) => {
  //   let user = firebase.auth().currentUser;
  //   let cred = firebase.auth.EmailAuthProvider.credential(
  //     user.email, currentPassword);
  //   return user.reauthenticateWithCredential(cred)
  //   .catch((err) => {
  //     alert('기존의 비밀번호를 재입력해주세요.')
  //   })
  // }
  return(dispatch) => {
    let user = firebase.auth().currentUser;
    let cred = firebase.auth.EmailAuthProvider.credential(user.email, pwdInfo.oldpwd);
    user.reauthenticateWithCredential(cred).then(() => {
      if(pwdInfo.newpwd !== pwdInfo.chknewpwd){
        alert('변경할 비밀번호와 재입력 값이 다릅니다.');
      }else{
        user.updatePassword(pwdInfo.newpwd).then(() =>{
          dispatch({type: 'PWDUPDATE_SUCCESS'});
          history.push('/');
        }).catch((err) => {
          dispatch({type:'PWDUPDATE_ERROR', err});
        });
      }
    }).catch((err) => {
      dispatch({type:'REAUTHENTICATE_ERROR', err});
    });
  }
}

export const resetPwdEmail = (user) => {
  return(dispatch) => {
    firebase.auth().sendPasswordResetEmail(user.email)
    .then(()=> {
      dispatch({type: 'SENDRESETEMAIL_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'SENDRESETEMAIL_ERROR'}, err);
    });
  }
}

export const sendEmailVerification = (user) => {
  return(dispatch) => {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification()
    .then(() => {
      dispatch({type: 'SENDEMAILVERIFICATION_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'SENDEMAILVERIFICATION_ERROR'}, err)
    });
  }
}

export const profileImgRegister = (profileImg) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userAuth = getState().firebase.auth;
    let docRef = firestore.collection('users').doc(userAuth.uid);
    let storageRef = firebase.storage().ref('images/users/' + docRef.id).child(profileImg.profile_img.name);
    storageRef.put(profileImg.profile_img)
      .then(() => {
        storageRef.getDownloadURL()
          .then((url) => {
            docRef.update({
              profileImgURL: url
            })
          })
      })
    .then(()=>{
      dispatch({type: 'PROFILEIMGREGISTER_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'PROFILEIMGREGISTER_ERROR', err});
    })
  }
}

