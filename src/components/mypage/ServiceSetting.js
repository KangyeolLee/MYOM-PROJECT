import React, { Component, Fragment } from 'react'
import M from 'materialize-css';
import './serviceSetting.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import Preloader from '../functionalComponents/Preloader';
import ServiceThumbnailSummary from '../service/summary/ServiceThumbnailSummary';
import { serviceContentUpdate, serviceImgUpdate, serviceVideoUpdate } from '../../store/actions/serviceFormAction';

class ServiceSetting extends Component {
  state = {

  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.myService !== this.props.myService && this.props.myService.length) {
      this.setState({
        service_title: this.props.myService[0].service_title,
        service_content: this.props.myService[0].service_content,
        images: this.props.myService[0].images,
        // videos: this.props.myService[0].videos.map((video, idx) => ({ ['video' +(idx + 6)]: video })),
      });
      this.props.myService[0].videos.filter(valid => valid !== '').map((video, idx) => {
        this.setState(prevState => ({
          videos: {
            ...prevState.videos,
            ['video' + (idx+6)]: video,
          }
        }))
      });
    }
    if(prevState.re_service_title !== this.state.re_service_title || prevState.re_service_content !== this.state.re_service_content) {
      M.CharacterCounter.init(document.querySelectorAll('.has-character-counter'));
    }
  }
  componentDidMount() {
    M.AutoInit();
  }
  handleVideoUpload = (e) => {
    e.preventDefault();
    this.props.serviceVideoUpdate(this.props.myService[0].id, this.state.videos);
    this.setState({
      ['re_' + e.target.id]: false,
    })
  }
  handleImgUpload = (e) => {
    e.preventDefault();
    this.props.serviceImgUpdate(this.props.myService[0].id, this.state.images);
    this.setState({
      ['re_' + e.target.id]: false,
    })
  }
  handleVideoUpdate = (e) => {
    e.preventDefault();
    if(!e.target.value) return;

    let reader = new FileReader();
    let file = e.target.files[0];
    let target_id = e.target.id;
    let file_exe = file.name.split('.').pop().toLowerCase();
    reader.readAsDataURL(file);

    if(file_exe === 'm4v' || file_exe === 'avi' || file_exe === 'mpg' || file_exe === 'mp4') {
      reader.onloadend = () => {
        this.setState(prevState => ({
          videos: {
            ...prevState.videos,
            [target_id]: true,
            [target_id + '_file']: file,
          }
        }));
      }
    } else {
      alert('비디오 파일(m4v, avi, mpg, mp4)만 지원합니다.');
      return;
    }
  }
  handleImgUpdate = (e) => {
    e.preventDefault();
    const no_validate = [...document.querySelectorAll('.file-path.validate')];
    let reader = new FileReader();
    let file = e.target.files[0];
    let target_id = e.target.id;
    let file_exe = file.name.split('.').pop().toLowerCase();

    if(file_exe === 'jpg' || file_exe === 'jpeg' || file_exe === 'png' || file_exe === 'gif') {
      reader.onloadend = () => {
        this.setState(prevState => ({
          images : {
            ...prevState.images,
            [target_id]: reader.result,
            [target_id + '_file']: file,
          }
        })
      )}
    } else {
      no_validate.forEach(file => file.value = '');
      alert('이미지 파일(jpg, jpeg, png, gif)만 지원합니다.');
      return;
    }

    if(file) {
      reader.readAsDataURL(file);
      e.target.value = '';
    }
  }
  updateContent = (e) => {
    e.preventDefault();
    const target_id = e.target.id;
    this.props.serviceContentUpdate(this.props.myService[0].id, this.state[target_id], target_id)
    this.setState({
      ['re_' + target_id]: false,
    })
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      ['re_' + e.target.id]: true,
    })
  }
  handleRewrite = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleCancel = (e) => {
    e.preventDefault();
    const target_id = e.target.id;
    if(target_id === 'videos') {
      this.props.myService[0].videos.map((video, idx) => {
        this.setState(prevState => ({
          ['re_' + target_id]: false,
          videos: {
            ...prevState.videos,
            ['video' + (idx+6) + '_file']: '',
            ['video' + (idx+6)]: video,
          }
        }))
      });
    } else {
      this.setState((prevState, props) => ({
        [target_id]: props.myService[0][target_id],
        ['re_' + target_id]: false,
      }))
    }

  }
  handleClose = (e) => {
    e.preventDefault();
    const target_id = e.target.id;
    if(target_id.includes('video')) {
      document.querySelector('input#' + target_id).value = '';
      this.setState(prevState => ({
        videos: {
          ...prevState.videos,
          [target_id]: '',
          [target_id + '_file']: '',
        }
      }));
    } else {
      this.setState(prevState => ({
        images: {
          ...prevState.images,
          [target_id]: '',
          [target_id + '_file']: '',
        }
      }));
    }

    if(target_id === 'video6') {
      this.setState(prevState => ({
        videos: {
          ...prevState.videos,
          video7: '',
          video7_file: '',
          video8: '',
          video8_file: '',
        }
      }))
    } else if(target_id === 'video7') {
      this.setState(prevState => ({
        videos: {
          ...prevState.videos,
          video8: '',
          video8_file: '',
        }
      }))
    }
  }
  render() {
    const { myService } = this.props;
    const { service_title, re_service_title, service_content, re_service_content,
      images, re_images, videos, re_videos } = this.state;
    console.log(this.state, this.props);

    return (
      <div className="serviceSetting row">
        <h5 className="col s12 scorehvy sub-title">서비스 수정</h5>

        <div className="col s12 myService-rewrite-tabs">
          <ul className="tabs scorehvy">
            <li className="tab col s6"><a className='active' href="#contents-rewrite">내용</a></li>
            <li className="tab col s6"><a href="#price-rewrite">가격 및 옵션</a></li>
          </ul>
        </div>

        <div className="col s12 service-rewrite">
        {
          !isLoaded(myService)
            ? <div className="collection white center"><Preloader /></div>
            : isEmpty(myService)
              ? (
                <div className="collection">
                  <div className="collection-wrapper center">
                    <p className="grey-text lighten-2">아직 등록한 서비스가 없습니다</p>
                    <p className="grey-text lighten-2">'등록하기'를 눌러 판매할 서비스를 등록해 보세요!'</p>
                    <Link to="/createService" className="myomColor-background btn waves-effect">등록하기</Link>
                  </div>
                </div>
              )
              : (
                <Fragment>
                <div id='contents-rewrite' className="col s12 collection service-description">
                  <div className="re_title">
                  {
                    (re_service_title)
                      ? (
                        <form id='service_title' onSubmit={this.updateContent}>
                          <div className="input-field">
                            <input className='has-character-counter' id='service_title' type="text" onChange={this.handleRewrite} value={service_title} data-length='40' maxLength='41'/>
                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id='service_title' className="rewrite-btn btn-flat waves-effect right">취소</div>
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                        <h4 className="service-title scorehvy">{myService[0].service_title}</h4>
                        <h5 onClick={this.handleClick} id='service_title' className="service-title-rewrite scorehvy">수정을 원하시면 클릭하세요!</h5>
                        </Fragment>
                      )

                  }
                  </div>

                  <div className="re_thumbnail">
                  {
                    (re_images)
                      ? (
                        <form id='images' className='re_thumbnail row' onSubmit={this.handleImgUpload}>
                          <div className="thumb-img col s9">
                          {
                            (images.thumbnail)
                              ? (
                                <div className='file-field input-field'>                           
                                  <img src={images.thumbnail} alt="섬네일 이미지" className='thumb'/>
                                  <input onChange={this.handleImgUpdate} className='file-path validate' id='thumbnail' type="file" accept='image/*' />
                                  <i id='thumbnail' onClick={this.handleClose} className="material-icons close-btn white-text">close</i>
                                </div>
                              )
                              : (
                                <div style={{height: '30rem'}} className="file-field input-field new-update">
                                  <i className="material-icons large">photo</i>
                                  <span>용량제한 5MB</span>
                                  <h6 className="pointer scorehvy red-text">필수</h6>
                                  <input type="file" className='file-path validate' id='thumbnail' onChange={this.handleImgUpdate} accept='image/*' required/>
                                </div>
                              )
                          }
                          </div>

                          <div className="side-img col s3">
                          { 
                            (images.details1) 
                              ? (
                                <div className="file-field input-field">
                                  <img src={images.details1} alt="부가 이미지1" className="side"/>
                                  <input className='file-path validate' onChange={this.handleImgUpdate} id='details1' type="file" accept='image/*' />
                                  <i id='details1' onClick={this.handleClose} className="material-icons close-btn white-text">close</i>
                                </div>
                              )
                              : (
                                <div className="file-field input-field new-update side">
                                  <i className="material-icons large">photo</i>
                                  <span>용량제한 3MB</span>
                                  <h6 className="pointer scorehvy white-text">1</h6>
                                  <input className='file-path validate' onChange={this.handleImgUpdate} id='details1' type="file" accept='image/*' />
                                </div>
                              )
                          }
                          { 
                            images.details2 
                              ? (
                                <div className="file-field input-field">
                                  <img src={images.details2} alt="부가 이미지2" className="side"/> 
                                  <input className='file-path validate' onChange={this.handleImgUpdate} id='details2' type="file" accept='image/*' />
                                  <i id='details2' onClick={this.handleClose} className="material-icons close-btn white-text">close</i>
                                </div>
                              )
                              : (
                                <div className="file-field input-field new-update side">
                                  <i className="material-icons large">photo</i>
                                  <span>용량제한 3MB</span>
                                  <h6 className="pointer scorehvy white-text">2</h6>
                                  <input className='file-path validate' onChange={this.handleImgUpdate} id='details2' type="file" accept='image/*' />
                                </div>
                              ) 
                          }
                          { 
                            images.details3 
                              ? (
                                <div className="file-field input-field">
                                  <img src={images.details3} alt="부가 이미지3" className="side"/> 
                                  <input className='file-path validate' onChange={this.handleImgUpdate} id='details3' type="file" accept='image/*' />
                                  <i id='details3' onClick={this.handleClose} className="material-icons close-btn white-text">close</i>
                                </div>
                              )
                              : (
                                <div className="file-field input-field new-update side">
                                  <i className="material-icons large">photo</i>
                                  <span>용량제한 3MB</span>
                                  <h6 className="pointer scorehvy white-text">3</h6>
                                  <input className='file-path validate' onChange={this.handleImgUpdate} id='details3' type="file" accept='image/*' />
                                </div>
                              )
                          }
                          </div>
                          { 
                            images.details4
                              ? (
                                <div className="file-field input-field col s6 under-side-area">
                                  <img src={images.details4} alt="부가 이미지4" className="under-side"/> 
                                  <input className='file-path validate' onChange={this.handleImgUpdate} id='details4' type="file" accept='image/*' />
                                  <i id='details4' onClick={this.handleClose} className="material-icons close-btn white-text">close</i>
                                </div>
                              )
                              : (
                                <div className="img-uploader col s6 ">
                                  <div className="file-field input-field new-update col s12 under-side">
                                    <i className="material-icons large">photo</i>
                                    <span>용량제한 3MB</span>
                                    <h6 className="pointer scorehvy white-text">4</h6>
                                    <input className='file-path validate' onChange={this.handleImgUpdate} id='details4' type="file" accept='image/*' />
                                  </div>
                                </div>
                              ) 
                          }
                          { 
                            images.details5 
                              ? (
                                <div className="file-field input-field col s6 under-side-area">
                                  <img src={images.details5} alt="부가 이미지5" className="under-side"/> 
                                  <input className='file-path validate' onChange={this.handleImgUpdate} id='details5' type="file" accept='image/*' />
                                  <i id='details5' onClick={this.handleClose} className="material-icons close-btn white-text">close</i>
                                </div>
                              )
                              : (
                                <div className="img-uploader col s6">
                                  <div className="file-field input-field new-update col s12 under-side">
                                    <i className="material-icons large">photo</i>
                                    <span>용량제한 3MB</span>
                                    <h6 className="pointer scorehvy white-text">5</h6>
                                    <input className='file-path validate' onChange={this.handleImgUpdate} id='details5' type="file" accept='image/*' />
                                  </div>
                                </div>
                              )
                          }
                          
                          <div className="rewrite-btn-area col s12">
                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id='images' className="rewrite-btn btn-flat waves-effect right">취소</div>                         
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                        <ServiceThumbnailSummary files={myService[0].images} no_init={true} />
                        <h5 onClick={this.handleClick} id='images' className="service-title-rewrite scorehvy">수정을 원하시면 클릭하세요!</h5>
                        </Fragment>
                      )
                  }

                  </div>

                  <div className="re_content">
                  {
                    (re_service_content)
                      ? (
                        <form id='service_content' onSubmit={this.updateContent}>
                          <h5 className="service-intro scorehvy">서비스 소개</h5>
                          <div className="input-field">
                            <textarea className='has-character-counter materialize-textarea' onChange={this.handleRewrite} value={service_content} type="text" id="service_content" data-length='501' maxLength='500'/>
                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id='service_content' className="rewrite-btn btn-flat waves-effect right">취소</div>                                               
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                        <div className="re_content_wrapper">
                          <h5 className="service-intro scorehvy">서비스 소개</h5>
                          <pre className="service-content">{myService[0].service_content}</pre>
                        </div>
                        <h5 onClick={this.handleClick} id='service_content' className="service-title-rewrite scorehvy">수정을 원하시면 클릭하세요!</h5>
                        </Fragment>
                      )

                  }
                  </div>

                  <div className="re_video">
                  {
                    (re_videos)
                      ? (
                        <form id='videos' onSubmit={this.handleVideoUpload}>
                          <h5 className="service-intro scorehvy">다른 참고 영상</h5>
                          <div className="file-field input-field video-file">
                            {
                              (videos.video6)
                                ? (
                                  <div className="video-wrapper">
                                    {
                                      (videos.video6_file)
                                        ? (
                                          <div className='video-preview'>
                                            <i className="material-icons large green-text text-darken-1">videocam</i>
                                            <span>{ videos.video6_file.name }</span>
                                          </div>
                                        )
                                        : (
                                          <video style={{width: '100%'}} controls>
                                            <source src={videos.video6}  />
                                          </video>
                                        )
                                    }
                                    
                                    <input onChange={this.handleVideoUpdate} type="file" id='video6' accept='video/*'/>
                                    <i onClick={this.handleClose} id="video6" className="material-icons close-btn white-text">close</i>
                                  </div>
                                )
                                : (
                                  <div className="video-wrapper new-update">
                                    <i className="material-icons large">videocam</i>
                                    <input onChange={this.handleVideoUpdate} type="file" id="video6" className="file-uploader" accept='video/*' />                            
                                    <span>용량제한 100MB</span>
                                    <h6 className="pointer scorehvy white-text">1</h6>
                                  </div>
                                )
                            }
                            {
                              (videos.video6)
                                ? (videos.video7)
                                  ? (
                                    <div className="video-wrapper">
                                      {
                                        (videos.video7_file)
                                          ? (
                                            <div className='video-preview'>
                                              <i className="material-icons large green-text text-darken-1">videocam</i>
                                              <span>{ videos.video7_file.name }</span>
                                            </div>
                                          )
                                          : (
                                            <video style={{width: '100%'}} controls>
                                              <source src={videos.video7}  />
                                            </video>
                                          )
                                      }
                                      <input onChange={this.handleVideoUpdate} type="file" id='video7' accept='video/*'/>
                                      <i onClick={this.handleClose} id="video7" className="material-icons close-btn white-text">close</i>
                                    </div>
                                  )
                                  : (
                                    <div className="video-wrapper new-update">
                                      <i className="material-icons large">videocam</i>
                                      <input onChange={this.handleVideoUpdate} type="file" id="video7" className="file-uploader" accept='video/*' />                            
                                      <span>용량제한 100MB</span>
                                      <h6 className="pointer scorehvy white-text">2</h6>
                                    </div>
                                  )
                                : null
                            }
                            {
                              (videos.video6  && videos.video7)
                                ? (videos.video8)
                                  ? (
                                    <div className="video-wrapper">
                                    {
                                        (videos.video8_file)
                                          ? (
                                            <div className='video-preview'>
                                              <i className="material-icons large green-text text-darken-1">videocam</i>
                                              <span>{ videos.video8_file.name }</span>
                                            </div>
                                          )
                                          : (
                                            <video style={{width: '100%'}} controls>
                                              <source src={videos.video8}  />
                                            </video>
                                          )
                                      }
                                      <input onChange={this.handleVideoUpdate} type="file" id='video8' accept='video/*'/>
                                      <i onClick={this.handleClose} id="video8" className="material-icons close-btn white-text">close</i>
                                    </div>
                                  )
                                  : (
                                    <div className="video-wrapper new-update">
                                      <i className="material-icons large">videocam</i>
                                      <input onChange={this.handleVideoUpdate} type="file" id="video8" className="file-uploader" accept='video/*' />                            
                                      <span>용량제한 100MB</span>
                                      <h6 className="pointer scorehvy white-text">3</h6>
                                    </div>
                                  )
                                : null
                            }
                            <div style={{marginBottom: '2rem'}} className="rewrite-btn-area col s12">
                              <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                              <div onClick={this.handleCancel} id='videos' className="rewrite-btn btn-flat waves-effect right">취소</div>                         
                            </div>
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                        <div className="re_video_wrapper">
                          <h5 className="service-intro scorehvy">다른 참고 영상</h5>
                          <div className="video-wrapper">
                          {
                            (myService[0].videos.length)
                              ? myService[0].videos.filter(valid => valid !== '').map(video => (
                                <video key={video} style={{width: '100%', marginBottom: '2rem'}} controls>
                                  <source src={video} type='video/mp4'/>
                                </video>
                              ))
                              : <p>다른 참고영상이 없습니다.</p>
                          }
                          </div>
                        </div>
                        <h5 onClick={this.handleClick} id='videos' className="service-title-rewrite scorehvy">수정을 원하시면 클릭하세요!</h5>
                        </Fragment>
                      )
                  }

                  </div>
                </div>

                <div id="price-rewrite" className="col s12 collection service-price">
                {
                  myService[0].price.map(item => (
                    <div className="price-wrapper col s6" key={item.type}>
                      <div className="re_price">
                        <h5 className="price-title scorehvy">{item.type}</h5>
                        <h6 className="scorehvy">{item.type} 소개</h6>
                        <p className='price-intro'>{item.intro}</p>

                        <h6 className="scorehvy">옵션</h6>
                        <div className="options row">
                        {
                          item.chips.map(chip => (
                            <span key={chip} className="col s6"><i className="material-icons left">check</i> {chip}</span>
                          ))
                        }
                        </div>

                        <h6 className="scorehvy">수정횟수</h6>
                        <p>{item.modify}</p>

                        <h6 className="scorehvy">작업일수</h6>
                        <p>{item.working}</p>

                        <h6 className="scorehvy">가격</h6>
                        <p>{item.price}</p>
                      </div>
                      <h5 className="service-title-rewrite scorehvy">수정을 원하시면 클릭하세요!</h5>
                    </div>
                  ))
                }
                </div>

                </Fragment>
              )
        }

        </div>

        <h5 className="col s12 scorehvy sub-title">서비스 판매 일시중지</h5>
        <div className="col s12">      
          <div className="collection">
            <div className="collection-item">myom 고객센터로 문의 바랍니다.</div>
          </div>
        </div>

        <h5 className="col s12 scorehvy sub-title">서비스 삭제</h5>
        <div className="col s12">
          <div className="collection">
            <div className="collection-item">myom 고객센터로 문의 바랍니다.</div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    myService: state.firestore.ordered.myService,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    serviceContentUpdate: (service_id, serviceData, target_id) => dispatch(serviceContentUpdate(service_id, serviceData, target_id)),
    serviceImgUpdate: (service_id, serviceImgs) => dispatch(serviceImgUpdate(service_id, serviceImgs)),
    serviceVideoUpdate: (service_id, serviceVideos) => dispatch(serviceVideoUpdate(service_id, serviceVideos)),
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    const uid = !isLoaded(props.auth.uid) ? null : props.auth.uid;
    return [
      { collection: 'testService', doc:'', where: ['provider_id', '==', uid], storeAs: 'myService' }
    ]
  })
)(ServiceSetting);