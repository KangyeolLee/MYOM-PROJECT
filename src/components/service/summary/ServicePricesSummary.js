import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class ServicePricesSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { service_id, price } = this.props;
  
    return (
      <div className="price-wrapper row">
        <ul className="tabs">
          <li className="tab col s4"><a href="#BASIC" className="scorehvy">BASIC</a></li>
          <li className="tab col s4"><a href="#PRO" className="scorehvy">PRO</a></li>
          <li className="tab col s4 disabled"><a href="#PREMIUM" className="scorehvy">PREMIUM</a></li>
        </ul>

        {
          price.length && price.map(item => (
            <div id={item.type} key={item.type}>
              <ul className="timeline">
                <li className='col s12'>
                  <h6 className='basic-title scorehvy col s12'>{item.type} 소개</h6>
                  <p className="basic-intro col s12">{item.intro}</p>
                </li>

                <div className="col s12 divider"></div>

                <li className='col s12'>
                  <h6 className='scorehvy col s12'>옵션 소개</h6>
                  <div className="options row">
                    {
                      item.chips.map(chip => (
                        <span key={chip} className="col s6"><i className="material-icons left">check</i> {chip}</span>
                      ))
                    }
                  </div>
                </li>

                <div className="col s12 divider"></div>

                <li className='col s12'>
                  <div className="col s6">
                    <h6 className="scorehvy">작업기간</h6>
                    <p><i className="material-icons left">schedule</i> {item.working}</p>
                  </div>
                  <div className="col s6">
                    <h6 className="scorehvy">수정횟수</h6>
                    <p><i className="material-icons left">build</i> {item.modify}</p>
                  </div>
                </li>
              </ul>

              <div className="col s12 divider"></div>          

              <h5 className="scorehvy col s12 center price">₩ {item.price}</h5>
              
              <Link to={{ pathname: '/purchase/' + service_id, price: item}}>
                <div className="buyBtn waves-effect waves-light col s12 btn scorehvy z-depth-0">구매하기</div>
              </Link>
              
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