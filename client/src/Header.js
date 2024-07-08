import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/tasks">Task Manager</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;