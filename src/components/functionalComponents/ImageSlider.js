import React, { Component } from 'react';
import M from 'materialize-css';

class ImageSlider extends Component {
  componentDidMount() {
    const sliders = document.querySelectorAll('.slider');
    M.Slider.init(sliders, {
      height: 500,
    })
  }
  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img src="/img/banner/banner1.jpg" alt=""/>
            <h3 className="scorehvy caption left-align">짧은 여행을 긴 추억으로</h3>
          </li>

          <li>
            <img src="/img/banner/banner2.jpg" alt=""/>
            <h3 className="scorehvy caption center-align">특별한 추억을 더 특별하게</h3>
          </li>

          <li>
            <img src="/img/banner/banner3.jpg" alt=""/>
            <h3 className="scorehvy caption right-align">당신의 여행을 한 편의 영화로</h3>
          </li>

          <li>
            <img src="/img/banner/banner4.jpg" alt=""/>
            <h3 className="scorehvy caption right-align">짧은 여행을 긴 추억으로</h3>
          </li>

          <li>
            <img src="/img/banner/banner5.jpg" alt=""/>
            <h3 className="scorehvy caption center-align">특별한 추억을 더 특별하게</h3>
          </li>

          <li>
            <img src="/img/banner/banner6.jpg" alt=""/>
            <h3 className="scorehvy caption left-align">당신의 여행을 한 편의 영화로</h3>
          </li>
        </ul>
      </div>
    )
  }
}

export default ImageSlider;