import React from "react";
import PropTypes from 'prop-types';

export default function Button({type, onClick, disabled, loading, text}) {
    return (
            <button
            className={`btn btn-${type}`}
            disabled={disabled || loading}
            onClick={onClick}
            >
                {loading && <span className="spinner-border spinner-border-sm" />}
                {text}
            </button>

    )
}

Button.propTypes = {
    type: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link"
    ]).isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
}