// src/components/OurWork.jsx
import React, { useRef } from 'react';
import './Portfolio.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import about_two from '../../assets/about_two.png';
import ourwork_one from '../../assets/ourwork_one.png';
import ourwork_two from '../../assets/ourwork_two.png';

const projectData = [
  { img: ourwork_one, title: 'Razer Insider' },
  { img: ourwork_two, title: 'Branding' },
  { img: about_two, title: 'Team Collaboration' },
];

const serviceData = [
  {
    category: 'Front-End',
    items: [
      'Design to HTML Conversions',
      'Custom JavaScript Coding',
      'React Development',
      'Vue JS Development',
      'HTML Email Templates',
      'HTML5 Banners',
    ],
  },
  {
    category: 'Website CMS',
    items: ['WordPress', 'Joomla', 'Drupal', 'Shopify', 'Magento'],
  },
  {
    category: 'E-Commerce',
    items: ['Shopify', 'WooCommerce', 'BigCommerce', 'Craft Commerce', 'Squarespace'],
  },
  {
    category: 'Digital Marketing',
    items: ['Google Ads', 'Branding', 'Facebook Ads', 'SEO', 'Social Media Marketing'],
  },
];

export const Portfolio = () => {
    const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.clientWidth : container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="ourwork-section ">
      {/* Our Work Carousel */}
      <h2 className="ourwork-title">Our Work</h2>
      <div className="carousel-wrapper container">
        <button className="carousel-btn left " onClick={() => scroll('left')}>
          <FaArrowLeft />
        </button>
        <div className="carousel" ref={carouselRef}>
          {projectData.map((proj, idx) => (
            <div key={idx} className="carousel-card">
              <img src={proj.img} alt={proj.title} />
              <div className="card-info">
                <span className="card-title">{proj.title}</span>
                <span className="card-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn right container"  onClick={() => scroll('right')}>
          <FaArrowRight />
        </button>
      </div>

      {/* What We Can Do For You */}
      <div className="services-section">
        <h2 className="services-title">
          What We Can Do <span>For You</span>
        </h2>
        <p className="services-subtitle">
          Let us handle the behind-the-scenes coding while you shine in the spotlight of success with our White L solutions and Digital Marketing expertise!
        </p>
        <div className="services-grid">
          {serviceData.map((svc, idx) => (
            <div key={idx} className="service-card">
              <h3 className="service-category">{svc.category}</h3>
              <ul>
                {svc.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
