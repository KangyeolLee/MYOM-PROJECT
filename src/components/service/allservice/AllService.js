import React from 'react';
import './AllService.css';
import { Link } from 'react-router-dom';
import RecommendService from '../servicedetails/RecommendService';
import { connect } from 'react-redux';

const AllService = (props) => {
  const { recommends } = props;
  console.log(recommends);
  return (
    <div className="container">
      <ul className="collection">
        { recommends && recommends.map(item => {
          return (
            <li className="collection-item">
              <h4>{item.category}
                <Link to={'/thema/' + item.category} className='secondary-content'>
                  <span className="waves-effect waves-light btn">더보기</span>
                </Link>
              </h4>
              <div className="row recommendable">
                { item.contents && item.contents.map(content => {
                  return (
                    <RecommendService recommendable={content} />
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    themas: state.services.themas,
    bests: state.services.bests,
    recommends: state.services.recommends
  }
}

export default connect(mapStateToProps)(AllService);