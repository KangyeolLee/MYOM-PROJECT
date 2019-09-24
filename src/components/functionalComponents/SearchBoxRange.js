import React from 'react'

const SearchBox_Range = ({num}) => {
  return (
    <form action="" className="row">
      <div className="input-field col s2">
        <select name="" id={"payment_range"+num}>
          <option value="1">닉네임</option>
          <option value="2">주문번호</option>
          <option value="3">이름</option>
          <option value="4">전화번호</option>
          <option value="5">이메일</option>
        </select>
        <label htmlFor={"payment_range"+num}>범위 선택</label>
      </div>

      <div className="input-field col s4">
        <input type="text" id={"coupon_code"+num}/>
        <label htmlFor={"coupon_code"+num}></label>
      </div>

      <div className="input-field col s2">
        <button className="btn gery darken-3 waves-effect"> 검색 </button>
      </div>
    </form>
  )
}

export default SearchBox_Range;