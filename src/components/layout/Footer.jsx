import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="footer">
      <div id="footer-container" className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="footer-section">
              <h2>The Burger Shop</h2>
              <p>Elevating Flavors, One Bite at a Time!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#menu">Menu</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h4>Follow Us</h4>
              <ul className="footer-social">
                <li>
                  <a href="https://www.instagram.com">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <AiFillYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2023 The Burger Shop, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;