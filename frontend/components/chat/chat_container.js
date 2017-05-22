import { connect } from 'react-redux';

import Chat from './chat';
import {receiveMessages, addMessageToStation} from '../../actions/chat_actions';

const mapStateToProps = state => (
  {
    messages: state.chat,
    user: state.session
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveMessages: (stationId) => dispatch(
      receiveMessages(stationId))

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
