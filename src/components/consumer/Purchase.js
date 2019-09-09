import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './purchase.css';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { _buy_service } from '../../store/actions/serviceAction';

class Purchase extends Component {
  state = {
    selected : '',
  }
  componentDidUpdate(prevProps, prevState) {
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
  handleSubmit = (e) => {
    e.preventDefault();
    const hidden_modal = document.querySelector('#modal-verify-payment');
    const modal_instance = M.Modal.getInstance(hidden_modal);
    modal_instance.open();
  }
  handleChange = (e) => {
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
  buy_by_click = (e) => {
    e.preventDefault();
    this.props._buy_service(this.props.match.params.service_id, this.props.service, this.props.history);
  }
	render(){
    const { price, options } = this.props.location;
		return(
			<form onSubmit={this.handleSubmit} className="container purchase-page">
				<h4>주문하기</h4>
				<div className="purchase-form">
					<table className="basic-purchase">
						<thead>
							<tr>
								<th>기본항목</th>
								<th>작업일</th>
								<th>가격</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{ options ? options.map(item => <p key={item}>{item}</p>) : <p>기본</p> }</td>
								<td>5일</td>
								<td>{ price }</td>
							</tr>
						</tbody>
					</table>

					<table className="option-purchase">
						<thead>
							<tr>
								<th>옵션항목</th>
								<th>작업일</th>
								<th>가격</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>
										<label>
											<input type="checkbox"/>
											<span>빠른 작업</span>
										</label>
									</p>
								</td>
								<td>1일</td>
								<td>30,000원</td>
							</tr>
							<tr>
								<td>
									<p>
										<label>
											<input type="checkbox"/>
											<span>러닝타임(초) 추가</span>
										</label>
									</p>
								</td>
								<td>+0일</td>
								<td>40,000원</td>
							</tr>
							<tr>
								<td>
									<p>
										<label>
											<input type="checkbox"/>
											<span>색 보정</span>
										</label>
									</p>
								</td>
								<td>+3일</td>
								<td>30,000원</td>
							</tr>
							<tr>
								<td>
									<p>
										<label>
											<input type="checkbox"/>
											<span>사진 및 영상 촬영(1CAM) 경우</span>
										</label>
									</p>
								</td>
								<td>+5일</td>
								<td>230,000원</td>
							</tr>
							<tr>
								<td>
									<p>
										<label>
											<input type="checkbox"/>
											<span>성우 더빙 및 더빙 편집 경우</span>
										</label>
									</p>
								</td>
								<td>+5일</td>
								<td>150,000원</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="purchase-price">
					<div className="panel-heading">결제금액</div>
					<div className="panel-body">
						<div className="row">
							<div className="col s7">
                <div className="row">
                  <div className="col s6">
                    <strong>쿠폰사용</strong>
                  </div>
                  <span className="col s6">
                    <button data-target="modal-coupon" className="btn-small waves-effect waves-light indigo modal-trigger">쿠폰선택</button>
                  </span>
                  { /* Modal Structure */}
                  <div id="modal-coupon" className="modal">
                    <div className="modal-content">
                      <h5>적용 가능한 쿠폰</h5>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s6">총 서비스 금액</div>
                  <div className="col s6">
                    150,000원
                  </div>
                </div>
							</div>

							<div className="col s5">
								<h5 className='col s6'>총 결제금액</h5>
								<h5 className="col s6">150,000원</h5>
							</div>

						</div>
					</div>
				</div>
				<div className="purchase-method">
					<div className="panel-heading">결제방법</div>
					<div className="panel-body">
						<p>
							<label htmlFor='pay_creditcard'>
								<input onChange={this.handleChange} id='pay_creditcard' name="method" className="with-gap" type="radio" required />
								<span>신용카드</span>
							</label>
						</p>
						<p>
							<label htmlFor='pay_kontobezahlen'>
								<input onChange={this.handleChange} id='pay_kontobezahlen' name="method" className="with-gap" type="radio" required/>
								<span>실시간 계좌이체</span>
							</label>
						</p>
						<p>
							<label htmlFor='pay_bankaccount'>
								<input onChange={this.handleChange} id='pay_bankaccount' name="method" className="with-gap" type="radio" required/>
								<span>무통장입금</span>
							</label>
						</p>
						<p>
							<label htmlFor='pay_cellphone'>
								<input onChange={this.handleChange} id='pay_cellphone' name="method" className="with-gap" type="radio" required/>
								<span>휴대폰</span>
							</label>
						</p>
					</div>
				</div>
				<div className="tax">
					<div className="panel-heading">세금계산서</div>
					<div className="panel-body">
						<li>개인 전문가이므로 세금계산서 발행이 불가능합니다.</li>
						<li>현금영수증(사업자지출증빙) / 신용카드 매입전표는 매입세액공제 사용이 불가능합니다. [매입세액공제 안내]</li>
						<li>현금영수증 / 신용카드 영수증은 개인 소득 공제용으로만 사용하실 수 있습니다.</li>
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
                  <h5>{this.state.selected === 'pay_creditcard' ? '신용카드 결제'
                        : this.state.selected === 'pay_kontobezahlen' ? '실시간 계좌이체 결제'
                        : this.state.selected === 'pay_bankaccount' ? '무통장입금 결제'
                        : this.state.selected === 'pay_cellphone' ? '휴대폰 결제' : '결제하기'}</h5>
                  <p>이 약관은 전자지급결제대행서비스 및 결제대금예치서비스를 제공하는 주식회사 LG유플러스(이하 '회사'라 합니다)과 이용자 사이의 전자금융거래에 관한 기본적인 사항을 정함으로써 전자금융거래의 안정성과 신뢰성을 확보함에 그 목적이 있습니다.</p>
                </div>
                <div className="modal-footer">
                  <button onClick={this.close_modal} className="modal-close btn-flat waves-effect left">취소</button>  
                  <button onClick={this.buy_by_click} className="btn-flat waves-effect right">구매하기</button>  
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
    service: state.firestore.data.service,
  }
}
const mapDisptachToProps = (dispatch) => {
  return {
    _buy_service: (service_id, service, history) => dispatch(_buy_service(service_id, service, history)),
  }
}
export default compose(
  connect(mapStateToProps, mapDisptachToProps),
  firestoreConnect((props) => [
    { collection: 'services', doc: props.match.params.service_id, storeAs: 'service' }
  ])
)(Purchase);


