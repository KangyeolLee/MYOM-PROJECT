import React from 'react';
import Banner from '../banner/Banner';
import Theme from '../dashboard/Theme';
import ClassLink from './ClassLink';
import ServicePreview from './ServicePreview';
import Footer from '../layout/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <a download href="https://firebasestorage.googleapis.com/v0/b/myom-89a5a.appspot.com/o/files%2Fchats%2Facrkdduf%40naver.com%3Achris0319%40naver.com%2Fmyom_logo5.png?alt=media&token=85288c5b-0fab-48e4-ac9c-eda63a06640a"> 다운로드해라</a>
      <Banner path='main'/>
      <ClassLink />
      <ServicePreview />
      <Footer/>
    </div>
  )
}

export default (Dashboard);