import React from 'react';

import './Button.css';

const Button = ({onClickButton, children, styles}) => {
  return (
    <div className="btnContainer">
      <button onClick={() => onClickButton()} className="btn" style={{...styles}}>{children}</button>
    </div>
  )
}

export default Button;
