import React from 'react'

const ProviderRegisterStep2 = (props) => {
  if(props.currentStep !== 2) return null;

  return (
    <div className="row ProviderRegisterStep2">
      <h5 className="left col s10 offset-s1 scorehvy">경력 및 이력</h5>
      <p className="col s10 offset-s1 editor-history">
        해당사항은 소비자가 편집자 프로필 확인을 통해 볼 수 있는 내용입니다.<br/>
        알리고 싶은 경력과 이력이 있다면 간단하게 적어주세요!<br/>
        PDF 또는 다른 파일의 포트폴리오, 또는 더 자세한 양식의 퐅트폴리오는 아래 메일로 보내주시기 바랍니다.<br/>
        해당 포트폴리오는 편집자 등록 심사에만 사용되고, 소비자에게 노출되지 않습니다.<br/>
        소비자에게 어필할 수 있는 활동들을 간단명료하게만 적어주세요!
      </p>

      <div className="input-field editHistory col s10 offset-s1">
        <table className='responsive-table'>
          <thead>
            <tr>
              <th>기간</th>
              <th>활동내역</th>
              <th>레퍼런스</th>
            </tr>
          </thead>

          <tbody>
            <tr className='grey-text'>
              <td style={{minWidth: '200px'}}>예시)<br/> 2018.10.07 - 2018.11.07</td>
              <td style={{minWidth: '200px'}}>예시)<br/> 유튜브 데일리 하이라이트 영상 종합 편집</td>
              <td style={{minWidth: '200px'}}>예시)<br/> https://www.youtube.com/watch?v=z8jniusR9iQ</td>
            </tr>
            {
              (props.histories.length && props.histories.map((history, idx) => {
                let name = 'history' + idx;
                let default_taget = props.histories[idx][name];
                return (
                <tr key={name}>
                  <td>
                    <div className="input-field dateSetting">
                      <input onSelect={props.handleDatepicker} id={name + '_date'} value={default_taget[name + '_date'][0]} type="text" className='datepicker startAt' placeholder='~부터'/>
                      <span>-</span>
                      <input onSelect={props.handleDatepicker} id={name + '_date'} value={default_taget[name + '_date'][1]} type="text" className='datepicker stopAt' placeholder='~까지'/>
                    </div>
                  </td>
                  <td>
                    <div className="input-field">
                      <textarea onChange={props.handleEditorHistory} id={name + '_content'} value={default_taget[name + '_content']} type="text" className='materialize-textarea' placeholder='해당사항 없을 시 미기재'/>
                    </div>
                  </td>
                  <td>
                    <div className="input-field">
                      <textarea onChange={props.handleEditorHistory} id={name + '_reference'} value={default_taget[name + '_reference']} type="text" className='materialize-textarea' placeholder='해당사항 없을 시 미기재'/>
                    </div>
                  </td>
                </tr>
                )
              }))
            }

          </tbody>
        </table>

        <div id='history' onClick={(e) => props.handleMoreBtn(e)} className="moreBtn col s4 offset-s4 btn myomColor-background waves-effect">+ 항목 추가하기</div>
      </div>

      <h5 className="left col s10 offset-s1 scorehvy">포트폴리오</h5>
      <p className="col s10 offset-s1 portfolio">
        위 경력 및 이력사항에 기입하기 어렵거나, 더 자세한 이력서 및 포트폴리오는 심사를 위해 아래 메일로 보내주시기 바랍니다. <br />
        메일주소 : untilburnout@naver.com
      </p>

    </div>
  )
}

export default ProviderRegisterStep2;