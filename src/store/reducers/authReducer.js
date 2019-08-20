const initState = {
  authError: null
}

const authReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log('log in failed');
      return {...state, authError: 'Login Failed'}

    case 'LOGIN_SUCCESS':
      console.log('log in success');
      return {...state, authError: null}

    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;

    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {...state, authError: null}

    case 'SIGNUP_ERROR':
      console.log('signup error', action.err.message);
      return {...state, authError: action.err.message}

    case 'DELETE_SUCCESS':
      alert('회원탈퇴에 성공하였습니다!');
      return state;
       
    case 'DELETE_ERROR':
      console.log('withdrawal failed')
      return state;

    default:
      return state;
  }
}

export default authReducer;