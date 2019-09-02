import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

class Banner extends Component {
  render() {
    let path = this.props.type;       // 클릭경로를 자동으로 읽어와서
    if(path === '/') path = 'sample'; // 해당하는 배너이미지를 노출 (메인홈 or 프로덕트 소개 페이지)

    const btnInBanner = (path === 'sample')
      ? ( 
        <div className="container">
          <div className="btn-wrapper">
            <Link to='/thema' className='btnForMore white-text btn yellow darken-3 waves-effect waves-light'>둘러보기</Link>
            <Link to='/productIntro' className='btnForSubmit white-text btn yellow darken-3 waves-effect waves-light'>등록하기</Link>
            <Link to='/community' className='btnForSubmit white-text btn yellow darken-3 waves-effect waves-light'>커뮤니티</Link>
          </div>
        </div>
      )
      : (
        <div className="container">
          <div className="btn-wrapper">
            <Link to='/registerProvider' className='btnForMore white-text btn yellow darken-3 waves-effect waves-light'>등록하기</Link>
          </div>
        </div>
      )

    return(
      <header className='banner'>
        <img src={"/img/banner/" + path +'.jpg'} alt="" className='responsive-img'/>
        { btnInBanner }
      </header>
    )
  }
}

export default Banner;