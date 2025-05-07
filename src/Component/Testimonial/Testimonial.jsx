import React from 'react';
import './Testimonials.css';
import testimonial from '../../assets/testimonial.png';
import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
    {
        text: 'Exceptional service! The White L Agency team created a stunning website for my client, exceeding all expectations. I highly recommend their expertise!',
        name: 'Nazmul Islam',
        avatar: { testimonial },
        rating: 5
    },
    {
        text: 'Impressive digital marketing results! This agency knows how to drive traffic and conversions. Their strategies have significantly boosted our online presence and sales.',
        name: 'Nazmul Islam',
        avatar: { testimonial },
        rating: 5
    },
    {
        text: 'Top-notch social media marketing! The team at this agency is adept at crafting engaging content and managing campaigns that resonate with our audience. A game-changer for our brand!',
        name: 'Nazmul Islam',
        avatar: { testimonial },
        rating: 5
    },
    {
        text: 'From concept to execution, they delivered targeted ad campaigns that generated tangible results. Trustworthy, reliable, and highly effective!',
        name: 'Nazmul Islam',
        avatar: { testimonial },
        rating: 5
    },
    {
        text: 'A partner you can count on! Whether web development, digital marketing, or social media management, this agency goes above and beyond to ensure our success. Couldn’t ask for better support!',
        name: 'Nazmul Islam',
        avatar: { testimonial },
        rating: 5
    },
    {
        text: 'Working with this White L Agency has been a breeze. They communicate clearly, meet deadlines, and consistently deliver high-quality work.',
        name: 'Nazmul Islam',
        avatar: { testimonial },
        rating: 5
    }
];

const renderCard = (item) => (
    <>
        <FaQuoteLeft style={{ color: "red" }} />
        <p className="testimonial-text">{item.text}</p>
        <div className="testimonial-footer">
            <img src={testimonial} alt={item.name} className="avatar" />
            <div className="testimonial-info">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-stars">
                    {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </span>
            </div>
        </div>
    </>
);

export const Testimonial = () => {
    return (
        <section className="testimonials-section container" id="testimonials">
            <h2 className="testimonials-title">
                People are <span>talking</span>
            </h2>
            <div className="testimonials-grid">
                {/* First column */}
                <div className="testimonial-card">{renderCard(testimonials[0])}</div>
                {/* Middle column */}
                <div className="middle-column">
                    <div className="testimonial-card middle-small">{renderCard(testimonials[1])}</div>
                    <div className="testimonial-card middle-large">{renderCard(testimonials[2])}</div>
                </div>
                {/* Third column */}
                <div className="testimonial-card">{renderCard(testimonials[3])}</div>
                <div className="testimonial-card">{renderCard(testimonials[4])}</div>
                <div className="testimonial-card">{renderCard(testimonials[5])}</div>
            </div>
        </section>
    );
};
