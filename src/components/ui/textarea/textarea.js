import React from 'react';

import './textarea.css';


const Textarea = ({
  label,
  name,
  value,
  errorMessage,
  onChange }) => {
  const id = `textarea-${Math.random().toString().substr(2, 6)}`;

  const error = errorMessage
  ? <span className="textarea__error">{ errorMessage }</span>
  : null;

  const classes = [
    'textarea',
  ];

  if (errorMessage) {
    classes.push('textarea--error');
  }

  return (
    <div className={ classes.join(' ') }>
      <label
        htmlFor={ id }
        className="textarea__label"
      >
        { label }
      </label>

      <textarea
        id={ id }
        name={ name }
        value={ value }
        onChange={ onChange }
        className="textarea__field"
      />

      { error }
    </div>
  );
};

export default Textarea;
