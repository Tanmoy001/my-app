import React from 'react'
import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What is your return policy?',
    answer: 'You can return any item within 30 days of purchase with a receipt.'
  },
  {
    question: 'Do you offer technical support?',
    answer: 'Yes, we offer 24/7 technical support via chat, email, or phone.'
  },
  {
    question: 'Where are you located?',
    answer: 'We are headquartered in New York City, with offices worldwide.'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order ships, you will receive an email with a tracking link.'
  }
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <div className='underline-red'>{item.question}</div>
              <span className="faq-icon">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}