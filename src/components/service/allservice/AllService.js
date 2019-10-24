import React, { Component } from 'react';
import './AllService.css';
import { Link } from 'react-router-dom';
import Preloader from '../../functionalComponents/Preloader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import TipsForCategory from '../../layout/TipsForCategory';
import ServicesSummary from '../summary/ServicesSummary';

class AllService extends Component {
  state = {
    limit_list : 8,
    moreServices : [],
    nextRef : null,
    loading: true,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll, true);
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
    const { firestore } = this.props;
    const { limit_list, nextRef } = this.state;

    if(!nextRef) {
      const firstQuery = firestore.collection('testService')
        .orderBy('timestamp', 'desc').limit(limit_list);
      const firstSnaps = await firstQuery.get();
      const firstVisible = firstSnaps.docs[firstSnaps.size - 1];
      
      this.setState({
        nextRef: firstVisible,
      })
    }
    
    try {
      const nextQuery = firestore.collection('testService')
        .orderBy('timestamp', 'desc').startAfter(this.state.nextRef).limit(limit_list);
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
    const { match, serviceList } = this.props;
    const { moreServices } = this.state;
    console.log(match);

    return (
      <div className="allServices">
        <div className="container">
          <div className="row">
            <h4 className='all-title myomColor col s12 scorehvy'>둘러보기</h4>
            <div className="col s12">
              <video style={{width: '100%'}} className='' controls>
                <source src='/video/myom.mp4' type='video/mp4'/>
                {/* https://console.firebase.google.com/project/marioplan-app-9bfcc/storage/marioplan-app-9bfcc.appspot.com/files~2Ftest~2F */}
              </video>       
            </div> 
          </div>
        </div>

        <TipsForCategory category='영화같은 영상' url='/community/user'/>

        <div className="container">
          <ul className="all_services_area row">
            <h5 className='col s12 scorehvy'>전체</h5>
            <div className="all_services row">
            {
              !isLoaded(serviceList)
                ? <Preloader />
                : isEmpty(moreServices)
                  ? <div>아직 등록된 서비스가 없습니다.</div>
                  : moreServices.map(item => {    
                    let category = Object.entries(item).filter(category => category.pop() === 5 );
                    return (
                      <Link to={`${match.url}/${category[0]}/${item.id}`} key={item.id}>
                        <ServicesSummary service={item} />
                      </Link>
                    )
                  })                 
            }
            </div>
          </ul>
        </div>
           
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // recommends: state.services.recommends,
    serviceList: state.firestore.ordered.testService
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    // console.log('in connecting : ', props);
    return [ { collection: 'testService', orderBy: ['timestamp', 'desc'], limit: 8 } ]
  }),
)(AllService);

  // const test = firestore.collection('services').orderBy('timestamp','desc').limit(6).get()
  //   .then(documentSnapshots => {
  //     const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
  //     console.log(lastVisible);
  //   });