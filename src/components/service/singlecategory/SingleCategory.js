import React, { Component } from 'react';
import RecommendService from '../servicedetails/RecommendService';
import CategoryFilter from '../../layout/CategoryFilter';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Preloader from '../../functionalComponents/Preloader';

class SingleCategory extends Component {
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
    const { firestore, match } = this.props;
    const { limit_list, nextRef } = this.state;

    if(!nextRef) {
      console.log('state initialized');
      const firstQuery = firestore.collection('services')
        .where('category', '==', match.params.category).orderBy('timestamp', 'desc').limit(limit_list);
      const firstSnaps = await firstQuery.get();
      const firstVisible = firstSnaps.docs[firstSnaps.size - 1];
      
      this.setState({
        nextRef: firstVisible,
      })
    }
    
    try {
      const nextQuery = firestore.collection('services')
        .where('category', '==', match.params.category).orderBy('timestamp', 'desc').startAfter(this.state.nextRef).limit(limit_list);
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
    const { serviceList, match } = this.props;
    const { moreServices, loading } = this.state;

    console.log(this.state);
    console.log('pr : ', this.props);
    return (
      <div className="container singleCategory">
        <CategoryFilter />
        <h2 className='red-text text-darken-3'>{thema}</h2>
        
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
                ? <div>등록된 서비스가 없습니다.</div>
                : moreServices.map(item => {
                  return (
                    <Link to={`${match.url}/${item.id}`} key={item.id}>
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
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    serviceList: state.firestore.ordered.services
  }
}
export default compose(
  firestoreConnect((props) => [
    { collection: 'services', where: ['category', '==', props.match.params.category], orderBy: ['timestamp', 'desc'], limit: 6 }
  ]),
  connect(mapStateToProps)
)(SingleCategory);