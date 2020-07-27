import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='navlogo'>
        <img src='assets/images/logo.svg' alt='' />
      </div>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Cakes</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Birthday</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Anniversaries</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Kids Cake</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Fun Cake</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Grown Up</Link>
          </li>
        </ul>
      </div>
      <Link to='/'>
        <img src='assets/images/cart.svg' alt='' />
      </Link>
    </nav>
  );
};

export default Navbar;
