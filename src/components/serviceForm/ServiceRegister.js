import React, { Component } from 'react'
import M from 'materialize-css';
import { connect } from 'react-redux';
import { serviceRegister } from '../../store/actions/serviceFormAction';
import './serviceRegister.css';

class ServiceRegister extends Component {
  state = {
    service_type: '',
    service_img: '',
    service_desc: '',
    service_process: '',
    service_doing: '',
    service_style: '',
    service_price_standard: '',
    service_price_deluxe: '',
    service_price_premium: '',
    standard_desc: '',
    deluxe_desc: '',
    premium_desc: ''
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.serviceRegister(this.state, this.props.history);
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
    console.log(this.state);
    return (
      <div className="container serviceRegister">
        <div className="row">
          <form onSubmit={this.handleSubmit} className='col s12'>

            <div className="input-field col s2 cssOptioned">
              <select defaultValue={''} name="" id="service_type" onChange={this.handleChange} required>
                <option value='' disabled>편집기법 선택(필수)</option>
                <option value="transition">transition</option>
                <option value="colorFix">colorFix</option>
                <option value="cut&cut">cut&cut</option>
                <option value="currywurst">currywurst</option>
                <option value="pommes">pommes</option>
                <option value="sauerkraut">sauerkraut</option>   
              </select>
              <input defaultValue={this.state.service_type} style={{margin:0, opacity:0, height:0, position: 'absolute'}} type="text" required/>     
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
              <textarea type="text" id="service_desc" className="materialize-textarea" required onChange={this.handleChange} required/>
              <label htmlFor="service_desc">서비스 설명</label>
            </div>
            <div className="input-field col s12">
              <textarea type="text" id="service_process" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="service_process">작업 과정</label>
            </div>
            <div className="input-field col s12">
              <textarea type="text" id="service_doing" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="service_doing">작업 방식</label>
            </div>
            <div className="input-field col s12">
              <textarea type="text" id="service_style" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="service_style">작업 스타일</label>
            </div>


            <div className="input-field col s4">
              <input type="text" id="service_price_standard" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="service_price_standard">STANDARD 가격</label>
            </div>
            <div className="input-field col s4">
              <input type="text" id="service_price_deluxe" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="service_price_deluxe">DELUXE 가격</label>
            </div>
            <div className="input-field col s4">
              <input type="text" id="service_price_premium" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="service_price_premium">PREMIUM 가격</label>
            </div>


            <div className="input-field col s4">
              <textarea type="text" id="standard_desc" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="standard_desc">STANDARD 옵션</label>
            </div>
            <div className="input-field col s4">
              <textarea type="text" id="deluxe_desc" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="deluxe_desc">STANDARD 옵션</label>
            </div>
            <div className="input-field col s4">
              <textarea type="text" id="premium_desc" className="materialize-textarea" onChange={this.handleChange} required/>
              <label htmlFor="premium_desc">STANDARD 옵션</label>
            </div>


            <div className="input-field col s1 right">
              <button className="btn red lighten-3">등록</button>
            </div>


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
    serviceRegister: (serviceData, history) => dispatch(serviceRegister(serviceData, history))
  }
}
export default connect(null, mapDispatchToProps)(ServiceRegister);