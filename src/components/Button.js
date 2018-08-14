import React from 'react';

import './Button.css';

const Button = ({onClickButton, children}) => {
  return (
    <div className="btnContainer">
      <button onClick={() => onClickButton()} className="btn">{children}</button>
    </div>
  )
}

export default Button;
