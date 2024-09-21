import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='picture'>
      <img src="./images/scandinavian-interior-mockup-wall.png" alt="S" />
    <div className="categories-container">
    <h2>Categories</h2>
    <div className="categories-grid">
      <Link to="/electronics" className="category-item">
        <img src="./images/Home-PNG-Image.png" alt="electronics" />
        <p>electronics</p>
      </Link>
      <Link to="/jewelery" className="category-item">
        <img src="./images/je.jpg" alt="jewelery" />
        <p>jewelery</p>
      </Link>
      <Link to="/Men's Clothing" className="category-item">
        <img src="./images/OIP.jpeg" alt="Men's Clothing" />
        <p>Men's Clothing</p>
      </Link>
      <Link to="/Women's Clothing" className="category-item">
        <img src="./images/Fashion Clothes.jpg" alt="Women's Clothing" />
        <p>Women's Clothing</p>
      </Link>
    </div>
  </div>
  </div>

  );
};

export default HomePage;
