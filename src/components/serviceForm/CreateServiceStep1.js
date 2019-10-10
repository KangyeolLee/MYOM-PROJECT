import React, { Component, Fragment } from 'react'
import M from 'materialize-css';

class CreateServiceStep1 extends Component {
  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== this.props) M.AutoInit();
  }

  render() {
    if(this.props.currentStep !==1) return null;

    return (
      <Fragment>
        <h5 className="center">자신있는 편집스타일을 골라주세요!</h5>
        <p style={{margin: '1.5rem initial'}} className="col s10 offset-s1 edit-style-desc center">총 3개의 스타일을 선택할 수 있습니다. 1 - 2 - 3 순위를 고를 수 있으며, 하나만 선택할 수도 있습니다. 각각의 스타일은 영상의 전체적인 분위기를 결정합니다. 편집자 본인이 가장 자신있어 하는 스타일을 골라주세요!</p>

        <div className="input-field select-priority col s10 offset-s1">
          <select name="" id="priority1" className='_required' value={this.props.priority1} onChange={this.props.handleChange} >
            <option value="" disabled>1순위 편집스타일 (필수)</option>
            <option value="cinema">시네마틱형</option>
            <option value="variety">예능형</option>
            <option value="dynamic">다이나믹형</option>
            <option value="vlog">브이로그형</option>
            <option value="etc">기타형</option>
          </select>
          <label htmlFor="priority1">카테고리 우선순위 - 1순위</label>
          { this.props.need && !this.props.priority1 ? <span className='red-text'><i className='material-icons'>error</i>필수로 선택해야 합니다!</span> : null }
        </div>
                
        {
          (this.props.priority1) 
            ? (
              <div className="input-field select-priority col s10 offset-s1">
                <select name="" id="priority2" className='' value={this.props.priority2} onChange={this.props.handleChange}>
                  <option value="" disabled>2순위 편집스타일 (선택)</option>
                  <option value="cinema">시네마틱형</option>
                  <option value="variety">예능형</option>
                  <option value="dynamic">다이나믹형</option>
                  <option value="vlog">브이로그형</option>
                  <option value="etc">기타형</option>
                  <option value="">선택안함</option>
                </select>
                <label htmlFor="priority2">카테고리 우선순위 - 2순위</label>
              </div>
            )
            : null
        }
        {
          (this.props.priority2)
            ? (
              <div className="input-field select-priority col s10 offset-s1">
                <select name="" id="priority3" className='' value={this.props.priority3} onChange={this.props.handleChange}>
                  <option value="" disabled>3순위 편집스타일 (선택)</option>
                  <option value="cinema">시네마틱형</option>
                  <option value="variety">예능형</option>
                  <option value="dynamic">다이나믹형</option>
                  <option value="vlog">브이로그형</option>
                  <option value="etc">기타형</option>
                  <option value="">선택안함</option>
                </select>
                <label htmlFor="priority3">카테고리 우선순위 - 3순위</label>
              </div>
            )
            : null
        }
      </Fragment>
    )
  }
}

export default CreateServiceStep1;