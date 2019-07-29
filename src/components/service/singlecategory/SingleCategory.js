import React, { Component } from 'react';
import RecommendService from '../servicedetails/RecommendService';
import { connect } from 'react-redux';

class SingleCategory extends Component {
  render() {
    const thema = this.props.match.params.id;
    const { specific_themas } = this.props;
    console.log(specific_themas)

    return (
      <div className="container">
        <h2 className='red-text text-darken-3'>{thema}</h2>
        <ul className="collection">
          { specific_themas && specific_themas.map(item => {
            return (
              <li className="collection-item" key={item.category}>
                <h4>{item.category}</h4>
                <div className="row">
                  { item.contents && item.contents.map(content => {
                    return (
                      <RecommendService recommendable={content} key={content.key} />
                    )
                  })}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    specific_themas: state.services.specific_themas
  }
}
export default connect(mapStateToProps)(SingleCategory);