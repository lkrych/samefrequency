import { connect } from 'react-redux';

import Chat from './chat';
import { receiveMessages, showAllMessages } from '../../actions/chat_actions';
import { selectAllMessages } from '../../util/chat_util';

const mapStateToProps = state => (
  {
    messages: selectAllMessages(state.chat.allMessages.messages),
    user: state.session
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveMessages: (stationId) => dispatch(
      receiveMessages(stationId)),
    showAllMessages: (stationId) => dispatch(
      showAllMessages(stationId)
    )

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
