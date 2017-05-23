import { connect } from 'react-redux';

import Chat from './chat';
import { receiveMessage, showAllMessages } from '../../actions/chat_actions';
import { selectAllMessages } from '../../util/chat_util';

const mapStateToProps = state => (
  {
    messages: selectAllMessages(state.chat.allMessages),
    user: state.session
  }
);

const mapDispatchToProps = dispatch => (
  {
    showAllMessages: (stationId) => dispatch(
      showAllMessages(stationId)),
    receiveMessage: (message) => dispatch(
      receiveMessage(message))

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
