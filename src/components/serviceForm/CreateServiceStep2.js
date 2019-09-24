import React, { Component, Fragment } from 'react';

class CreateServiceStep2 extends Component {
  render() {
    if(this.props.currentStep !==2) return null;

    const class_trigger = (this.props.service_title || this.props.service_content) ? '_disabled' : '';
    return (
      <Fragment>
        <h5 className="center">등록할 서비스의 제목과 내용을 추가해주세요!</h5>

        <div className="input-field service-title col s10 offset-s1">
          <input className='has-character-counter _required' id='service_title' type="text" data-length='40' maxLength='40'
            placeholder='ex) 여행영상 요구에 맞춰 빠르게 편집해드립니다!' 
            onKeyPress={this.props.handleKeyPress}
            onChange={this.props.handleChange}
            value={this.props.service_title} />
          <label className='active' htmlFor="service_title">서비스 제목</label>
          { this.props.need && !this.props.service_title ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
        </div>

        <div className={"input-field no-autoinit service-title col s10 offset-s1 none" + class_trigger}>
          <textarea className='has-character-counter _required materialize-textarea' id='service_content' type="text" data-length='500' maxLength='500'
            placeholder='ex) 다양한 컨셉의 영상을 니즈에 맞게 제작합니다!' 
            onChange={this.props.handleChange}
            value={this.props.service_content} />
          <label className='active' htmlFor="service_content">서비스 소개</label>
          { this.props.need && !this.props.service_content ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
        </div>


        {
          this.props.service_content
            ? (
              <div className="btn-wrapper col s10 offset-s1">
                <div className="btn z-depth-0 grey lighten-2"><i className='material-icons '>add</i>설명항목 추가</div>
              </div>
            )
            : null
        }
        
      </Fragment>
    )
  }
  
}

export default CreateServiceStep2;