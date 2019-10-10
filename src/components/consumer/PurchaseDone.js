import React from 'react';
import { Link } from 'react-router-dom';
import './purchase.css';

const PurchaseDone = (props) => {
  console.log(props);
  const {service_id} = props.match.params;
	return(
		<div className="container purchasedone">
      <div className="card">
        <div className="card-content">
          <div className="center scorehvy card-title">구매가 완료되셨습니다.</div>
          <p className="center">
            상세요청서 작성을 통해, 자신의 영상을 직접 기획해보세요! <br/>
            요청서를 통해 본인이 원하는 영상에 조금 더 가까이 다가갈 수 있습니다.
          </p>

          <br/><br/><br/>
          <h6 className="scorehvy">결제관련 안내</h6>
          <div className="pay-guide">
						<li>대금은 myom 가상계좌에 보관되며 작업이 완료되면 지불됩니다.</li>
						<li>대금 지급은 소비자의 [구매확정] 이후 진행됩니다.</li>
						<li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
						<li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
						<li>[구매확정] 지연으로 인해 대금 지급이 늦어지는 경우, 작업완료일로부터 7일 이내 의뢰인이 수정, 취소 등의 의사표시를 하지 않은 경우 구매확정 처리가 됩니다.</li>
						<li>결제금액의 오입금으로 인한 모든 위험과 책임은 의뢰인이 부담하여야 합니다.</li>
						<li>myom 가상계좌 송금 시, 본인의 이름을 분명하게 기술해주세요!</li>
					</div>

          <br/><br/><br/>
          <h6 className="scorehvy">가상계좌 안내</h6>
          <table className='responsive-table centered'>
            <thead className='grey lighten-5'>
              <tr>
                <td className='center'>거래은행</td>
                <td className='center'>계좌번호</td>
                <td className='center'>예금주</td>
                <td className='center'>확인여부</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>국민은행</td>
                <td>000-0000-00-000-00</td>
                <td>이승복</td>
                <td><font color='red'>미확인</font></td>
              </tr>
            </tbody>
          </table>

          <div style={{marginTop: '1.5rem'}} className="pay-guide">
            <li>입금 확인여부는 2시간 이내로 진행되며, 새벽 시간 및 주말에는 다소 지연될 수 있습니다.</li>
            <li>입금이 확인되는대로 편집자가 작업을 시작합니다.</li>
            <li>입금 확인여부는 [ 마이페이지 - 구매관리 - 상세내역 ] 에서 확인 가능합니다.</li>
          </div>

          <div className="center purchasedone-btns row">
            <Link to={'/requestForm/' + service_id } className="center btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons homeIcon">descriptions</i><span>상세요청서 작성</span></Link>
            {/* <Link to={'/purchaseDetails/' + service_id} className="col s4 offset-s2 btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons">descriptions</i><span>상세주문내역 확인</span></Link> */}
          </div>
        </div>
      </div>
		</div>
	) 
}

export default PurchaseDone;