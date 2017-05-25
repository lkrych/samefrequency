import React from 'react';
import MessageDetail from './message_detail';

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: '',
                  chatLength: 10};
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
        <div>Icons made by <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default Chat;
