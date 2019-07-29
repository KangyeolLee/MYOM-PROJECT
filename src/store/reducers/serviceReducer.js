const initState = {
  themas: [
    { title : 'PARIS', src : 'img/theme/paris.jpg' },
    { title : 'KOREA', src : 'img/theme/korea.jpg' },
    { title : 'CHINA', src : 'img/theme/china.jpg' },
    { title : 'SPAIN', src : 'img/theme/spain.jpg' },
    { title : 'GERMANY', src : 'img/theme/germany.jpg' },
    { title : 'INDIA', src : 'img/theme/india.jpg' }
  ],
  bests: [
    { src : 'img/bestReviews/review_sample01.jpg', title : '베스트 후기1', content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit. Praesentium nesciunt similique, illo rem ullam dolorem maiores sint eaque fugiat ea. Ut nesciunt molestiae, quae nobis tenetur magnam incidunt.'},
    { src : 'img/bestReviews/review_sample02.jpg', title : '베스트 후기2', content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit. Praesentium nesciunt similique, illo rem ullam dolorem maiores sint eaque fugiat ea. Ut nesciunt molestiae, quae nobis tenetur magnam incidunt.'},
    { src : 'img/bestReviews/review_sample03.jpg', title : '베스트 후기3', content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit. Praesentium nesciunt similique, illo rem ullam dolorem maiores sint eaque fugiat ea. Ut nesciunt molestiae, quae nobis tenetur magnam incidunt.'}
  ],
  specific_themas : [
    {
      category : 'special01',
      contents : [
        { key : 'st01_1', title : 'sample01', src : '/img' },
        { key : 'st01_2', title : 'sample02', src : '/img' },
        { key : 'st01_3', title : 'sample03', src : '/img' },
      ]
    },
    {
      category : 'special02',
      contents : [
        { key : 'st02_1', title : 'sample01', src : '/img' },
        { key : 'st02_2', title : 'sample02', src : '/img' },
        { key : 'st02_3', title : 'sample03', src : '/img' },
      ]
    },
    {
      category : 'special03',
      contents : [
        { key : 'st03_1', title : 'sample01', src : '/img' },
        { key : 'st03_2', title : 'sample02', src : '/img' },
        { key : 'st03_3', title : 'sample03', src : '/img' },
      ]
    }
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
    default:
      return state;
  }
}

export default serviceRuducer;