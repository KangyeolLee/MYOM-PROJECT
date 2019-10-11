import React from 'react'
import { Link } from 'react-router-dom';

const ProviderRegisterDone = () => {
  return (
    <div className="container providerRegisterDone">
      <div className="row">
        <div className="card col s10 offset-s1">
          <div className="card-content">
            <h5 className="center scorehvy">편집자 등록이 완료되셨습니다.</h5>
            <p className="card-content center">
              등록은 myom 관리팀의 심사를 거쳐 승인됩니다. <br/>
              심사승인까지 수일이 소요될 수 있습니다. <br/>
              빠른 시간 내에 심사를 거쳐 안내드리겠습니다. <br/>
              myom-travel의 편집자로 등록신청 해주셔서 대단히 감사드립니다.
            </p>
          </div>
        </div>

        <Link to='/' className="btn myomColor-background col xl4 offset-xl4 l4 offset-l4 m4 offset-m4 s10 offset-s1">홈으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default ProviderRegisterDone;