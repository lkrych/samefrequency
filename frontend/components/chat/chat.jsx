import React from 'react';
import MessageDetail from './message_detail';

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: '',
                  chatLength: 10,
                  self: this.props.user.currentUser === null || this.props.user.currentUser === '' ?
                  this.props.user.currentUser.email : this.props.user.currentUser.username};
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
    this.props.showAllMessages(this.props.station.id, this.state.chatLength);
    $('.chat-list').scrollTop($('.chat-list')[0].scrollHeight);
    //send message on entrance to room
    window.App.chatchannel.send(
      { content: `${this.state.self} has entered the chatroom`,
       chatroom_id: this.props.station.id,
      user_id: this.props.user.currentUser.id });
  }

  componentWillReceiveProps(newProps){
    if(newProps.user.currentUser.image_url !== this.props.user.currentUser.image_url ||
      newProps.user.currentUser.username !== this.props.user.currentUser.username ||
    newProps.user.currentUser.email !== this.props.user.currentUser.email){
      this.props.showAllMessages(this.props.station.id, this.state.chatLength);
    }
  }

  componentDidUpdate(){
    $('.chat-list').scrollTop($('.chat-list')[0].scrollHeight);
  }

  componentWillUnmount(){
    //send message on exit of room
    window.App.chatchannel.send(
      { content: `${this.state.self} has left the chatroom`,
       chatroom_id: this.props.station.id,
      user_id: this.props.user.currentUser.id });

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
    this.setState( {message: '',
                    chatLength: this.state.chatLength + 1});
  }
  render(){
    const messages = this.props.messages.map(message => (
      <MessageDetail
        key={message.id}
        message={message}
        members={this.props.members}/>
    ));
    return(
      <div className="chat-container">
        <h4 className="chat-header">
          Chat about {this.props.station.name}
        </h4>
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
            <button className="btn btn-primary chat-icon"><span>Send</span></button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default Chat;
