import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import './myServices.css';

class MyServices extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="myServices">
        <div className="row">
          <h4>나의 서비스</h4>
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s2"><a href="#sellAll">전체 (0)</a></li>
              <li className="tab col s2"><a href="#selling">판매중 (0)</a></li>
              <li className="tab col s2"><a href="#waiting">승인대기중 (0)</a></li>
              <li className="tab col s2"><a href="#forbidden">판매중지 (0)</a></li>
              <li className="tab col s2"><a href="#notAllowed">비승인 (0)</a></li>
            </ul>
          </div>

          <div id="sellAll">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <Link to="/serviceRegister" className="red lighten-2 white-text btn waves-effect">판매 시작하기</Link>
              </div>
            </div>
          </div>

          <div id="selling">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <a href="#!" className="red lighten-2 white-text btn waves-effect">판매 시작하기</a>
              </div>
            </div>
          </div>

          <div id="waiting">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <a href="#!" className="red lighten-2 white-text btn waves-effect">판매 시작하기</a>
              </div>
            </div>
          </div>

          <div id="forbidden">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <a href="#!" className="red lighten-2 white-text btn waves-effect">판매 시작하기</a>
              </div>
            </div>   
          </div>

          <div id="notAllowed">
            <div className="collection">
              <div className="collection-wrapper center">
                <p className="grey-text lighten-2">등록한 서비스가 없습니다</p>
                <p className="grey-text lighten-2">서비스를 등록하여 판매를 시작해보세요!</p>
                <a href="#!" className="red lighten-2 white-text btn waves-effect">판매 시작하기</a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default MyServices;