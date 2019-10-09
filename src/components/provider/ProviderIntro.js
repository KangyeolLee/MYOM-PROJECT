import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import './providerIntro.css';

class ProviderIntro extends Component {
  state = {
    number : 5,
    expectMoney: '590,750원',
  }

  handleChange = (e) => {
    this.setState({
      expectMoney : this.numberWithCommas(e.target.value * 118150) + '원',
      number : e.target.value,
    })
  }
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="providerIntro">
        <Banner path='editor'/>
        <div className="container">
          <div className="row">
            <h4 className='center scorehvy margin'>MYOM 편집자가 되어 수익을 늘려보세요!</h4>
            <div className="col s6">
              <h4>한달에 5일만 투자하세요!</h4>
              <p>한달 예상 수익 </p>
            </div>

            <div className="col s5 push-s1">
              <div className="card">
                <div className="card-content">
                  <h5>한달 예상수익을 확인해보세요</h5>
                  <div className="input-field center">
                    <input type="number" className='numbers' onChange={this.handleChange} value= {this.state.number} /> 건
                  </div>
                  <div className="input-field center">
                    <input type="text" className='expectMoney' value={this.state.expectMoney} disabled/>
                  </div>
                  <p className='grey-text'>본 수치는 베이직과 프로의 하한가 평균가격인 118,150원을 한건의 가격으로 했을 때의 가격입니다. (수수료 제외 편집자 순수익)</p>
                </div>
              </div>
            </div>
 
            <div className="col s12">
              <div className="divider"></div>
              <h2 className='center margin'>편집자 등록 3단계</h2>
            </div>

            <div className="col s4">
              <h5>편집자 등록</h5>
              <p>MYOM에서 서비스를 판매하기 위해서는 편집자 등록을 먼저 하셔야합니다. 여행영상을 편집할 능력이 있으신 모든 분들 편집자 등록을 통해 심사를 받아보세요!</p>
            </div>
            <div className="col s4">
              <h5>서비스 등록</h5>
              <p>자신만의 강점으로 서비스를 등록해보세요! 서비스는 공들여 작성한 만큼 소비자들이 더 매력을 느낄 수 있겠죠?</p>
            </div>
            <div className="col s4">
              <h5>편집</h5>
              <p>소비자가 편집자님의 서비스를 구매하면 편집하여 돌려드리기만하면 끝!</p>
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