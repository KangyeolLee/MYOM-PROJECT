import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class ServicePricesSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { index, price, service_id } = this.props;
    return (
      <div id={`${'priceTag' + index}`} >
        <h5>{price.price}</h5>
        <div className="divider"></div>
        <p>{price.contents}</p>
        <div className="row">
          <div className="col s12">
            {
              (price.options)       //  need for auth generated unique id? 
                ? price.options.map(item => <p key={item} className='col s6'><i className="material-icons">check</i>{ item }</p>)
                : (
                  <Fragment>
                  <p className="col s6"><i className="material-icons">check</i>자막</p>
                  <p className="col s6"><i className="material-icons">check</i>편집</p>
                  <p className="col s6"><i className="material-icons">check</i>음악</p>
                  <p className="col s6"><i className="material-icons">check</i>FHD</p>
                  </Fragment>
                )
            }
          </div>
        </div>
        <Link to={{ pathname: '/purchase/' + service_id, 
          price: price.price, options: price.options}} className="btn waves-effect waves-light">구매하기</Link>
      </div>  
    )
  }
}

export default ServicePricesSummary;