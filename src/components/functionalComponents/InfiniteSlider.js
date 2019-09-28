import React, { Component, Fragment } from 'react';
import M from 'materialize-css';
import firebase from 'firebase/app';

class InfiniteSlider extends Component {
  state = {
    urls: [],
  }

  componentDidMount() {
    const { type, target } = this.props;
    const storageRef = (type === 'videos') 
      ? firebase.storage().ref('videos/references/' + target) 
      : firebase.storage().ref('images/testService/' + target);

    const carousels = document.querySelectorAll('.carousel');

    M.Carousel.init(carousels, {
      dist: 0,
      shift: 30,
      padding: 30,
      indicators: true,
    });

    storageRef.listAll().then((res) => {
      res.items.forEach((itemRef) => itemRef.getDownloadURL()
        .then((url) => {
          this.setState({
            urls: [...this.state.urls, url]
          })
        }));
    })
    .catch((err) => console.log(err));
  }

  render() {
    const { type } = this.props;

    return (
      <Fragment>
      { 
        (type === 'videos') 
          ? (
            <div className="col s12 video-wrapper">
              {
                (this.state.urls && this.state.urls.map(item => (
                  <video style={{width: '60%'}} controls key={item} >
                    <source src={item} type='video/mp4'/>
                  </video>
                )))

              }
            </div>
          )
          : null
      }
      </Fragment>
    )
  }
}

export default InfiniteSlider;