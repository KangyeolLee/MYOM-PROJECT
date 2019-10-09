import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const RequestResult = (props) => {
  const { myRequest } = props;
  let requestData;
  if(myRequest !== undefined) requestData = Object.values(myRequest)[0].requestData;

  return (
    <div className="container">
    {
      (requestData !== undefined)
        ? (
          <div className="row">
            <h5 className="col s12 scorehvy">다녀온 여행지</h5>
            <span className="col s12">{requestData.tripLocation}</span>

            <h5 className="col s12 scorehvy">편집스타일</h5>
            <span className="col s12"></span>
          </div>
        )
        : (
          <div className="row">
            <h5 className="col s12">아직 작성된 요청서가 없습니다.</h5>
          </div>
        )
    }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    myRequest: state.firestore.data.myRequest,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      { collection: 'request', where: ['purchased_id', '==', props.purchased_id], storeAs: 'myRequest'}
    ]
  })
)(RequestResult);