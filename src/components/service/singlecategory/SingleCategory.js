import React, { Component } from 'react';
import RecommendService from '../servicedetails/RecommendService';
import CategoryFilter from '../../layout/CategoryFilter';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class SingleCategory extends Component {
  render() {
    const thema = this.props.match.params.category;
    const { serviceList, match } = this.props;
    console.log(match);
    return (
      <div className="container">
        <CategoryFilter />
        <h2 className='red-text text-darken-3'>{thema}</h2>
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
                <Link to={`${match.url}/${item.id}`} key={item.id}>
                  <RecommendService recommendable={item} />
                </Link>
              )
            })}
          </li>
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
  firestoreConnect([
    { collection: 'services'}
  ]),
  connect(mapStateToProps)
)(SingleCategory);