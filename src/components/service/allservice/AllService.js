import React, { Component } from 'react';
import './AllService.css';
import CategoryFilter from '../../layout/CategoryFilter';
import { Link } from 'react-router-dom';
import RecommendService from '../servicedetails/RecommendService';
import Preloader from '../../functionalComponents/Preloader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

class AllService extends Component {
  state = {
    limit_list : 6,
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
      console.log('state initialized');
      const firstQuery = firestore.collection('services')
        .orderBy('timestamp', 'desc').limit(limit_list);
      const firstSnaps = await firstQuery.get();
      const firstVisible = firstSnaps.docs[firstSnaps.size - 1];
      
      this.setState({
        nextRef: firstVisible,
      })
    }
    
    try {
      const nextQuery = firestore.collection('services')
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
    const { moreServices, loading } = this.state;
    console.log(moreServices);

    return (
      <div className="container allServices">
        <CategoryFilter />
  
        <ul className="collection row">
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
        </ul>
        
        <ul className="collection row all_services_area">
          <h4>전체</h4>
          {
            
            !isLoaded(serviceList)
              ? <Preloader />
              : isEmpty(moreServices)
                ? <div>아직 등록된 서비스가 없습니다.</div>
                : moreServices.map(item => {
                    return (
                      <Link to={`${match.url}/${item.category}/${item.id}`} key={item.id}>
                        <RecommendService recommendable={item} />
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

        {/* { recommends && recommends.map(item => {
          return (
            <ul className="collection" key={item.key}>
              <h4>{item.category}</h4>
              <li className="collection-item">
                <div className="row recommendable">
                  { item.contents && item.contents.map(content => {
                    return (
                      <Link to={`${match.url}/${item.category}/${content.key}`} key={content.key}>
                        <RecommendService recommendable={content} key={content.key}/>
                      </Link>
                    )
                  })}
                </div>
                <Link to={'/thema/' + item.category} className=''>
                  <span className="waves-effect waves-light btn">더보기</span>
                </Link>
              </li>
            </ul>
          )
        })} */}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // recommends: state.services.recommends,
    serviceList: state.firestore.ordered.services
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    // console.log('in connecting : ', props);
    return [ { collection: 'services', orderBy: ['timestamp', 'desc'], limit: 6 } ]
  }),
)(AllService);

  // const test = firestore.collection('services').orderBy('timestamp','desc').limit(6).get()
  //   .then(documentSnapshots => {
  //     const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
  //     console.log(lastVisible);
  //   });