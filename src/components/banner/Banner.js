import React, { Component } from 'react'
import M from 'materialize-css';

class Banner extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return(
      <div class="parallax-container">
        <div class="parallax"><img src="img/sample.jpg" alt='sample' /></div>
      </div>
    )
  }
}

export default Banner;