import React, { Component } from 'react';
import M from 'materialize-css';

class ServiceThumbnailSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { files } = this.props;
    const details = [files.details1, files.details2, files.details3, files.details4, files.details5].filter(item => item !== undefined);
    return (
      <div className='thumbnail row'>
        <div className="thumb-img col s9">
          <img src={files.thumbnail} alt="" className="thumb materialboxed"/>
        </div>
        
        <div className="side-img col s3">
          {
            (details.length)
              ? details.map((imgURL, index) => {
                if(index <= 2) return <img src={imgURL} alt="" className="side materialboxed" key={imgURL}/>
              })
              : null
          }
        </div>

        { details[3] ? <img src={details[3]} alt="" className="under-side col s6 materialboxed"/> : null }
        { details[4] ? <img src={details[4]} alt="" className="under-side col s6 materialboxed"/> : null }
      </div>
    )
  }
}

export default ServiceThumbnailSummary;