import React from 'react'

export const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <a class="navbar-brand" href="/">Hawthorn</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#primaryNavigation" aria-controls="primaryNavigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="primaryNavigation">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/communities">Browse Communities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About Hawthorn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/code-of-conduct">Code of Conduct</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact-us">Contact Us</a>
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
