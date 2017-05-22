import React from 'react';

export default (props) => {

  return(
    <li className="message-detail">
      {props.message.content}
    </li>
  );
};
