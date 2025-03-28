import React from 'react';

import "./button.css";


function Button(props) {
  const {
    children,
    onClick,
    disabled,
  } = props;

  return (
    <button className="interactable" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
};

export default Button;