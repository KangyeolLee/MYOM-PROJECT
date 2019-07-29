import React, { Component } from 'react'

class RegisterProvider extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  handleChange = (e) => {
    console.log(e);
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">적어라</h5>
          <div className="input-field">
            <label htmlFor="something">something</label>
            <input type="text" id='something' onChange={this.handleChange} />
          </div>
          <h5 className="grey-text text-darken-3">무엇을</h5>
          <div className="input-field">
            <label htmlFor="whatthing">whatthing</label>
            <input type="text" id='whatthing' onChange={this.handleChange} />
          </div>
          <h5 className="grey-text text-darken-3">어디에</h5>
          <div className="input-field">
            <label htmlFor="whereever">whereever</label>
            <input type="text" id='whereever' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">신청하기</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterProvider;