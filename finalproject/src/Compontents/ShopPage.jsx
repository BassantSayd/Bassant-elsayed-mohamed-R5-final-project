import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShopPage.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    // Retrieve cart items from localStorage if they exist
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Fetch products
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Add to cart function
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
    console.log(`Added ${product.title} to cart!`);
  };

  return (
    <div className="shop-page">
      <div className="picture">
        <img src="/images/scandinavian-interior-mockup-wall.png" alt="Shop" />
      </div>

      <h2>Shop</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            {/* Add to Cart Button */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button>&laquo; Prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Next &raquo;</button>
      </div>
    </div>
  );
};

export default ShopPage;