import React from 'react'
import PropTypes from 'prop-types'

const NetworkError = (props) => {
  const { action } = props
  let errorMessage = "We are sorry, an unexpected network has error occurred."
  if (action) {
    errorMessage = `We are sorry, an unexpected network has error occurred while ${action}.`
  }

  return (
    <div className="alert alert-warning mt-3" role="alert">
      {errorMessage}
      <p>Please try again in a little while, and let us know on <a href="/contact-us">our contact form</a>  because we might not know about this problem yet.  Thank you!</p>
    </div>
  )
}

NetworkError.propTypes = {
  action: PropTypes.string
}
NetworkError.defaultProps = {
  action: ""
}
export default NetworkError
