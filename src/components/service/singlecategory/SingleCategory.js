import React, { Component } from 'react'

class SingleCategory extends Component {
  render() {
    const thema = this.props.match.params.id;
    return (
      <div className="container">
        <h2 className='red-text text-darken-3'>{thema}</h2>

        {/* component 단위로 재설계 필요 - 테마별 */}
        <div className="row">
          <h4>THEMA 01</h4>
          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임1</span>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임2</span>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임3</span>
              </div>
            </div>
          </div>

        </div>

        {/* component 단위로 재설계 필요 - 테마별 */}
        <div className="row">
          <h4>THEMA 02</h4>
          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임1</span>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임2</span>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임3</span>
              </div>
            </div>
          </div>

        </div>

        {/* component 단위로 재설계 필요 - 테마별 */}
        <div className="row">
          <h4>THEMA 03</h4>
          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임1</span>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임2</span>
              </div>
            </div>
          </div>

          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">모임3</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default SingleCategory;