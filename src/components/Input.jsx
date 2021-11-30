import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, fieldValue = null, checked = null, onKeyUp = null, id, className = null,
  setFieldValue = null, type = 'text', readOnly = false, style = null }) => {
  const inputProps = {
    checked,
    value: fieldValue,
    id,
    onChange: ({ target: { value } }) => setFieldValue(value),
    type: type,
    readOnly: readOnly,
    onKeyUp,
    className,
  };

  return (
    <div>
      <label htmlFor={id} style={style}>
        {name}
        <div>
          <input {...inputProps} />
        </div>
      </label>
    </div>
  );
};

Input.defaultProps = { type: 'text', setFieldValue: null, readOnly: false, fieldValue: null, checked: null };

Input.propTypes = {
  name: PropTypes.string.isRequired,
  setField: PropTypes.func,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default Input;
