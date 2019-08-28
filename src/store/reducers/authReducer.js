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
      alert('회원가입이 완료되셨습니다. 가입하신 이메일 주소로 인증메일을 보냈으니 인증을 완료해주세요.')
      return {...state, authError: null}

    case 'SIGNUP_ERROR':
      console.log('signup error', action.err, action.err.message);
      return {...state, authError: action.err.message}

    case 'DELETE_SUCCESS':
      alert('회원탈퇴에 성공하였습니다!');
      return state;
       
    case 'DELETE_ERROR':
      console.log('withdrawal failed')
      return state;
    
    case 'PWDUPDATE_SUCCESS':
      alert('비밀번호가 변경되었습니다.');
      return state;
    
    case 'PWDUPDATE_ERROR':
      console.log('pwd update failed');
      return state;
    
    case 'REAUTHENTICATE_ERROR':
      alert('기존의 비밀번호를 다시 입력해주세요.');
      return state; 
    
    case 'SENDRESETEMAIL_SUCCESS':
      alert('비밀번호 재설정 이메일을 발송해드렸습니다.');
      return state;

    case 'SENDRESETEMAIL_ERROR':
      alert('입력하신 이메일로 가입된 정보가 없습니다.');
      return state;
    
    case 'EMAILUSED_ERROR':
      alert('이미 가입된 이메일입니다.');
      return state;
    
    case 'EMAILINVALID_ERROR':
      alert('이미 가입됐으나 인증이 안된 이메일입니다. 이메일 인증을 해주세요.');
      return state;
    
    case 'OPERATION_ERROR':
      alert('회원가입 중 오류가 발생했습니다. 새로고침하고 다시 시도해주세요.');
      return state;
    
    case 'WEAKPWD_ERROR':
      alert('비밀번호가 보안에 취약합니다. 다시 설정해주세요.');
      return state;

    case 'SENDEMAILVERIFICATION_SUCCESS':
      console.log('send verification email')
      return state;
    
    case 'SENDEMAILVERIFICATION_ERROR':
      console.log('send verification email failed');
      return state;

    default:
      return state;
  }
}

export default authReducer;