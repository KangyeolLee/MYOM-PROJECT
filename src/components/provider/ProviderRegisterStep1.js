import React from 'react'

const ProviderRegisterStep1 = (props) => {
  if(props.currentStep !== 1) return null;

  return (
    <div className="row ProviderRegisterStep1">
      <h4 className='scorehvy center'>편집자님의 등록을 환영합니다!</h4>
      <h6 className="center">주어진 항목을 작성해주세요!</h6>

      <div className="input-field file-field col s10 offset-s1">   
      {
        (props.profileImg)
          ? (
            <div className="btn-floating grey lighten-2 z-depth-0 col s4">
              <img className='profile-img' src={props.profileImg} alt="프로필 이미지"/>
              <input onChange={props.handleImgUpload} type="file" className='img-uploader'/>
            </div>
          )
          : (
            <div className="btn-floating grey lighten-2 z-depth-0 col s4">
              <i className="material-icons large">person</i>
              <input onChange={props.handleImgUpload} type="file" className='img-uploader'/>
            </div>
          )
      }
          
        <div className="profileImg-desc col s8 right">
          <p>프로필 사진을 골라주세요!</p>
          <p>프로필 사진은 신뢰도를 줄 수 있는 사진을 추천 드립니다.</p>
          <p>개인 프로필 사진이나, 본인을 잘 나타낼 수 있는 이미지 등을 골라보세요!</p>
        </div>
      </div>

      <div className="input-field col s10 offset-s1">
        <textarea type="text" className='materialize-textarea'/>
        <label htmlFor="">한 줄 소개</label>
      </div>

    </div>
  )
}

export default ProviderRegisterStep1;