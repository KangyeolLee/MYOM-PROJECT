import firebase from 'firebase/app';

export const sendMessage = (chatData, chatId) => {
	return(dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const docRef = firestore.collection('chats').doc(chatId);
    const chattingRoom = document.querySelector('.chattingViewport');
    const storageRef = (chatData.file) ? firebase.storage().ref('files/chats/' + docRef.id).child(new Date().getTime() + '/' + chatData.fileName) : null;
    const messagesParent = (chatData.file) ? document.querySelector('.file-upload-area') : null;
    const currentLength = (chatData.file) ? [...messagesParent.children].filter(uploading => uploading.className.includes('uploadingMessage')).length + 1 : null;
    const uploadingMessage = (chatData.file) ? document.createElement('div') : null;
    const fileIconImg = (chatData.file) ? chatData.file_type === 'img' ? 'image' : chatData.file_type === 'video' ? 'movie' : 'folder' : null;
    const uploadProgress = (chatData.file) ? '<div class="file-message right"><div id="message-file-loader'+ currentLength +'" class="progress"><div class="determinate"></div></div><div class="file-downloader"><p class="download-file"><i class="material-icons file-img">'+fileIconImg+'</i><span>'+chatData.fileName+'</span></p></div></div>' : null;
    

    async function uploadTaskPromise(file) {
      return new Promise(function(resolve, reject) {
        const uploadTask = storageRef.put(file);
        // docRef.update({ fileUploading: true });
        uploadingMessage.id = 'willRemove'+ currentLength;
        uploadingMessage.className = 'message inRight uploadingMessage';
        uploadingMessage.innerHTML = uploadProgress;
        messagesParent.appendChild(uploadingMessage);
        // uploadingMessage.style.transform = 'translateY('+pullHeight+'%)';

        uploadTask.on('state_changed', function(snapshot) {
          if(chattingRoom) chattingRoom.scrollTop = chattingRoom.scrollHeight;

          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          let loader = document.querySelector('#message-file-loader' + currentLength);
          let determinate = document.querySelector('#message-file-loader'+currentLength+' .determinate')

          loader.style.display = 'block';
          determinate.style.width = progress + '%';
          
        }, function(err) {
          switch(err.code) {
            case 'storage/unauthorized':
              console.log('no authorization')
              break;
            
            case 'storage/canceled':
              console.log('canceled')
              break;
            
            case 'storage/unknown':
              console.log('unknown error');
              break;
          }
        }, function complete() {
          uploadTask.snapshot.ref.getDownloadURL().then(url => resolve(url))
        })
      })
    }
    
    if(chatData.file) {
      const getFileURL = async (file) => {
        const url = await uploadTaskPromise(file);
        docRef.update({ 
          messages: firebase.firestore.FieldValue.arrayUnion({
            sender: chatData.sender,
            file: url,
            fileName: chatData.fileName,
            file_type: chatData.file_type,
            sendAt: new Date(),
            fileUploading: true,
          }),
          updatedAt: new Date(),
          isChecked: false,
          lastMessageSender: chatData.sender,
          fileUploading: false,
        })
        .then(() => {
          const uploadingMessage = document.querySelector('#willRemove' + currentLength);
          uploadingMessage.parentElement.removeChild(uploadingMessage);

          docRef.get().then(doc => {
            const partner = doc.data().users_nickName.filter(nickname => nickname !== chatData.sender).join();
            const isJoined = doc.data()['isJoined_' + partner];
            if(isJoined) return docRef.update({
              isChecked: true,
            })
          })
        })
        .then(() => {
          dispatch({type: 'SEND_MESSAGE_SUCCESS'})
        })
        .catch(err => dispatch({type: 'SEND_MESSAGE_ERROR'}, err))
      };

      getFileURL(chatData.file);

    } else {
      docRef.update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: chatData.sender,
          message: chatData.message,
          sendAt: new Date(),
        }),
        updatedAt: new Date(),
        isChecked: false,
        lastMessageSender: chatData.sender,
      })
      .then(() => {
        docRef.get().then(doc => {
          const partner = doc.data().users_nickName.filter(nickname => nickname !== chatData.sender).join();
          const isJoined = doc.data()['isJoined_' + partner];
          if(isJoined) return docRef.update({
            isChecked: true,
          })
        })
      })
      .then(() => dispatch({type: 'SEND_MESSAGE_SUCCESS'}))
      .catch(err => dispatch({type: 'SEND_MESSAGE_ERROR'}, err))
    }
	// 	if(chatData.file) {
	// 		storageRef.put(chatData.file)
	// 		.then(()=> {
	// 			storageRef.getDownloadURL()
	// 			.then((url) => {
	// 				// let httpsReference = firebase.storage().refFromURL(url);
	// 				// console.log(httpsReference);
	// 				// console.log(url);
	// 				docRef.update({
	// 					messages: firebase.firestore.FieldValue.arrayUnion({
	// 						sender: chatData.sender,
	// 						file: url,
  //             fileName: chatData.fileName,
  //             file_type: chatData.file_type,
  //             sendAt: new Date(), 
	// 					}),
  //           updatedAt: new Date(),
  //           isChecked: false,
  //           // receiverHasRead: false,
  //           // ['readMark_' + chatData.sender]: false,
  //           lastMessageSender: chatData.sender,
  //         })
  //         .then(() => {
  //           docRef.get().then(doc => {
  //             const partner = doc.data().users_nickName.filter(nickname => nickname !== chatData.sender).join();
  //             const isJoined = doc.data()['isJoined_' + partner];
              
  //             if(isJoined) return docRef.update({
  //               isChecked: true,
  //             })
  //           })
  //         })
  //       })
	// 		})
	// 	} else{
	// 			docRef.update({
	// 				messages: firebase.firestore.FieldValue.arrayUnion({
	// 					sender: chatData.sender,
	// 					message: chatData.message,
  //           sendAt: new Date(),
	// 				}),
  //         updatedAt: new Date(),
  //         isChecked: false,
  //         // receiverHasRead: false,
  //         // ['readMark_' + chatData.sender]: false,
  //         lastMessageSender: chatData.sender,
  //       })
  //       .then(() => {
  //         docRef.get().then(doc => {
  //           const partner = doc.data().users_nickName.filter(nickname => nickname !== chatData.sender).join();
  //           const isJoined = doc.data()['isJoined_' + partner];
            
  //           if(isJoined) return docRef.update({
  //             isChecked: true,
  //           })
  //         })
  //       })
	// 			.then(()=> {
	// 				dispatch({type: 'SEND_MESSAGE_SUCCESS'})
	// 			}).catch((err) => {
	// 				dispatch({type: 'SEND_MESSAGE_ERROR'}, err)
	// 			});
	// 		}
	}
}

export const readMessage = (chatId) => {
	return(dispatch, getState, { getFirestore}) => {
    const firestore = getFirestore();
    const userProfile = getState().firebase.profile;
    const userChats = firestore.collection('chats').doc(chatId);

    userChats.get()
    .then(doc => {
      const lastMessageSender = doc.data().lastMessageSender

      if(lastMessageSender === userProfile.initials) return userChats.update({
        ['isJoined_' + userProfile.initials]: true,
      })
      else return userChats.update({
        isChecked: true,
        ['isJoined_' + userProfile.initials]: true,
      }) 
    })

		// userChats.update({
    //   ['isJoined_' + userProfile.initials]: true,
    // })
    
		.then(() => {
			dispatch({type: 'READ_MESSAGE_SUCCESS'})
		}).catch((err) => {
			dispatch({type: 'READ_MESSAGE_ERROR', err})
		});
	}
}

export const isCheck_status = (chatId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userProfile = getState().firebase.profile;
    const userChats = firestore.collection('chats').doc(chatId);
    
    // userChats.get()
    // .then(doc => {
    //   const lastMessageSender = doc.data().lastMessageSender

    //   if(lastMessageSender === userProfile.initials) return userChats.update({
    //     ['isJoined_' + userProfile.initials]: false,
    //   })
    //   else return userChats.update({
    //     isChecked: true,
    //     ['isJoined_' + userProfile.initials]: false,
    //   }) 
    // })

		userChats.update({
      ['isJoined_' + userProfile.initials]: false,
    })

    .then(() => {
      dispatch({ type : 'ROOM_CHECK_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type : 'ROOM_CHECK_ERROR', err })
    })
  }
}

export const initAll_joinedRooms = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userProfile = getState().firebase.profile;

    // async function _init() {
    //   const AllChats = await userChats.get();
    //   AllChats.forEach(doc => {
    //     const chatRef = firestore.colletcion('chats').doc(doc.id);
    //     return chatRef.update({
    //       ['isJoined_' + userProfile.initials]: false,
    //     })
    //   })
    // }

    if(userProfile.email !== undefined) {
      const userChats = firestore.collection('chats').where('users_email', 'array-contains', userProfile.email);

      userChats.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const chatRef = firestore.collection('chats').doc(doc.id)
  
          return chatRef.update({
            ['isJoined_' + userProfile.initials]: false,
          });
        })
      })
      .then(() => dispatch({type: 'INITALL_JOINEDROOMS_SUCCESS'}))
      .catch((err) => dispatch({type: 'INITALL_JOINEDROOMS_ERROR', err}))
    }
    else return;
  }
}

export const _initJoin_login = async () => {
  console.log('--------------start-----------------')
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  
  if(user) {
    const email = user.email;
    const uid = user.uid;
    const userChats = db.collection('chats').where('users_email', 'array-contains', email);
    const users = db.collection('users').doc(uid);
    const nickname = await users.get().then(doc => doc.data().initials);

    userChats.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const chatRef = db.collection('chats').doc(doc.id)
        return chatRef.update({
          ['isJoined_' + nickname]: false, 
        });
      })
    })
  }
}