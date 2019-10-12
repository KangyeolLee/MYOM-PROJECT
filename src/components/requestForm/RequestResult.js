import React from 'react'


const RequestResult = (props) => {
  const { requestData } = props;
  console.log(requestData)

  return (
    <div className="container requestResult">
    {
      (requestData)
        ? (
          <div className="row">
            <div className="col xl6 l6 m6 s12 divider-column">
            <h5 className="col s12 scorelt">다녀온 여행지</h5>
            <span className="col s12">{requestData.tripLocation}</span>

            <h5 className="col s12 scorelt">편집스타일</h5>
            <span className="col s12">
              {
                requestData.editStyle.length && requestData.editStyle.map(style => (
                  (style.isChecked) ? style.value + ' | ' : '' 
                ))
              }
            </span>

            <h5 className="col s12 scorelt">영상의 느낌</h5>
            <span className="col s12">
              {
                requestData.editFeeling.length && requestData.editFeeling.map(feeling => (
                  feeling.isChecked ? feeling.value + ' | ' : ''
                ))
              }
            </span>

            <h5 className="col s12 scorelt">레퍼런스 여부</h5>
            <span className="col s12">
              {
                requestData.hasReference.length && requestData.hasReference.map(ref => (
                  ref.isChecked ? ref.value : ''
                ))
              }
            </span>

            <h5 className="col s12 scorelt">레퍼런스 영상</h5>
            <span className="col s12">{requestData.referenceLink}</span>

            <h5 className="col s12 scorelt">영상 사용용도</h5>
            <span className="col s12">
              {
                requestData.purpose.length && requestData.purpose.map(purpose => (
                  purpose.isChecked ? purpose.value + ' | ' : ''
                ))
              }
            </span>
            </div>

            <div className="col xl6 l6 m6 s12 divider-column">
            <h5 className="col s12 scorelt">필수 영상 소스</h5>
            <span className="col s12">
              {
                requestData.essential_cut.length && requestData.essential_cut.map(cut => (
                  cut.isChecked ? cut.value : ''
                ))
              }
            </span>

            <h5 className="col s12 scorelt">영상 순서</h5>
            <span className="col s12">
              {
                requestData.edit_order.length && requestData.edit_order.map(order => (
                  order.isChecked ? order.value + ' | ' : ''
                ))
              }
            </span>

            <h5 className="col s12 scorelt">영상 자막</h5>
            <span className="col s12">
              {
                requestData.subtitle.length && requestData.subtitle.map(subtitle => (
                  subtitle.isChecked ? subtitle.value + ' | ' : ''
                ))
              }
            </span>

            <h5 className="col s12 scorelt">자막 폰트</h5>
            <span className="col s12">{requestData.subtitle_font}</span>

            <h5 className="col s12 scorelt">음악</h5>
            <span className="col s12">
              {
                requestData.musicFree.length && requestData.musicFree.map(music => (
                  music.isChecked ? music.value + ' | ' : ''
                ))
              }
            </span>

            <h5 className="col s12 scorelt">영상의 느낌</h5>
            <span className="col s12">{requestData.wantMusic}</span>
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