import React from 'react';
import './footer.css';
import { FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2>Renu Sharma Foundation</h2>
          <p><strong>Head Office:</strong> Lorem ipsum lorem ipsum lorem ipsum</p>
          <p><strong>Phone:</strong> +91-111-111-1111</p>
          <p><strong>Fax:</strong> 022-2222222</p>
          <p><strong>Email:</strong> info@renusharmafoundation.com</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link to="/lorem">Lorem Ipsum</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/employeer">Employeer</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h3>Others</h3>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-col">
          <h3>About Us</h3>
          <Link to="/milestone">Milestone</Link>
          <Link to="/webmail">Web Mail</Link>
          <Link to="/board">Board of Directors</Link>
          <Link to="/senior">Senior Management</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2024 All rights reserved</p>
        <div className="social-icons">
          <FaInstagram />
          <FaTelegramPlane />
          <FaTiktok />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
