import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import './theme.css';
import ThemeSummary from '../service/summary/ThemeSummary';

class Theme extends Component {
  state = {
    imgUrl : ''
  }

  componentDidMount() {

  }
  render() {
    const {themas, dashboard} = this.props;
    console.log(dashboard);
    return (
      <div className="container Theme">
        <p className='center flow-text'>This is the Thema area</p>
        <div className="row">
          { themas && themas.map(item => {
            return (
              <Link to={'/thema/' + item.title} key={item.src} >
                <ThemeSummary thema={item} />
              </Link>
            )
          })}

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const dashboard = state.firestore.data.dashboard;
  return {
    dashboard
  }
}

export default compose (
  firestoreConnect((props) => [{ collection: 'dashboard', doc: 'pwTCKksmBbMrar96bLX7'}]),
  connect(mapStateToProps)
 )(Theme)