import React, { Fragment } from 'react'
import { condition, privacy } from './terms';

const CustomerServiceDesc = () => {
  return (
    <Fragment>
    <h4>서비스 이용약관 2019.10.20</h4>
    <pre>{condition}</pre>

    <h4>개인정보 처리방침 2019.10.20</h4>
    <pre>{privacy}</pre>
    </Fragment>
  )
}

export default CustomerServiceDesc;