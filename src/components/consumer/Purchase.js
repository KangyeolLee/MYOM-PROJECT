import React, { Component } from 'react';
import './purchase.css';
import M from 'materialize-css';

class Purchase extends Component {
	componentDidMount() {
    M.AutoInit();
  }
	render(){
		return(
			<div className="container purchase-page1">
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
								<td><strong>1분 미만의 영상 제작</strong> <br/> 러닝타임 (초) : 60초 <br/> 자막 삽입 <br/> 배경음악 <br/> 로고 삽입 <br/> Full HD (1080p) </td>
								<td>5일</td>
								<td>120,000원</td>
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
									<div className="col">
										<strong>쿠폰사용</strong>
									</div>
									<span className="col push-s5">
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
									<div className="col">총 서비스 금액</div>
									<div className="col push-s4">
										150,000원
									</div>
								</div>
							</div>
							<div className="col s5">
								<h5>총 결제금액</h5>
								<p className="center">150,000원</p>
							</div>
						</div>
					</div>
				</div>
				<div className="purchase-method">
					<div className="panel-heading">결제방법</div>
					<div className="panel-body">
						<p>
							<label>
								<input name="method" class="with-gap" type="radio"/>
								<span>신용카드</span>
							</label>
						</p>
						<p>
							<label>
								<input name="method" class="with-gap" type="radio"/>
								<span>실시간 계좌이체</span>
							</label>
						</p>
						<p>
							<label>
								<input name="method" class="with-gap" type="radio"/>
								<span>무통장입금</span>
							</label>
						</p>
						<p>
							<label>
								<input name="method" class="with-gap" type="radio"/>
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
			</div>
		)
	}
}

export default Purchase;


