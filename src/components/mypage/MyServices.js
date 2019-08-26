import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import M from 'materialize-css';
import './myServices.css';

class MyServices extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { services } = this.props;
    return (
      <div className="myServices">
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
                ? '로딩중입니다...'
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
                  : services.map(item => {
                    return (                 
                      <div className="collection notEmpty">
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
                        </div>
                        <Link to={`/thema/${item.category}/${item.id}`} key={item.id}></Link>
                      </div>
                    )
                  })
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
    services: state.firestore.ordered.services,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: 'services', where: [ 'serviceProvider', '==', props.auth.uid], storeAs: 'services' },
  ]),
)(MyServices);