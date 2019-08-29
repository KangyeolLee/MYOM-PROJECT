import React from 'react';
import './AllService.css';
import CategoryFilter from '../../layout/CategoryFilter';
import { Link } from 'react-router-dom';
import RecommendService from '../servicedetails/RecommendService';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const AllService = (props) => {
  console.log('props : ', props);
  const moreServices = (e) => {
    console.log(e);
  }
  const { match, serviceList } = props;
  return (
    <div className="container">
      <CategoryFilter />
      <ul className="collection">
        <li className="collection-item row">
          <h4>최다 평점 획득</h4>
        </li>

        <li className="collection-item row">
          <h4>최다 작업 수행</h4>
        </li>

        <li className="collection-item row">
          <h4>최고 빠른 작업</h4>
        </li>

        <li className="collection-item row">
          <h4>전체</h4>
          {
            !isLoaded(serviceList)
              ? (
                <div className="preloader-wrapper">
                  <div className="preloader-wrapper small active center">
                    <div className="spinner-layer spinner-red-only">
                      <div className="circle-clipper left"><div className="circle"></div></div>
                      <div className="gap-patch"><div className="circle"></div></div>
                      <div className="circle-clipper right"><div className="circle"></div></div>
                    </div>
                  </div>
                </div>
              )
              : isEmpty(serviceList)
                ? <div>아직 등록된 서비스가 없습니다.</div>
                : serviceList.map(item => {
                  return (
                    <Link to={`${match.url}/${item.category}/${item.id}`} key={item.id}>
                      <RecommendService recommendable={item} />
                    </Link>
                  )
                })
          }
          <button onClick={(e) => moreServices(e)} className="waves-effect waves-teal right btn-flat">더 보기...</button>
        </li>
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

const mapStateToProps = (state) => {
  console.log('state : ', state)
  return {
    // recommends: state.services.recommends,
    serviceList: state.firestore.ordered.services
  }
}

export default compose(
  firestoreConnect((props) => [
    { collection: 'services', startAt: 0, limit: 6 }
  ]),
  connect(mapStateToProps)
)(AllService);