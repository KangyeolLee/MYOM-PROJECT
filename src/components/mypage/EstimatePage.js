import React, { Component } from 'react'
import M from 'materialize-css';
import './estimatePage.css';

class EstimatePage extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { pathname } = this.props;
    const selectorValueForEstimate = pathname.includes('mypageBuyer');
    const finalResult = selectorValueForEstimate
      ? (
        <div className="estimate">
          <div className="row">
            <h4>나의 견적 요청</h4>
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3"><a href="#request1">승인대기중(0)</a></li>
                <li className="tab col s3"><a href="#request2">요청중(0)</a></li>
                <li className="tab col s3"><a href="#request3">마감(0)</a></li>
                <li className="tab col s3"><a href="#request4">비승인(0)</a></li>
              </ul>
            </div>

            <div id="request1" className="collection col s12 active">
              <div className="collection-item-wrapper center">
                <p className='grey-text'>등록된 맞춤 견적 요청이 없습니다.</p>
                <p className='grey-text'>요청글을 등록하여 맟춤 견적을 받아보세요!</p>
                <img width='300' src="../img/sample.png" alt=""/><br/>
                <div className="btn-large waves-effect">맞춤견적 요청하기</div>
              </div>
            </div>

            <div id="request2" className="collection col s12 active">
              <div className="collection-item-wrapper center">
                <p className='grey-text'>등록된 맞춤 견적 요청이 없습니다.</p>
                <p className='grey-text'>요청글을 등록하여 맟춤 견적을 받아보세요!</p>
                <img width='300' src="../img/sample2.png" alt=""/><br/>
                <div className="btn-large waves-effect">맞춤견적 요청하기</div>
              </div>
            </div>

            <div id="request3" className="collection col s12 active">
              <div className="collection-item-wrapper center">
                <p className='grey-text'>등록된 맞춤 견적 요청이 없습니다.</p>
                <p className='grey-text'>요청글을 등록하여 맟춤 견적을 받아보세요!</p>
                <img width='300' src="../img/sample3.png" alt=""/><br/>
                <div className="btn-large waves-effect">맞춤견적 요청하기</div>
              </div>
            </div>

            <div id="request4" className="collection col s12 active">
              <div className="collection-item-wrapper center">
                <p className='grey-text'>등록된 맞춤 견적 요청이 없습니다.</p>
                <p className='grey-text'>요청글을 등록하여 맟춤 견적을 받아보세요!</p>
                <img width='300' src="../img/sample4.png" alt=""/><br/>
                <div className="btn-large waves-effect">맞춤견적 요청하기</div>
              </div>
            </div>

          </div>
        </div>
      )
      : (
        <div className="estimate">
          <div className="row">
            <h4>나의 보낸 견적</h4>
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3"><a href="#request1">승인대기중(0)</a></li>
                <li className="tab col s3"><a href="#request2">요청중(0)</a></li>
                <li className="tab col s3"><a href="#request3">마감(0)</a></li>
                <li className="tab col s3"><a href="#request4">비승인(0)</a></li>
              </ul>
            </div>

            <div id="request1" className="collection col s12 active">
              <div className="collection-item-wrapper center">
                <p className='grey-text'>맞춤견적을 제안한 내역이 없습니다.</p>
                <img width='300' src="../img/sample.png" alt=""/><br/>
                <div className="btn-large waves-effect">맞춤견적 요청하기</div>
              </div>
            </div>

            <div id="request2" className="collection col s12 active">
              <div className="collection-item-wrapper center">
                <p className='grey-text'>맞춤견적을 제안한 내역이 없습니다.</p>
                <img width='300' src="../img/sample2.png" alt=""/><br/>
                <div className="btn-large waves-effect">맞춤견적 요청하기</div>
              </div>
            </div>

            <div id="request3" className="collection col s12 active">
              <div className="collection-item-wrapper center">
                <p className='grey-text'>맞춤견적을 제안한 내역이 없습니다.</p>
                <img width='300' src="../img/sample3.png" alt=""/><br/>
                <div className="btn-large waves-effect">맞춤견적 요청하기</div>
              </div>
            </div>

            <div id="request4" className="collection col s12 active">
              <div className="collection-item-wrapper center">
                <p className='grey-text'>맞춤견적을 제안한 내역이 없습니다.</p>
                <img width='300' src="../img/sample4.png" alt=""/><br/>
                <div className="btn-large waves-effect">맞춤견적 요청하기</div>
              </div>
            </div>

          </div>
        </div>
      );

    return (
      <div>{ finalResult }</div>
    )
  }
}

export default EstimatePage;