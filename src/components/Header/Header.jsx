import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
   return (
      <nav className='nav-header'>
         <Link to="/">Home</Link>
         <Link to="/review">OrderReview</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/">Home</Link>
      </nav>
   );
};

export default Header;