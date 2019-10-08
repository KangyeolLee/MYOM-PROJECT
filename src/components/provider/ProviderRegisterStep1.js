import React from 'react'

const ProviderRegisterStep1 = (props) => {
  if(props.currentStep !== 1) return null;

  return (
    <div className="row ProviderRegisterStep1">
      <h5 className="left col s10 offset-s1 scorehvy">프로필 소개란</h5>

      <div className="input-field file-field col s10 offset-s1">   
      {
        (props.profileImg)
          ? (
            <div className="btn-floating grey lighten-2 z-depth-0 col s4">
              <img className='profile-img' src={props.profileImg} alt="프로필 이미지"/>
              <input onChange={(e) => props.handleImgUpload(e)} type="file" className='img-uploader required'/>
            </div>
          )
          : (
            <div className="btn-floating grey lighten-2 z-depth-0 col s4">
              <i className="material-icons large">person</i>
              <input onChange={(e) => props.handleImgUpload(e)} type="file" className='img-uploader required'/>
            </div>
          )
      }
          
        <div className="profileImg-desc col s8 right">
          <p>프로필 사진을 골라주세요!</p>
          <p>프로필 사진은 신뢰도를 줄 수 있는 사진을 추천 드립니다.</p>
          <p>개인 프로필 사진이나, 본인을 잘 나타낼 수 있는 이미지 등을 골라보세요!</p>
        </div>
        {
          (!props.profileImg && props.need)
            ? <span className='right red-text'>프로필 이미지를 꼭 선택해주세요!</span>
            : null
        }
      </div>

      <div className="input-field col s10 offset-s1">
        <textarea id='intro' value={props.intro} onChange={props.handleChange} type="text" className='materialize-textarea required'/>
        <label htmlFor="">한 줄 소개</label>
        {
          (!props.intro && props.need)
            ? <span className='right red-text'>한 줄 소개를 꼭 작성해주세요!</span>
            : null
        }
      </div>

    </div>
  )
}

export default ProviderRegisterStep1;