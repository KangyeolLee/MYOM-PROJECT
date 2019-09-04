const initState = {
  authError: null,
  delete_retry: 1,
  themas: [
    { title : 'transition', src : 'img/theme/paris.jpg' },
    { title : 'colorFix', src : 'img/theme/korea.jpg' },
    { title : 'cut&cut', src : 'img/theme/china.jpg' },
    { title : 'currywurst', src : 'img/theme/spain.jpg' },
    { title : 'pommes', src : 'img/theme/germany.jpg' },
    { title : 'sauerkraut', src : 'img/theme/india.jpg' }
  ],
  bests: [
    { category : 'PARIS', id : 'Pu2',  src : 'img/bestReviews/review_sample01.jpg', title : '베스트 후기1', content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit. Praesentium nesciunt similique, illo rem ullam dolorem maiores sint eaque fugiat ea. Ut nesciunt molestiae, quae nobis tenetur magnam incidunt.'},
    { category : 'KOREA', id : 'Ku3', src : 'img/bestReviews/review_sample02.jpg', title : '베스트 후기2', content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit. Praesentium nesciunt similique, illo rem ullam dolorem maiores sint eaque fugiat ea. Ut nesciunt molestiae, quae nobis tenetur magnam incidunt.'},
    { category : 'GERMANY', id : 'Gu1', src : 'img/bestReviews/review_sample03.jpg', title : '베스트 후기3', content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit. Praesentium nesciunt similique, illo rem ullam dolorem maiores sint eaque fugiat ea. Ut nesciunt molestiae, quae nobis tenetur magnam incidunt.'}
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

    case 'DELETE_SERVICE_ERROR_WITH_INQUIRY':
      console.log('delete service error with inquiry');
      return {...state, authError: '문의로 인해 서비스를 삭제할 수 없습니다.', delete_retry: Math.random() };

    case 'DELETE_SERVICE_ERROR_WITH_REVIEWS':
      console.log('delete service error with rivews');
      return {...state, authError: '리뷰로 인해 서비스를 삭제할 수 없습니다.', delete_retry: Math.random() };

    default:
      return state;
  }
}

export default serviceRuducer;