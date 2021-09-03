import React from 'react';

import './select.css';


const Select = ({
  label,
  value,
  name,
  options,
  errorMessage,
  onChange }) => {
  const id = `select-${Math.random().toString().substr(2, 6)}`;

  const error = errorMessage
    ? <span className="select__error">{ errorMessage }</span>
    : null;

  const classes = [
    'select',
  ];

  if (errorMessage) {
    classes.push('select--error');
  }

  return (
    <div className={ classes.join(' ') }>
      <label
        htmlFor={ id }
        className="select__label"
      >
        { label }
      </label>

      <select
        id={ id }
        name={ name }
        value={ value }
        onChange={ onChange }
        className="select__field"
      >
        <option value="">- Please select purpose -</option>
        {
          options.map(({ value, label }, index) => {
            return (
              <option value={ value } key={ index }>{ label }</option>
            );
          })
        }
      </select>

      { error }
    </div>
  );
};

export default Select;
