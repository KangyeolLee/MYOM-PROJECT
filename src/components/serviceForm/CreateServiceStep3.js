import React, { Fragment } from 'react'

const CreateServiceStep3 = (props) => {
  if(props.currentStep !== 3) return null;

  return (
    <Fragment>
      <h5 className="center">서비스를 소개하는 사진을 등록해주세요!</h5>

      <div className="file-field input-field col s10 offset-s1">
        <div className="col s4">
        {
          !(props.images[0].thumbnail_file_preview)
            ? (
              <div className="btn z-depth-0 grey lighten-4 black-text">
                <i className="material-icons">photo</i>
                <input type="file" id='thumbnail_file' className='file-uploader _required'
                  onChange={props.handleUpload} accept="image/*" />
              </div>
            )
            : (
              <div className="image-btn">
                <img src={props.images[0].thumbnail_file_preview} alt="" className='responsive-img'/>
                <input type="file" id='thumbnail_file' className='file-uploader _required'
                  onChange={props.handleUpload} accept="image/*" />
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
            (props.need && !props.images[0].thumbnail_file)
              ? <span className='red-text'><i className='material-icons'>error</i>필수로 선택해야 합니다!</span> 
              : null 
          }
        </div>

      </div>

      <div className="file-field input-field col s10 offset-s1">
        <div className="col s4">
        {
          !(props.images[1].sub_file1_preview)
            ? (
              <div className="btn z-depth-0 grey lighten-4 black-text">
                <i className="material-icons">photo</i>
                <input type="file" id="sub_file1" className='file-uploader' 
                  onChange={props.handleUpload} accept="image/*" />
              </div>
            )
            : (
              <div className="image-btn">
                <img src={props.images[1].sub_file1_preview} alt="" className='responsive-img'/> 
                <input type="file" id="sub_file1" className='file-uploader' 
                  onChange={props.handleUpload} accept="image/*" />
                <i onClick={(e) => props.deleteImage(e)} id='sub_file1' className="material-icons close-btn white-text">close</i>
              </div>
            )
        }
        </div>
        <input style={{display: 'none'}} type="text" className="file-path"/>
        <label htmlFor="sub_file1" className='active'>부가 이미지 (최대 5장)</label>

        <div className="col s4">
        {
          (props.images[1].sub_file1_preview || props.images[2].sub_file2_preview || props.images[3].sub_file3_preview || props.images[4].sub_file4_preview || props.images[5].sub_file5_preview)
            ? (props.images[2].sub_file2_preview)
              ? (
                <div className="image-btn">
                  <img src={props.images[2].sub_file2_preview} alt="" className="responsive-img"/>
                  <input type="file" id='sub_file2' className='file-uploader' 
                    onChange={props.handleUpload} accept="image/*" />
                  <i onClick={(e) => props.deleteImage(e)} id='sub_file2' className="material-icons close-btn white-text">close</i>
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">photo</i>
                  <input type="file" id='sub_file2' className='file-uploader' 
                    onChange={props.handleUpload} accept="image/*" />

                </div>
              )
            : null
        }
        </div>

        <div className="col s4">
        {
          (props.images[2].sub_file2_preview || props.images[3].sub_file3_preview || props.images[4].sub_file4_preview || props.images[5].sub_file5_preview)
            ? (props.images[3].sub_file3_preview)
              ? (
                <div className="image-btn">
                  <img src={props.images[3].sub_file3_preview} alt="" className="responsive-img"/>
                  <input type="file" id='sub_file3' className='file-uploader' 
                    onChange={props.handleUpload} accept="image/*" />
                  <i onClick={(e) => props.deleteImage(e)} id='sub_file3' className="material-icons close-btn white-text">close</i>
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">photo</i>
                  <input type="file" id='sub_file3' className='file-uploader' 
                    onChange={props.handleUpload} accept="image/*" />
                  </div>
              )
            : null
        }
        </div>

        <div className="col s4">

        {
          (props.images[3].sub_file3_preview || props.images[4].sub_file4_preview || props.images[5].sub_file5_preview)
            ? (props.images[4].sub_file4_preview)
              ? (
                <div className="image-btn">
                  <img src={props.images[4].sub_file4_preview} alt="" className="responsive-img"/>
                  <input type="file" id='sub_file4' className='file-uploader' 
                    onChange={props.handleUpload} accept="image/*" />
                  <i onClick={(e) => props.deleteImage(e)} id='sub_file4' className="material-icons close-btn white-text">close</i>               
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">photo</i>
                  <input type="file" id='sub_file4' className='file-uploader' 
                    onChange={props.handleUpload} accept="image/*" />
                  </div>
              )
            : null
        }
        </div>

        <div className="col s4">
        {
          (props.images[4].sub_file4_preview || props.images[5].sub_file5_preview)
            ? (props.images[5].sub_file5_preview)
              ? (
                <div className="image-btn">
                  <img src={props.images[5].sub_file5_preview} alt="" className="responsive-img"/>
                  <input type="file" id='sub_file5' className='file-uploader' 
                    onChange={props.handleUpload} accept="image/*" />
                  <i onClick={(e) => props.deleteImage(e)} id='sub_file5' className="material-icons close-btn white-text">close</i>                
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">photo</i>
                  <input type="file" id='sub_file5' className='file-uploader' 
                    onChange={props.handleUpload} accept="image/*" />
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

      <div className="file-field input-field col s10 offset-s1">
        <div className="col s4">
        {
          !(props.videos[0].video1)
            ? (
              <div className="btn z-depth-0 grey lighten-4 black-text">
                <i className="material-icons">videocam</i>
                <input type="file" id='video1' className='file-uploader'
                  onChange={props.handleVideoUpload} accept="video/*" />
              </div>
            )
            : (
              <div className="image-btn">
                <video style={{width: '100%'}} controls>
                  <source src={props.videos[0].video1_preview} type={props.videos[0].video1.type}/>
                </video>
                <input type="file" id='video1' className='file-uploader'
                  onChange={props.handleVideoUpload} accept="video/*" />
                <i onClick={(e) => props.deleteVideo(e)} id='video1' className="material-icons close-btn white-text">close</i>
              </div>
            )
        }
        </div>
        <input style={{display: 'none'}} type="text" className="file-path"/>
        <label htmlFor="video1" className='active'>참고 영상 (최대 3개)</label>

        <div className="col s4">
        {
          (props.videos[0].video1_preview || props.videos[1].video2_preview || props.videos[2].video3_preview)
            ? (props.videos[1].video2_preview)
              ? (
                <div className="image-btn">
                  <video style={{width: '100%'}} controls>
                    <source src={props.videos[1].video2_preview} type={props.videos[1].video2.type}/>
                  </video>
                  <input type="file" id='video2' className='file-uploader'
                    onChange={props.handleVideoUpload} accept="video/*" />
                  <i onClick={(e) => props.deleteVideo(e)} id='video2' className="material-icons close-btn white-text">close</i>
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">videocam</i>
                  <input type="file" id='video2' className='file-uploader'
                    onChange={props.handleVideoUpload} accept="video/*" />
                </div>
              )
            : null
        }
        </div>

        <div className="col s4">
        {
          (props.videos[1].video2_preview || props.videos[2].video3_preview)
            ? (props.videos[2].video3_preview)
              ? (
                <div className="image-btn">
                  <video style={{width: '100%'}} controls>
                    <source src={props.videos[2].video3_preview} type={props.videos[2].video3.type}/>
                  </video>
                  <input type="file" id='video3' className='file-uploader'
                    onChange={props.handleVideoUpload} accept="video/*" />
                  <i onClick={(e) => props.deleteVideo(e)} id='video3' className="material-icons close-btn white-text">close</i>
                </div>
              )
              : (
                <div className="btn z-depth-0 grey lighten-4 black-text">
                  <i className="material-icons">videocam</i>
                  <input type="file" id='video3' className='file-uploader'
                    onChange={props.handleVideoUpload} accept="video/*" />
                </div>
              )
            : null
        }
        </div>

        <div className='col s4'>
          <h6>참고할 다른 작업 영상을 등록해주세요!</h6>
          <p>본인의 레퍼런스 영상을 3개까지 등록할 수 있습니다.</p>
          <p>다른 작업 영상이 없거나 게시하지 못하는 경우 등록하지 않아도 됩니다.</p>
        </div>
      </div>
      
    </Fragment>
  )
}

export default CreateServiceStep3;