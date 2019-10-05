import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../services/auth'

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <a href={auth.authorizeUri()}>Login</a>
        </li>
      </ul>
    </nav>
  );
};
