import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({message, type, children}) {
     return (
     <div className={`alert alert-${type} mt-3`} role="alert">
         {children ? children : <p>{message}</p>}
     </div>
     );
}

Alert.propTypes = {
    type: PropTypes.oneOf(["warning", "danger", "success"]),
    message: PropTypes.string,
    children: PropTypes.element
}