import React from 'react';
import MessageDetail from './message_detail';

class Chat extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    window.App.cable.subscriptions.create({ channel: "StationsChannel",
      station_id: this.props.station.id }, {
      received: (data) => {
        this.props.addMessageToStation(data.content);
      }
    });
  }
  render(){
    const messages = this.props.messages.map(message => (
      <MessageDetail key={message.id} message={message} />
    ));
    return(
      <div className="chat-container">
        <ul>
          {messages}
        </ul>
      </div>
    );
  }
}

export default Chat;
