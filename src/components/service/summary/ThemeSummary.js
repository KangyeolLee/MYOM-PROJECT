import React from 'react';

const ThemeSummary = ({thema}) => {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img className='' src={thema.src} alt=""/>
          <span className="card-title">{thema.title}</span>
        </div>
      </div>
    </div>
  )
}

export default ThemeSummary;

// components/summary 하 RecommendService 컴포넌트 내 주석 참고 바람