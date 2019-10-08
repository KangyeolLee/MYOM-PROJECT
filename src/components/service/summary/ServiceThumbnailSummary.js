import React, { Component } from 'react';
import M from 'materialize-css';

class ServiceThumbnailSummary extends Component {
  componentDidUpdate(prevState, prevProps) {
    if(prevProps !== this.props) {
      M.AutoInit();
    }
  }
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { files, no_init } = this.props;
    const materialboxed = (no_init === true) ? '' : 'materialboxed';
    const details = [files.details1, files.details2, files.details3, files.details4, files.details5].filter(item => item !== undefined);

    return (
      <div className='thumbnail row'>
        <div className="thumb-img col xl9 l9 m9 s12">
          <img src={files.thumbnail} alt="" className={"thumb " + materialboxed}/>
        </div>
        
        
        {
          (details.length)
            ? details.map((imgURL, index) => {
              if(index <= 2) return (
                <div key={imgURL + index} className="side-img col xl3 l3 m3 s4">
                  <img src={imgURL} alt="" className={"side " + materialboxed} />             
                </div>
              )
            })
            : <div className="side-img col xl3 l3 m3 s12"></div>
        }
        

        { details[3] ? <div className='under-side-img'><img src={details[3]} alt="" className={'col xl6 l6 m6 s6 under-side ' + materialboxed}/></div> : null }
        { details[4] ? <div className='under-side-img'><img src={details[4]} alt="" className={'col xl6 l6 m6 s6 under-side ' + materialboxed}/></div> : null }
      </div>
    )
  }
}

export default ServiceThumbnailSummary;