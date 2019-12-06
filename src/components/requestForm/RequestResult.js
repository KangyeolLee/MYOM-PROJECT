import React, { Fragment } from 'react'


const RequestResult = (props) => {
  const { requestData } = props;
  console.log(requestData)

  return (
    <div className="notoSans requestResult">
    {
      (requestData)
        ? (
          <div className="row requestResult-wrapper">
            <div className="col xl6 l6 m6 s12 divider-column">
              <h5 className="col s12 requestResult-title">다녀온 여행지</h5>
              <span className="col s12 requestResult-content">{requestData.tripLocation ? requestData.tripLocation : ''}</span>

              <h5 className="col s12 requestResult-title">편집스타일</h5>
              <span className="col s12 requestResult-content">
                {
                  requestData.editStyle.length && requestData.editStyle.map(style => (
                    style.isChecked 
                      ? <span key={style.id} className="col s6 sub-options"><div className="circle-icons"></div>{style.value}</span>
                      : null
                  ))
                }
              </span>

              <h5 className="col s12 requestResult-title">영상의 느낌</h5>
              <span className="col s12 requestResult-content">
                {
                  requestData.editFeeling.length && requestData.editFeeling.map(feeling => (
                    feeling.isChecked 
                      ? <span key={feeling.id} className="col s6 sub-options"><div className="circle-icons"></div>{feeling.value}</span>
                      : null
                  ))
                }
              </span>

              <h5 className="col s12 requestResult-title">레퍼런스 여부</h5>
              <span className="col s12 requestResult-content">{ requestData.hasReference === 'on' ? '예' : '아니오' }</span>

              <h5 className="col s12 requestResult-title">레퍼런스 영상</h5>
              <span className="col s12 requestResult-content">{ requestData.referenceLink ? requestData.referenceLink : ''}</span>

            </div>

            <div className="col xl6 l6 m6 s12 divider-column">
              <h5 className="col s12 requestResult-title">영상 사용용도</h5>
              <span className="col s12 requestResult-content">
                {
                  requestData.purpose.length && requestData.purpose.map(purpose => (
                    purpose.isChecked 
                      ? <span key={purpose.id} className="col s6 sub-options"><div className="circle-icons"></div>{purpose.value}</span>
                      : null
                  ))
                }
              </span>

              <h5 className="col s12 requestResult-title">필수 영상 소스</h5>
              <span className="col s12 requestResult-content">{ requestData.essential_cut === 'on' ? '예' : '아니오' }</span>

              <h5 className="col s12 requestResult-title">영상 순서</h5>
              <span className="col s12 requestResult-content">
                {
                  requestData.edit_order.length && requestData.edit_order.map(order => (
                    order.isChecked 
                      ? <span key={order.id} className="col s6 sub-options"><div className="circle-icons"></div>{order.value}</span>
                      : null
                  ))
                }
              </span>

              {/* <h5 className="col s12 scorelt">영상 자막</h5>
              <span className="col s12">
                {
                  requestData.subtitle.length && requestData.subtitle.map(subtitle => (
                    subtitle.isChecked ? subtitle.value + ' | ' : ''
                  ))
                }
              </span> */}

              {/* <h5 className="col s12 scorelt">자막 폰트</h5>
              <span className="col s12">{requestData.subtitle_font}</span> */}

              <h5 className="col s12 requestResult-title">음악</h5>
              <span className="col s12 requestResult-content">
              { 
                requestData.musicFree 
                  ? requestData.musicFree === 'on' ? '무료음원' : '유료음원'
                  : ''
              }
              </span>

              <h5 className="col s12 requestResult-title">영상의 느낌</h5>
              <span className="col s12 requestResult-content">{requestData.wantMusic}</span>
            </div>
          </div>
        )
        : (
          <div className="row">
            <h5 className="col s12">아직 작성된 요청서가 없습니다.</h5>
          </div>
        )
    }
    </div>
  )
}

export default (RequestResult);