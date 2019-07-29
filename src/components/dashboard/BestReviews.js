import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BestReviewsSummary from '../service/summary/BestReviewsSummary';

class BestReviews extends Component {
  render() {
    const { bests } = this.props;
    return (
      <div className="BestReviews container">
        <p className='center flow-text'>This is the BestReviews area</p>
        <div className="row">
          { bests && bests.map(item => {
            return (
              <Link to='/' key={item.src}>
                <BestReviewsSummary best={item} />
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default BestReviews;