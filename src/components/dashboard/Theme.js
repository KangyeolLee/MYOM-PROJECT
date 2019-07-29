import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './theme.css';
import ThemeSummary from '../service/summary/ThemeSummary';

class Theme extends Component {
  render() {
    const {themas} = this.props;
    return (
      <div className="container Theme">
        <p className='center flow-text'>This is the Thema area</p>
        <div className="row">
          { themas && themas.map(item => {
            return (
              <Link to={'/thema/' + item.title} key={item.src} >
                <ThemeSummary thema={item} />
              </Link>
            )
          })}

        </div>
      </div>
    )
  }
}

export default Theme;