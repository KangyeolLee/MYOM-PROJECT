import React, { Fragment } from 'react'
import Slider from '@material-ui/core/Slider'

const CreateServiceStep4 = (props) => {
  if(props.currentStep !== 4) return null;

  const noWrite = (e) => {
    e.preventDefault();
  }

  return (
    <Fragment>
      <h5 className='center'>서비스 가격과 기타 옵션을 설정해주세요!</h5>
      <p style={{margin: '1.5rem initial'}} className="col s10 offset-s1 price-desc center">
        가격옵션을 설정해주세요! 자신이 잘 살릴 수 있는 편집의 느낌, 
        <br/> 또는 추가 '색보정', '트랜지션'과 같은 효과를 옵션으로 추가할 수 있습니다. 
        <br/> 수정횟수와 작업 소요기간 등을 설정해 자신의 서비스를 적극적으로 어필해보세요! 
      </p>
      <div className='row' id="basic-desc">
      <div className="input-field col s10 offset-s1">
        <h5 className='scorehvy'>#BASIC</h5>
        <div className="input-field col s6 range-selector">
          <label htmlFor="range_basic_price" className='active'>BAISC 가격을 설정하세요</label>
          <Slider
            value={props.basic_price}
            onChange={props.handleRange('basic_price')}
            step={1}
            valueLabelDisplay='auto'
            valueLabelFormat={(value) => value + '만'}
            aria-labelledby="range_basic_price"
            marks
            min={11}
            max={16} />
        </div>

        <div className="input-field col s3 offset-s3 price-tag">
          <input type="text" id='basic_price' value={props.basic_price + '0,000 원'} disabled />
          <label htmlFor="basic_price" className='active'>BASIC 희망가격</label>
        </div>
      </div>

      <div className="input-field col s10 offset-s1">
        <input className='has-character-counter _required' id='basic_intro' type="text" data-length='40' maxLength='41'
            placeholder='ex) 기본적인 영상 효과 및 자막 편집합니다.' 
            onChange={props.handleChange}
            onKeyPress={props.handleKeyPress}
            value={props.basic_intro} />
        <label className='active' htmlFor="basic_intro">BASIC 옵션 간략소개</label>
        { props.need && !props.basic_intro ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }   
      </div>

      <div className="input-field col s10 offset-s1">
        <label htmlFor="basic-options" className='active'>BASIC 기본옵션 (최대 5개)</label>
        <div className="chips chips-initial col s7 no-autoinit" id='basic-options'>
          <input type="text" id='basic_additional' className="custom-class" placeholder='추가옵션' onKeyDown={props.handleChips} />
        </div>
      </div>

      <div className="input-field col s4 offset-s1">
        <select name="" id="basic_working" className='_required' value={props.basic_working} onChange={props.handleChange} >
          <option value="" disabled>작업일</option>
          <option value="1-3일">1-3일</option>
          <option value="3-5일">3-5일</option>
          <option value="5-7일">5-7일</option>
          <option value="7-10일">7-10일</option>
          <option value="10-15일">10-15일</option>
          <option value="15일 이상">15일 이상</option>
        </select>
        <label htmlFor="basic_working">작업 소요 기간</label>
        { props.need && !props.basic_working ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }   
      </div>

      <div className="input-field col s4 offset-s2">
        <select name="" id="basic_modify" className='_required' value={props.basic_modify} onChange={props.handleChange}>
          <option value="" disabled>수정 횟수</option>
          <option value="1회">1회</option>
          <option value="2회">2회</option>
          <option value="3회">3회</option>
          <option value="4회">4회</option>
          <option value="5회">5회</option>
          <option value="6회">6회</option>
          <option value="7회">7회</option>
          <option value="8회">8회</option>
          <option value="9회">9회</option>
          <option value="10회">10회</option>
          <option value="15회">15회</option>
          <option value="무제한">무제한</option>
        </select>
        <label htmlFor="basic_modify">수정 가능 횟수</label>
        { props.need && !props.basic_modify ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }   
      </div>

      <div className="input-field col s4 offset-s1">
        <select name="" id="basic_runningTime" className='_required' value={props.basic_runningTime} onChange={props.handleChange}>
          <option value="" disabled>러닝타임</option>
          <option value="1분이내">1분이내</option>
          <option value="2분이내">2분이내</option>
          <option value="3분이내">3분이내</option>
          <option value="4분이내">4분이내</option>
          <option value="5분이내">5분이내</option>
          <option value="6분이내">6분이내</option>
          <option value="7분이내">7분이내</option>
          <option value="8분이내">8분이내</option>
          <option value="9분이내">9분이내</option>
          <option value="10분이내">10분이내</option>
          <option value="제한없음">제한없음</option>
        </select>
        <label className='active' htmlFor="basic_runningTime">러닝타임</label>
        { props.need && !props.basic_runningTime ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }   
      </div>

      <div className="input-field col s4 offset-s2">
        <input onKeyDown={(e) => noWrite(e)} id='basic_additional_runningTime' value={props.basic_additional_runningTime} onChange={props.handleChange} placeholder='미기입 시 추가금액 없음' type="number" min='0' step='5000' max='100000'/>
        <label className='active' htmlFor="basic_additional_runningTime">추가 일분 당 금액 (최대 100,000원)</label>
        <span className='guide-text right'>제시한 러닝타임을 넘기는 영상 요청 시, 초과 분수 당 금액을 설정합니다.</span>
      </div>

      </div>

      <div className="divider col s10 offset-s1"></div>

      {/* ----- PROFESSIONAL ----- */}
      <div className='row' id="pro-desc">
      <div className="input-field col s10 offset-s1">
        <h5 className='scorehvy'>#PROFESSIONAL</h5>
        <div className="input-field col s6 range-selector">
          <label htmlFor="range_pro_price" className='active'>PROFESSIONAL 가격을 설정하세요</label>
          <Slider
            value={props.pro_price}
            onChange={props.handleRange('pro_price')}
            step={1}
            valueLabelDisplay='auto'
            valueLabelFormat={(value) => value + '만'}
            aria-labelledby="range_pro_price"
            marks
            min={17}
            max={25} />
        </div>

        <div className="input-field col s3 offset-s3 price-tag">
          <input type="text" id='pro_price' value={props.pro_price + '0,000 원'} disabled />
          <label htmlFor="pro_price" className='active'>PRO 희망가격</label>
        </div>
      </div>

      <div className="input-field col s10 offset-s1">
        <input className='has-character-counter _required' id='pro_intro' type="text" data-length='40' maxLength='40'
            placeholder='ex) 기본적인 영상 효과 및 자막 편집합니다.' 
            onChange={props.handleChange}
            onKeyPress={props.handleKeyPress}
            value={props.pro_intro} />
        <label className='active' htmlFor="pro_intro">PROFESSIONAL 옵션 간략소개</label>
        { props.need && !props.pro_intro ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }   
      </div>

      <div className="input-field col s10 offset-s1">
        <label htmlFor="pro-options" className='active'>PROFESSIONAL 기본옵션 (최대 7개)</label>
        <div className="chips chips-initial col s7 no-autoinit" id='pro-options'>
          <input type="text" id='pro_additional' className="custom-class" placeholder='추가옵션' onKeyDown={props.handleChips} />
        </div>
      </div>

      <div className="input-field col s4 offset-s1">
        <select name="" id="pro_working" className='_required' value={props.pro_working} onChange={props.handleChange} >
          <option value="" disabled>작업일</option>
          <option value="1-3일">1-3일</option>
          <option value="3-5일">3-5일</option>
          <option value="5-7일">5-7일</option>
          <option value="7-10일">7-10일</option>
          <option value="10-15일">10-15일</option>
          <option value="15일 이상">15일 이상</option>
        </select>
        <label htmlFor="pro_working">작업 소요 기간</label>
        { props.need && !props.pro_working ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
      </div>

      <div className="input-field col s4 offset-s2">
        <select name="" id="pro_modify" className='_required' value={props.pro_modify} onChange={props.handleChange}>
          <option value="" disabled>수정 횟수</option>
          <option value="1회">1회</option>
          <option value="2회">2회</option>
          <option value="3회">3회</option>
          <option value="4회">4회</option>
          <option value="5회">5회</option>
          <option value="6회">6회</option>
          <option value="7회">7회</option>
          <option value="8회">8회</option>
          <option value="9회">9회</option>
          <option value="10회">10회</option>
          <option value="15회">15회</option>
          <option value="무제한">무제한</option>
        </select>
        <label htmlFor="pro_modify">수정 가능 횟수</label>
        { props.need && !props.pro_modify ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
      </div>

      <div className="input-field col s4 offset-s1">
        <select name="" id="pro_runningTime" className='_required' value={props.pro_runningTime} onChange={props.handleChange}>
          <option value="" disabled>러닝타임</option>
          <option value="1분이내">1분이내</option>
          <option value="2분이내">2분이내</option>
          <option value="3분이내">3분이내</option>
          <option value="4분이내">4분이내</option>
          <option value="5분이내">5분이내</option>
          <option value="6분이내">6분이내</option>
          <option value="7분이내">7분이내</option>
          <option value="8분이내">8분이내</option>
          <option value="9분이내">9분이내</option>
          <option value="10분이내">10분이내</option>
          <option value="제한없음">제한없음</option>
        </select>
        <label className='active' htmlFor="pro_runningTime">러닝타임</label>
        { props.need && !props.pro_runningTime ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }   
      </div>

      <div className="input-field col s4 offset-s2">
        <input onKeyDown={(e) => noWrite(e)} id='pro_additional_runningTime' value={props.pro_additional_runningTime} onChange={props.handleChange} placeholder='미기입 시 추가금액 없음' type="number" min='0' step='5000' max='100000'/>
        <label className='active' htmlFor="pro_additional_runningTime">추가 일분 당 금액 (최대 100,000원)</label>
        <span className='guide-text right'>제시한 러닝타임을 넘기는 영상 요청 시, 초과 분수 당 금액을 설정합니다.</span>
      </div>

      </div>

      <div className="divider col s10 offset-s1"></div>

      {/* ----- COMMON ----- */}
      {/* <div className='row' id="common-desc">
      <div className="input-field col s10 offset-s1">
        <h5 className="scorehvy">#공통사항 <span className='guide-text'>(필수입력 사항은 아닙니다.)</span></h5>
      </div>

      <div className="input-field col s10 offset-s1">
        <label id='personal-feeling-label' htmlFor="personal-feeling" className='active'>자신만의 느낌 (최대 4개)</label>
        <div className="chips chips-initial col s7 no-autoinit" id='personal-feeling'>
          <input type="text" id='personal-feeling-additional' className="custom-class" placeholder='ex) 따뜻한' onKeyDown={props.handleChips} />
        </div>
      </div>
      </div> */}

    </Fragment>
  )
}

export default CreateServiceStep4;