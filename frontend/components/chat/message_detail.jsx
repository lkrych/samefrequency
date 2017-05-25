import React from 'react';

import { minnifyIcon } from '../../util/icon_util';

export default (props) => {
  const time = new Date(props.message.updated_at);
  const sender = props.message.author.username === null || props.message.author.username === '' ?
  props.message.author.email : props.message.author.username;
  return(
    <li className="message-detail">
      <img className="message-icon" src={minnifyIcon(props.message.author.image_url)}/>
      <h5 className="message-sender">{sender}</h5>
      <p className="message-time">{time.toLocaleTimeString()}</p>
      <p className="message-content">{props.message.content}</p>
    </li>
  );
};
