import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import './mypageSidenav.css';

class MyPageForBuyer extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <div className='profile-infos'>
          <div className='btn-floating grey lighten-1'><i className="large material-icons">person</i></div>
          <h5>의욕적인벚나무7292</h5>
          <a href="#!" className="btn-large waves-effect"><i className="material-icons left">repeat</i>전환하기</a>
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
  }
}

export default MyPageForBuyer;