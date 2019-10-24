import React, { Component, Fragment } from 'react'
import { Notification, condition, privacy } from './terms';
import M from 'materialize-css';

class CustomerActivator extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const category = this.props.category;
    return (
      <Fragment>
      { 
        (category === 'notifications')
          ? (
            <ul className="collapsible">
              <li>
                <div className="collapsible-header"><i className="material-icons">notifications</i>[공지] MYOM 홈페이지 베타서비스 론칭 안내 (19.10.17)</div>
                <div className="collapsible-body"><pre>{ Notification }</pre></div>
              </li>
            </ul>
          )
          : (category === 'question-answer')
            ? (
            <ul className="collapsible">
              <li>
                <div className="collapsible-header"><i className="material-icons">question_answer</i>대금 지급은 언제 받을 수 있나요?</div>
                <div className="collapsible-body">대금 지급은 소비자의 [구매확정] 이후에 진행됩니다. 또한 대금 지급은 매일 오전 11시 일괄적으로 진행됩니다.</div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">question_answer</i>의뢰인이 도중에 취소하는 경우 어떻게 되나요?</div>
                <div className="collapsible-body">의뢰인이 취소를 요청하는 경우, 전문가가 그 사유가 합당하다고 판단하여 요청을 받아들일 때 전체 작업이 취소됩니다. 전체 작업이 취소되는 경우 Time Stamp의 진행 경과에 따라 의뢰인은 취소 수수료를 지불해야하며, 전문가는 취소 수수료에서 서비스 이용료(수수료)를 제외한 금액을 지불 받을 수 있습니다.</div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">question_answer</i>의뢰인이 중간점검에서 구매를 취소하는 경우 어떻게 되나요?</div>
                <div className="collapsible-body">
                  중간점검에서 취소하는 경우는 크게 2가지로 나누어집니다.<br/><br/>
                  1) 의뢰인이 개인적인 사정으로 인해 취소를 요청하는 경우<br/>
                  전문가가 의뢰인의 취소 사유가 합당하다고 판단하는 경우, 전체 작업이 취소되며 Time Stamp 환불 규정에 따라 의뢰인은 50%의 취소 수수료를 지불합니다. 전문가는 이 금액에서 서비스 이용료를 제외한 금액을 지불 받을 수 있습니다.
                  <br/><br/>
                  2) 의뢰인이 작성한 요청서와 결과물이 크게 달라 취소를 요청하는 경우<br/>
                  의뢰인이 작성한 요청서의 내용이 결과물에 얼마나 반영되었는지 평가하는 타당성 심사가 진행됩니다. 타당성 심사를 통해 취소 여부가 결정되며, 의뢰인의 취소 요청이 타당하다고 판단되는 경우, 100% 환불이 이루어지고 이는 요청서를 제대로 반영하지 못한 전문가의 책임으로 간주하여 전문가는 작업에 대한 대금을 지급 받지 못합니다.
                </div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">question_answer</i>수수료는 어느 정도인가요?</div>
                <div className="collapsible-body">서비스 이용료(수수료)는 15%입니다.</div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">question_answer</i>의뢰인이 구매확정하지 않은 경우 어떻게 되나요?</div>
                <div className="collapsible-body">의뢰인이 작업 종료 이후 7일 간 수정, 취소 등의 의사를 표시하지 않는 경우 [구매확정]으로 처리됩니다. 대금 지급은 작업 종료 이후 8일째 오전 11시에 이루어집니다.</div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">question_answer</i>의뢰인이 금액에 맞지 않는 과도한 요청을 하는 경우 어떻게 하나요?</div>
                <div className="collapsible-body">요청서 확인 과정에서 의뢰인이 금액에 맞지 않는 과도한 요청을 한 경우, 전문가가 의뢰인에게 그에 맞는 추가 요금 결제 혹은 가격제 선택을 권할 것을 권장합니다.</div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">question_answer</i>참고영상으로는 어떤 영상이 좋나요?</div>
                <div className="collapsible-body">여행 영상을 편집한 것이 있으면 여행 영상이 좋습니다. 하지만 여행 영상을 편집한 적이 없는 경우, 자신의 영상 편집 스타일을 잘 보여줄 수 있는 영상을 추천합니다. 가능하다면 편집자 본인이 직접 여행을 다녀와서 편집을 하거나 일상을 간단하게 촬영하여 편집한 영상을 만들 것을 권장합니다.</div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">question_answer</i>영상은 어떻게 주고 받나요?</div>
                <div className="collapsible-body">상단메뉴 [메시지] 탭에서 구매자와 원본 영상 및 완성본을 주고 받을 수 있습니다.</div>
              </li>
            </ul>
          )
          : (
            <ul className="collapsible">
              <li>
                <div className="collapsible-header"><i className="material-icons">description</i>서비스 이용약관 (19.10.17)</div>
                <pre className="collapsible-body">{condition}</pre>
              </li>
              
              <li>
                <div className="collapsible-header"><i className="material-icons">description</i>편집자 이용약관 (19.10.17)</div>
                <pre className="collapsible-body"></pre>
              </li>
              
              <li>
                <div className="collapsible-header"><i className="material-icons">description</i>개인정보처리방침 (19.10.17)</div>
                <pre className="collapsible-body">{privacy}</pre>
              </li>
            </ul>
          )
      }
      </Fragment>
    )
  }
}

export default CustomerActivator;