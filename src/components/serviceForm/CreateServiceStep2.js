import React, { Component, Fragment } from 'react';

class CreateServiceStep2 extends Component {
  render() {
    if(this.props.currentStep !==2) return null;

    const class_trigger = (this.props.service_title || this.props.service_content) ? '_disabled' : '';
    const class_trigger2 = (this.props.service_title && this.props.service_content) ? '_disabled' : '';
    return (
      <Fragment>
        <h5 className="center">등록할 서비스의 제목과 내용을 추가해주세요!</h5>
        <p style={{margin: '1.5rem initial'}} className="col s10 offset-s1 edit-content-desc center">서비스 제목과 내용은 섬네일 사진과 함께 소비자에게 노출되는 영역입니다. 매력있는 문구와 상세한 설명이 함께라면 더 높은 판매율을 기록할 수 있습니다.</p>

        <div className="input-field service-title col s10 offset-s1">
          <input className='has-character-counter _required' id='service_title' type="text" data-length='40' maxLength='41'
            placeholder='ex) 여행영상 요구에 맞춰 빠르게 편집해드립니다!' 
            onKeyPress={this.props.handleKeyPress}
            onChange={this.props.handleChange}
            value={this.props.service_title} />
          <label className='active' htmlFor="service_title">서비스 제목</label>
          { this.props.need && !this.props.service_title ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
        </div>

        <div className={"input-field no-autoinit service-title col s10 offset-s1 none" + class_trigger}>
          <textarea className='has-character-counter _required materialize-textarea' id='service_content' type="text" data-length='1000' maxLength='1001'
            placeholder='ex) 꼼꼼하고 자세하게 서비스 설명을 적어주세요! 상세한 설명은 서비스 판매에 큰 도움이 될 수 있습니다!' 
            onChange={this.props.handleChange}
            value={this.props.service_content} />
          <label className='active' htmlFor="service_content">서비스 소개</label>
          { this.props.need && !this.props.service_content ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
        </div>

        <div className={"input-field servide-refund col s10 offset-s1 none" + class_trigger2}>
          <textarea id="service_refund" type='text' data-length='500' maxLength='501' className="has-character-counter materialize-textarea" 
            onChange={this.props.handleChange}
            value={this.props.service_refund}
            placeholder={`본인 서비스의 수정사항과 관련된 이슈를 적어주세요! 나만의 수정가능 기준이나 범위를 상세하게 설명해주시면 좋습니다.
            
예시) 음악이 결정되고 편집에 들어 간 경우 컷편집은 불가합니다.


※ 특별한 기준이 없는 경우 기입하지 않아도 됩니다.`}/>
          <label htmlFor="service_refund" className="active">수정관련 안내</label>
        </div>


        {/* {
          this.props.service_content
            ? (
              <div className="btn-wrapper col s10 offset-s1">
                <div className="btn z-depth-0 grey lighten-2"><i className='material-icons '>add</i>설명항목 추가</div>
              </div>
            )
            : null
        } */}
        
      </Fragment>
    )
  }
  
}

export default CreateServiceStep2;