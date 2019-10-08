import React, { Fragment } from 'react';
import Banner from '../banner/Banner';
import Theme from '../dashboard/Theme';
import ClassLink from './ClassLink';
import Footer from '../layout/Footer';
import Kakao from '../layout/Kakao';

const Dashboard = () => {
  return (
    <Fragment>
      <div className="dashboard">
        <Banner path='main'/>
        <ClassLink />
        <Theme />
        <Footer/>
      </div>
    </Fragment>
  )
}

export default (Dashboard);