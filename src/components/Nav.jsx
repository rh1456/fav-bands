import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/TheBeatles">The Beatles</Link>
      </li>
      <li></li>
      <li></li>
    </nav>
  )
}

export default Nav
