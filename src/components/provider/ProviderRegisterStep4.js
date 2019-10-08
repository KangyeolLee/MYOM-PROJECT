import React from 'react'

const ProviderRegisterStep4 = (props) => {
  if(props.currentStep !== 4) return null;

  return (
    <div className="row ProviderRegisterStep4">
      <h5 className="left col s10 offset-s1 scorehvy">계좌 등록</h5>
      <p className="col s10 offset-s1 account-desc">서비스 수익을 입금받을 계좌를 입력해주세요!</p>
      <p className="col s10 offset-s1 account-desc">대금은 myom 가상계좌에 보관되다 작업이 완료되면 지불됩니다.</p>
      <p className="col s10 offset-s1 account-desc">대금 지급 자세히 알아보기</p>

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