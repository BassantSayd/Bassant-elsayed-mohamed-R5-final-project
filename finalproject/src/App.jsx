import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Compontents/Header';
import Footer from './Compontents/Footer';
import HomePage from './Compontents/HomePage';
import ShopPage from './Compontents/ShopPage';

import CartPage from './Compontents/CartPage';
import ContactPage from './Compontents/ContactPage';
import ProductDetail from './Compontents/Electronics';
import "@fontsource/poppins";


import './App.css';




function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/electronics" element={<ShopPage />} />
          <Route path="/jewelery" element={<ShopPage />} />
          <Route path="/Men's Clohing" element={<ShopPage />} />
          <Route path="/Women's Clohing" element={<ShopPage />} />
          

          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;