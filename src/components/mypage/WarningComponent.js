import React from 'react'

const WarningComponent = () => {
  return (
    <div className="collection row grey lighten-4">
      <div className="col s12 warning">
        <span><i style={{fontSize: '18px'}} className="material-icons left">error_outline</i> 꼭 확인해주세요!</span><br/>
        <span><i style={{fontSize: '18px'}} className="material-icons left">check</i> 세금계산서는 거래 주체인 전문가가 의뢰인에게 발행합니다.</span><br/>
        <span><i style={{fontSize: '18px'}} className="material-icons left">check</i> 세금계산서는 사업자 인증 받은 기업전문가에게 요청하실 수 있습니다.</span><br/>
        <span><i style={{fontSize: '18px'}} className="material-icons left">check</i> 이벤트 쿠폰 사용 금액은 할인된 금액이기 때문에 세금계산서에 포함되지 않습니다.</span><br/>
        <span><i style={{fontSize: '18px'}} className="material-icons left">check</i> 거래명세서는 결제가 완료되었음을 증명하는 용도로만 활용 가능하며 세무상의 지출증빙 효력이 없습니다.</span><br/>
        <span><i style={{fontSize: '18px'}} className="material-icons left">check</i> 현금영수증은 개인의 소득공제용으로만 사용 가능하며, 결제 당시 지출 증빙용으로 선택하셨더라도 매입세액공제를 받으실 수 없습니다.</span><br/>
      </div>
    </div>
  )
}

export default WarningComponent;