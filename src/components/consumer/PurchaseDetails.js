import React from 'react'

const PurchaseDetails = () => {
  return (
    <div className="container">
      <div className="collection">
        <div className="collection-item">HI</div>
      </div>
      <table className="basic-purchase">
        <thead>
          <tr>
            <th>옵션</th>
            <th>작업일</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>옵션1</p><p>옵션2</p><p>옵션3</p></td>
            <td>5일</td>
            <td>150,000원</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default PurchaseDetails;