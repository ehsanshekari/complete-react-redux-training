import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to ="/">HOME</Link><br/>
      <Link to ="/about">About</Link><br/>
      <Link to ="/profile/34">Profile</Link><hr/>
    </nav>
  )
}

export default Navbar