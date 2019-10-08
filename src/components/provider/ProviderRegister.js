import React, { Component } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import ProviderRegisterStep1 from './ProviderRegisterStep1';
import './providerRegister.css';

class ProviderRegister extends Component {
  state = {
    currentStep: 1,
  }
  componentDidMount() {
    M.AutoInit();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }
  handleImgUpload = (e) => {
    e.preventDefault();
    if(!e.target.value) return;
    const no_valid = [...document.querySelectorAll('.img-uploader')];
    let reader = new FileReader();
    let file = e.target.files[0];
    let file_exe = file.name.split('.').pop().toLowerCase();
    reader.readAsDataURL(file);

    if(file_exe === 'jpg' || file_exe === 'jpeg' || file_exe === 'png' || file_exe === 'gif') {
      reader.onloadend = () => {
        this.setState({
          profileImg: reader.result,
        })
      }
    } else {
      no_valid.forEach(file => file.value = '');
      alert('이미지 파일(jpg, jpeg, png, gif)만 지원합니다.');
      return;
    }
  }
  _next = (e) => {
    e.preventDefault();
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep,
    })
  }
  _prev = (e) => {
    e.preventDefault();
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
    })
  }

  render() {
    return (
      <div className="container providerRegister">
        <div className="row">
          <div style={{height: '.8rem'}} className="progress col s8 offset-s2">
            <div style={{width: Math.floor(25 * this.state.currentStep) + '%'}} className="determinate"></div>
          </div>
        </div>

        <form className="row" onSubmit={this.handleSubmit}>
          <div className="card col s8 offset-s2">
            <ProviderRegisterStep1 profileImg={this.state.profileImg ? this.state.profileImg : null} handleImgUpload={this.handleImgUpload} currentStep={this.state.currentStep} />
          </div>

          <div className="card col s8 offset-s2 z-depth-0 hidden">
            { this.state.currentStep < 4 ? <div onClick={this._next} className="btn blue darken-4 right">다음</div> : null }
            { this.state.currentStep !== 1 ? <div onClick={this._prev} className="btn grey darken-2 left">이전</div> : null }
            { this.state.currentStep === 4 ? <button className='btn red lighten-3 right'>등록</button> : null }
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(null, mapDispatchToProps)(ProviderRegister);