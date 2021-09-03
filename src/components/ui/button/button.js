import React from 'react';


const Button = ({ type, disabled, onClick, children }) => {
  const classes = [
    'button',
    `button--${type}`,
  ];

  return (
    <button
      className={ classes.join(' ') }
      onClick={ onClick }
      disabled={ disabled }
    >
      { children }
    </button>
  );
};

export default Button;
