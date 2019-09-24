import React, { Component } from 'react'
import './registerProvider.css'

const RegisterProviderStep1 = (props) => {
  if(props.currentStep !== 1) return null;
  return (
    <div className="registerEditorIntro">
      <div className='card'>
        <div className="card-content">
          <div className="row">
          <div className="col center">
          <h6>전문가님의 프로필 사진을 등록해주세요!</h6>
          <div className="file-field input-field">
            {
              !(props.editor_profileImg_file_preview)
                ? (
                  <div className="btn z-depth-0 grey lighten-4 black-text">
                    <i className="material-icons">file_upload</i>
                    <input type="file" id='editor_profileImg_file' className='file-uploader _required'
                      onChange = {props.handleUpload} />
                  </div>
                )
                : (
                  <div className="image-btn">
                    <img src={props.editor_profileImg_file_preview} className='circle responsive-img' alt=""/>
                    <input type="file" id='editor_profileImg_file' className='file-uploader _required'
                    onChange = {props.handleUpload} />
                    <i onClick={(e) => props.deleteImage(e)} id='editor_profileImg_file' className="material-icons close-btn white-text">close</i>
                  </div>
                )
            }
            <input type="text" style={{display: 'none'}} className='file-path'/>
            {
              (props.need && !props.editor_profileImg_file)
                ? <span className="red-text"><i className="material-icons">error</i>필수로 선택해야 합니다!</span>
                : null
            }
          </div>
          <div className="input-field introduction-area">
           <textarea id="introduction" cols="30" rows="10" onChange ={props.handleChange} value={props.introduction} className='_required'></textarea>
           <label htmlFor="introduction">전문가 소개</label>
           {
              (props.need && !props.introduction)
                ? <span className="red-text"><i className="material-icons">error</i>필수로 선택해야 합니다!</span>
                : null
           }
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterProviderStep1;