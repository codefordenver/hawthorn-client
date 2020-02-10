import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
    name,
    type="text",
    value,
    onChange,
    placeholder,
    required,
    prependLabel,
    helpText
    }) {
     return (
        <div>
            {name && <label>{name}</label>}
            <div className="input-group">

                {
                    prependLabel && (
                        <div className="input-group-prepend">
                            <span className="input-group-text">{prependLabel}</span>
                        </div>
                    )
                }

                <input 
                    className="form-control"
                    value={value}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                />
                {required && <small className="form-text text-danger">* required</small>}
            </div>
            {helpText && <small className="form-text text-muted">{helpText}</small>}
      </div>
     );
}

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    prependLabel: PropTypes.string,
    helpText: PropTypes.string
}