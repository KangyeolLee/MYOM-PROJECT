import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import './banner.css';

class Banner extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return(
      <header className='banner'>
        <img src="/img/banner/sample.jpg" alt="" className='responsive-img'/>
        <div className="container">
          <div className="btn-wrapper">
            <Link to='/thema' className='btnForMore white-text btn yellow darken-3 waves-effect waves-light'>둘러보기</Link>
            <Link to='/' className='btnForSubmit white-text btn yellow darken-3 waves-effect waves-light'>등록하기</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Banner;