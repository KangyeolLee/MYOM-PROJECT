import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import ServicesSummary from '../service/summary/ServicesSummary';
import Preloader from '../functionalComponents/Preloader';
import './servicePreview.css';

const ServicePreview = (props) => {
  const { allService } = props;
  return (
    <div className='container servicePreview'>
      <div className="row">
        <h5 className="col s12 notoSans dashboard-subtitle">
          등록된 서비스
          <Link to='/thema'><span style={{fontSize: '15px', fontWeight: '500', color: '#3b3b3b'}} className="moreBtn right notoSans">전체보기</span></Link>
        </h5>
      </div>


      <ul className="row all_services_area">
      {
        !isLoaded(allService)
          ? <Preloader />
          : isEmpty(allService)
            ? <div>아직 등록된 서비스가 없습니다.</div>
            : allService.map(item => {
                let category = Object.entries(item).filter(category => category.pop() === 5 );                   
                return (
                  <ServicesSummary key={item.id} service={item} category={category[0]}/>
                )
              })                 
      }
      </ul>

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    allService: state.firestore.ordered.allService,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      { collection: 'testService', orderBy: ['timestamp', 'desc'], limit: 8, storeAs: 'allService'}
    ]
  })
)(ServicePreview);