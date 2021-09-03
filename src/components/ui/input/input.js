import React from 'react';

import './input.css';


const Input = ({
  inputType = 'text',
  label,
  value,
  name,
  errorMessage,
  onChange }) => {
  const id = `${inputType}-${Math.random().toString().substr(2, 6)}`;

  const error = errorMessage
    ? <span className="input__error">{ errorMessage }</span>
    : null;

  const classes = [
    'input',
  ];

  if (errorMessage) {
    classes.push('input--error');
  }

  return (
    <div className={ classes.join(' ') }>
      <label
        htmlFor={ id }
        className="input__label"
      >
        { label }
      </label>

      <input
        id={ id }
        type={ inputType }
        name={ name }
        value={ value }
        onChange={ onChange }
        className="input__field"
      />

      { error }
    </div>
  );
};

export default Input;
