import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import './providerIntro.css';

class ProviderIntro extends Component {
  render() {
    console.log(this.props);
    const imgSrc = this.props.match.path;
    return (
      <div className="productIntro">
        <Banner type={imgSrc}/>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <h4>Why host on Airbnb?</h4>
              <p>No matter what kind of home or room you have to share, Airbnb makes it simple and secure to host travelers. You’re in full control of your availability, prices, house rules, and how you interact with guests.</p>
            </div>
            <div className="col s6">
              <h4>We have your back</h4>
              <p>To keep you, your home, and your belongings safe, we cover every booking with $1M USD in property damage protection and another $1M USD in insurance against accidents.</p>
            </div>

            <div className="col s12">
              <div className="divider"></div>
              <h2 className='center'>Hosting in 3 Steps</h2>
            </div>

            <div className="col s4">
              <h5>List your space for free</h5>
              <p>Share any space without sign-up charges, from a shared living room to a second home and everything in-between.</p>
            </div>
            <div className="col s4">
              <h5>Decide how you want to host</h5>
              <p>Choose your own schedule, prices, and requirements for guests. We’re there to help along the way.</p>
            </div>
            <div className="col s4">
              <h5>Welcome your first guest</h5>
              <p>Once your listing is live, qualified guests can reach out. You can message them with any questions before their stay.</p>
            </div>

            <div className="col s12">
              <div className="divider"></div>
              <h2 className='center'>질문에 대한 호스트의 답변</h2>
            </div>

            <div className="col s6">
              <p className='flow-text'>The Host Guarantee helped me decide to join Airbnb because I have it to fall back on if there's damage or problems.</p>
            </div>
            <div className="col s6">
              <img src="img/bestReviews/review_sample01.jpg" alt=""/>
            </div>

            <div className="col s12">
              <div className="divider"></div>
              <h2 className='center'>We've got you coverd</h2>
            </div>

            <div className="col s6">
              <p>We know it’s a priority to trust the people staying in your home. Airbnb allows you to set strict requirements for who can book and to get to know guests before their stay.</p>
              <p>If something does come up, though, we have your back. With our Host Guarantee covering property damage and our Host Protection Insurance for liability, you’re supported as a host throughout.</p>
            </div>
            <div className="col s6">
              <p>Ability to require government ID before booking</p>
              <p>House Rules guests must agree to</p>
              <p>Chance to read reviews from past trips</p>
              <p>Free $1M protection for property damage</p>
              <p>Free $1M liability insurance</p>
              <p>24/7 global customer support</p>
            </div>
            <div className="col s12">
              <img src="img/theme/korea.jpg" alt="" className='responsive-img' />
            </div>

            <div className="col s12">
              <div className="divider"></div>
              <h2 className='center'>더 만들기 귀찮다</h2>
            </div>

            <div className="col s12">
              <div className='lastIntro'>
                <img src="img/banner/productIntro.jpg" alt="" className='responsive-img' />
                <h2 className='white-text'>Ready to earn?</h2>
                <Link to='/registerProvider'>
                  <span className="btn waves-effect waves-light">시작하기</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ProviderIntro;

// 임시 레이아웃 페이지 - 대대적인 내용 및 레이아웃 수정 필요