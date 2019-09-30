import React, { Component } from 'react';
import TipsForCategory from '../../layout/TipsForCategory';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Preloader from '../../functionalComponents/Preloader';
import ServicesSummary from '../summary/ServicesSummary';
import M from 'materialize-css';
import './singleCategory.css';

class SingleCategory extends Component {
  state = {
    limit_list : 8,
    moreServices : [],
    nextRef : null,
    loading: true,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll, true);

    const carousels = document.querySelectorAll('.carousel');
    M.AutoInit();
    M.Carousel.init(carousels, {
      dist: 0,
      shift: 30,
      padding: 30,
      indicators: true,
    })
  }

  componentWillReceiveProps(nextProps) {  // match the next changable props to state for initailizing
    if(this.props.serviceList !== nextProps.serviceList) {
      this.setState({
        moreServices: nextProps.serviceList,
      })
    }
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    // if(scrollTop + clientHeight === scrollHeight && !this.state.loading) {
    //   console.log('all services are loaded!')
    //   return;
    // }

    if(scrollTop + clientHeight === scrollHeight) {
      this.loadMoreServices();
    }
  }

  loadMoreServices = async () => {
    const { firestore, match } = this.props;
    const { limit_list, nextRef } = this.state;

    if(!nextRef) {
      console.log('state initialized');
      const firstQuery = firestore.collection('testService')
        .where(match.params.category, '>=', 1).orderBy(match.params.category, 'desc').limit(limit_list);
      const firstSnaps = await firstQuery.get();
      const firstVisible = firstSnaps.docs[firstSnaps.size - 1];
      
      this.setState({
        nextRef: firstVisible,
      })
    }
    
    try {
      const nextQuery = firestore.collection('testService')
        .where(match.params.category, '>=', 1).orderBy(match.params.category, 'desc').startAfter(this.state.nextRef).limit(limit_list);
      const nextSnaps = await nextQuery.get();
      const nextVisible = nextSnaps.docs[nextSnaps.size - 1]
      
      if(!nextVisible) {  // when no more data in firestore
        this.setState({
          loading: false,
        })
        return;  
      }

      const loadedServices = nextSnaps.docs.map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data }
      })

      return this.setState({
        moreServices : [...this.state.moreServices, ...loadedServices],
        nextRef : nextVisible,
      })
    } catch(err) {
      console.log('error : ', err);
    }   
  }

  render() {
    const thema = this.props.match.params.category;
    const { categoryIntro, serviceList, match } = this.props;
    const { moreServices } = this.state;

    return (
      <div className="container singleCategory">
        <div className="row">
          <h4 className='thema-title myomColor col s12 scorehvy'>{categoryIntro.title}</h4>
  
          <p className="col s12 reference-content flow-text cartoon">
            <i className="material-icons">format_quote</i>
            {categoryIntro.content}
          </p>

          
          <div className="video-wrapper col s12 carousel">
            <video style={{width: '60%'}} className='carousel-item' controls>
              <source src='' type='video/mp4'/>
              {/* https://firebasestorage.googleapis.com/v0/b/myom-89a5a.appspot.com/o/videos%2Freferences%2Fcinema%2F190913%2BMYOM%2B%EC%97%AC%ED%96%89%2B%EC%98%81%EC%83%81%2B%ED%8E%B8%EC%A7%91%2B%ED%94%8C%EB%9E%AB%ED%8F%BC.mp4?alt=media&token=cb4e2cdb-df78-4682-9712-46715da9d899 */}
            </video>

            <video style={{width: '60%'}} className='carousel-item' controls>
              <source src='' type='video/mp4'/>
              {/* https://firebasestorage.googleapis.com/v0/b/myom-89a5a.appspot.com/o/videos%2Freferences%2Fcinema%2F190825%2B%E1%84%8F%E1%85%AF%E1%86%AB%E1%84%90%E1%85%B3%2B%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mp4?alt=media&token=04f3824f-1404-4b5a-9e9f-fa702b965de8 */}
            </video>

            <video style={{width: '60%'}} className='carousel-item' controls>
              <source src='' type='video/mp4'/>
              {/* https://firebasestorage.googleapis.com/v0/b/myom-89a5a.appspot.com/o/videos%2Freferences%2Fcinema%2FKakaoTalk_Video_20190927_2317_22_548.mp4?alt=media&token=dca0990d-1fa2-4805-a7d0-90b858dfbc2e */}
            </video>
          </div>

          <TipsForCategory category={categoryIntro.title} url='/community/user'/>

          <ul className="row all_services_area">
            <h5 className='col s12 scorehvy'>전체</h5>
            {
              !isLoaded(serviceList)
                ? <Preloader />
                : isEmpty(moreServices)
                  ? <div>등록된 서비스가 없습니다.</div>
                  : moreServices.map(item => {
                    return (
                      <Link to={`${match.url}/${item.id}`} key={item.id}>
                        <ServicesSummary service={item} />
                      </Link>
                    )
                  })
            }
            {/* {
              (loading)
                ? <button onClick={() => this.loadMoreServices()} className="waves-effect waves-teal right btn-flat">더 보기...</button>
                : null
            } */}
          </ul>

        </div>
        
        
        {/* <ul className="collection row">
          <h4>최다 평점 획득</h4>
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img className='' src='' alt=""/>
                <span className="card-title black">최다 평점 1</span>
              </div>
            </div>  
          </div>
        </ul>

       <ul className="collection row">
        <h4>최다 작업 수행</h4>
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img className='' src='' alt=""/>
                <span className="card-title black">최다 작업 1</span>
              </div>
            </div>  
          </div>
       </ul>

        <ul className="collection row">
          <h4>최고 빠른 작업</h4>
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img className='' src='' alt=""/>
                <span className="card-title black">최고 빠른 1</span>
              </div>
            </div>  
          </div>   
        </ul> */}

        
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category;
  return {
    serviceList: state.firestore.ordered.testService,
    categoryIntro: state.services[category],
  }
}
export default compose(
  firestoreConnect((props) => [
    { collection: 'testService', where: [props.match.params.category, '>=', 1], orderBy: [props.match.params.category, 'desc'], limit: 8 }
  ]),
  connect(mapStateToProps)
)(SingleCategory);