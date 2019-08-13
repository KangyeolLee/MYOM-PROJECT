import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';
import M from 'materialize-css';

class SignedInLinks extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
      coverTrigger: false,
      hover: true,
      constrainWidth: false
    });

  }
  render() {
    return (
      <ul className="right">
        <li><NavLink to='/registerProvider'>판매자 등록</NavLink></li>
        <li><NavLink to='/profileSetting' className='btn btn-floating grey lighten-1'><i className='material-icons'>person</i></NavLink></li>
        <li className='dropdown-trigger no-autoinit' data-target='dropdown_mypage'><span style={{display: 'flex'}}>{this.props.profile.initials}님&nbsp;<i className="material-icons">arrow_drop_down</i></span></li>

        {/* about dropdown option for UserMyPage */}
        <ul id="dropdown_mypage" className="dropdown-content">
          <li><a href="#!">계정 설정</a></li>
          <li><NavLink to='/orderManage'>구매 관리</NavLink></li>
          <li><NavLink to='/estimate'>견적 요청</NavLink></li>
          <li><NavLink to='/paymentDetails'>결제 내역</NavLink></li>
          <li><NavLink to='/profileSetting'>프로필 관리</NavLink></li>
          <li className="divider" tabindex='-1'></li>
          <li><a onClick={this.props.signOut}>로그아웃</a></li>
        </ul>
      </ul>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);

