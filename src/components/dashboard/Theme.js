import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './theme.css';

class Theme extends Component {
  componentDidMount() {

  }
  render() {
    const {themas, dashboard} = this.props;
    console.log(dashboard);
    return (
      <div className="container theme">
        <div className="row categories">
          <h5 className="col s12 scorehvy myomColor">MYOM 카테고리</h5>
          <Link to='thema/cinema'>
            <div className="col s6">
              <div className="card">
                <div className="card-image">
                  <img src="/img/categories/시네마틱형.jpg" alt="시네마틱형 카테고리 이미지"/>
                  <span className='scorehvy'>시네마틱형</span>
                </div>
              </div>
            </div>
          </Link>

          <Link to='thema/variety'>
            <div className="col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/categories/예능형2.jpg" alt="예능형 카테고리 이미지"/>
                  <span className='scorehvy'>예능형</span>
                </div>
              </div>
            </div>
          </Link>

          <Link to='thema/document'>
            <div className="col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/categories/다큐형.jpg" alt="다큐형 카테고리 이미지"/>
                  <span className='scorehvy'>다큐멘터리형</span>
                </div>
              </div>
            </div>
          </Link>

          <Link to='thema/dynamic'>
            <div className="col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/categories/다이나믹형.PNG" alt="다이나믹형 카테고리 이미지"/>
                  <span className='scorehvy'>다이나믹형</span>
                </div>
              </div>
            </div>
          </Link>

          <Link to='thema/vlog'>
            <div className="col s6">
              <div className="card">
                <div className="card-image">
                  <img src="/img/categories/브이로그형.png" alt="브이로그형 카테고리 이미지"/>
                  <span className='scorehvy'>브이로그형</span>
                </div>
              </div>
            </div>
          </Link>
          
          <Link to='thema/etc'>
            <div className="col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/categories/기타형.jpg" alt="기타형 카테고리 이미지"/>
                  <span className='scorehvy'>기타형</span>
                </div>
              </div>
            </div>
          </Link>

          {/* { themas && themas.map(item => {
            return (
              <Link to={'/thema/' + item.title} key={item.src} >
                <ThemeSummary thema={item} />
              </Link>
            )
          })} */}

        </div>
      </div>
    )
  }
}


export default Theme;