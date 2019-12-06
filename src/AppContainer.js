import App from './App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initAll_joinedRooms } from './store/actions/chatAction';

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProsp = (dispatch) => {
  return {
    initAll_joinedRooms: () => dispatch(initAll_joinedRooms()),
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProsp)(App));