import React from 'react'

const NetworkError = (props) => {
  return (
    <div className="alert alert-warning mt-3" role="alert">
      <p>We are sorry, an error occurred while {props.action}.</p>
      <p>Please try again in a little while, and let us know on <a href="/contact-us">our contact form</a>  because we might not know about this problem yet.  Thank you!</p>
    </div>
  )
}

export default NetworkError
