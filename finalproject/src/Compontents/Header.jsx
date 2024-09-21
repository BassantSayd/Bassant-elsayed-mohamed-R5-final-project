import React from 'react';
import './Header.css';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Header = () => (
  <header>
    
    <div className="logo">Furniro</div>
   
    <nav>
      <a href="/">Home</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact</a>
     
    </nav>
    <a href="/cart">🛒</a>
  </header>
);

export default Header;