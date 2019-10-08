import React from 'react';
import Banner from '../banner/Banner';
import Theme from '../dashboard/Theme';
import ClassLink from './ClassLink';
import ServicePreview from './ServicePreview';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Banner path='main'/>
      <ClassLink />
      <ServicePreview />
    </div>
  )
}

export default (Dashboard);