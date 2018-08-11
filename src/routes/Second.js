import React from 'react';
import { NavLink } from 'react-router-dom';

const Second = () => {
  return (
    <div>
      <h1>2nd page</h1>
      <NavLink to="/">Go Back</NavLink>
    </div>
  )
}

export default Second;
