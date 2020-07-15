import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

export const signIn = (cred) => {
  return(dispatch) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => firebase.auth().signInWithEmailAndPassword(
      cred.email,
      cred.password
    ))
    .then(() => dispatch({type:'LOGIN_SUCCESS'}))
    .catch((err) => {
      switch(err.code) {
        case 'auth/user-not-found' :
          dispatch({type: 'NO_REGISTER_EMAIL_ERROR'});
          break;
        case 'auth/wrong-password' :
          dispatch({type: 'WRONG_PASSWORD_ERROR'});
          break;
        default :
          dispatch({type: 'LOGIN_ERROR', err});
      }
    })
  }
}

export const signOut = () => {
  return(dispatch, getState, { getFirestore }) => {
    // const firestore = getFirestore();
    // const userProfile = getState().firebase.profile;
    // const userChats = firestore.collection('chats').where('users_email', 'array-contains', userProfile.email);
    // const userChats = firestore.collection('chats').doc('1234@naver.com:acrkdduf@naver.com');

    // userChats.update({
    //   Logout: true,
    // })
    // userChats.get()
    // .then(snapshot => Promise.all())
    // .then(snapshot => {
    //   snapshot.forEach(doc => {
    //     const chatRef = firestore.collection('chats').doc(doc.id);
    //     return chatRef.update({
    //       ['isJoined_' + userProfile.initials]: false,
    //     });
    //   })
    // })
    firebase.auth().signOut()
    .then(() => window.location.href = '/')
    .then(() => dispatch({type: 'SIGNOUT_SUCCESS'}))
  }
}

export const signUp = (newUser) => {
  return(dispatch, getState, { getFirestore }) => {
    //const firebase = getFirebase();
    const firestore = getFirestore();
    const batch = firestore.batch();
    const userNicknames = firestore.collection('users').doc('userNicknames');

    userNicknames.get()
    .then(doc => {
      const userNicknamesList = doc.data();
      if (userNicknamesList[newUser.nickname]) throw { code: 'auth/duplicate-nickname' }
    })
    .then(() => {
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      )
      .then((res) => {
        const usersRef =  firestore.collection('users').doc(res.user.uid);
        batch.set(usersRef, {
          firstName: newUser.firstName,
          initials: newUser.nickname,
          email: newUser.email,
          authority: 'user',
          profileImgURL: '/img/defaults/userProfile.jpeg',
          condition_checked: newUser.condition_checked,
          privacy_checked: newUser.privacy_checked,
          emailRecieve_checked: newUser.emailRecieve_checked,
          timeStamp: new Date(),
          birth: newUser.birth,
          phoneNumber: newUser.phoneNumber,
        });
        batch.set(userNicknames, {
          [newUser.nickname]: true,
        }, {merge: true});
      })
      .then(() => {
        batch.commit();
        dispatch({type: 'SIGNUP_SUCCESS'})
      })
    }) 
    .catch((err) => {
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
        case 'auth/duplicate-nickname':
          dispatch({type: 'SIGNUP_NICKNAME_ERROR'});
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
    const userProfile = getState().firebase.profile;
    const firestore = getFirestore();
    const userNicknames = firestore.collection('users').doc('userNicknames');

    if(user.email !== userInfo.email) {
      alert('아이디가 일치하지 않습니다');
      return;
    } else {
      userInfo.delete()
      .then(() => {
        firestore.collection('users').doc(userInfo.uid).delete();
      })
      .then(() => {
        userNicknames.update({
          [userProfile.initials]: firebase.firestore.FieldValue.delete()
        });
      })
      .then(() => {
        window.location.href = '/';
        dispatch({type: 'DELETE_SUCCESS'})
      })
      .catch((err) => {
        switch(err.code) {
          case 'auth/requires-recent-login':
            dispatch({type: 'DELETE_RECENT_LOGIN_ERROR'}); 
            break;
            
          default:
            dispatch({type: 'DELETE_ERROR', err});
        }
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
    const passRule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
    let user = firebase.auth().currentUser;
    let cred = firebase.auth.EmailAuthProvider.credential(user.email, pwdInfo.oldpwd);
    user.reauthenticateWithCredential(cred).then(() => {
      if(pwdInfo.newpwd !== pwdInfo.chknewpwd){
        alert('변경할 비밀번호와 재입력 값이 다릅니다.');
        return;
      }
      else if(!passRule.test(pwdInfo.newpwd) || !passRule.test(pwdInfo.chknewpwd)) {
        alert('비밀번호는 문자/숫자를 포함한 8~15자리 이내로 해주시기 바랍니다.');
        return;
      } else {
        user.updatePassword(pwdInfo.newpwd).then(() =>{
          dispatch({type: 'PWDUPDATE_SUCCESS'});
        })
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

export const forgotEmail = (userData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    let docRef = firestore.collection("users").where("firstName", "==", userData.name).where("phoneNumber", "==", userData.tel);
    docRef.get().then((querySnapshot) => {
      if(querySnapshot.docs[0]){
        alert('가입하신 이메일 주소는 ' + querySnapshot.docs[0].data().email + ' 입니다.');
      } else{
        alert('입력하신 정보로 가입된 이메일이 없습니다.');
      }
      // querySnapshot.forEach((doc) => {
      //   if (doc.exists) {
      //     alert('가입하신 이메일 주소는 ' + doc.data().email + ' 입니다.');
      //   } else {
          
      //   }
      // })
    })
    .then(() => {
      dispatch({type: 'EMAIL_FIND_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'EMAIL_FIND_ERROR'});
    })
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

export const profileImgRegister = (profileImg, profiles) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userAuth = getState().firebase.auth;
    const userProfile = getState().firebase.profile;
    const docRef = firestore.collection('users').doc(userAuth.uid);
    const chatRealtimImg = firestore.collection('chats').doc('realtimeImg');
    const storageRef = firebase.storage().ref('images/users/' + docRef.id).child('profileImg');

    storageRef.put(profileImg.profile_img)
    .then(() => storageRef.getDownloadURL().then(url => {
      docRef.update({
        profileImgURL: url,
      })
      chatRealtimImg.update({
        [userProfile.initials]: url,
      })
    }))
    // .then(() => {
    //   docRef.update({
    //     profileImgURL: 'gs://myom-d144a.appspot.com/images/users/' + userAuth.uid + '/profileImg'
    //   })
    // })
    // .then(() => {
    //   firebase.storage().refFromURL('gs://myom-d144a.appspot.com/images/users/' + userAuth.uid + '/profileImg').getDownloadURL().then(url => profiles.map(profile => profile.src = url));
    // })

    .then(()=>{
      dispatch({type: 'PROFILEIMGREGISTER_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'PROFILEIMGREGISTER_ERROR', err});
    })
  }
}

