import React from 'react';
import Banner from '../banner/Banner';
import Theme from '../dashboard/Theme';
import ClassLink from './ClassLink';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Banner path='main'/>
      <ClassLink />
      <Theme />
    </div>
  )
}

export default (Dashboard);