import React from 'react';
import { Link } from 'react-router-dom';
import './purchase.css';

const PurchaseDone = (props) => {
  const {service_id} = props.match.params;
  const serviceRef = service_id.split('&pricetag=')[0];
  const servicePrice = service_id.split('&pricetag=')[1];

	return(
		<div className="container purchasedone notoSans">
      <div className="card">
        <div className="card-content">
          <div style={{fontSize: '34px'}} className="center card-title purchagedone-title">구매가 완료되셨습니다.</div>
          <p className="center">
            상세요청서 작성을 통해, 자신의 영상을 직접 기획해보세요! <br/>
            요청서를 통해 본인이 원하는 영상에 조금 더 가까이 다가갈 수 있습니다.
          </p>

          <br/><br/>
          <h6 className="purchagedone-title">계좌이체 안내</h6>
          <h6 className="helper-text">아래 계좌번호로 입금하셔야 최종적으로 결제가 완료됩니다.</h6>
          {/* 일정 pixel 이하 device 에서는 classList.add('responsive-table') 추가할 것 */}
          <table className='centered'>
            <thead className=''>
              <tr>
                <td className='center'>거래은행</td>
                <td className='center'>계좌번호</td>
                <td className='center'>예금주</td>
                <td className='center'>금액</td>
                <td className='center'>확인여부</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>국민은행</td>
                <td>454102-01-477851</td>
                <td>이승복</td>
                <td>{servicePrice}원</td>
                <td><font color='red'>미확인</font></td>
              </tr>
            </tbody>
          </table>

          <div className="table-wrapper">
            <div className="table-head">입금관련 안내</div>
            <ul className="table-body">
              <li>입금 확인여부는 2시간 이내로 진행되며, 새벽 시간 및 주말에는 다소 지연될 수 있습니다.</li>
              <li>입금이 확인되는대로 편집자가 작업을 시작합니다.</li>
              <li>입금 확인여부는 [<Link target='_blank' className='Link-purchaseDetails' to={'/purchaseDetails/' + serviceRef}> 마이페이지 - 구매관리 - 상세내역 </Link>] 에서도 확인 가능합니다.</li>
            </ul>
          </div>

          <div className="table-wrapper">
            <div className="table-head">결제관련 안내</div>
            <ul className="table-body">
              <li>대금은 myom 가상계좌에 보관되며 작업이 완료되면 지불됩니다.</li>
              <li>대금 지급은 소비자의 [구매확정] 이후 진행됩니다.</li>
              <li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
              <li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
              <li>[구매확정] 지연으로 인해 대금 지급이 늦어지는 경우, 작업완료일로부터 7일 이내 의뢰인이 수정, 취소 등의 의사표시를 하지 않은 경우 구매확정 처리가 됩니다.</li>
              <li>결제금액의 오입금으로 인한 모든 위험과 책임은 의뢰인이 부담하여야 합니다.</li>
              <li>myom 가상계좌 송금 시, 본인의 이름을 분명하게 기술해주세요!</li>
            </ul>
          </div>

          <div className="btn-wrapper row">
            <div style={{marginLeft: '12.666666666%'}} className="col s3 offset-s1">
              <Link to='/'><button className="col s12 btn waves-effect waves-light">메인으로</button></Link>
            </div>
            <div className="col s3">
              <Link to={'/requestForm/' + serviceRef }><button className="col s12 btn waves-effect waves-light myomColor-background white-text">요청서작성</button></Link>
            </div>
            <div className="col s3">
              <Link to={'/purchaseDetails/' + serviceRef }><button className="col s12 btn waves-effect waves-light">상세내역</button></Link>
            </div>
          </div>
          
        </div>
      </div>
		</div>
	) 
}

export default PurchaseDone;