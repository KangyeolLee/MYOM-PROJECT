import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/registerProvider'>판매자 등록</NavLink></li>
      <li><a onClick={props.signOut}>로그아웃</a></li>
    </ul>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);