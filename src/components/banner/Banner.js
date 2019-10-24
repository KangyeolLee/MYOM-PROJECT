import React from 'react';
import './banner.css';
import ImageSlider from '../functionalComponents/ImageSlider';

const Banner = ({path}) => { 
  let imgURL = '';

  switch(path) {
    case 'main':
      imgURL = '/img/banner/banner2.jpg';
      break;

    case 'editor':
      imgURL = '/img/banner/productIntro.jpg';
      break; 

    default:
      imgURL = '';
  }
 
  return (
    <div className="banner">
      {
        imgURL === '/img/banner/productIntro.jpg'
          ? <img src={imgURL} alt="배너 이미지"/>    
          : <ImageSlider />       
      }

      {/* <div className="banner-img">
        <div className="container banner-text-box">
          <div className="text-box">
            <h1 className="white-text scorehvy fade-in">특별한 순간을 더 특별하게</h1>
            <h1 className="white-text scorehvy center fade-in">짧은 여행을 긴 추억으로</h1>
            <h1 className="white-text scorehvy left fade-in">당신만의 영화를 제작합니다</h1>
          </div>
        </div>
      </div> */}
      {/* <img src={imgURL} alt="배너 이미지"/>     */}
      {/* <h1 className='banner-text1 scorehvy'>짧은 여행을,</h1>
      <h1 className='banner-text2 scorehvy'>긴 추억으로.</h1>
      <h1 className='banner-text3 scorehvy'><font color='#8624DE'>M</font>ake <font color='#9D2DE6'>Y</font>our <font color='#AE34EB'>O</font>wn <font color='#BF3AF1'>M</font>ovie</h1> */}
    </div>
  )

    // const btnInBanner = (path === 'sample')
    //   ? ( 
    //     <div className="container">
    //       <div className="btn-wrapper">
    //         <Link to='/thema' className='btnForMore white-text btn yellow darken-3 waves-effect waves-light'>둘러보기</Link>
    //         <Link to='/productIntro' className='btnForSubmit white-text btn yellow darken-3 waves-effect waves-light'>등록하기</Link>
    //         <Link to='/community/admin' className='btnForSubmit white-text btn yellow darken-3 waves-effect waves-light'>커뮤니티</Link>
    //       </div>
    //     </div>
    //   )
    //   : (
    //     <div className="container">
    //       <div className="btn-wrapper">
    //         <Link to='/registerProvider' className='btnForMore white-text btn yellow darken-3 waves-effect waves-light'>등록하기</Link>
    //       </div>
    //     </div>
    //   )

    // return(
    //   <header className='banner'>
    //     <img src={"/img/banner/" + path +'.jpg'} alt="" className='responsive-img'/>
    //     { btnInBanner }
    //   </header>
  
}

export default Banner;