import React, { Component } from 'react'

class RegisterProvider extends Component {
  handleSubmit = (e) => {
    e.preventDafault();
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
        </form>
      </div>
    )
  }
}

export default RegisterProvider;