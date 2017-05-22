import { connect } from 'react-redux';

import Chat from './chat';
import {receiveMessages, showAllMessages } from '../../actions/chat_actions';

const mapStateToProps = state => (
  {
    messages: state.chat,
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
