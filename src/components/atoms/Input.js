import React from 'react';
import PropTypes from 'prop-types';

export default function Input({name, type="text", value, onChange, placeholder, required, prependLabel, helpText}) {
     return (
        <div className="col-md-4 mb-3">
            <label>{name}</label>
            <div className="input-group">
                {prependLabel && <div className="input-group-prepend">
                    <span className="input-group-text">{prependLabel}</span>
                </div>}

                <input type={type} className="form-control" placeholder={placeholder} required={required} onChange={onChange} value={value}/>
            </div>
            {helpText && <small id="emailHelp" className="form-text text-muted">{helpText}</small>}
      </div>
     );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    prependLabel: PropTypes.string,
    helpText: PropTypes.string
}