import React from 'react';


const Errors = (props) => {
  return (
    <ul className="errors-list">
      {props.errors}
      {props.errorVid}
    </ul>
  );
};

export default Errors;
