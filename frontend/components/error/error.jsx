import React from 'react';

const Errors = ({errors, errorVid}) => (
  <ul className="errors-list">
    {errors}
    {errorVid}
  </ul>
);

export default Errors;
