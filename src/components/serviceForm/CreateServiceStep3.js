import React, { Fragment } from 'react'

const CreateServiceStep3 = (props) => {
  if(props.currentStep !== 3) return null;

  return (
    <Fragment>
      <h5 className="center">서비스를 소개하는 사진을 등록해주세요!</h5>

      <div className="file-field input-field col s10 offset-s1">
        <div className="col s4">
        {
          !(props.thumbnail_file_preview)
            ? (
              <div className="btn z-depth-0 grey lighten-4 black-text">
                <i className="material-icons">file_upload</i>
                <input type="file" id='thumbnail_file' className='file-uploader _required'
                  onChange={props.handleUpload}/>
              </div>
            )
            : (
              <div className="image-btn">
                <img src={props.thumbnail_file_preview} alt="" className='responsive-img'/>
                <input type="file" id='thumbnail_file' className='file-uploader _required'
                  onChange={props.handleUpload} />
                <i onClick={(e) => props.deleteImage(e)} id='thumbnail_file' className="material-icons close-btn white-text">close</i>
              </div>
            )
        }
        </div>
        <input style={{display: 'none'}} type="text" className="file-path"/>
        <label htmlFor="thumbnail_file" className='active'>대표 이미지 (최대 1장)</label>

        <div className='col s8'>
          <h6>서비스를 대표할 사진 하나를 고르세요!</h6>
          <p>해당 이미지는 등록할 서비스의 대표이미지로 등록됩니다.</p>
          { 
            (props.need && !props.thumbnail_file)
              ? <span className='red-text'><i className='material-icons'>error</i>필수로 선택해야 합니다!</span> 
              : null 
          }
        </div>

      </div>

      <div className="file-field input-field col s10 offset-s1">
        <div className="col s4">
        {
          !(props.sub_file1_preview)
            ? (
              <div className="btn z-depth-0 grey lighten-4 black-text">
                <i className="material-icons">file_upload</i>
                <input type="file" id="sub_file1" className='file-uploader' 
                  onChange={props.handleUpload}/>
              </div>
            )
            : (
              <div className="image-btn">
                <img src={props.sub_file1_preview} alt="" className='responsive-img'/> 
                <input type="file" id="sub_file1" className='file-uploader' 
                  onChange={props.handleUpload}/>
                <i onClick={(e) => props.deleteImage(e)} id='sub_file1' className="material-icons close-btn white-text">close</i>
              </div>
            )
        }
        </div>
        <input style={{display: 'none'}} type="text" className="file-path"/>
        <label htmlFor="sub_file1" className='active'>부가 이미지 (최대 5장)</label>

        <div className="col s4">
        {
          (props.sub_file1_preview || props.sub_file2_preview || props.sub_file3_preview || props.sub_file4_preview || props.sub_file5_preview)
            ? (props.sub_file2_preview)
              ? (
                <div className="image-btn">
                  <img src={props.sub_file2_preview} alt="" className="responsive-img"/>
                  <input type="file" id='sub_file2' className='file-uploader' 
                    onChange={props.handleUpload} />
                  <i onClick={(e) => props.deleteImage(e)} id='sub_file2' className="material-icons close-btn white-text">close</i>
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">file_upload</i>
                  <input type="file" id='sub_file2' className='file-uploader' 
                    onChange={props.handleUpload} />

                </div>
              )
            : null
        }
        </div>

        <div className="col s4">
        {
          (props.sub_file2_preview || props.sub_file3_preview || props.sub_file4_preview || props.sub_file5_preview)
            ? (props.sub_file3_preview)
              ? (
                <div className="image-btn">
                  <img src={props.sub_file3_preview} alt="" className="responsive-img"/>
                  <input type="file" id='sub_file3' className='file-uploader' 
                    onChange={props.handleUpload} />
                  <i onClick={(e) => props.deleteImage(e)} id='sub_file3' className="material-icons close-btn white-text">close</i>
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">file_upload</i>
                  <input type="file" id='sub_file3' className='file-uploader' 
                    onChange={props.handleUpload} />
                  </div>
              )
            : null
        }
        </div>

        <div className="col s4">

        {
          (props.sub_file3_preview || props.sub_file4_preview || props.sub_file5_preview)
            ? (props.sub_file4_preview)
              ? (
                <div className="image-btn">
                  <img src={props.sub_file4_preview} alt="" className="responsive-img"/>
                  <input type="file" id='sub_file4' className='file-uploader' 
                    onChange={props.handleUpload} />
                  <i onClick={(e) => props.deleteImage(e)} id='sub_file4' className="material-icons close-btn white-text">close</i>               
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">file_upload</i>
                  <input type="file" id='sub_file4' className='file-uploader' 
                    onChange={props.handleUpload} />
                  </div>
              )
            : null
        }
        </div>

        <div className="col s4">
        {
          (props.sub_file4_preview || props.sub_file5_preview)
            ? (props.sub_file5_preview)
              ? (
                <div className="image-btn">
                  <img src={props.sub_file5_preview} alt="" className="responsive-img"/>
                  <input type="file" id='sub_file5' className='file-uploader' 
                    onChange={props.handleUpload} />
                  <i onClick={(e) => props.deleteImage(e)} id='sub_file5' className="material-icons close-btn white-text">close</i>                
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">file_upload</i>
                  <input type="file" id='sub_file5' className='file-uploader' 
                    onChange={props.handleUpload} />
                  </div>
              )
            : null
        }
        </div>

        <div className="col s4">
          <h6>서비스 설명에 필요한 사진을 고르세요!</h6>
          <p>해당 이미지는 등록할 서비스의 이해를 돕는 상세이미지로 등록됩니다.</p>
          <p>최대 5장까지 등록 가능하며, 상세이미지가 별도로 필요없는 경우 등록하지 않아도 됩니다.</p>
        </div>

      </div>
      
    </Fragment>
  )
}

export default CreateServiceStep3;