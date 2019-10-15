import React from 'react'
import Slider from '@material-ui/core/Slider'

const ProviderRegisterStep3 = (props) => {
  if(props.currentStep !== 3) return null;

  const noEnter = (e) => {
    if(e.keyCode === 13) e.preventDefault();
  }
  
  return (
    <div className="row ProviderRegisterStep3">
      <h5 className="left col s10 offset-s1 scorehvy">사용 프로그램</h5>
      <p className="col s10 offset-s1">
        편집 시 사용하는 툴과 프로그램을 작성해주세요!<br/>
        더불어 본인이 생각하는 숙련도를 우측 바를 통해 체크해주세요!
      </p>

      <div style={{marginTop: '2.5rem'}} className="col s10 offset-s1">
        <h6 className="scorelt col s7 center">사용툴 이름</h6>
        <h6 className="scorelt col s5 center">숙련도</h6>
      </div>

      {
        (props.editorTool.length && props.editorTool.map((tool, idx) => {
          let name = 'tool' + idx;
          let default_taget = props.editorTool[idx][name];
          let className = idx === 0 ? 'required' : '';
          return (
          <div key={tool + idx} className="col s10 offset-s1 tool-list">
            <div className="col s1">
              <h5 className='scorehvy'>#{idx + 1}</h5>
            </div>
            <div className="input-field col s6">
              <input onKeyDown={(e) => noEnter(e)} className={className} onChange={props.handleEditorTools} value={default_taget.name} id={'tool' + idx + '_name'} type="text" placeholder='예시) 프리미어 프로'/>
              <label htmlFor="editorTool"></label>
            </div>

            <div className="range-field col s5">
              <Slider onChange={props.handleRange('tool' + idx + '_percent')} defaultValue={50} step={10} valueLabelDisplay='auto' valueLabelFormat={value => value + '%'} />
            </div>
          </div>
          )
        }))        
      }

      <div className="col s10 offset-s1 required-warning">
      {
        (props.need)
          ? <span className='right red-text'>최소 1개 이상의 프로그램을 기입해주세요!</span>
          : null
      }
      </div>

      <div id='editor-tool' onClick={(e) => props.handleMoreBtn(e)} className="moreBtn col s4 offset-s4 btn myomColor-background waves-effect">+ 항목 추가하기</div>
      
    </div>
  )
}

export default ProviderRegisterStep3;