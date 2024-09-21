import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faShieldAlt, faHeadset, faStar } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="features">
          <div className="feature-item">
            <FontAwesomeIcon icon={faStar} />
            <p>High Quality<br /><span>crafted from top materials</span></p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faShieldAlt} />
            <p>Warranty Protection<br /><span>Over 2 years</span></p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faShippingFast} />
            <p>Free Shipping<br /><span>Order over $150</span></p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHeadset} />
            <p>24 / 7 Support<br /><span>Dedicated support</span></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <h3>Funiro.</h3>
          <p className='adress'>400 University Drive Suite 200 Coral<br /> Gables,FL 33134 USA</p>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-help">
          <h4>Help</h4>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Enter Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      
      <div className="footer-bottom-line">
        <p>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;