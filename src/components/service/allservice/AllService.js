import React from 'react';
import './AllService.css';
import { Link } from 'react-router-dom';
import RecommendService from '../servicedetails/RecommendService';
import { connect } from 'react-redux';

const AllService = (props) => {
  const { recommends } = props;
  const { match } = props;
  console.log(props);
  return (
    <div className="container">
      <ul className="collection">
        { recommends && recommends.map(item => {
          return (
            <li className="collection-item" key={item.key}>
              <h4>{item.category}
                <Link to={'/thema/' + item.category} className='secondary-content'>
                  <span className="waves-effect waves-light btn">더보기</span>
                </Link>
              </h4>
              <div className="row recommendable">
                { item.contents && item.contents.map(content => {
                  return (
                    <Link to={`${match.url}/${item.category}/${content.key}`} key={content.key}>
                      <RecommendService recommendable={content} key={content.key}/>
                    </Link>
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
    recommends: state.services.recommends
  }
}

export default connect(mapStateToProps)(AllService);