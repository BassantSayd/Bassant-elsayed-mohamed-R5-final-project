import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SingleCartPage = ({ cartId }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/carts/${cartId}`);
        setCart(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setLoading(false);
      }
    };

    fetchCart();
  }, [cartId]);

  if (loading) return <p>Loading cart...</p>;

  return (
    <div>
      <h1>Cart ID: {cart.id}</h1>
      <p>User ID: {cart.userId}</p>
      <p>Date: {cart.date}</p>
      <ul>
        {cart.products.map(product => (
          <li key={product.productId}>
            Product ID: {product.productId}, Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleCartPage;