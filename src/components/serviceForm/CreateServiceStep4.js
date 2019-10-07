import React, { Fragment } from 'react'
import Slider from '@material-ui/core/Slider'

const CreateServiceStep4 = (props) => {
  if(props.currentStep !== 4) return null;

  return (
    <Fragment>
      <h5 className='center'>서비스 가격과 기타 옵션을 설정해주세요!</h5>

      <div className="input-filed col s10 offset-s1">
        <h5>BASIC</h5>
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
        <div className="chips chips-initial col s9 no-autoinit" id='basic-options'>
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
          <option value="3회">3회</option>
          <option value="5회">5회</option>
          <option value="10회">10회</option>
          <option value="15회">15회</option>
          <option value="무제한">무제한</option>
        </select>
        <label htmlFor="basic_modify">수정 가능 횟수</label>
        { props.need && !props.basic_modify ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }   
      </div>

      {/* ----- PROFESSIONAL ----- */}

      <div className="input-field col s10 offset-s1">
        <h5>PROFESSIONAL</h5>
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
        <div className="chips chips-initial col s9 no-autoinit" id='pro-options'>
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
          <option value="3회">3회</option>
          <option value="5회">5회</option>
          <option value="10회">10회</option>
          <option value="15회">15회</option>
          <option value="무제한">무제한</option>
        </select>
        <label htmlFor="pro_modify">수정 가능 횟수</label>
        { props.need && !props.pro_modify ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
      </div>
    </Fragment>
  )
}

export default CreateServiceStep4;