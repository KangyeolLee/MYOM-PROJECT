import React, { Component } from 'react';
import Banner from '../banner/Banner';
import Theme from '../dashboard/Theme';
import BestReviews from '../dashboard/BestReviews';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { themas, bests, recommends } = this.props;
    console.log(themas, bests, recommends)
    return (
      <div className="dashboard">
        <Banner />
        <Theme themas={themas} />
        <BestReviews bests={bests} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    themas: state.services.themas,
    bests: state.services.bests,
    recommends: state.services.recommends
  }
}

export default connect(mapStateToProps)(Dashboard);