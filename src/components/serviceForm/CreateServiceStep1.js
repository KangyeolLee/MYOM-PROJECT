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
        <h4 className='center'>전문가님의 등록을 환영합니다!</h4>
        <h5 className="center">자신있는 편집스타일을 골라주세요!</h5>

        <div className="input-field select-priority col s10 offset-s1">
          <select name="" id="priority1" className='_required' value={this.props.priority1} onChange={this.props.handleChange} >
            <option value="" disabled>1순위 편집스타일 (필수)</option>
            <option value="예능형식">예능형식</option>
            <option value="다큐멘터리형식">다큐멘터리형식</option>
            <option value="시네마틱형식">시네마틱형식</option>
            <option value="다이나믹형식">다이나믹형식</option>
            <option value="브이로그형식">브이로그형식</option>
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
                  <option value="예능형식">예능형식</option>
                  <option value="다큐멘터리형식">다큐멘터리형식</option>
                  <option value="시네마틱형식">시네마틱형식</option>
                  <option value="다이나믹형식">다이나믹형식</option>
                  <option value="브이로그형식">브이로그형식</option>
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
                  <option value="예능형식">예능형식</option>
                  <option value="다큐멘터리형식">다큐멘터리형식</option>
                  <option value="시네마틱형식">시네마틱형식</option>
                  <option value="다이나믹형식">다이나믹형식</option>
                  <option value="브이로그형식">브이로그형식</option>
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