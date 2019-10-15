import React from 'react';
import Banner from '../banner/Banner';
import Theme from '../dashboard/Theme';
import ClassLink from './ClassLink';
import ServicePreview from './ServicePreview';
import Footer from '../layout/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Banner path='main'/>
      <ClassLink />
      <ServicePreview />
      <Footer />
    </div>
  )
}

export default (Dashboard);