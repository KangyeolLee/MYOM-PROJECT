import React, { Fragment } from 'react'
import Slider from '@material-ui/core/Slider'

const CreateServiceStep4 = (props) => {
  if(props.currentStep !== 4) return null;

  return (
    <Fragment>
      <h5 className='center'>서비스 가격과 기타 옵션을 설정해주세요!</h5>

      <div className="input-field col s10 offset-s1">
        <h5 className='col s12'>BASIC</h5>
        <div className="col s6">
          <Slider
            defaultValue={80}
            step={5}
            valueLabelDisplay='auto'
            marks
            min={80}
            max={140} />
        </div>
        <div className="input-field col s3 offset-s1">
          <input type="text" id='basic_price'/>
          <label htmlFor="basic_price" className='active'>BASIC 희망가격</label>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateServiceStep4;