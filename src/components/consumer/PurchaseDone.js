import React from 'react';
import './purchase.css';

const PurchaseDone = () => {
	return(
		<div className="container">
			<h3 className="center">구매가 완료되셨습니다.</h3>
			<div className="center purchasedone-btns">
				<a className="btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons">home</i>홈으로 돌아가기</a>
				<a className="btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons">descriptions</i>상세주문내역 확인 </a>
			</div>
		</div>
	)
}

export default PurchaseDone;