import React, { Component } from 'react';
import M from 'materialize-css';
import moment from 'moment';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Loader from '../functionalComponents/Loader';
import ProviderRegisterStep1 from './ProviderRegisterStep1';
import './providerRegister.css';
import ProviderRegisterStep2 from './ProviderRegisterStep2';
import ProviderRegisterStep3 from './ProviderRegisterStep3';
import ProviderRegisterStep4 from './ProviderRegisterStep4';
import { providerRegister } from '../../store/actions/serviceFormAction';

const pickerOptions = {
  
}
class ProviderRegister extends Component {
  state = {
    currentStep: 1,
    histories: [
      { history0: {history0_date: ['', ''], history0_content: '', history0_reference: ''} },
    ],
    editorTool: [
      { tool0: { name: '', percent: ''} },
    ],
    account_person: '',
    account_bank: '',
    account_number: '',
  }
  componentDidUpdate(prevState, prevProps) {
    if(prevState.currentStep !== this.state.currentStep) {
      M.Modal.init(document.querySelector('#pay-control.modal'));
    }
    
  }
  componentDidMount() {
    M.AutoInit();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.providerRegister(this.state, this.props.history);
  }
  handleChange = (e) => {
    e.preventDefault();
    const target_id = e.target.id;

    this.setState({
      need: false,
      [target_id]: e.target.value,
    });
  }
  handleDatepicker = (e) => {
    const pickerOptions = {
      format: 'yyyy.mm.dd',
      yearRange: 100,
      i18n: {
        months: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        cancel: '닫기',
        done: '선택',
        monthsShort : [
          '1월',
            '2월',
            '3월',
            '4월',
            '5월',
            '6월',
            '7월',
            '8월',
            '9월',
            '10월',
            '11월',
            '12월',
        ],
        weekdays: [
          '일요일',
          '월요일',
          '화요일',
          '수요일',
          '목요일',
          '금요일',
          '토요일'
        ],
        weekdaysShort:[
          '일요일',
          '월요일',
          '화요일',
          '수요일',
          '목요일',
          '금요일',
          '토요일'
        ]
      }
    }
    const target_id = e.target.id;
    const target_class = e.target.className;
    const picker = document.querySelectorAll('#' + target_id);
    let date_index = target_class.includes('startAt') ? 0 : 1; 
    let selector = target_id.split('_').shift();  

    M.Datepicker.init(picker, {
      ...pickerOptions,
      onSelect: (e) => {
        let timestamp = new Date(e);
        let origin = this.state.histories;
        let copied = this.state.histories.filter(condi => condi[selector] !== undefined).flatMap(history => history[selector][target_id]);
        copied[date_index] = moment(timestamp).format('YYYY.MM.DD');  
        origin.forEach(item => {
          if(item.hasOwnProperty(selector)) {
            item[selector][target_id] = copied;
          }
        })

        // console.log(origin);

        this.setState({
          histories: origin,
        })
      }
    })
  }
  handleEditorHistory = (e) => {
    e.preventDefault();
    const target_id = e.target.id;
    const selector = target_id.split('_').shift();  // history0
    let target_value = e.target.value;
    let origin = this.state.histories;
    let copied = this.state.histories.filter(condi => condi[selector] !== undefined).flatMap(history => history[selector][target_id]);

    copied = target_value;
    origin.forEach(item => {
      if(item.hasOwnProperty(selector)) {
        item[selector][target_id] = copied;
      }
    })

    this.setState({
      histories: origin,
    })

  }
  handleEditorTools = (e) => {
    e.preventDefault();
    const target_id = e.target.id;
    const selector = target_id.split('_').shift();
    const route = target_id.split('_').pop();
    let target_value = e.target.value;
    let origin = this.state.editorTool;
    let copied = this.state.editorTool.filter(condi => condi[selector] !== undefined).flatMap(tool => tool[selector][route]);

    copied = target_value;
    origin.forEach(item => {
      if(item.hasOwnProperty(selector)) {
        item[selector][route] = copied;
      }
    })

    this.setState({
      need: false,
      editorTool: origin,
    })

  }
  handleRange = name => (e, value) => {
    e.preventDefault();
    const selector = name.split('_').shift();
    const route = name.split('_').pop();
    let origin = this.state.editorTool;
    let copied = this.state.editorTool.filter(condi => condi[selector] !== undefined).flatMap(tool => tool[selector][route]);
    
    copied = value;
    origin.forEach(item => {
      if(item.hasOwnProperty(selector)) {
        item[selector][route] = copied;
      }
    });

    this.setState({
      editorTool: origin,
    })
  }
  handleMoreBtn = (e) => {
    e.preventDefault();
    const target_id = e.target.id;
    let count;
    let name;

    if(target_id === 'history') {    
      count = this.state.histories.length;
      name = 'history' + count;

      this.setState(prevState => ({
        histories: [
          ...prevState.histories,
          { 
            [name]: { 
              [name + '_date']: ['', ''], 
              [name + '_content']: '', 
              [name + '_reference']: ''
            } 
          },
        ]
      }));
    } else if(target_id === 'editor-tool') {
      count = this.state.editorTool.length;
      name = 'tool' + count;

      this.setState(prevState => ({
        editorTool: [
          ...prevState.editorTool,
          {
            [name]: {
              name: '',
              percent: '',
            }
          }
        ]
      }));
    }
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
          need: false,
          profileImg: reader.result,
          profileFile: file,
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
    let _required = [...document.querySelectorAll('.required')];
    let current_required = _required.filter(item => { 
      if(item.id === 'profile-img') return this.state.profileFile === '';
      else return item.value === '';
    }).length;
    
    if(current_required) { 
      this.setState({
        need: true,
      })
      return;
    }

    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep,
    })
    window.scrollTo(0,0);
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
    if(!isLoaded(this.props.profile)) return <div className='container'>로딩중...</div>

    const profile = this.props.profile;
    if(profile.hasOwnProperty('editor')) return <Redirect to='/providerRegisterDone' />
        
    return (
      <div className="container providerRegister">
        <div id="hidden-for-loading">
          <Loader />
          <div className="progress for-loading">
            <div style={{width: '0%'}} className="determinate"></div>
          </div>
        </div>
        
        <div className="row progress-bar">
          <div style={{height: '.8rem'}} className="progress col s12">
            <div style={{width: Math.floor(25 * this.state.currentStep) + '%'}} className="determinate"></div>
          </div>
        </div>

        <form className="row" onSubmit={this.handleSubmit}>
          <div className="card col s12">
            <h4 className='scorehvy center'>편집자님의 등록을 환영합니다!</h4>
            <h6 style={{marginBottom: '3rem'}} className="center">주어진 항목을 작성해주세요!</h6>

            <ProviderRegisterStep1 need={this.state.need ? this.state.need : ''} handleChange={this.handleChange} intro={this.state.intro ? this.state.intro : '' } profileImg={this.state.profileImg ? this.state.profileImg : ''} handleImgUpload={this.handleImgUpload} currentStep={this.state.currentStep} />
            <ProviderRegisterStep2 need={this.state.need ? this.state.need : ''} handleEditorHistory={this.handleEditorHistory} handleDatepicker={this.handleDatepicker} handleMoreBtn={this.handleMoreBtn} histories={this.state.histories} currentStep={this.state.currentStep} />
            <ProviderRegisterStep3 need={this.state.need ? this.state.need : ''} handleRange={this.handleRange} handleEditorTools={this.handleEditorTools} handleMoreBtn={this.handleMoreBtn} editorTool={this.state.editorTool} currentStep={this.state.currentStep} />
            <ProviderRegisterStep4 need={this.state.need ? this.state.need : ''} account_person={this.state.account_person} account_bank={this.state.account_bank} account_number={this.state.account_number} handleChange={this.handleChange} currentStep={this.state.currentStep} />

            <p style={{fontSize: '12px', margin: '2.5rem 0'}} className="col s12 guide-msg center grey-text">해당 페이지는 모바일 최적화가 고려되지 않았습니다. 가급적이면 PC로 이용 부탁드립니다.</p>
          </div>

          <div className="card col s12 z-depth-0 hidden">
            { this.state.currentStep < 4 ? <div onClick={this._next} className="btn blue darken-4 right">다음</div> : null }
            { this.state.currentStep !== 1 ? <div onClick={this._prev} className="btn grey darken-2 left">이전</div> : null }
            { this.state.currentStep === 4 ? <button className='btn red lighten-3 right'>등록</button> : null }
          </div>  
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    providerRegister: (uid, providerData, history) => dispatch(providerRegister(uid, providerData, history)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProviderRegister);