import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/profile/235">Profile</Link>
      <br />
    </nav>
  );
}

export default Navbar;
