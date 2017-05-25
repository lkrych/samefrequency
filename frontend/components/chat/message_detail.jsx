import React from 'react';

import { minnifyIcon } from '../../util/icon_util';

export default (props) => {
  const time = new Date(props.message.updated_at);
  return(
    <li className="message-detail">
      <img className="message-icon" src={minnifyIcon(props.icon)}/>
      <h5 className="message-sender">{props.message.author.username}</h5>
      <p className="message-time">{time.toLocaleTimeString()}</p>
      <p className="message-content">{props.message.content}</p>
    </li>
  );
};
