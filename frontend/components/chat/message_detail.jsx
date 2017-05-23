import React from 'react';

export default (props) => {
  const time = new Date(props.message.updated_at);
  return(
    <li className="message-detail">
      <h5 className="message-sender">{props.message.author.username}</h5>
      <p className="message-time">{time.toLocaleTimeString()}</p>
      <p className="message-content">{props.message.content}</p>
    </li>
  );
};
