import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </Link>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;