import React from 'react';
import { Link } from 'react-router-dom';
import './purchase.css';

const PurchaseDone = (props) => {
  const { service_id } = props.match.params;
	return(
		<div className="container purchasedone">
      <div className="card">
        <div className="card-content">
          <div className="center card-title">구매가 완료되셨습니다.</div>
          <div className="center purchasedone-btns row">
            <Link to='/requestForm' className="center col s4 offset-s4 btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons homeIcon">descriptions</i><span>상세요청서 작성</span></Link>
            {/* <Link to={'/purchaseDetails/' + service_id} className="col s4 offset-s2 btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons">descriptions</i><span>상세주문내역 확인</span></Link> */}
          </div>
        </div>
      </div>
		</div>
	) 
}

export default PurchaseDone;