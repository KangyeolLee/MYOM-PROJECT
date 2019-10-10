import React from 'react'

const ProviderRegisterStep1 = (props) => {
  if(props.currentStep !== 1) return null;

  return (
    <div className="row ProviderRegisterStep1">
      <h5 className="left col s10 offset-s1 scorehvy">프로필 소개란</h5>

      <div className="profile-area input-field file-field col s10 offset-s1">   
      {
        (props.profileImg)
          ? (
            <div className="btn-floating grey lighten-2 z-depth-0 col m5 s12">
              <img className='profile-img' src={props.profileImg} alt="프로필 이미지"/>
              <input id='profile-img' onChange={(e) => props.handleImgUpload(e)} type="file" className='img-uploader required'/>
            </div>
          )
          : (
            <div className="btn-floating grey lighten-2 z-depth-0 col s4">
              <i className="material-icons large">person</i>
              <input onChange={(e) => props.handleImgUpload(e)} type="file" className='img-uploader required'/>
            </div>
          )
      }
          
        <div className="profileImg-desc col m7 s12 right">
          <p>
            <strong className='scorelt' style={{fontWeight: 'bolder'}}>프로필 사진을 설정해주세요!</strong><br/>
            프로필 사진은 소비자에게 노출되는 항목이므로 신뢰도를 줄 수 있는 사진을 추천 드립니다. <br/>
            개인 프로필 사진이나, 본인을 잘 나타낼 수 있는 섬네일 이미지 등을 골라보세요!
          </p>
        </div>
        {
          (!props.profileImg && props.need)
            ? <span className='right red-text'>프로필 이미지를 꼭 선택해주세요!</span>
            : null
        }
      </div>

      <div className="input-field col s10 offset-s1">
        <textarea id='intro' value={props.intro} onChange={props.handleChange} type="text" className='materialize-textarea required'/>
        <label htmlFor="intro" className={props.intro ? 'active' : ''}>한 줄 소개</label>
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