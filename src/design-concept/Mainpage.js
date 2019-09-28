import React, { Fragment } from 'react';
import './mainpage.css';

const Mainpage = () => {
  return (
    <Fragment>
      <div className="banner design-concept">
        <img src="/img/banner/banner3.png" alt=""/>    
        <h1 className='banner-text1 scorehvy'>짧은 여행을,</h1>
        <h1 className='banner-text2 scorehvy'>긴 추억으로.</h1>
        <h1 className='banner-text3 scorehvy'><font color='#8624DE'>M</font>ake <font color='#9D2DE6'>Y</font>our <font color='#AE34EB'>O</font>wn <font color='#BF3AF1'>M</font>ovie</h1>
      </div>

      <div style={{marginTop: '30rem'}} className="container design-concept">
        <div className="row">

          <div className="col s6">
            <div className="card">
              <div className="card-image">
                <img src="/img/categories/시네마틱형.jpg" alt="시네마틱 카테고리 이미지"/>
                <span className='scorehvy'>시네마틱형</span>
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="card">
              <div className="card-image">
                <img src="/img/categories/예능형2.jpg" alt="예능형 카테고리 이미지"/>
                <span className='scorehvy'>예능형</span>
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="card">
              <div className="card-image">
                <img src="/img/categories/다큐형.jpg" alt="다큐형 카테고리 이미지"/>
                <span className='scorehvy'>다큐멘터리형</span>
              </div>
            </div>
          </div>


          <div className="col s3">
            <div className="card">
              <div className="card-image">
                <img src="/img/categories/다이나믹형.PNG" alt="다이나믹형 카테고리 이미지"/>
                <span className='scorehvy'>다이나믹형</span>
              </div>
            </div>
          </div>

          <div className="col s6">
            <div className="card">
              <div className="card-image">
                <img src="/img/categories/브이로그형.png" alt="브이로그형 카테고리 이미지"/>
                <span className='scorehvy'>브이로그형</span>
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="card">
              <div className="card-image">
                <img src="/img/categories/기타형.jpg" alt="기타형 카테고리 이미지"/>
                <span className='scorehvy'>기타형</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Mainpage;