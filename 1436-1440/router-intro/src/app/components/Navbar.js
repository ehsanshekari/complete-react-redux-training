import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/about">ABOUT</Link>
      <br />
      <Link to="/profile/2">PROFILE</Link>
      <hr />
    </nav>
  )
}

export default Navbar