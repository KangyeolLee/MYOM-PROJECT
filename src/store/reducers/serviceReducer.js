const initState = {
  authError: null,
  delete_retry: 1,
  themas: [
    { title : '시네마틱형', src : '/img/categories/시네마틱형.jpg' },
    { title : '예능형', src : '/img/categories/예능형2.jpg' },
    { title : '다큐멘터리형', src : '/img/categories/다큐형.jpg' },
    { title : '다이나믹형', src : '/img/categories/다이나믹형.PNG' },
    { title : '브이로그형', src : '/img/categories/브이로그형.png' },
    { title : '기타형', src : '/img/categories/기타형.jpg' }
  ],
  bests: [
    { category : 'PARIS', id : 'Pu2',  src : 'img/bestReviews/review_sample01.jpg', title : '현지인들과의 유쾌한 만남', content : '세계 각국을 돌아다니면서 다양한 사람들을 만났습니다. 그 중에서는 .....'},
    { category : 'KOREA', id : 'Ku3', src : 'img/bestReviews/review_sample02.jpg', title : '10년지기 친구들과의 여행', content : '오랜만에 모인 고등학교 동창 친구들과 떠난 국내여행!! 많은 여행 과정을 영상으로 담게 되었는데요 .....'},
    { category : 'GERMANY', id : 'Gu1', src : 'img/bestReviews/review_sample03.jpg', title : '멋진 영상 만들어주셔서 감사합니다', content : '급하게 의뢰한 영상이라 크게 기대하지 않았는데도 불구하고, 빠른 일처리와 높은 퀄리티를 동반한 작업 .....'}
  ],
  specific_themas : [
    {
      category : '최다 평점 획득',
      contents : [
        { key : 'st01_1', title : 'sample01', src : '/img' },
        { key : 'st01_2', title : 'sample02', src : '/img' },
        { key : 'st01_3', title : 'sample03', src : '/img' },
      ]
    },
    {
      category : '최다 작업 수행',
      contents : [
        { key : 'st02_1', title : 'sample01', src : '/img' },
        { key : 'st02_2', title : 'sample02', src : '/img' },
        { key : 'st02_3', title : 'sample03', src : '/img' },
      ]
    },
    {
      category : '최고 빠른 작업',
      contents : [
        { key : 'st03_1', title : 'sample01', src : '/img' },
        { key : 'st03_2', title : 'sample02', src : '/img' },
        { key : 'st03_3', title : 'sample03', src : '/img' },
      ]
    }
  ],
  suggestion: [
    { key: 'sug1', title: 'suggestion1', src: 'img/'},
    { key: 'sug2', title: 'suggestion2', src: 'img/'},
    { key: 'sug3', title: 'suggestion3', src: 'img/'}
  ],
  recommends: [
    {
      category : 'PARIS',
      key : 'unique01',
      contents : [
        { key : 'Pu1', title : 'example01', src : 'img/' },
        { key : 'Pu2', title : 'example02', src : 'img/' },
        { key : 'Pu3', title : 'example03', src : 'img/' }
      ]
    }, 
    {
      category : 'KOREA',
      key : 'unique02',
      contents : [
        { key : 'Ku1', title : 'example01', src : 'img/' },
        { key : 'Ku2', title : 'example02', src : 'img/' },
        { key : 'Ku3', title : 'example03', src : 'img/' }
      ]
    },
    {
      category : 'INDIA',
      key : 'unique03',
      contents : [
        { key : 'Iu1', title : 'example01', src : 'img/' },
        { key : 'Iu2', title : 'example02', src : 'img/' },
        { key : 'Iu3', title : 'example03', src : 'img/' }
      ]
    },
    {
      category : 'GERMANY',
      key : 'unique04',
      contents : [
        { key : 'Gu1', title : 'example01', src : 'img/' },
        { key : 'Gu2', title : 'example02', src : 'img/' },
        { key : 'Gu3', title : 'example03', src : 'img/' }
      ]
    },
    {
      category : 'CHINA',
      key : 'unique05',
      contents : [
        { key : 'Cu1', title : 'example01', src : 'img/' },
        { key : 'Cu2', title : 'example02', src : 'img/' },
        { key : 'Cu3', title : 'example03', src : 'img/' }
      ]
    },
    {
      category : 'SPAIN',
      key : 'unique06',
      contents : [
        { key : 'Su1', title : 'example01', src : 'img/' },
        { key : 'Su2', title : 'example02', src : 'img/' },
        { key : 'Su3', title : 'example03', src : 'img/' }
      ]
    }
  ]
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
      
    default:
      return state;
  }
}

export default serviceRuducer;