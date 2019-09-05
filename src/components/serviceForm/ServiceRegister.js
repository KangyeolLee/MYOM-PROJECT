import React, { Component } from 'react'
import M from 'materialize-css';
import { connect } from 'react-redux';
import { serviceRegister, serviceUpdate } from '../../store/actions/serviceFormAction';
import './serviceRegister.css';

class ServiceRegister extends Component {
  state = {
    service_id: this.props.location.service_id || '',
    service_type: this.props.location.service_type || '',
    service_img: this.props.location.service_img || '',
    service_desc: this.props.location.service_desc || '',
    service_process: this.props.location.service_process || '',
    service_doing: this.props.location.service_doing || '',
    service_style: this.props.location.service_style || '',
    service_price_standard: this.props.location.service_price_standard || '',
    service_price_deluxe: this.props.location.service_price_deluxe || '',
    service_price_premium: this.props.location.service_price_premium || '',
    standard_desc: this.props.location.standard_desc || '',
    deluxe_desc: this.props.location.deluxe_desc || '',
    premium_desc: this.props.location.premium_desc || '',
    check_update: this.props.location.check_update || false,
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const check_btn_type = e.target.querySelector('button').name;
    if(check_btn_type === 'update_btn') {
      this.props.serviceUpdate(this.state, this.props.history);
    } else {
      this.props.serviceRegister(this.state, this.props.history);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  uploadFile = (e) => {
    this.setState({
      [e.target.id] : e.target.files[0]
    })
  }

  render() {
    const { check_update, service_type, premium_desc} = this.state;
    const checkActive = service_type && premium_desc ? 'active' : null;
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="container serviceRegister">
        <div className="row">
          <form onSubmit={this.handleSubmit} className='col s12'>

            <div className="input-field col s2 cssOptioned">
              <select name="" id="service_type" onChange={this.handleChange} value={this.state.service_type} required>
                <option value='' disabled>편집기법 선택(필수)</option>
                <option value="transition">transition</option>
                <option value="colorFix">colorFix</option>
                <option value="cut&cut">cut&cut</option>
                <option value="currywurst">currywurst</option>
                <option value="pommes">pommes</option>
                <option value="sauerkraut">sauerkraut</option>   
              </select>
              <input defaultValue={service_type} style={{margin:0, opacity:0, height:0, position: 'absolute'}} type="text" required/>     
            </div>

            <div className="file-field input-field col s6 offset-s4">
              <div className="btn">
                <i className="material-icons">file_upload</i>
                <input type="file" id='service_img' onChange={this.uploadFile} required/>
              </div>
              <div className="file-path-wrapper">
                <input type="text" className="file-path validate" placeholder='이미지 파일을 업로드 하세요' />
              </div>
            </div>


            <div className="input-field col s12">
              <textarea type="text" id="service_desc" className="materialize-textarea" required onChange={this.handleChange} value={this.state.service_desc} required/>
              <label className={checkActive} htmlFor="service_desc">서비스 설명</label>
            </div>
            <div className="input-field col s12">
              <textarea type="text" id="service_process" className="materialize-textarea" onChange={this.handleChange} value={this.state.service_process} required/>
              <label className={checkActive} htmlFor="service_process">작업 과정</label>
            </div>
            <div className="input-field col s12">
              <textarea type="text" id="service_doing" className="materialize-textarea" onChange={this.handleChange} value={this.state.service_doing} required/>
              <label className={checkActive} htmlFor="service_doing">작업 방식</label>
            </div>
            <div className="input-field col s12">
              <textarea type="text" id="service_style" className="materialize-textarea" onChange={this.handleChange} value={this.state.service_style} required/>
              <label className={checkActive} htmlFor="service_style">작업 스타일</label>
            </div>


            <div className="input-field col s4">
              <input type="text" id="service_price_standard" className="materialize-textarea" onChange={this.handleChange} value={this.state.service_price_standard} required/>
              <label className={checkActive} htmlFor="service_price_standard">STANDARD 가격</label>
            </div>
            <div className="input-field col s4">
              <input type="text" id="service_price_deluxe" className="materialize-textarea" onChange={this.handleChange} value={this.state.service_price_deluxe} required/>
              <label className={checkActive} htmlFor="service_price_deluxe">DELUXE 가격</label>
            </div>
            <div className="input-field col s4">
              <input type="text" id="service_price_premium" className="materialize-textarea" onChange={this.handleChange} value={this.state.service_price_premium} required/>
              <label className={checkActive} htmlFor="service_price_premium">PREMIUM 가격</label>
            </div>


            <div className="input-field col s4">
              <textarea type="text" id="standard_desc" className="materialize-textarea" onChange={this.handleChange} value={this.state.standard_desc} required/>
              <label className={checkActive} htmlFor="standard_desc">BASIC 옵션</label>
            </div>
            <div className="input-field col s4">
              <textarea type="text" id="deluxe_desc" className="materialize-textarea" onChange={this.handleChange} value={this.state.deluxe_desc} required/>
              <label className={checkActive} htmlFor="deluxe_desc">PROFESSIONAL 옵션</label>
            </div>
            <div className="input-field col s4">
              <textarea type="text" id="premium_desc" className="materialize-textarea" onChange={this.handleChange} value={this.state.premium_desc} required/>
              <label className={checkActive} htmlFor="premium_desc">PREMIUM 옵션</label>
            </div>

            {
              check_update
                ? (
                  <div className="input-field col s1 right">
                    <button name='update_btn' className="btn red lighten-3">수정</button>
                  </div>
                )
                : (
                  <div className="input-field col s1 right">
                    <button name='create_btn' className="btn red lighten-3">등록</button>
                  </div>
                )
            }

          </form>
        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    serviceRegister: (serviceData, history) => dispatch(serviceRegister(serviceData, history)),
    serviceUpdate: (serviceData, history) => dispatch(serviceUpdate(serviceData, history)),
  }
}
export default connect(null, mapDispatchToProps)(ServiceRegister);