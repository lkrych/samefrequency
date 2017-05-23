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
    window.App.chatchannel = window.App.cable.subscriptions.create(
      { channel: "StationsChannel",
      station_id: this.props.station.id }, {
      received: (data) => {
        this.props.receiveMessage(data);
      }
    });
    this.props.showAllMessages(this.props.station.id);
  }

  componentWillUnmount(){
    window.App.cable.subscriptions.remove(window.App.chatchannel);
  }
  onInput(e){
    e.preventDefault();
    this.setState( { message: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    window.App.chatchannel.send(
      { content: this.state.message, chatroom_id: this.props.station.id,
      user_id: this.props.user.currentUser.id });
    this.setState( {message: ''});
  }
  render(){
    const messages = this.props.messages.map(message => (
      <MessageDetail key={message.id} message={message} />
    ));
    return(
      <div className="chat-container">
        <ul className="chat-list">
          {messages}
        </ul>

        <form className="chat-text-input" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type='text'
              className="form-control"
              onChange={this.onInput}
              value={this.state.message}>
            </input>
            <button className="btn btn-primary chat-icon">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Chat;
