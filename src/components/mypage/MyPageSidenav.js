import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavLink} from 'react-router-dom';
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
        <div className='myPageSidenav'>
          <div className='profile-infos'>
            <div className='btn-floating grey lighten-1'><i className="large material-icons">person</i></div>
            <h5>의욕적인벚나무7292</h5>
            {/* <Link to="/mypageProvider/requestsPage" className="btn-large myomColor-background waves-effect"><i className="material-icons left">repeat</i>프로필 설정</Link> */}
          </div>
          <ul className="collapsible z-depth-0">
            {/* <li>
              <div className="collapsible-header">나의 견적요청<i className="material-icons right">arrow_drop_down</i></div>
              <div className="collapsible-body">
                <ul className="estimates-list">
                  <li><NavLink to="/mypageBuyer/estimate">승인대기중(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/estimate">요청중(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/estimate">마감(0)</NavLink></li>
                  <li><NavLink to="/mypageBuyer/estimate">비승인(0)</NavLink></li>
                </ul>
              </div>
            </li> */}

            {/* <li>
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
            </li> */}
            <li style={{cursor: 'unset'}} className="yellow darken-3 scorehvy collapsible-direct white-text">메뉴</li>
            <NavLink to='/mypageBuyer/orderManage' className='collapsible-direct black-text'>구매 관리</NavLink>
            <NavLink to='/mypageBuyer/paymentDetails' className='collapsible-direct black-text'>결제 내역</NavLink>
            <NavLink to='/mypageBuyer/coupons' className='collapsible-direct black-text'>쿠폰</NavLink>
            <li>
              <div className="collapsible-header">계정설정<i className="material-icons">arrow_drop_down</i></div>
              <div className="collapsible-body">
                <ul className="collection">
                  <li className="collection-item"><NavLink to='/mypageBuyer/profile'>나의정보 </NavLink></li>
                  <li className="collection-item"><NavLink to='/mypageBuyer/changepwd'>비밀번호 변경 </NavLink></li>
                  <li className="collection-item"><NavLink to='/mypageBuyer/withdrawal'>회원탈퇴</NavLink></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )
      : (
        <div className='myPageSidenav'>
          <div className='profile-infos'>
            <div className='btn-floating grey lighten-1'><i className="large material-icons">person</i></div>
            <h5>의욕적인벚나무7292</h5>
            {/* <Link to="/mypageBuyer/estimate" className="btn-large myomColor-background waves-effect"><i className="material-icons left">repeat</i>프로필 설정</Link> */}
          </div>
          <ul className="collapsible z-depth-0">
            {/* <li>
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
            </li> */}

            <li style={{cursor: 'unset'}} className="red darken-3 scorehvy collapsible-direct white-text">메뉴</li>
            <NavLink to='/mypageProvider/profileSetting' className='collapsible-direct black-text'>프로필 관리</NavLink>
            <NavLink to='/mypageProvider/serviceSetting' className='collapsible-direct black-text'>나의 서비스</NavLink>
            <NavLink to='/mypageProvider/sellManage' className='collapsible-direct black-text'>판매 관리</NavLink>
            <NavLink to='/mypageProvider/profitsManage' className='collapsible-direct black-text'>수익 관리</NavLink>
            <li>
              <div className="collapsible-header">계정설정<i className="material-icons">arrow_drop_down</i></div>
              <div className="collapsible-body">
                <ul className="collection">
                  <li className="collection-item"><NavLink to='/mypageProvider/profile'>나의정보 </NavLink></li>
                  <li className="collection-item"><NavLink to='/mypageProvider/changepwd'>비밀번호 변경 </NavLink></li>
                  <li className="collection-item"><NavLink to='/mypageProvider/withdrawal'>회원탈퇴</NavLink></li>
                </ul>
              </div>
            </li>

          </ul>
        </div>
      );

    return (
        <div>{ finalResult }</div>
    )
  }
}

export default MyPageSidenav;