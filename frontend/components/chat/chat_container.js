import { connect } from 'react-redux';

import Chat from './chat';
import {receiveMessages, addMessageToStation} from '../../actions/chat_actions';

const mapStateToProps = state => (
  {
    messages: state.chat
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveMessages: (stationId) => dispatch(
      receiveMessages(stationId)),
    addMessageToStation: (message, stationId) => dispatch(
       addMessageToStation(message, stationId))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
