import React from 'react'

const ProviderRegisterStep4 = (props) => {
  if(props.currentStep !== 4) return null;

  return (
    <div className="row ProviderRegisterStep4">
      <h5 className="left col s10 offset-s1 scorehvy">계좌 등록</h5>
      <p className="col s10 offset-s1 account-desc">
        서비스 수익을 입금받을 계좌를 입력해주세요!<br/>
        대금은 myom 가상계좌에 보관되며 작업이 완료되면 지불됩니다.<br/>
      </p>
      <div className='col s10 offset-s1 moreSpecify'>
        <span data-target="pay-control" className='modal-trigger'>[ 대금 지급 자세히 알아보기 ]</span>
        <div id="pay-control" className='modal'>
          <div className="modal-content">
            <li>계좌 등록 시 작성하는 입금계좌의 예금주는 전문가와 동일인임을 원칙으로 합니다. 입금계좌의 예금주가 전문가의 가입 정보와 상이한 경우, 대금 지급에 차질이 발생할 수 있습니다.</li>
            <li>대금 지급은 소비자의 [구매확정] 이후 진행됩니다.</li>
            <li>대금 지급은 공휴일을 제외한 평일 오전 11시에 일괄적으로 이루어집니다.</li>
            <li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
            <li>의뢰인의 [구매확정] 지연으로 인해 대금 지급이 늦어지는 경우, 작업완료일로부터 7일 이내 의뢰인이 수정, 취소 등의 의사표시를 하지 않은 경우 구매확정 처리가 되어 8일째에 대금 지급이 진행됩니다.</li>
            <li>회사에서 정하고 있는 매매부적합서비스를 판매한 것으로 확인되거나 합리적 의심이 있는 경우 최고 90일까지 대금 지급을 보류할 수 있습니다.</li>
          </div>
        </div>
      </div>

      <div className="input-field col s4 offset-s1">
        <input required onChange={props.handleChange} value={props.account_person} id='account_person' type="text" />
        <label htmlFor="account-person">예금주</label>
      </div>

      <div className="input-field col s4 offset-s2">
        <input required onChange={props.handleChange} value={props.account_bank} id='account_bank' type="text" />
        <label htmlFor="account-bank">거래은행</label>
      </div>

      <div className="input-field col s10 offset-s1">
        <input required onChange={props.handleChange} value={props.account_number} id='account_number' type="text" />
        <label htmlFor="account-number">계좌번호</label>
      </div>

    </div>
  )
}

export default ProviderRegisterStep4;