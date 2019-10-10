import React, { Component, Fragment } from 'react';
import './purchase.css';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { _buy_service } from '../../store/actions/serviceAction';

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
  haddleKeyDown = (e) => {
    e.preventDefault();
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
    if(!isLoaded(this.props.will_purchase)) return <div className='container'>로딩중...</div>

    const { will_purchase } = this.props;
    const price = this.props.location.price ? this.props.location.price : will_purchase.price[0];
		return(
			<form onSubmit={this.handleSubmit} className="container purchase-page">
				<h5 className='col s6 scorehvy category'>주문하기</h5>

        <div className="collection service-preview">
          <div className="collection-item row">
            <div className="col s3 image-area">
              <img height='140' className='preview-img' src={will_purchase.images.thumbnail} alt="서비스 섬네일"/>
            </div>

            <div className="col s9 subContent">
              <h5 className="service-title scorehvy">{will_purchase.service_title}</h5>
              <p className='provider-nickname'>{will_purchase.provider_nickName} 님</p>
            </div>
          </div>
        </div>

				<div className="purchase-form">
					<table className="basic-purchase centered">
						<thead>
							<tr className=''>
                <th className='scorehvy'>선택</th>
								<th className='scorehvy'>기본옵션</th>
								<th className='scorehvy'>작업일</th>
								<th className='scorehvy'>가격</th>
							</tr>
						</thead>

						<tbody>
							<tr className=''>
                <td className="myomColor-background white-text"><h4 className="scorehvy">{price.type}</h4></td>
								<td className=''>
                  {
                    price.chips.length && price.chips.map(chip => (
                      <div className='options' key={chip}><i className="material-icons left">check</i><span className=''>{chip}</span></div>
                    ))
                  }
                </td>
								<td className=''>{ price.working }</td>
								<td className='scorehvy'>{ '￦' + price.price }원</td>
							</tr>
						</tbody>
					</table>

          <h5 className='col s12 scorehvy category'>러닝타임 추가</h5>
					<table className="option-purchase centered">
						<thead>
							<tr>
								<th className='scorehvy'>기존 러닝타임</th>
								<th className='scorehvy'>길이 추가</th>
								<th className='scorehvy'>추가 가격</th>
							</tr>
						</thead>
						<tbody>
							<tr>
                <td>{price.runningTime}</td>
                <td><input onKeyDown={(e) => this.haddleKeyDown(e)} onChange={this.handleChange} value={this.state.plus_time} id='plus_time' type="number" min='0'/>분</td>
                <td>{'+ ' + this.numberWithCommas(price.additional_price * this.state.plus_time)}원</td>
              </tr>
						</tbody>
					</table>
				</div>

        <h5 className='col s12 scorehvy category'>결제하기</h5>
				<div className="purchase-price">
					<div className="panel-heading scorehvy">결제금액</div>
					<div className="panel-body">
						<div className="row">
							<div className="col s6">
                <div className="row">
                  <div className="col s6">
                    <strong>쿠폰사용</strong>
                  </div>
                  <span className="col s6">
                    <div data-target="modal-coupon" className="btn-small waves-effect waves-light indigo modal-trigger">쿠폰선택</div>
                  
                    { /* Modal Structure */}
                    <div id="modal-coupon" className="modal">
                      <div className="modal-content">
                        <h5>적용 가능한 쿠폰</h5>
                      </div>
                    </div>
                  </span>

                </div>

                <div className="row">
                  <div className="col s6">할인적용</div>
                  <div className="col s6 red-text">
                    - 0
                  </div>
                </div>
							</div>

							<div className="col s6">
                <div className="row">
								  <h5 style={{marginTop: 0}} className='col m6 s12 center'>총 결제금액</h5>
								  <h5 style={{marginTop: 0}} className="col m6 s12 center scorehvy">{ (this.state.total_price) ? '￦' + this.state.total_price : '￦' + price.price}</h5>
                </div>
							</div>

						</div>
					</div>
				</div>
				<div className="purchase-method">
					<div className="panel-heading scorehvy">결제방법 <font color='red'> (결제 모듈 서비스는 준비중에 있으며 현재는 계좌이체만 가능합니다!)</font></div>
					<div className="panel-body row">
						<p className='col s3'>
							<label htmlFor='pay_creditcard'>
								<input onChange={this.handleChange} id='pay_creditcard' name="method" className="with-gap" type="radio" disabled required />
								<span>신용카드</span>
							</label>
						</p>
						<p className='col s3'>
							<label htmlFor='pay_kontobezahlen'>
								<input onChange={this.handleChange} id='pay_kontobezahlen' name="method" className="with-gap" type="radio" required/>
								<span>계좌이체</span>
							</label>
						</p>
						<p className='col s3'>
							<label htmlFor='pay_bankaccount'>
								<input onChange={this.handleChange} id='pay_bankaccount' name="method" className="with-gap" type="radio" disabled required/>
								<span>무통장입금</span>
							</label>
						</p>
						<p className='col s3'>
							<label htmlFor='pay_cellphone'>
								<input onChange={this.handleChange} id='pay_cellphone' name="method" className="with-gap" type="radio" disabled required/>
								<span>휴대폰</span>
							</label>
						</p>
					</div>
				</div>
				<div className="tax">
					<div className="panel-heading scorehvy">결제관련 안내사항</div>
					<div className="panel-body">
						<li>대금은 myom 가상계좌에 보관되며 작업이 완료되면 지불됩니다.</li>
						<li>대금 지급은 소비자의 [구매확정] 이후 진행됩니다.</li>
						<li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
						<li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
						<li>[구매확정] 지연으로 인해 대금 지급이 늦어지는 경우, 작업완료일로부터 7일 이내 의뢰인이 수정, 취소 등의 의사표시를 하지 않은 경우 구매확정 처리가 됩니다.</li>
						<li>결제금액의 오입금으로 인한 모든 위험과 책임은 의뢰인이 부담하여야 합니다.</li>
						<li>myom 가상계좌 송금 시, 본인의 이름을 분명하게 기술해주세요!</li>
					</div>
				</div>


			  <button className="btn-large waves-effect waves-light indigo right purchase-btn">결제하기</button>   


        {
          (this.state.selected)
            ? (
              <Fragment>
              <input type='hidden' id='hidden_btn_for_additional_modal' data-target='modal-verify-payment' className="btn-large modal-trigger btn waves-effect" />
              <div id="modal-verify-payment" className="modal no-autoinit modal-fixed-footer">
                <div className="modal-content">
                  {/* <h5 className='scorehvy'>{this.state.selected === 'pay_creditcard' ? '신용카드 결제'
                        : this.state.selected === 'pay_kontobezahlen' ? '계좌이체 결제'
                        : this.state.selected === 'pay_bankaccount' ? '무통장입금 결제'
                        : this.state.selected === 'pay_cellphone' ? '휴대폰 결제' : '결제하기'}</h5> */}
                  <p style={{marginBottom: '3rem'}} className='grey-text center'>본 서비스는 현재 결제 시스템 도입 중이며 계좌이체로만 결제가 가능한점 양해 부탁드립니다.</p>
                  
                  <h5 className="scorehvy">환불 안내<span style={{fontFamily: 'sans-serif', fontSize: '15px'}} className='right'>자세히</span></h5>
                  <p style={{marginBottom: '3rem'}}>

                  <strong style={{fontWeight: 'bolder'}}>1) 의뢰인의 취소</strong><br/>  
                  1. 의뢰인은 전문가에게 작업 취소 요청을 할 수 있으며, 이때 취소 요청과 함께 취소 사유를 보내야합니다.<br/>
                  2. 전문가는 의뢰인의 요청을 [수락] 혹은 [거절]할 수 있으며, 취소 사유가 합당하다고 판단하여 요청을 [수락]하는 경우 작업이 취소됩니다.<br/>
                  3. 서비스를 취소하는 경우에는 Time Stamp의 진행 경과에 따라 취소 수수료가 발생합니다.<br/>
                  4. 중간점검의 결과물이 요청서와 비교했을 때 확연히 다른 경우, 100% 환불이 가능합니다. 이때 회사의 타당성 심사를 통해 환불 여부가 결정됩니다.
                  <br/><br/>
                  <strong style={{fontWeight: 'bolder'}}>2) 전문가의 취소</strong><br/>
                  1. 전문가는 불가피한 사정으로 인해 작업이 불가해진 경우, 작업 취소 요청을 할 수 있습니다.<br/>
                  2. 의뢰인은 전문가의 요청을 [수락] 혹은 [거절]할 수 있으며, 취소 사유가 합당하다고 판단하여 요청을 [수락]하는 경우 작업이 취소됩니다.<br/> 
                  3. 전문가의 사정으로 인해 작업이 취소된 경우 의뢰인은 100% 환불 받습니다.

                  </p>

                  <h5 className="scorehvy">선택하신 상품</h5>
                  <div className="row">
                    <p style={{paddingLeft: 0}} className="col s4">타입</p>
                    <p className="col s8">{price.type}</p>
                    <div className="divider col s12"></div>
                    <p style={{paddingLeft: 0}} className="col s4">옵션</p>
                    <p className="col s8">{price.chips.length && price.chips.map(chip => chip + ' / ')}</p>
                    <div className="divider col s12"></div>
                    <p style={{paddingLeft: 0}} className="col s4">길이추가</p>
                    <p className="col s8">{this.state.plus_time ? this.state.plus_time + '분' : '추가안함'}</p>
                    <div className="divider col s12"></div>
                    <p style={{paddingLeft: 0}} className="col s4">추가금액</p>
                    <p className="col s8">{this.state.plus_time ? this.numberWithCommas(price.additional_price * this.state.plus_time) + '원' : '추가금액 없음'}</p>
                    <div className="divider col s12"></div>
                  </div>

                  <h5 style={{marginTop: '3rem'}} className="scorehvy center">총 결제금액 : {(this.state.total_price) ? '￦' + this.state.total_price : '￦' + price.price}</h5>
                </div>
                <div className="modal-footer">
                  <button onClick={this.close_modal} className="modal-close btn-flat waves-effect left">취소</button>  
                  <button onClick={(e) => this.buy_by_click(e, price)} className="btn-flat waves-effect right">구매하기</button>  
                </div>              
              </div>
              </Fragment>
            )
            : null
        }
			</form>
		)
	}
}
const mapStateToProps = (state) => {
  return {
    will_purchase: state.firestore.data.will_purchase,
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


