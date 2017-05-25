import { connect } from 'react-redux';

import { logout, updateUser } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => (
  {
    user: state.session.currentUser
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(logout()),
    processForm: (userId, userData) => dispatch(updateUser(userData))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
