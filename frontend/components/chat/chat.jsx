import React from 'react';
import MessageDetail from './message_detail';

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: ''};
    this.onInput = this.onInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    App.chatchannel = App.cable.subscriptions.create(
      { channel: "StationsChannel",
      station_id: this.props.station.id }, {
      received: (data) => {
        this.props.receiveMessages(data.content);
      }
    });
  }

  onInput(e){
    e.preventDefault();
    this.setState( { message: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    App.chatchannel.send(
      { content: this.state.message, chatroom_id: this.props.station.id,
      user_id: this.props.user.currentUser.id });
    this.setState( {message: ''});
    this.props.showAllMessages(this.props.station.id);
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

        <form className="chat-text-input" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type='text'
              className="form-control"
              onChange={this.onInput}
              value={this.state.message}>
            </input>
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}

export default Chat;
