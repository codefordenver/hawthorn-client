import React from 'react'

export const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <a className="navbar-brand" href="/">Hawthorn</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#primaryNavigation" aria-controls="primaryNavigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="primaryNavigation">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/communities">Browse Communities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Hawthorn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/code-of-conduct">Code of Conduct</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">Contact Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Account</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/login">Sign-in</a>
              <a className="dropdown-item" href="/register">Register</a>
              <a className="dropdown-item" href="/logout">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
