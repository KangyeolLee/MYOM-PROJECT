import React from 'react';
import './AllService.css';
import CategoryFilter from '../../layout/CategoryFilter';
import { Link } from 'react-router-dom';
import RecommendService from '../servicedetails/RecommendService';
import { connect } from 'react-redux';

const AllService = (props) => {
  const { recommends } = props;
  const { match } = props;
  console.log(props);
  return (
    <div className="container">
      <CategoryFilter />
      { recommends && recommends.map(item => {
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
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recommends: state.services.recommends
  }
}

export default connect(mapStateToProps)(AllService);