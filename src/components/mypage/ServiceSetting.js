import React, { Component, Fragment } from 'react'
import M from 'materialize-css';
import './serviceSetting.css';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import Preloader from '../functionalComponents/Preloader';
import ServiceThumbnailSummary from '../service/summary/ServiceThumbnailSummary';
import { serviceContentUpdate, serviceImgUpdate, serviceVideoUpdate, servicePriceUpdate } from '../../store/actions/serviceFormAction';
import Swiper from 'react-id-swiper';

class ServiceSetting extends Component {
  state = {
    params: {
      spaceBetween: 30,
      rebuildOnUpdate: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="notoSans ' + className + '">' + (index + 1) + '</span>';
        }
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.myService !== this.props.myService && this.props.myService.length) {
      this.setState({
        service_title: this.props.myService[0].service_title,
        service_content: this.props.myService[0].service_content,
        service_refund: this.props.myService[0].service_refund,
        images: this.props.myService[0].images,
        basic: this.props.myService[0].price[0],
        pro: this.props.myService[0].price[1],
        // videos: this.props.myService[0].videos.map((video, idx) => ({ ['video' +(idx + 6)]: video })),
      });

      

      this.props.myService[0].videos.filter(valid => valid !== '').map((video, idx) => {
        this.setState(prevState => ({
          videos: {
            ...prevState.videos,
            ['video' + (idx+6) +'-original_file']: video,
            ['video' + (idx+6)]: true,
            ['video' + (idx+6) + '_file']: '',
          }
        }))
      });

      if(this.props.myService[0].videos.filter(valid => valid !== '').length === 0) {
        this.setState({
          videos: {
            video6: '',
          }
        })
      }

      


    }

    if(prevState.re_service_title !== this.state.re_service_title || prevState.re_service_content !== this.state.re_service_content
        || prevState.re_service_refund !== this.state.re_service_refund || prevState.re_basic !== this.state.re_basic || prevState.re_pro !== this.state.re_pro) {
      M.CharacterCounter.init(document.querySelectorAll('.has-character-counter'));
      M.AutoInit();
    }

    if(prevState.re_basic !== this.state.re_basic || prevState.re_pro !== this.state.re_pro) {
      const basicChips = this.state.basic.chips.map(tag => ({ tag : tag }));
      const proChips = this.state.pro.chips.map(tag => ({ tag : tag }));

      M.Chips.init(document.querySelector('#basic-options'), {
        data: basicChips,
        limit: 5,
        onChipDelete: () => {
          const chips = [...document.querySelectorAll('#basic-options .chip')];
          const chip_value = chips.map(item => item.innerText.split('\n')[0]);

          this.setState((prevState, props) => ({
            basic: {
              ...prevState.basic,
              chips: chip_value,
            },
          }))
        },
      });

      M.Chips.init(document.querySelector('#pro-options'), {
        data: proChips,
        limit: 7,
        onChipDelete: () => {
          const chips = [...document.querySelectorAll('#pro-options .chip')];
          const chip_value = chips.map(item => item.innerText.split('\n')[0]);

          this.setState((prevState, props) => ({
            basic: {
              ...prevState.pro,
              chips: chip_value,
            },
          }))
        },
      });

      const basic_chips = [...document.querySelectorAll('#basic-options .chip')];
      const pro_chips = [...document.querySelectorAll('#pro-options .chip')];
      basic_chips.forEach((item, idx) => {
        if(idx < 3) {
          item.classList.add('initial');
          item.removeAttribute('tabindex');
        }
      });
      
      pro_chips.forEach((item, idx) => {
        if(idx < 4) {
          item.classList.add('initial');
          item.removeAttribute('tabindex');
        }
      });
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
  updatePrice = (e) => {
    e.preventDefault();
    const target_id = e.target.id;

    this.props.servicePriceUpdate(this.props.myService[0].id, this.state[target_id])
    this.setState({
      ['re_' + target_id]: false,
    })
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
  handleRange = name => (e, value) => {
    e.preventDefault();
    const target = name;
    const selector = target.split('-').shift();
    const target_id = target.split('-').pop();
    let target_value = value;

    this.setState(prevState => ({
      [selector]: {
        ...prevState[selector],
        [target_id]: target_value,
      }
    }))
  }
  handlePriceRewrite = (e) => {
    e.preventDefault();
    const target = e.target.id;
    const selector = target.split('-').shift();
    const target_id = target.split('-').pop();
    let target_value = e.target.value;

    this.setState(prevState => ({
      [selector]: {
        ...prevState[selector],
        [target_id]: target_value,
      }
    }))
  }
  handleRewrite = (e) => {
    e.preventDefault();
    const target_id = e.target.id;
   
    this.setState({
      [target_id]: e.target.value,
    })
    
  }
  handleChips = (e) => {
    if(e.keyCode === 13 && e.target.id === 'basic_additional') {
      const chips = [...document.querySelectorAll('#basic-options .chip')];
      const chip_value = chips.map(item => item.innerText.split('\n')[0]);

      this.setState(prevState => ({
        basic: {
          ...prevState.basic,
          chips: chip_value,
        }
      }))
    }
    else if(e.keyCode === 13 && e.target.id === 'pro_additional') {
      const chips = [...document.querySelectorAll('#pro-options .chip')];
      const chip_value = chips.map(item => item.innerText.split('\n')[0]);

      this.setState(prevState => ({
        pro: {
          ...prevState.pro,
          chips: chip_value,
        }
      }))
    }
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
      this.setState({
        ['re_' + target_id]: false,
      })
    } else if(target_id === 'basic') {
      this.setState((prevState, props) => ({
        [target_id]: props.myService[0].price[0],
        ['re_' + target_id]: false,
      }))
    } else if(target_id === 'pro') {
      this.setState((prevState, props) => ({
        [target_id]: props.myService[0].price[1],
        ['re_' + target_id]: false,
      }))
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
          [target_id + '-original_file']: '',
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
          'video7-original_file': '',
          video8: '',
          video8_file: '',
          'video8-original_file': '',
        }
      }))
    } else if(target_id === 'video7') {
      this.setState(prevState => ({
        videos: {
          ...prevState.videos,
          video8: '',
          video8_file: '',
          'video8-original_file': '',
        }
      }))
    }
  }
  render() {
    const { myService } = this.props;
    const { service_title, re_service_title, service_content, re_service_content, service_refund, re_service_refund,
      images, re_images, videos, re_videos, basic, re_basic, pro, re_pro } = this.state;

    return (
      <div className="serviceSetting row">
        <h5 className="col s12 sub-title">나의 서비스</h5>

        <div className="col s12 myService-rewrite-tabs">
          <ul className="tabs">
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
                    <p className="grey-text lighten-2">'등록하기'를 눌러 판매할 서비스를 등록해 보세요!</p>
                    <Link to="/createService" className="myomColor-background btn register-btn waves-effect">등록하기</Link>
                  </div>
                </div>
              )
              : (
                <Fragment>
                <div className="content-rewrite row">
                  <div className="service-title-rewrite-area col s12">
                  {
                    (re_service_title)
                      ? (
                        <form id='service_title' onSubmit={this.updateContent}>
                          <h6 className="rewrite-title">서비스 제목</h6>
                          <div className="input-field">
                            <input className='has-character-counter notoSans' id='service_title' type="text" onChange={this.handleRewrite} value={service_title} data-length='40' maxLength='41'/>
                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id='service_title' className="rewrite-btn btn-flat waves-effect right">취소</div>
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                          <button onClick={this.handleClick} id='service_title' className='modify-btn btn waves-effect right'>수정하기</button>
                          <h6 className="rewrite-title">서비스 제목</h6>
                          <p className='rewrite-contents'>{myService[0].service_title}</p>
                        </Fragment>
                      )
                  }

                  </div>

                  <div className="col s12 divider"></div>
                  
                  <div className="service-img-rewrite-area col s12">
                  {
                    (re_images)
                      ? (
                        <form id='images' onSubmit={this.handleImgUpload}>
                          <h6 className="rewrite-title">서비스 이미지</h6>
                          <div className="thumbnail row">
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
                                  <div style={{height: '382px'}} className="file-field input-field new-update">
                                    <div className="icons-wrapper">
                                      <img src="/img/icons/image-rep.png" alt="섬네일 등록 아이콘 이미지" width='44' height='52' />
                                    </div>
                                    <p>섬네일 대표 사진 (필수)</p>
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
                                    <div className="icons-wrapper">
                                      <img src="/img/icons/image-rep.png" alt="섬네일 등록 아이콘 이미지" width='44' height='52' />
                                    </div>
                                    <span>서브이미지1 (선택) </span>
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
                                    <div className="icons-wrapper">
                                      <img src="/img/icons/image-rep.png" alt="섬네일 등록 아이콘 이미지" width='44' height='52' />
                                    </div>
                                    <span>서브이미지2 (선택) </span>
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
                                    <div className="icons-wrapper">
                                      <img src="/img/icons/image-rep.png" alt="섬네일 등록 아이콘 이미지" width='44' height='52' />
                                    </div>
                                    <span>서브이미지3 (선택) </span>
                                    <input className='file-path validate' onChange={this.handleImgUpdate} id='details3' type="file" accept='image/*' />
                                  </div>
                                )
                            }
                            </div>

                            <div className="rewrite-btn-area col s12">
                              <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                              <div onClick={this.handleCancel} id='images' className="rewrite-btn btn-flat waves-effect right">취소</div>                         
                            </div>
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                          <button onClick={this.handleClick} id='images' className='modify-btn btn waves-effect right'>수정하기</button>
                          <h6 className="rewrite-title">서비스 이미지</h6>
                          <ServiceThumbnailSummary files={myService[0].images} no_init={true} />
                        </Fragment>
                      )
                  }
                  </div>

                  <div className="col s12 divider"></div>

                  <div className="service-content-rewrite-area col s12">
                  {
                    (re_service_content)
                      ? (
                        <form id='service_content' onSubmit={this.updateContent}>
                          <h6 className="rewrite-title">서비스 소개</h6>
                          <div className="input-field">
                            <textarea className='has-character-counter materialize-textarea' onChange={this.handleRewrite} value={service_content} type="text" id="service_content" data-length='1000' maxLength='1001'/>
                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id='service_content' className="rewrite-btn btn-flat waves-effect right">취소</div>                                               
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                          <button onClick={this.handleClick} id='service_content' className='modify-btn btn waves-effect right'>수정하기</button>
                          <h6 className="rewrite-title">서비스 소개</h6>
                          <pre className='rewrite-contents'>{myService[0].service_content}</pre>
                        </Fragment>
                      )
                  }
                  </div>

                  <div className="col s12 divider"></div>

                  <div className="service-video-rewrite-area col s12">
                  {
                    (re_videos)
                      ? (
                        <form id='videos' onSubmit={this.handleVideoUpload}>
                          <h6 className="rewrite-title">다른 참고영상</h6>
                          <div className="video-box-area row">
                            <div className="col s4">VIDEO</div>
                            <div className="col s8">CONTENT</div>
                            <div className="rewrite-btn-area col s12">
                              <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                              <div onClick={this.handleCancel} id='videos' className="rewrite-btn btn-flat waves-effect right">취소</div>                         
                            </div>
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                          <button onClick={this.handleClick} id='videos' className='modify-btn btn waves-effect right'>수정하기</button>
                          <h6 className="rewrite-title">다른 참고영상</h6>
                          <div className="video-wrapper">
                          {
                            (myService[0].videos.length && myService[0].videos[0]) 
                              ? (
                                <Swiper {...this.state.params}>
                                {
                                  myService[0].videos.map((video, idx) => (
                                    <video key={video + idx} style={{width: '100%'}} controls>
                                      <source src={video} type='video/mp4'/>
                                    </video>
                                  ))
                                }
                                </Swiper>
                              ) 
                              : <p>등록한 참고영상이 없습니다.</p>
                          }
                          </div>
                        </Fragment>
                      )
                  }                    
                  </div>

                  <div className="col s12 divider"></div>

                  <div className="service-correction-rewrite-area col s12">
                  {
                    (re_service_refund)
                      ? (
                        <form id="service_refund" onSubmit={this.updateContent}>
                          <h6 className="rewrite-title">수정 안내사항</h6>
                          <div className="input-field">
                            <textarea placeholder='미기입시 myom 환불규정과 동일합니다.' onChange={this.handleRewrite} value={service_refund} id='service_refund' className='has-character-counter materialize-textarea' type='text' data-length='500' maxLength='501'></textarea>
                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id="service_refund" className="rewrite-btn btn-flat waves-effect right">취소</div>
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                          <button onClick={this.handleClick} id='service_refund' className='modify-btn btn waves-effect right'>수정하기</button>
                          <h6 className="rewrite-title">수정 안내사항</h6>
                          <pre className='rewrite-contents'>{ myService[0].service_refund ? myService[0].service_refund : 'myom 환불규정과 동일합니다.' }</pre>
                        </Fragment>
                      )
                  }

                  </div>

                  <div className="col s12 divider"></div>

                  
                </div>

                <div id='contents-rewrite' className="col s12 collection service-description">                                                                                    
                  <div className="re_video">
                  {
                    (re_videos)
                      ? (
                        <form className='row' id='videos' onSubmit={this.handleVideoUpload}>
                          <h5 style={{marginLeft: '.75rem'}} className="service-intro scorehvy">다른 참고 영상</h5>
                          <div className="file-field input-field video-file col s12">
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
                                            <source src={videos['video6-original_file']} />
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
                                    <span>용량제한 300MB</span>
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
                                              <source src={videos['video7-original_file']}  />
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
                                      <span>용량제한 300MB</span>
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
                                              <source src={videos["video8-original_file"]}  />
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
                                      <span>용량제한 300MB</span>
                                      <h6 className="pointer scorehvy white-text">3</h6>
                                    </div>
                                  )
                                : null
                            }
                          </div>

                          <div className="rewrite-btn-area col s12">
                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id='videos' className="rewrite-btn btn-flat waves-effect right">취소</div>                         
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                        <div className="re_video_wrapper">
                          <h5 className="service-intro scorehvy">다른 참고 영상</h5>
                          <div className="video-wrapper">
                          {
                            (myService[0].videos[0] !== '' || myService[0].videos[1] !== '' || myService[0].videos[2] !== '')
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

                  <div className="re_refund">
                  {
                    (re_service_refund)
                      ? (
                        <form id="service_refund" onSubmit={this.updateContent}>
                          <h5 className="service-intro scorehvy">수정 안내사항</h5>
                          <div className="input-field">
                            <textarea placeholder='미기입시 myom 환불규정과 동일합니다.' onChange={this.handleRewrite} value={service_refund} id='service_refund' className='has-character-counter materialize-textarea' type='text' data-length='500' maxLength='501'></textarea>
                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id="service_refund" className="rewrite-btn btn-flat waves-effect right">취소</div>
                          </div>
                        </form>
                      )
                      : (
                        <Fragment>
                        <div className="re_refund_wrapper">
                          <h5 className="service-intro scorehvy">수정 안내사항</h5>
                          <pre className="service-refund">{ myService[0].service_refund ? myService[0].service_refund : 'myom 환불규정과 동일합니다.' }</pre>
                        </div>
                        <h5 onClick={this.handleClick} id='service_refund' className='service-title-rewrite scorehvy'>수정을 원하시면 클릭하세요!</h5>
                        </Fragment>
                      )
                  }
                  </div>

                </div>

                

                <div id="price-rewrite" className="col s12 collection service-price">
                  <div className="price-wrapper col s6">
                  {
                    (basic)
                      ? (re_basic)
                        ? (
                          <form id="basic" onSubmit={this.updatePrice}>
                            <h5 className="price-title scorehvy">{basic.type}</h5>
                            <div className="input-field">
                              <h6 className="scorehvy">{basic.type} 소개</h6>
                              <input onKeyDown={(e) => e.preventDefault()} onChange={this.handlePriceRewrite} value={basic.intro} type="text" id="basic-intro" 
                                className='has-character-counter' data-length='40' maxLength='41' required/>
                            </div>

                            <div className="options row">
                              <h6 className="col s12 scorehvy">옵션</h6>
                              <div className="input-field col s12">
                                <div id="basic-options" className="chips chips-initial no-autoinit col s8">
                                  <input onKeyDown={this.handleChips} type="text" id='basic_additional' className="custom-class" placeholder='추가옵션'/>                       
                                </div>
                                <span className="right helperText red-text">최대 5개</span> 
                              </div>
                            </div>

                            <div className="input-field row">
                              <div className="col s6">
                                <h6 className="scorehvy">작업일수</h6>
                                <select onChange={this.handlePriceRewrite} value={basic.working} name="" id="basic-working" required>
                                  <option value="" disabled>작업일</option>
                                  <option value="1-3일">1-3일</option>
                                  <option value="3-5일">3-5일</option>
                                  <option value="5-7일">5-7일</option>
                                  <option value="7-10일">7-10일</option>
                                  <option value="10-15일">10-15일</option>
                                  <option value="15일 이상">15일 이상</option>
                                </select>
                              </div>

                              <div className="col s6">
                                <h6 className="scorehvy">수정횟수</h6>
                                <select onChange={this.handlePriceRewrite} value={basic.modify} name="" id="basic-modify" required>
                                  <option value="" disabled>수정횟수</option>
                                  <option value="1회">1회</option>
                                  <option value="3회">3회</option>
                                  <option value="5회">5회</option>
                                  <option value="10회">10회</option>
                                  <option value="15회">15회</option>
                                  <option value="무제한">무제한</option>
                                </select>
                              </div>
                            </div>

                            <div className="input-field row">
                              <div className="col s6">
                                <h6 className="scorehvy">러닝타임</h6>
                                <select onChange={this.handlePriceRewrite} value={basic.runningTime} name="" id="basic-runningTime" required>
                                  <option value="" disabled>러닝타임</option>
                                  <option value="1분이내">1분이내</option>
                                  <option value="2분이내">2분이내</option>
                                  <option value="3분이내">3분이내</option>
                                  <option value="4분이내">4분이내</option>
                                  <option value="5분이내">5분이내</option>
                                  <option value="6분이내">6분이내</option>
                                  <option value="7분이내">7분이내</option>
                                  <option value="8분이내">8분이내</option>
                                  <option value="9분이내">9분이내</option>
                                  <option value="10분이내">10분이내</option>
                                  <option value="제한없음">제한없음</option>
                                </select>
                              </div>

                              <div className="col s6">
                                <h6 className="scorehvy">추가금액</h6>
                                <input onKeyDown={(e) => e.preventDefault()} onChange={this.handlePriceRewrite} value={basic.additional_price} id='basic-additional_price' type="number" min='0' step='5000' max='100000' />
                                <span style={{fontSize: '12px'}} className="right red-text">미기입 시 추가금액 없음</span>
                              </div>
                            </div>

                            <div className="input-field row">
                              <h6 className="col s12 scorehvy">가격</h6>
                              <div className="col s12">
                                <Slider
                                  value={basic.price > '100,000' ? Number(basic.price.slice(0,2)) : basic.price }
                                  onChange={this.handleRange('basic-price')}        
                                  step={1}
                                  valueLabelDisplay='auto'
                                  valueLabelFormat={(value) => value + '만'}
                                  marks
                                  min={11}
                                  max={16} />
                              </div>

                              <input className='col s4 offset-s4 center' value={basic.price > '100,000' ? basic.price + '원' : basic.price + '0,000 원'} type="text" id='basic-price' disabled />
                            </div>

                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id='basic' className="rewrite-btn btn-flat waves-effect right">취소</div>                                                                        
                          
                          </form>
                        )
                        : (
                          <Fragment>
                          <div className="re_price">
                          <h5 className="price-title scorehvy">{basic.type}</h5>
                            <h6 className="scorehvy">{basic.type} 소개</h6>
                            <p className="price-intro">{basic.intro}</p>

                            <h6 className="scorehvy">옵션</h6>
                            <div className="options row">
                            {
                              basic.chips.map(chip => (
                                <span key={chip} className="col s6"><i className="material-icons left">check</i>{chip}</span>
                              ))
                            }
                            </div>

                            <div className="row">
                              <div className="col s6">
                                <h6 className="scorehvy">작업일수</h6>
                                <p>{basic.working}</p>
                              </div>
                              <div className="col s6">
                                <h6 className="scorehvy">수정횟수</h6>
                                <p>{basic.modify}</p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col s6">
                                <h6 className="scorehvy">러닝타임</h6>
                                <p>{basic.runningTime}</p>
                              </div>
                              <div className="col s6">
                                <h6 className="scorehvy">추가금액</h6>
                                <p>{basic.additional_price}원</p>
                              </div>
                            </div>

                            <h6 className="scorehvy">가격</h6>
                            <p>{basic.price}원</p>
                          </div>
                          <h5 onClick={this.handleClick} id='basic' className="service-title-rewrite scorehvy">수정을 원하시면 클릭하세요!</h5>
                          </Fragment>
                        )
                      : <div>측정된 가격이 없습니다. myom 관리자에게 문의하세요.</div>
                  }
                  </div>

                  <div className="price-wrapper col s6">
                  {
                    (pro)
                      ? (re_pro)
                        ? (
                          <form id="pro" onSubmit={this.updatePrice}>
                            <h5 className="price-title scorehvy">{pro.type}</h5>
                            <div className="input-field">
                              <h6 className="scorehvy">{pro.type} 소개</h6>
                              <input onChange={this.handlePriceRewrite} value={pro.intro} type="text" id="pro-intro" 
                                className='has-character-counter' data-length='40' maxLength='41' required/>
                            </div>

                            <div className="options row">
                              <h6 className="col s12 scorehvy">옵션</h6>
                              <div className="input-field col s12">
                                <div id="pro-options" className="chips chips-initial no-autoinit col s8">
                                  <input onKeyDown={this.handleChips} type="text" id='pro_additional' className="custom-class" placeholder='추가옵션'/>                       
                                </div>
                                <span className="right helperText red-text">최대 7개</span> 
                              </div>
                            </div>

                            <div className="input-field row">
                              <div className="col s6">
                                <h6 className="scorehvy">작업일수</h6>
                                <select onChange={this.handlePriceRewrite} value={pro.working} name="" id="pro-working" required>
                                  <option value="" disabled>작업일</option>
                                  <option value="1-3일">1-3일</option>
                                  <option value="3-5일">3-5일</option>
                                  <option value="5-7일">5-7일</option>
                                  <option value="7-10일">7-10일</option>
                                  <option value="10-15일">10-15일</option>
                                  <option value="15일 이상">15일 이상</option>
                                </select>
                              </div>

                              <div className="col s6">
                                <h6 className="scorehvy">수정횟수</h6>
                                <select onChange={this.handlePriceRewrite} value={pro.modify} name="" id="pro-modify" required>
                                  <option value="" disabled>수정횟수</option>
                                  <option value="1회">1회</option>
                                  <option value="3회">3회</option>
                                  <option value="5회">5회</option>
                                  <option value="10회">10회</option>
                                  <option value="15회">15회</option>
                                  <option value="무제한">무제한</option>
                                </select>
                              </div>
                            </div>

                            <div className="input-field row">
                              <div className="col s6">
                                <h6 className="scorehvy">러닝타임</h6>
                                <select onChange={this.handlePriceRewrite} value={pro.runningTime} name="" id="pro-runningTime" required>
                                  <option value="" disabled>러닝타임</option>
                                  <option value="1분이내">1분이내</option>
                                  <option value="2분이내">2분이내</option>
                                  <option value="3분이내">3분이내</option>
                                  <option value="4분이내">4분이내</option>
                                  <option value="5분이내">5분이내</option>
                                  <option value="6분이내">6분이내</option>
                                  <option value="7분이내">7분이내</option>
                                  <option value="8분이내">8분이내</option>
                                  <option value="9분이내">9분이내</option>
                                  <option value="10분이내">10분이내</option>
                                  <option value="제한없음">제한없음</option>
                                </select>
                              </div>

                              <div className="col s6">
                                <h6 className="scorehvy">추가금액</h6>
                                <input onKeyDown={(e) => e.preventDefault()} onChange={this.handlePriceRewrite} value={pro.additional_price} id='pro-additional_price' type="number" min='0' step='5000' max='100000' />
                                <span style={{fontSize: '12px'}} className="right red-text">미기입 시 추가금액 없음</span>
                              </div>
                            </div>

                            <div className="input-field row">
                              <h6 className="col s12 scorehvy">가격</h6>
                              <div className="col s12">
                                <Slider
                                  value={pro.price > '100,000' ? Number(pro.price.slice(0,2)) : pro.price }
                                  onChange={this.handleRange('pro-price')}        
                                  step={1}
                                  valueLabelDisplay='auto'
                                  valueLabelFormat={(value) => value + '만'}
                                  marks
                                  min={17}
                                  max={25} />
                              </div>

                              <input className='col s4 offset-s4 center' value={pro.price > '100,000' ? pro.price + '원' : pro.price + '0,000 원'} type="text" id='pro-price' disabled />
                            </div>

                            <button className="rewrite-btn btn waves-effect right myomColor-background">확인</button>
                            <div onClick={this.handleCancel} id='pro' className="rewrite-btn btn-flat waves-effect right">취소</div>                                                                        
                          
                          </form>
                        )
                        : (
                          <Fragment>
                          <div className="re_price">
                            <h5 className="price-title scorehvy">{pro.type}</h5>
                            <h6 className="scorehvy">{pro.type} 소개</h6>
                            <p className="price-intro">{pro.intro}</p>

                            <h6 className="scorehvy">옵션</h6>
                            <div className="options row">
                            {
                              pro.chips.map(chip => (
                                <span key={chip} className="col s6"><i className="material-icons left">check</i>{chip}</span>
                              ))
                            }
                            </div>

                            <div className="row">
                              <div className="col s6">
                                <h6 className="scorehvy">작업일수</h6>
                                <p>{pro.working}</p>
                              </div>
                              <div className="col s6">
                                <h6 className="scorehvy">수정횟수</h6>
                                <p>{pro.modify}</p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col s6">
                                <h6 className="scorehvy">러닝타임</h6>
                                <p>{pro.runningTime}</p>
                              </div>
                              <div className="col s6">
                                <h6 className="scorehvy">추가금액</h6>
                                <p>{pro.additional_price}원</p>
                              </div>
                            </div>

                            <h6 className="scorehvy">가격</h6>
                            <p>{pro.price}원</p>
                          </div>
                          <h5 onClick={this.handleClick} id='pro' className="service-title-rewrite scorehvy">수정을 원하시면 클릭하세요!</h5>
                          </Fragment>
                        )
                      : <div>측정된 가격이 없습니다. myom 관리자에게 문의하세요.</div>
                  }
                  </div>

                </div>

                </Fragment>
              )
        }

        </div>

        <h5 className="col s12 scorehvy sub-title">서비스 판매 일시중지</h5>
        <div className="col s12 pause-service">      
          <div className="collection">
            <div className="collection-item">myom 고객센터로 문의 바랍니다.</div>
          </div>
        </div>

        <h5 className="col s12 scorehvy sub-title">서비스 삭제</h5>
        <div className="col s12 delete-service">
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
    servicePriceUpdate: (service_id, price) => dispatch(servicePriceUpdate(service_id, price)),
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


// original video wrapper
// {
//   (myService[0].videos[0] !== '' || myService[0].videos[1] !== '' || myService[0].videos[2] !== '')
//     ? myService[0].videos.filter(valid => valid !== '').map(video => (
//       <video key={video} style={{width: '100%', marginBottom: '2rem'}} controls>
//         <source src={video} type='video/mp4'/>
//       </video>
//     ))
//     : <p>다른 참고영상이 없습니다.</p>
// }