import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="home" to="/">
        <div className="logo">nk</div>
      </NavLink>
      <div>
      <NavLink className="navlink" to="/">
        <button className="nav-button"> COLLECTIONS </button>
      </NavLink>
       <NavLink className="navlink" to="/pins"> <button className="nav-button"> PINS </button></NavLink>
       <NavLink className="navlink"
       to="/login"> <button className="nav-button"> LOGIN  </button></NavLink>
       <NavLink className="navlink"
       to="/about">  <button className="nav-button"> INFO </button></NavLink>
       </div>
   </nav>
  )
}

export default NavBar;
