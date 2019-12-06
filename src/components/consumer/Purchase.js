import React, { Component, Fragment } from 'react';
import './purchase.css';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { _buy_service } from '../../store/actions/serviceAction';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

class Purchase extends Component {
  state = {
    selected : '',
    plus_time: 0,
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.plus_time !== prevState.plus_time) {
      let price = this.props.location.price ? this.props.location.price : this.props.will_purchase.price[0];
      this.setState(prevState => ({
        ...prevState,
        total_price: this.numberWithCommas(parseInt((price.price).replace(/,/g,"")) + (price.additional_price * this.state.plus_time)),
      }))
    }
    if(this.state.selected !== prevState.selected) {
      const hidden_modal = document.querySelector('#modal-verify-payment');
      const radioBtn = [...document.querySelectorAll('.with-gap')];

      M.Modal.init(hidden_modal, {
        dismissible: false,
        preventScrolling: false,
        onCloseEnd: () => radioBtn.filter(item => {
          if(item.checked) {
            this.setState({
              selected: item.id,
            })
          }
        })
      })
    }
  }
	componentDidMount() {
    M.AutoInit();
  }
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const hidden_modal = document.querySelector('#modal-verify-payment');
    const modal_instance = M.Modal.getInstance(hidden_modal);
    modal_instance.open();
  }
  handleKeyDown = (e) => {
    e.preventDefault();
  }
  handleMinute = (e) => {
    e.preventDefault();
    const minute = document.getElementById('plus_time');

    if(e.target.id === 'decrement-btn') {
      minute.stepDown();
      this.setState({
        plus_time: minute.value,
      })
    }
    else if(e.target.id === 'increment-btn') {
      minute.stepUp();
      this.setState({
        plus_time: minute.value,
      })
    }
    else return;
  }
  handleChange = (e) => {
    if(e.target.id === 'plus_time') {
      this.setState({
        [e.target.id]: e.target.value,
      });
      return;
    }
    this.setState({
      selected: e.target.id,
    })
  }
  close_modal = (e) => {
    e.preventDefault();
    this.setState({
      selected: '',
    })
  }
  buy_by_click = (e, price) => {
    e.preventDefault();
    this.props._buy_service(this.props.match.params.service_id, this.props.will_purchase, price, this.state, this.props.history);
  }
	render(){
    const { auth } = this.props;
    if(auth.isLoaded && !auth.uid) {
      alert('로그인을 해주세요!');
      return <Redirect to='/signin' />
    } else if(auth.isLoaded && !auth.emailVerified) {
      alert('이메일 인증을 해주세요!')
      return <Redirect to='/emailVerification' />
    }

    if(!isLoaded(this.props.will_purchase)) return <div className='container'>로딩중...</div>

    const { will_purchase } = this.props;
    const price = this.props.location.price ? this.props.location.price : will_purchase.price[0];

		return(
			<form onSubmit={this.handleSubmit} className="container purchase-page">
        <div className="row orderdetails-wrapper">
          <h5 className='col s12 purchase-title notoSans'>주문하기</h5>

          <img className='col s3 preview-img' src={will_purchase.images.thumbnail} alt="서비스 섬네일"/>
          <div className="col s9 text-wrapper">
            <h5 className="service-title notoSans">{will_purchase.service_title}</h5>
            <img src='/img/defaults/lazy-loading.png' data-src={firebase.storage().refFromURL(will_purchase.providerImg).getDownloadURL().then(url => {
              const profile = document.getElementById('purchase-syncImg');
              profile.src = url;
            })} alt="편집자 프로필 이미지" className='circle left syncImg' width='40' height='40' id='purchase-syncImg'/>
            <p className='provider-nickname notoSans'>{will_purchase.provider_nickName}</p>
          </div>
        </div>

        <div className="purchase-form row">
          <div className="col s12 table-wrapper">
            <table className="basic-purchase notoSans centered">
              <thead>
                <tr className=''>
                  <th style={{width: '20%'}} className=''>선택</th>
                  <th style={{width: '40%'}} className=''>기본옵션</th>
                  <th style={{width: '20%'}} className=''>작업일</th>
                  <th style={{width: '20%'}} className=''>가격</th>
                </tr>
              </thead>

              <tbody>
                <tr className=''>
                  <td className="type-title">{price.type}</td>
                  <td className='row'>
                    {
                      price.chips.length && price.chips.map(chip => (
                        <div className='options col s6' key={chip}><div className="circle-icons"></div><span className='options-title'>{chip}</span></div>
                      ))
                    }
                  </td>
                  <td className=''>{ price.working }</td>
                  <td className=''>{ '￦' + price.price }원</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className='col s12 category purchase-title'>러닝타임 추가</h5>
          <div className="col s12 table-wrapper">
            <table className="option-purchase notoSans centered">
              <thead>
                <tr>
                  <th style={{width: '33.333333%'}} className=''>러닝 타임</th>
                  <th style={{width: '33.333333%'}} className=''>길이 추가</th>
                  <th style={{width: '33.333333%'}} className=''>추가 가격</th>
                </tr>
              </thead>
              <tbody className='options-purchase-contents'>
                <tr>
                  <td>{price.runningTime}</td>
                  <td>
                    <div className="input-field plus_time-wrapper">
                      <input onKeyDown={(e) => this.handleKeyDown(e)} onChange={this.handleChange} value={this.state.plus_time} id='plus_time' type="number" min='0' max='99'/>분
                      <button onClick={(e) => this.handleMinute(e)} id='decrement-btn' className="decreBtn btn-floating waves-effect left notoSans">-</button>
                      <button onClick={(e) => this.handleMinute(e)} id='increment-btn' className="increBtn btn-floating waves-effect right notoSans">+</button>
                    </div>
                  </td>
                  <td>{'+ ' + this.numberWithCommas(price.additional_price * this.state.plus_time)}원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row purchase-detailSetting">
          <h5 className='col s12 purchase-title'>결제하기</h5>
          <div className="col s12 table-wrapper">
            <table className="detail-setting notoSans centered">
              <thead>
                <tr>
                  <th style={{width: '33.333333%'}}>쿠폰 사용</th>
                  <th style={{width: '33.333333%'}}>할인 적용</th>
                  <th style={{width: '33.333333%'}} >총 결제액</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div style={{borderRadius: '6px'}} data-target="modal-coupon" className="btn-small disable waves-effect waves-light myomColor-background modal-trigger">쿠폰선택</div>
                    <div id="modal-coupon" className="modal">
                      <div className="modal-content">
                        <h5>적용 가능한 쿠폰</h5>
                      </div>
                    </div>
                  </td>
                  <td>- 0 원</td>
                  <td className='final-cost'>{ (this.state.total_price) ? '￦' + this.state.total_price : '￦' + price.price } 원</td>
                </tr>
              </tbody>
            </table>
          </div>   
        </div>

        <div className="row purchase-module">
          <div className="col s12 table-wrapper notoSans">
            <div className="table-head">결제방법 <font className='helper-text' color='red'> (결제 모듈 서비스는 준비중에 있으며 현재는 계좌이체만 가능합니다!)</font> </div>
            <div className="table-body center">
              <div style={{marginBottom: '0'}} className="row">
                <div className="col s3">
                  <label htmlFor='pay_kontobezahlen'>
                    <input onChange={this.handleChange} id='pay_kontobezahlen' name="method" className="with-gap" type="radio" required/>
                    <span className='black-text active'>계좌이체</span>
                  </label>
                </div>
                <div className="col s3">
                  <label htmlFor='pay_creditcard'>
                    <input onChange={this.handleChange} id='pay_creditcard' name="method" className="with-gap" type="radio" disabled required />
                    <span>신용카드</span>
                  </label>
                </div>
                <div className="col s3">
                  <label htmlFor='pay_bankaccount'>
                    <input onChange={this.handleChange} id='pay_bankaccount' name="method" className="with-gap" type="radio" disabled required/>
                    <span>무통장입금</span>
                  </label>
                </div>
                <div className="col s3">
                  <label htmlFor='pay_cellphone'>
                    <input onChange={this.handleChange} id='pay_cellphone' name="method" className="with-gap" type="radio" disabled required/>
                    <span>휴대폰</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row guide-line">
          <h5 style={{marginTop: '5rem'}} className='col s12 purchase-title notoSans'>안내사항</h5>
          <div className="col s12 table-wrapper notoSans">
            <div className="table-head">결제관련 안내사항</div>
            <ul style={{paddingLeft: '10%', fontSize: '14px', fontWeight: '400', margin: '0'}} className="table-body">
              <li>대금은 myom 가상계좌에 보관되며 작업이 완료되면 지불됩니다.</li>
              <li>대금 지급은 소비자의 [구매확정] 이후 진행됩니다.</li>
              <li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
              <li>[구매확정] 지연으로 인해 대금 지급이 늦어지는 경우, 작업완료일로부터 7일 이내 의뢰인이 수정, 취소 등의 의사표시를 하지 않은 경우 구매확정 처리가 됩니다.</li>
              <li>결제금액의 오입금으로 인한 모든 위험과 책임은 의뢰인이 부담하여야 합니다.</li>
              <li>myom 가상계좌 송금 시, 본인의 이름을 분명하게 기술해주세요!</li>
            </ul>
          </div>

          <div style={{marginTop: '20px'}} className="col s12 table-wrapper notoSans">
            <div className="table-head">환불 안내</div>
            <div className="table-body">
              <ol style={{margin: '0', paddingLeft: '10%'}}>
                <li style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '.75rem'}}> 의뢰인의 취소</li>
                <ol style={{padding: '0', fontSize: '14px', fontWeight: '400'}}>     
                  <li> 의뢰인은 전문가에게 작업 취소 요청을 할 수 있으며, 이때 취소 요청과 함께 취소 사유를 보내야합니다.</li>
                  <li> 전문가는 의뢰인의 요청을 [수락] 혹은 [거절]할 수 있으며, 취소 사유가 합당하다고 판단하여 요청을 [수락]하는 경우 작업이 취소됩니다.</li>
                  <li> 서비스를 취소하는 경우에는 Time Stamp의 진행 경과에 따라 취소 수수료가 발생합니다.</li>
                  <li> 중간점검의 결과물이 요청서와 비교했을 때 확연히 다른 경우, 100% 환불이 가능합니다. 이때 회사의 타당성 심사를 통해 환불 여부가 결정됩니다.</li>
                </ol>
                <br/>
                <li style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '.75rem'}}> 전문가의 취소</li>
                <ol style={{padding: '0', fontSize: '14px', fontWeight: '400'}}>
                  <li> 전문가는 불가피한 사정으로 인해 작업이 불가해진 경우, 작업 취소 요청을 할 수 있습니다.</li>
                  <li> 의뢰인은 전문가의 요청을 [수락] 혹은 [거절]할 수 있으며, 취소 사유가 합당하다고 판단하여 요청을 [수락]하는 경우 작업이 취소됩니다.</li>
                  <li> 전문가의 사정으로 인해 작업이 취소된 경우 의뢰인은 100% 환불 받습니다.</li>
                </ol>
              </ol>
            </div>
          </div>

        </div>         

        <div className="row">
          <button className="col s6 offset-s3 btn-large waves-effect waves-light purchase-btn">결제하기</button>   


          {
            (this.state.selected)
              ? (
                <Fragment>
                <input type='hidden' id='hidden_btn_for_additional_modal' data-target='modal-verify-payment' className="btn-large modal-trigger btn waves-effect" />
                <div id="modal-verify-payment" className="modal no-autoinit modal-fixed-footer row notoSans">
                  <div className="modal-content col s12">
                    {/* <h5 className='scorehvy'>{this.state.selected === 'pay_creditcard' ? '신용카드 결제'
                          : this.state.selected === 'pay_kontobezahlen' ? '계좌이체 결제'
                          : this.state.selected === 'pay_bankaccount' ? '무통장입금 결제'
                          : this.state.selected === 'pay_cellphone' ? '휴대폰 결제' : '결제하기'}</h5> */}
                    
                    <h5 className="modal-title">선택하신 상품</h5>

                    <p style={{paddingLeft: 0}} className="col s4 table-collections">타입</p>
                    <p className="col s8 table-details">{price.type}</p>

                    <p style={{paddingLeft: 0}} className="col s4 table-collections">옵션</p>
                    <p className="col s8 table-details">{price.chips.length && price.chips.map(chip => chip + ' / ')}</p>

                    <p style={{paddingLeft: 0}} className="col s4 table-collections">작업일</p>
                    <p className="col s8 table-details">{ price.working }</p>

                    <p style={{paddingLeft: 0}} className="col s4 table-collections">길이추가</p>
                    <p className="col s8 table-details">{this.state.plus_time ? this.state.plus_time + '분' : '추가안함'}</p>

                    <p style={{paddingLeft: 0}} className="col s4 table-collections">추가금액</p>
                    <p className="col s8 table-details">{this.state.plus_time ? this.numberWithCommas(price.additional_price * this.state.plus_time) + '원' : '추가금액 없음'}</p>

                    <div className="col s12 divider"></div>

                    <p style={{paddingLeft: 0}} className="col s4 table-collections">총 결제금액</p>
                    <p className="col s8 table-details">{(this.state.total_price) ? '￦' + this.state.total_price : '￦' + price.price}</p>

                    <p style={{marginTop: '4rem', fontSize: '13px'}} className='red-text center col s12'>본 서비스는 현재 결제 시스템 도입 중이며 계좌이체로만 결제가 가능한점 양해 부탁드립니다.</p>
                    <p style={{fontSize: '13px', margin: '0'}} className="red-text center col s12">구매하기 버튼을 누르시면 입금계좌 번호를 안내해드립니다.</p>
                                     
                  </div>

                  <div className="modal-footer notoSans">
                    <button onClick={this.close_modal} className="col s3 offset-s3 modal-close btn-flat waves-effect modal-btn">취소</button>  
                    <button onClick={(e) => this.buy_by_click(e, price)} className="col s3 btn-flat waves-effect modal-btn">구매하기</button> 
                  </div>   

                </div>
                </Fragment>
              )
              : null
          }
        </div>
			</form>
		)
	}
}
const mapStateToProps = (state) => {
  return {
    will_purchase: state.firestore.data.will_purchase,
    auth: state.firebase.auth,
  }
}
const mapDisptachToProps = (dispatch) => {
  return {
    _buy_service: (service_id, will_purchase, price, plus, history) => dispatch(_buy_service(service_id, will_purchase, price, plus, history)),
  }
}
export default compose(
  connect(mapStateToProps, mapDisptachToProps),
  firestoreConnect((props) => [
    { collection: 'testService', doc: props.match.params.service_id, storeAs: 'will_purchase' }
  ])
)(Purchase);


