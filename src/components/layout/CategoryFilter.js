import React, { Component } from 'react'
import M from 'materialize-css';
import './categoryFilter.css';

class CategoryFilter extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="navbar-fixed categoryFilter">
        <nav>
          <div className="nav-content"> {/* DropDown 관련 너비설정 또는 z-index 재설정 필요 */}
            <ul className="tabs white"> {/* 현재 css 통해서 강제 너비 설정 중 */}
              <li className="tab"><a href='a!' className='active'>Filter1</a></li>
              <li className="tab"><a href='a!'>Filter2</a></li>
              <li className="tab"><a href='a!'>Filter3</a></li>
              <li className="tab"><a href='a!'>Filter4</a></li>
              <li className="tab"><a href='a!'>Filter5</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default CategoryFilter;