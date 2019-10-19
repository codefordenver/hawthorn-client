import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/conversations">Conversations</Link>
        </li>
        <li>
          <Link to="/login/init">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};
