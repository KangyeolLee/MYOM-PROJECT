import React from 'react'
import { Link } from 'react-router-dom'
import './classLink.css'

const ClassLink = () => {
  return (
    <div className="container classLink">
      <div className="row">
        <h5 className="scorehvy col s12 myomColor">MYOM 이용하기</h5>
        <Link to='/thema' className="col s4">
          <div className="card">
            <div className="card-image">
              <img src="/img/classLink/둘러보기.jpg" alt="둘러보기 카테고리 이미지"/>
              <span className='scorehvy'>둘러보기</span>
            </div>
          </div>
        </Link>

        <Link to='/productIntro' className="col s4">
          <div className="card">
            <div className="card-image">
              <img src="/img/classLink/편집자.jpg" alt="편집자 카테고리 이미지"/>
              <span className='scorehvy'>편집자 등록</span>
            </div>
          </div>
        </Link>

        <Link to='/community/admin' className="col s4">
          <div className="card">
            <div className="card-image">
              <img src="/img/classLink/커뮤니티.jpg" alt="커뮤니티 카테고리 이미지"/>
              <span className='scorehvy'>커뮤니티</span>
            </div>
          </div>
        </Link>

        <div className="divider col s6 offset-s3"></div>
      </div>
    </div>
  )
}

export default ClassLink;