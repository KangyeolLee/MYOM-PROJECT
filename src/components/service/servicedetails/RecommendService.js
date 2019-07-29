import React from 'react'

const RecommendService = ({recommendable}) => {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img className='' src={recommendable.src} alt=""/>
          <span className="card-title black">{recommendable.title}</span>
        </div>
      </div>
    </div>
  )
}

export default RecommendService;

// 추천 알고리즘 도입 후 전체 컴포넌트 수정 필요
// 현재는 summary 폴더의 ThemeSummary 컴포넌트와 완전 동일한 기능
// 추후 각 컴포넌트를 기능별 DB 및 알고리즘 구분만 설립한 채,
// 화면에 노출되는 각종 서비스들은 하나의 Summary 컴포넌트로 관리하게끔 설정해야 함