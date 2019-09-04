import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Preloader from '../functionalComponents/Preloader';
import Pagination from '../functionalComponents/Pagination';
import { serviceDelete, _init_authError } from '../../store/actions/serviceFormAction';
import M from 'materialize-css';
import './myServices.css';

class MyServices extends Component {
  state = {
    curPage: 1,
    perPage: 5,
    check_delete: false,
    check_pass_state: false,
    password_for_check: '',
    loading: false,   // option for loading; not completed
    keyValue_loading: true
  }

  async componentWillReceiveProps(nextProps) {  
    if(this.props.delete_retry !== nextProps.delete_retry) {
      await setTimeout(() => {
        this.setState({
          keyValue_loading: false,
        })
      }, 1000);
    }
  }

  componentDidMount() {
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {
      onCloseEnd: this.check_delete_false,
    })
    M.AutoInit();
  }

  check_delete_true = (e) => {
    e.preventDefault();
    this.setState({
      check_delete: true,
    })
  }
  check_delete_false = () => {
    this.props._init_authError(this.props.authError);
    this.setState({
      check_delete: false,
      loading: false,
    })
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value,
      keyValue_loading: true,
      loading: false,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const curInstance = M.Modal.getInstance(document.querySelector('.modal'));
    const _getTarget_id = document.querySelector('.modal-trigger.for_delete').id;
    this.setState({
      loading: true,
      keyValue_loading: true,
    })
    this.props.serviceDelete(curInstance, _getTarget_id, this.state.password_for_check)
  }

  paginate = (pageNum) => {
    this.setState({
      curPage: pageNum,
    })
  }

  render() {
    const { services, authError, delete_retry } = this.props;
    // options for Pagination
    const { curPage, perPage, check_delete, loading, keyValue_loading } = this.state;
    const indexOfLast = curPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentServices = !isLoaded(services) ? null : services.slice(indexOfFirst, indexOfLast);

    console.log(loading, keyValue_loading, delete_retry);
    return (
      <div className="myServices">

        <div id="service_delete_modal" className='modal no-autoinit'>
          {
            (check_delete)
              ? (loading && keyValue_loading)   // option for loading; not completed
                ? <Preloader />
                : ( 
                  <Fragment>
                  <div className="modal-content">
                    <h4>비밀번호 확인</h4>
                    <div className="input-field">
                      <input id='password_for_check' type="password" className='validate' onChange={this.handleChange}/>
                      <label htmlFor="password_for_check">비밀번호를 입력해주세요</label>
                    </div>
                    <div className="red-text center">
                      { authError ? <p>{ authError }</p> : null }
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button onClick={this.handleSubmit} className="left waves-effect btn-flat">확인</button>
                    <button className="right modal-close waves-effect btn-flat">닫기</button>
                  </div>
                  </Fragment>
                )
              : (
                <Fragment>
                <div className="modal-content">
                  <h4 className='red-text'>정말 삭제하시겠습니까?</h4>
                  <h6 style={{display: 'flex'}} className="red-text text-lighten-2"><i className="material-icons">priority_high</i> 삭제한 데이터는 복구가 불가능합니다!</h6>
                </div>
                <div className="modal-footer">
                  <button onClick={this.check_delete_true} className="left waves-effect btn-flat">예</button>
                  <button className="right modal-close waves-effect btn-flat">아니오</button>
                </div>
                </Fragment>
              )
          }
        </div> 

        <div className="row">
          <h4>나의 서비스</h4>
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s2"><a href="#sellAll">전체 ({!isLoaded(services) ? '..' : isEmpty(services) ? 0 : services.length})</a></li>
              <li className="tab col s2"><a href="#selling">판매중 (0)</a></li>
              <li className="tab col s2"><a href="#waiting">승인대기중 (0)</a></li>
              <li className="tab col s2"><a href="#forbidden">판매중지 (0)</a></li>
              <li className="tab col s2"><a href="#notAllowed">비승인 (0)</a></li>
            </ul>
          </div>

          <div id="sellAll">
            {
              !isLoaded(services)
                ? <div className="collection"><Preloader /></div>
                : isEmpty(services)
                  ? (
                    <div className="collection">
                      <div className="collection-wrapper center">
                        <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                        <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                        <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
                      </div>
                    </div>
                  )
                  : currentServices.map(item => (
                      <div className="collection notEmpty" key={item.id}>
                        <div className="collection-item">
                          <div className="image-area">
                            <img src={item.imgURL} alt="" width={300} height={200} />
                          </div>
                          <div className="text-area">
                            <h5>카테고리 : {item.category}</h5>
                            <div className="inquiry-area">
                              <p>등록된 문의개수 : {item.inquiryCount}</p>
                            </div>
                            <div className="review-area">
                              <p>등록된 리뷰개수 : {item.reviewCount}</p>
                            </div>
                          </div>
                          <div className='link-wrapper'>
                            <Link to={`/thema/${item.category}/${item.id}`}>게시글 보러가기</Link>
                            <Link to={{
                              pathname: '/serviceRegister',
                              service_id: `${item.id}`,
                              service_type: `${item.category}`,
                              service_img: `${item.imgURL}`,
                              service_desc: `${item.description[0].contents}`,
                              service_process: `${item.description[1].contents}`,
                              service_doing: `${item.description[2].contents}`,
                              service_style: `${item.description[3].contents}`,
                              service_price_standard: `${item.prices[0].price}`,
                              service_price_deluxe: `${item.prices[1].price}`,
                              service_price_premium: `${item.prices[2].price}`,
                              standard_desc: `${item.prices[0].contents}`,
                              deluxe_desc: `${item.prices[1].contents}`,
                              premium_desc: `${item.prices[2].contents}`,
                              check_update: true }}>
                              게시글 수정하기</Link>
                            <a id={item.id} href='#service_delete_modal' className='modal-trigger for_delete'>게시글 삭제하기</a>
                          </div>
                        </div>
                      </div>
                  ))
            }

            {
              !isLoaded(services)
                ? null
                : <Pagination pages={Math.ceil(services.length / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            }
            
          </div>

          <div id="selling">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div>
          </div>

          <div id="waiting">
           <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div>   
          </div>

          <div id="forbidden">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div>   
          </div>

          <div id="notAllowed">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.services.authError,
    delete_retry: state.services.delete_retry,
    services: state.firestore.ordered.services,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    serviceDelete: (curInstance, id, password) => dispatch(serviceDelete(curInstance, id, password)),
    _init_authError: (authError) => dispatch(_init_authError(authError)),
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [
    { collection: 'services', where: [ 'serviceProvider', '==', props.auth.uid], orderBy: ['timestamp', 'desc'], storeAs: 'services' },
  ]),
)(MyServices);