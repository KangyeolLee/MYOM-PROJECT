import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class ServicePricesSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const {autoInit, index, price} = this.props;
    return (
      <div id={`${'priceTag' + index}`} >
        <h5>{price.price}</h5>
        <div className="divider"></div>
        <p>{price.contents}</p>
        <div className="row">
          <div className="col s6">
            <p><i className="material-icons">check</i>자막</p>
            <p><i className="material-icons">check</i>편집</p>
          </div>
          <div className="col s6">
            <p><i className="material-icons">check</i>음악</p>
            <p><i className="material-icons">check</i>FHD</p>
          </div>
        </div>
        <Link to={{ pathname: '../../purchase', price: price.price}} className="btn waves-effect waves-light">구매하기</Link>
      </div>  
    )
  }
}

export default ServicePricesSummary;