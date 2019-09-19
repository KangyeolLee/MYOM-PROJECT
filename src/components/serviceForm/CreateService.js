import React, { Component } from 'react'
import M from 'materialize-css';
import CreateServiceStep1 from './CreateServiceStep1';
import CreateServiceStep2 from './CreateServiceStep2';
import CreateServiceStep3 from './CreateServiceStep3';
import './createService.css'
import CreateServiceStep4 from './CreateServiceStep4';

class CreateService extends Component {
  state = {
    currentStep: 1,
    priority1: '', 
    priority2: '', 
    priority3: '',
    service_title: '',
    service_content: '',
    thumbnail_file: '',
    thumbnail_file_preview: '',
    sub_file1: '', sub_file1_preview: '',
    sub_file2: '', sub_file2_preview: '',
    sub_file3: '', sub_file3_preview: '',
    sub_file4: '', sub_file4_preview: '',
    sub_file5: '', sub_file5_preview: '',
  }
  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentStep !== this.state.currentStep) {
      // M.AutoInit();
      M.CharacterCounter.init(document.querySelectorAll('.has-character-counter'));
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    let target_id = e.target.id;

    reader.onloadend = () => {
      this.setState({
        [target_id]: file,
        [target_id + '_preview']: reader.result,
      })
    }

    if(file) {
      reader.readAsDataURL(file);
      e.target.value = '';
    }
  }
  deleteImage = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: '',
      [e.target.id + '_preview']: '',
    })
  }
  _next = () => {
    const required_all = [...document.querySelectorAll('._required')];
    let current_required = required_all.filter(item => !(this.state[item.id]));

    if(current_required.length) {
      this.setState({
        need: true,
      })
      return;
    }

    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep,
      need: false,
    })
  }
  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="container createService">
        <form onSubmit={this.handleSubmit} className='row'>
          <div className="card col s8 offset-s2">
            <CreateServiceStep1 currentStep={this.state.currentStep} 
              need={this.state.need}
              priority1={this.state.priority1} 
              priority2={this.state.priority2} 
              priority3={this.state.priority3}
              handleChange={this.handleChange} />
            <CreateServiceStep2 currentStep={this.state.currentStep}
              need={this.state.need} 
              handleChange={this.handleChange} 
              service_title={this.state.service_title} 
              service_content={this.state.service_content} />
            <CreateServiceStep3 currentStep={this.state.currentStep}
              need={this.state.need}
              handleUpload={this.handleUpload}
              deleteImage={this.deleteImage}
              thumbnail_file={this.state.thumbnail_file}
              thumbnail_file_preview={this.state.thumbnail_file_preview}
              sub_file1={this.state.sub_file1}
              sub_file1_preview={this.state.sub_file1_preview}
              sub_file2={this.state.sub_file2}
              sub_file2_preview={this.state.sub_file2_preview}
              sub_file3={this.state.sub_file3}
              sub_file3_preview={this.state.sub_file3_preview}
              sub_file4={this.state.sub_file4}
              sub_file4_preview={this.state.sub_file4_preview}
              sub_file5={this.state.sub_file5}
              sub_file5_preview={this.state.sub_file5_preview} />
            <CreateServiceStep4 currentStep={this.state.currentStep} />

            
          </div>

          <div className="card col s8 offset-s2 z-depth-0 hidden">
            { this.state.currentStep < 4 ? <button onClick={this._next} className="btn blue darken-4 right">다음</button> : null }
            { this.state.currentStep !== 1 ? <button onClick={this._prev} className="btn grey darken-2 left">이전</button> : null }
          </div>
          
          
        </form>
      </div>
    )
  }
}

export default CreateService;