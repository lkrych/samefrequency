import React from 'react';

import { minnifyIcon } from '../../util/icon_util';

export default (props) => {
  const time = new Date(props.message.updated_at);
  const member = props.members[props.message.author.id];
  const sender = member.username === null || member.username === '' ?
  member.email : member.username;
  
  return(
    <li className="message-detail">
      <img className="message-icon" src={minnifyIcon(member.image_url)}/>
      <h5 className="message-sender">{sender}</h5>
      <p className="message-time">{time.toLocaleTimeString()}</p>
      <p className="message-content">{props.message.content}</p>
    </li>
  );
};
