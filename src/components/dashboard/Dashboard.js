import React, { Component } from 'react';
import Banner from '../banner/Banner';
import Theme from '../dashboard/Theme';
import BestReviews from '../dashboard/BestReviews';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { themas, bests} = this.props;
    const path = this.props.match.path;
    return (
      <div className="dashboard">
        <Banner type={path}/>
        <Theme themas={themas} />
        <BestReviews bests={bests} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themas: state.services.themas,
    bests: state.services.bests,
    firestore: state.firestore,
    firebase: state.firebase,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Dashboard);