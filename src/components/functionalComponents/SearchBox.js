import React from 'react'

const SearchBox = ({num}) => {
  return (
    <form action="" className="row">
      <div className="input-field col s2">
        <input id={'startsDate' + num} type="text" className="datepicker"/>
        <label htmlFor={'startsDate' + num}>~부터<i className="material-icons right">date_range</i> </label>
      </div>

      <div className="input-field col s2">
        <input id={'startsDate' + num} type="text" className="datepicker"/>
        <label htmlFor={'startsDate' + num}> ~까지<i className="material-icons right">date_range</i> </label>
      </div>

      <div className="input-field col s4">
        <input type="text" id="search"/>
        <label htmlFor="search"><i className="material-icons left">search</i>서비스 제목</label>
      </div>

      <div className="input-field col s2">
        <button className="btn gery darken-3 waves-effect"> 검색 </button>
      </div>

    </form>
  )
}

export default SearchBox;