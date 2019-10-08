const initState = {
  authError: null,
  delete_retry: 1,
  cinema: { 
    title : '시네마틱형', 
    content : '시네마틱형이란, 영화와 같은 느낌을 자아내는 영상을 말합니다. 대표적으로 마블 영화에 나오는 헐크를 예로 들 수 있습니다. 브루스배너는 헐크의 배역을 맡은 할리우드 배우인데요, 언듯 그가 헐크의 역할을 독톡히 수행한 지도 근 12년이 되어가고 있습니다. 과연 브루스배너는 언제까지 헐크 역할로 자리매김할 수 있을지 굉장히 궁금해지는 밤 입니다. 시네마틱 영상을 통해 여러분의 영상을 마치 한 편의 영화로 남겨보세요!' 
  },
  variety: {
    title : '예능형', 
    content : '예능형이란, 마치 한 편의 재미있는 예능 프로그램과도 같은 분위기를 자아냅니다. 1박 2일, 무한도전, 런닝맨과 같은 느낌의 영상 분위기를 담아보고 싶다면 여기서 당신의 편집자를 찾아보세요! 참고로 무한도전은 굉장히 긴 시간동안 우리 곁을 지켜왔습니다. 하지만 애석하게도 제가 군 생활을 하던 도중 마지막회를 맞이하고 말았는데요, 멤버들이 하나 둘 바뀌고 하차하면서 예전만큼 자주 챙겨보지는 않았지만, 그래도 마지막을 준비한다는 소식은 꽤나 적적하게 들려왔습니다. 수많은 에피소드와 길이길이 남을 이야기들을 기억하며 잠이 들고 싶다면 예능형 전문 편집자를 만나보세요!' 
  },
  document: {
    title : '다큐멘터리형', 
    content : '다큐멘터리형이란, 마치 고요하고 잔잔하면서도 웅장한 느낌의 다큐멘터리 느낌의 영상들이 모여있습니다. 흔히 다큐멘터리하면 지루하다고 생각할 수 있는데요, 사실 다큐멘터리는 의외로 재미있답니다. 동물과 자연의 신비, 남극의 눈물과 같은 대작은 심지어 높은 시청률을 기록하기도 했지요. 저는 어렸을 적부터 아버지와 함께 다큐멘터리 영상을 줄곧 챙겨보곤 했습니다. 물론 주 목적은, 다큐멘터리가 끝나는 다음 프로그램인 1박2일 이나 다른 예능 프로그램을 챙겨보기 위함이었지만 말이죠. 그럼에도 불구하고 어렸을 적 부터 봐온 다큐멘터리는 참으로 재미있었다는 느낌이 있습니다. 이처럼 다큐멘터리 형식이 가지는 독특하고 유니크한 분위기의 영상을 담아내고 싶다면 해당 편집자를 이 곳에서 찾아보세요!' 
  },
  dynamic: {
    title : '다이나믹형', 
    content : '다이나믹형이란, 빠른 템포, 다양한 볼거리, 왁자지껄한 분위기를 그대로 담아낼 수 있는 장르입니다. 액티비티한 스포츠, 긴박한 상황 또는 활동적인 영역에 잘 어울리는 분위기를 선사합니다. 저 역시 다이나믹한 분위기를 참 좋아하는데요, 제가 94년 미국 LA에 있을 적 에어로빅 수업을 들은 적이 있답니다. 에어로빅이야 말로 다이나믹의 대표 주자라고 생각합니다. 그 땀과 열정들이 방울지어 송골송골 맺힌 그 광경을 저는 근 25년이 넘은 지금까지고 쉽사리 잊을 수 없습니다. 그런데 말이지요, 이놈의 모기는 왜 이렇게 잡아도 잡아도, 여름이 끝나가고 날이 쌀쌀해지는데도 끊임없이 나오는 걸까요? 이 세상 모든 생명체가 무릇 존재의의를 가지고 있다고 혹자는 말하겠지만, 저는 모기야말로 멸종이 되더라도 큰 반향이 없을 거 같다는 생각입니다. 저와 같이 모기를 이토록 싫어한다고 생각한다면, 다이나믹형을 추천드립니다!' 
  },
  vlog: {
    title : '브이로그형', 
    content : '브이로그(VLOG)형이란, 비디오(Video)와 블로그(Blog)를 합친 말로, 개인 SNS에 글을 쓰듯 영상으로 기록을 남기는 것을 말합니다. 일상처럼 기록한 여행, 잔잔한 여행, 차분한 느낌의 여행, 피아노의 선율이 느껴지는 베토벤의 기분이 이러했을까요? 모자르트는 음악사에 있어 대단한 족적을 남겼습니다. 과연 베토벤은 당대에 모자르트의 아성을 뛰어넘는 평가를 대중으로부터 받았을지요. 담아온 여행 영상을 솔직 담백하고 담담하게 풀어내고 싶다면, 브이로그형 전문 편집자를 만나보세요!' 
  },
  etc: {
    title : '기타형', 
    content : '기타형은 앞 카테고리에 뚜렷하게 속하지 않은 나머지 영상들이 모여 있습니다. 자신의 영상이 앞 카테고리 어디에도 해당되지 않을 거 같다면, 이곳에서 당신의 영상만을 위한 분위기를 찾아보세요!' 
  }
  ,
}

const serviceRuducer = (state=initState, action) => {
  switch(action.type) {
    case 'REGISTER_SERVICE_SUCCESS':
      console.log('service register success');
      return state;

    case 'REGISTER_SERVICE_ERROR':
      console.log('service register failed');
      return state;

    case 'CREATE_INQUIRY_SUCCESS':
      console.log('inquiry register success');
      return state;
    
    case 'CREATE_INQUIRY_ERROR':
      console.log('inquiry register failed', action.err.message);
      return state;

    case 'CREATE_REVIEWS_SUCCESS':
      console.log('reviews register success');
      return state;
    
    case 'CREATE_REVIEWS_ERROR':
      console.log('reviews register failed', action.err.message);
      return state;

    case 'UPDATE_SERVICE_SUCCESS':
      console.log('service update success');
      return state;

    case 'UPDATE_SERVICE_ERROR':
      console.log('service update failed');
      return state;

    case 'DELETE_SERVICE_SUCCESS':
      console.log('service delete success');
      return {...state, authError: null, delete_retry: 1};

    case 'DELETE_SERVICE_ERROR':
      console.log('service delete failed');
      return state;

    case 'CHECK_PASSWORD_ERROR':
      console.log('check password failed');
      return {...state, authError: '비밀번호가 맞지 않습니다.', delete_retry: state.delete_retry + 1};

    case 'TOO_MANY_REQUESTS_FOR_VERIFICATION':
      console.log('too many requests');
      return {...state, authError: '비밀번호를 천천히 입력해주세요!', delete_retry: Math.random() };

    case 'INIT_AUTHERROR_SUCCESS':
      console.log('init authError completed');
      return {...state, authError: null, delete_retry: 1};

    case 'DELETE_SERVICE_ERROR_WITH_INQUIRY&REVIEWS':
      console.log('delete service error with inquiry or reviews');
      return {...state, authError: '문의 및 리뷰로 인해 서비스를 삭제할 수 없습니다.', delete_retry: Math.random() };

    case 'DELETE_REIVEW_SUCCESS':
      console.log('delete review success');
      return state;

    case 'DELETE_REIVEW_ERROR':
      console.log('delete review error');
      return state;

    case 'DELETE_INQUIRY_SUCCESS':
      console.log('delete inquiry success');
      return state;
    
    case 'DELETE_INQUIRY_ERROR':
      console.log('delete inquiry error');
      return state;

    case 'UPDATE_REVIEW_SUCCESS':
      console.log('update review success');
      return state;
    
    case 'UPDATE_REVIEW_ERROR':
      console.log('update review error');
      return state;

    case 'UPDATE_INQUIRY_SUCCESS':
      console.log('update inquiry success');
      return state;

    case 'UPDATE_INQUIRY_ERROR':
      console.log('update inquriy error');
      return state;

    case 'REPORT_BADUSER_SUCCESS':
      alert('신고 접수 되었습니다.');
      return state;

    case 'BUY_SERVICE_SUCCESS':
      console.log('buy service success');
      return state;

    case 'BUY_SERVICE_ERROR':
      console.log('buy service error', action.err.message);
      return state;
      
    case 'PROCEED_ORDER_SUCCESS':
      console.log('proceed order success');
      return state;

    case 'PROCEED_ORDER_ERROR':
      console.log('proceed order error', action.err.message);
      return state;

    case 'COMPLETE_ORDER_SUCCESS':
      console.log('COMPLETE_ORDER_SUCCESS');
      return state;

    case 'COMPLETE_ORDER_ERROR':
      console.log('COMPLETE_ORDER_ERROR', action.err.message);
      return state;

    case 'CANCEL_ORDER_SUCCESS':
      console.log('CANCEL_ORDER_SUCCESS');
      return state;

    case 'CANCEL_ORDER_ERROR':
      console.log('CANCEL_ORDER_ERROR', action.err.message);
      return state;
    
    case 'CHAT_CREATE_SUCCESS':
      console.log('CHAT_CREATE_SUCCESS')
      return state;
    
    case 'CHAT_CREATE_ERROR':
      console.log('error');
      return state;

    case 'SEND_REQUEST_SUCCESS':
      console.log('send request success');
      return state;
    
    case 'SEND_REQUEST_ERROR':
      console.log('send request error');
      return state;
      
    default:
      return state;
  }
}

export default serviceRuducer;