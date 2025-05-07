
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Adjust the path as necessary
export const Footber = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top-bar">
                <div className='footer-top-bar-content'>
                    <h2>Let's Get Started Now!</h2>
                    <p>Harnessing years of expertise in delivering top-notch white-label services, we're primed to propel your business to new heights. Whether it's design, development, 
                        <br/>Ads runs or ongoing support, our web development and digital marketing agency has the prowess and proficiency to cater to your needs. Contact us today to 
                        <br/>discover the full potential of White L solutions and advertising Services
                    </p>
                    <button className='button-one'>Get A Conversation</button>
                    </div>
            </div>
            <div className='footer-logo'>
            <img src={logo} alt="Logo" className="footer-logo" />
            <h2>White L</h2>
            </div>
          <div className="footer-container">
            {/* Column 1: Get in Touch */}
            <div className="footer-col">
              <h4>Get in Touch</h4>
              <ul className="footer-links">
                <li><a href="#quote">Get a Quote</a></li>
                <li><a href="#call">Book a Call</a></li>
                <li><a href="#inquiry">Submit an Inquiry</a></li>
                <li><a href="#contact">Start a Conversation</a></li>
              </ul>
              <p className="footer-contact">Phone: +1 844 224 1228</p>
              <p className="footer-contact">Email: info@whitelabelagency.com</p>
              <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              </div>
            </div>
    
            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#work">Our Work</a></li>
                <li><a href="#agencies">For Agencies</a></li>
              </ul>
            </div>
    
            {/* Column 3: Our Services */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li><a href="#branding">Branding</a></li>
                <li><a href="#uxui">Ux/UI Design</a></li>
                <li><a href="#webdev">Web Development</a></li>
                <li><a href="#mobile">Mobile Apps Development</a></li>
                <li><a href="#social">Social Media Marketing</a></li>
              </ul>
            </div>
    
            {/* Column 4: Our Family */}
            <div className="footer-col">
              <h4>Our Family</h4>
              <p>White Label is a service. Some of our other related products and services</p>
              <p className="footer-copy">© Copyright 2024 <a href="https://whitelabelagency.com" target="_blank" rel="noopener noreferrer">whitelabelagency.com</a></p>
            </div>
          </div>
          <div className="footer-bottom-bar"></div>
        </footer>
      );
    };