import React from 'react';
import './AllService.css';
import CategoryFilter from '../../layout/CategoryFilter';
import { Link } from 'react-router-dom';
import RecommendService from '../servicedetails/RecommendService';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const AllService = (props) => {
  const { recommends } = props;
  const { match, serviceList } = props;
  console.log(props);
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
          { serviceList && serviceList.map(item => {
            return (
              <Link to={`${match.url}/${item.category}/${item.id}`} key={item.id}>
                <RecommendService recommendable={item} />
              </Link>
            )
          })}
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
  return {
    // recommends: state.services.recommends,
    serviceList: state.firestore.ordered.services
  }
}

export default compose(
  firestoreConnect([
    { collection: 'services'}
  ]),
  connect(mapStateToProps)
)(AllService);