import { connect } from 'react-redux';

import Chat from './chat';
import {showAllMessages, addMessageToStation} from '../../actions/chat_actions';

const mapStateToProps = state => (
  {
    messages: state.chat
  }
);

const mapDispatchToProps = dispatch => (
  {
    showAllMessages: (stationId) => dispatch(
      showAllMessages(stationId)),
    addMessageToStation: (message, stationId) => dispatch(
       addMessageToStation(message, stationId))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
