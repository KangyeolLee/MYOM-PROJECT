import React from 'react';
import Banner from '../banner/Banner';
import Theme from '../dashboard/Theme';
import ClassLink from './ClassLink';
import ServicePreview from './ServicePreview';
import Footer from '../layout/Footer';
import './dashboard.css';
import EventBanner from './EventBanner';
import LoungePreview from './LoungePreview';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Banner path='main'/>
      <ClassLink />
      <ServicePreview />
      <EventBanner />
      <LoungePreview />
      <Footer />
    </div>
  )
}

export default (Dashboard);