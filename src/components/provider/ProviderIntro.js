import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from '../banner/Banner';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';
import './providerIntro.css';

class ProviderIntro extends Component {
  state = {
    number : 5,
    expectMoney: '590,750원',
  }
  componentDidMount() {
    M.AutoInit();
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
    const { auth }  = this.props;

    return (
      <div className="providerIntro">
        <Banner path='editor'/>
        <div className="container">
          <div className="row provider-introPage">
            
            {/* <div className="col s4">
              <h5 className='center monsori'>MYOM 편집자가 되어 보세요!</h5>
              <p>
              누군가의 여행을 더 값지게 만드는 경험을 해보세요.<br/>
              MYOM은 단순한 영상 편집 그 이상의 가치를 제공합니다.<br/>
              <br/>
              여행 영상 편집에 최적화된 서비스를 통해 소비자와의 불필요한 의사소통 없이 영상 편집에만 집중해보세요!
              </p>
            </div>
            <div className="col s4">
              <h5 className='center monsori'>편집자와 소비자 간 의사소통을 위한 MYOM의 노력</h5>
              <p>
              음악 선택, 원하는 느낌 구현, 참고 영상의 부재 모두 여행 영상을 만드는 데 있어 편집자들이 겪는 어려움들입니다. <br/>
              MYOM은 요청서 시스템을 통해 영상을 만드는 데 있어 편집자가 필요한 모든 정보들을 제공합니다.

              </p>
            </div>
            <div className="col s4">
              <h5 className='center monsori'>당신만의 포트폴리오</h5>
              <p>
              여행 영상 편집을 통해 색다른 분위기의 영상 작업물을 남겨보세요.<br/>
              그리고 그 작업물은 여행자뿐만 아니라 편집자 본인에게도 소중한 자산이 됩니다.
              </p>
            </div>

            <div className="col s4 offset-s4 divider"></div> */}

            <h3 className='col s12 main-title center scorehvy margin'>MYOM 편집자가 되어 수익을 늘려보세요!</h3>
            <div className="col xl6 offset-xl3 l6 offset-l3 m10 offset-m1 s12">
              <div className="card">
                <div className="card-content">
                  <h5 className='center'>한달 예상수익을 확인해보세요</h5>
                  <div className="input-field center">
                    <input type="number" min='0' className='numbers' onChange={this.handleChange} value= {this.state.number} /> 건
                  </div>
                  <div className="input-field center">
                    <input type="text" className='expectMoney monsori' value={this.state.expectMoney} disabled/>
                  </div>
                  <p className='grey-text'>본 수치는 베이직과 프로의 하한가 평균가격인 118,150원을 한건의 가격으로 했을 때의 가격입니다. (수수료 제외 편집자 순수익)</p>
                </div>
              </div>
            </div>
 
            {/* MYOM 소개란 */}
            <div className="row">
            <div className="divider col s4 offset-s4"></div>
            <div className="col s12 margin"></div>
            <div className="col custom-m12 s4 center tripple">
              <h5 className='center monsori title-in-tripple'>MYOM 편집자가 되어 보세요!</h5>
              <p className='content-in-tripple'>
              누군가의 여행을 더 값지게 만드는<br/> 
              경험을 해보세요. MYOM은 단순한<br/> 
              영상 편집 그 이상의 가치를 제공합니다.<br/>
              <br/>
              여행 영상 편집에 최적화된 서비스를 통해<br/>
              소비자와의 불필요한 의사소통 없이<br/>
              영상 편집에만 집중해보세요!
              </p>
            </div>
            <div className="col custom-m12 s4 center tripple">
              <h5 className='center monsori title-in-tripple'>편집자와 소비자 간 의사소통을<br/> 위한 MYOM의 노력</h5>
              <p className='content-in-tripple'>
              음악 선택, 원하는 느낌 구현, 참고 영상 부재<br/>
              모두 여행 영상을 만드는 데 있어 편집자들이<br/>
              겪는 어려움들입니다. <br/><br/>
              MYOM은 요청서 시스템을 통해 영상을<br/>
              만드는 데 있어 편집자가 필요한<br/>
              모든 정보들을 제공합니다.

              </p>
            </div>
            <div className="col custom-m12 s4 center tripple">
              <h5 className='center monsori title-in-tripple'>당신만의 포트폴리오</h5>
              <p className='content-in-tripple'>
              여행 영상 편집을 통해 색다른 분위기의 <br/>
              영상 작업물을 남겨보세요.<br/><br/>
              그리고 그 작업물은 여행자뿐만 아니라 <br/>
              편집자 본인에게도 소중한 자산이 됩니다.
              </p>
            </div>
            </div>

            {/* 편집자 등록 3단계 */}
            <div className="row">
            <div className="divider col s4 offset-s4"></div>
            <h3 className='main-title col s12 scorehvy center margin'>편집자 등록 3단계</h3>
            <div className="col custom-m12 s4 center tripple">
              <div className="i-number col s12"><i className="material-icons medium">looks_one</i></div>
              <h5 className='center monsori title-in-tripple'>편집자 등록하기</h5>
              <p className='content-in-tripple'>
              회원가입을 완료하셨으면<br/>
              편집자 등록을 진행해주세요.<br/>
              MYOM이 제공하는 가이드라인에 따라<br/>
              편집자 정보와 영상을 전달해주시면<br/>
              심사를 진행하겠습니다.<br/>
              <br/>
              편집자 등록 심사가 완료되면 서비스를<br/>
              등록할 수 있습니다.
              </p>
            </div>
            <div className="col custom-m12 s4 center tripple">
              <div className="i-number col s12"><i className="material-icons medium">looks_two</i></div>
              <h5 className='center monsori title-in-tripple'>서비스 세부사항 설정하기</h5>
              <p className='content-in-tripple'>
              서비스의 설명, 가격 설정, 가격대에 따른<br/>
              서비스 구성, 수정 안내 등 서비스에 대한<br/>
              세부 사항을 설정하세요.<br/>
              <br/>
              여행자들에게 보여지는 정보인 만큼<br/>
              신중하게 작성해주세요!

              </p>
            </div>
            <div className="col custom-m12 s4 center tripple">
              <div className="i-number col s12"><i className="material-icons medium">looks_3</i></div>
              <h5 className='center monsori title-in-tripple'>첫 번째 여행자 맞이하기</h5>
              <p className='content-in-tripple'>
              서비스 세부사항을 설정하였다면<br/>
              첫 번째 여행자를 맞이해주세요.<br/>
              <br/>
              그리고 멋진 추억을 선사해주세요.

              </p>
            </div>
            </div>

            {/* 여행영상 제작하기 */}
            <div className="row">
            <div className="divider col s4 offset-s4"></div>
            <h3 className='col main-title s12 scorehvy center margin'>영상을 만들기까지..</h3>
            <div className="col custom-m12 s4 center tripple">
              <h5 className='center monsori title-in-tripple'>요청서</h5>
              <p className='content-in-tripple'>
              소비자는 결제 완료 이후, 플랫폼에서<br/>
              제공하는 요청서를 작성하게 됩니다.<br/>
              <br/>
              이 요청서는 작성 이후 편집자에게<br/>
              전달되는데, 편집자는 이 요청서의<br/>
              내용에 따라 영상을 제작합니다.
              <br/>
              </p>
            </div>
            <div className="col custom-m12 s4 center tripple">
              <h5 className='center monsori title-in-tripple'>TIMESTAMP</h5>
              <p className='content-in-tripple'>
              소비자에게 영상 편집의 경과를<br/>
              설명하는 수단입니다.<br/><br/>
              편집자는 요청서 확인, 영상 확인 및 기획,<br/>
              편집 중 등을 체크하여 편집 경과를<br/>
              소비자에게 알려줘야 합니다. <br/><br/>
              이는 소비자와의 원활한 의사소통뿐 아니라<br/>
              환불의 기준이 되기도 하니<br/>
              성실하게 체크해주세요.


              </p>
            </div>
            <div className="col custom-m12 s4 center tripple">
              <h5 className='center monsori title-in-tripple'>중간점검</h5>
              <p className='content-in-tripple'>
              영상의 음악과 전체적인 편집 스타일이<br/>
              소비자의 마음에 드는 지<br/>
              체크하는 과정입니다.<br/><br/>
              편집자는 음악이 정해지면,<br/>
              자신이 어떤 식으로 편집을 할 것인지<br/>
              약 20~30초 가량의 영상으로<br/>
              소비자에게 점검을 받습니다.

              </p>
            </div>
            

            <div className="col s12 center">
              <img src="img/banner/TIMESTAMP.PNG" alt="타임스탬프" className="responsive-img"/>
            </div>
            </div>

            {/* FAQ */}
            <div className="row">
            <div className="divider col s4 offset-s4"></div>
            <h3 className='col s12 main-title scorehvy center margin'>FAQ</h3>
            <div className="col l6 m12 s12">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header"><i className="material-icons">feedback</i>대금 지급은 언제 받을 수 있나요?</div>
                  <div className="collapsible-body">대금 지급은 소비자의 [구매확정] 이후에 진행됩니다. 또한 대금 지급은 매일 오전 11시 일괄적으로 진행됩니다.</div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">feedback</i>의뢰인이 도중에 취소하는 경우 어떻게 되나요?</div>
                  <div className="collapsible-body">의뢰인이 취소를 요청하는 경우, 전문가가 그 사유가 합당하다고 판단하여 요청을 받아들일 때 전체 작업이 취소됩니다. 전체 작업이 취소되는 경우 Time Stamp의 진행 경과에 따라 의뢰인은 취소 수수료를 지불해야하며, 전문가는 취소 수수료에서 서비스 이용료(수수료)를 제외한 금액을 지불 받을 수 있습니다.</div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">feedback</i>의뢰인이 중간점검에서 구매를 취소하는 경우 어떻게 되나요?</div>
                  <div className="collapsible-body">
                    중간점검에서 취소하는 경우는 크게 2가지로 나누어집니다.<br/><br/>
                    1) 의뢰인이 개인적인 사정으로 인해 취소를 요청하는 경우<br/>
                    전문가가 의뢰인의 취소 사유가 합당하다고 판단하는 경우, 전체 작업이 취소되며 Time Stamp 환불 규정에 따라 의뢰인은 50%의 취소 수수료를 지불합니다. 전문가는 이 금액에서 서비스 이용료를 제외한 금액을 지불 받을 수 있습니다.
                    <br/><br/>
                    2) 의뢰인이 작성한 요청서와 결과물이 크게 달라 취소를 요청하는 경우<br/>
                    의뢰인이 작성한 요청서의 내용이 결과물에 얼마나 반영되었는지 평가하는 타당성 심사가 진행됩니다. 타당성 심사를 통해 취소 여부가 결정되며, 의뢰인의 취소 요청이 타당하다고 판단되는 경우, 100% 환불이 이루어지고 이는 요청서를 제대로 반영하지 못한 전문가의 책임으로 간주하여 전문가는 작업에 대한 대금을 지급 받지 못합니다.
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">feedback</i>수수료는 어느 정도인가요?</div>
                  <div className="collapsible-body">서비스 이용료(수수료)는 15%입니다.</div>
                </li>
              </ul>
            </div>
            <div className="col l6 m12 s12">
            <ul className="collapsible">
                <li>
                  <div className="collapsible-header"><i className="material-icons">feedback</i>의뢰인이 구매확정하지 않은 경우 어떻게 되나요?</div>
                  <div className="collapsible-body">의뢰인이 작업 종료 이후 7일 간 수정, 취소 등의 의사를 표시하지 않는 경우 [구매확정]으로 처리됩니다. 대금 지급은 작업 종료 이후 8일째 오전 11시에 이루어집니다.</div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">feedback</i>의뢰인이 금액에 맞지 않는 과도한 요청을 하는 경우 어떻게 하나요?</div>
                  <div className="collapsible-body">요청서 확인 과정에서 의뢰인이 금액에 맞지 않는 과도한 요청을 한 경우, 전문가가 의뢰인에게 그에 맞는 추가 요금 결제 혹은 가격제 선택을 권할 것을 권장합니다.</div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">feedback</i>참고영상으로는 어떤 영상이 좋나요?</div>
                  <div className="collapsible-body">여행 영상을 편집한 것이 있으면 여행 영상이 좋습니다. 하지만 여행 영상을 편집한 적이 없는 경우, 자신의 영상 편집 스타일을 잘 보여줄 수 있는 영상을 추천합니다. 가능하다면 편집자 본인이 직접 여행을 다녀와서 편집을 하거나 일상을 간단하게 촬영하여 편집한 영상을 만들 것을 권장합니다.</div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">feedback</i>영상은 어떻게 주고 받나요?</div>
                  <div className="collapsible-body">상단메뉴 [메시지] 탭에서 구매자와 원본 영상 및 완성본을 주고 받을 수 있습니다.</div>
                </li>
              </ul>
            </div>
            </div>
            
            <div className="row under-banner">
              <div className="col s12">
                <div className='lastIntro'>
                  <img src="img/banner/underBanner.jpg" alt="" className='responsive' />
                  <h2 style={{margin: '0'}} className='scorehvy black-text top-wording'>지금 바로</h2>
                  <h2 style={{marginTop: '0', marginBottom: '3rem', paddingTop: '0'}} className='scorehvy black-text'>등록해보세요!</h2>
                  <Link to='/providerRegister'>
                    <span className="scorehvy registerBtn myomColor-background btn-large waves-effect waves-light">등록하기</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
        <footer>
          {
            (auth.uid)
              ? (auth.emailVerified)
                ? (
                  <Link to='/providerRegister'>
                    <span className="scorehvy registerBtn myomColor-background btn-large waves-effect waves-light">등록하기</span>
                  </Link>
                )
                : (
                  <Link to='/emailVerification'>
                    <span className="scorehvy registerBtn myomColor-background btn-large waves-effect waves-light">등록하기</span>
                  </Link>
                )              
              : (
                <Link to='/signin'>
                  <span className="scorehvy registerBtn myomColor-background btn-large waves-effect waves-light">등록하기</span>
                </Link>
              )
          }
        </footer>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}
export default connect(mapStateToProps)(ProviderIntro);

// 임시 레이아웃 페이지 - 대대적인 내용 및 레이아웃 수정 필요