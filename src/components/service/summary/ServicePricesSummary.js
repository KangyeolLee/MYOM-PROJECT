import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class ServicePricesSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { service_id, price, prefix } = this.props;
  
    return (
      <div className="price-wrapper row notoSans">
        <ul className="tabs col s12">
          <li className="tab col s4"><a href={"#BASIC" + prefix} className="tab-title">BASIC</a></li>
          <li className="tab col s4"><a href={"#PRO" + prefix} className="tab-title">PRO</a></li>
          <li className="tab col s4 disabled"><a href="#PREMIUM" className="tab-title">PREMIUM</a></li>
        </ul>

        {
          price.length && price.map(item => (
            <div id={item.type + prefix} key={item.type}>
              <ul className="timeline">
                <li className='col s12'>
                  <h6 className='basic-title col s12'>{item.type} 소개</h6>
                  <p className="basic-intro col s12">{item.intro}</p>
                </li>

                <div className="col s11 divider"></div>

                <li className='col s12'>
                  <h6 className='col s12 basic-title'>옵션 소개</h6>
                  <div className="options row">
                    {
                      item.chips.map(chip => (
                        <span key={chip} className="col s6 option-text"><div className="circle-icons"></div> {chip}</span>
                      ))
                    }
                  </div>
                </li>

                <div className="col s11 divider"></div>

                <li className='subOptions col s12'>
                  <div className="col s4">
                    <img className='img-icons left' src="/img/icons/calendar-icon.svg" alt="캘린더 아이콘"/>
                    <h6 className="suboption-title">작업기간</h6>
                    <p className='center'>{item.working}</p>
                  </div>
                  <div className="col s4">
                    <img className='img-icons left' src="/img/icons/hammer-icon.svg" alt="해머 아이콘"/>
                    <h6 className="suboption-title">수정횟수</h6>
                    <p className='center'>{item.modify}</p>
                  </div>
                  <div className="col s4">
                    <img className='img-icons left' src="/img/icons/play-icon.svg" alt="플레이 아이콘"/>
                    <h6 className="suboption-title">러닝타임</h6>
                    <p className='center'>{item.runningTime}</p>
                  </div>
                </li>
              </ul>        
              
              <div className='col s12'>
                <div className="col s12">
                  <Link className='buyBtn waves-effect waves-light btn col s12 z-depth-0' to={{ pathname: '/purchase/' + service_id, price: item}}>구매하기 ({item.price}원)            </Link>
                </div>
              </div>
              
            </div>
          ))
        }
        
      </div>
    )
    
    //     <Link to={{ pathname: '/purchase/' + service_id, 
    //       price: price.price, options: price.options}} className="btn waves-effect waves-light">구매하기</Link>

  }
}

export default ServicePricesSummary;