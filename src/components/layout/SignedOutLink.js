import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul style={{marginRight: '2rem'}} className="right">
      <li><NavLink to='/signin' className="black-text">로그인</NavLink></li>
      <li><NavLink to='/signup' className="black-text">회원가입</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;