import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import './mypageSidenav.css';

class MyPageSidenav extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { pathname } = this.props;
    const selectorValueForSidenav = pathname.includes('mypageBuyer');
    const finalResult = selectorValueForSidenav
      ? (
        <div>
          <div className='profile-infos'>
            <div className='btn-floating grey lighten-1'><i className="large material-icons">person</i></div>
            <h5>의욕적인벚나무7292</h5>
            <Link to="/mypageProvider/requestsPage" className="btn-large red darken-3 waves-effect"><i className="material-icons left">repeat</i>전문가로 전환하기</Link>
          </div>
          <ul className="collapsible z-depth-0">
            <li>
              <div className="collapsible-header">나의 견적요청<i className="material-icons right">arrow_drop_down</i></div>
              <div className="collapsible-body">
                <ul className="estimates-list">
                  <li><NavLink to="/mypageBuyer/estimate">승인대기중(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/estimate">요청중(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/estimate">마감(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/estimate">비승인(0)</NavLink></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="collapsible-header">구매 관리<i className="material-icons right">arrow_drop_down</i></div>
              <div className="collapsible-body">
                <ul className="paymentDetails-list">
                  <li><NavLink to="/mypageBuyer/orderManage">전체(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/orderManage">요청사항 미작성(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/orderManage">진행중(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/orderManage">완료(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/orderManage">평가 미작성(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/orderManage">취소(0)</NavLink></li>
                </ul>
              </div>
            </li>

            <NavLink to='/mypageBuyer/coupons' className='collapsible-direct black-text'>쿠폰</NavLink>
            <NavLink to='/mypageBuyer/paymentDetails' className='collapsible-direct black-text'>결제 내역</NavLink>
          
          </ul>
        </div>
      )
      : (
        <div>
          <div className='profile-infos'>
            <div className='btn-floating grey lighten-1'><i className="large material-icons">person</i></div>
            <h5>의욕적인벚나무7292</h5>
            <Link to="/mypageBuyer/estimate" className="btn-large yellow darken-3 waves-effect"><i className="material-icons left">repeat</i>의뢰인으로 전환하기</Link>
          </div>
          <ul className="collapsible z-depth-0">
            <li>
              <div className="collapsible-header">보낸 견적<i className="material-icons right">arrow_drop_down</i></div>
              <div className="collapsible-body">
                <ul className="estimates-list">
                  <li><NavLink to="/mypageProvider/requestsPage">승인대기중(0)</NavLink></li>
                  <li><NavLink to="/mypageProvider/requestsPage">요청중(0)</NavLink></li>
                  <li><NavLink to="/mypageProvider/requestsPage">마감(0)</NavLink></li>
                  <li><NavLink to="/mypageProvider/requestsPage">비승인(0)</NavLink></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="collapsible-header">판매 관리<i className="material-icons right">arrow_drop_down</i></div>
              <div className="collapsible-body">
                <ul className="paymentDetails-list">
                  <li><NavLink to="/mypageProvider/sellManage">전체(0)</NavLink></li>
                  <li><NavLink to="/mypageProvider/sellManage">요청사항 미작성(0)</NavLink></li>
                  <li><NavLink to="/mypageProvider/sellManage">진행중(0)</NavLink></li>
                  <li><NavLink to="/mypageProvider/sellManage">완료(0)</NavLink></li>
                  <li><NavLink to="/mypageProvider/sellManage">평가 미작성(0)</NavLink></li>
                  <li><NavLink to="/mypageProvider/sellManage">취소(0)</NavLink></li>
                </ul>
              </div>
            </li>

            <NavLink to='/mypageProvider/myServices' className='collapsible-direct black-text'>나의 서비스</NavLink>
            <NavLink to='/mypageProvider/profitsManage' className='collapsible-direct black-text'>수익 관리</NavLink>
            <NavLink to='/mypageProvider/profileSetting' className='collapsible-direct black-text'>프로필 관리</NavLink>
          </ul>
        </div>
      );

    return (
        <div>{ finalResult }</div>
    )
  }
}

export default MyPageSidenav;