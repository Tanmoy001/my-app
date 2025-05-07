// Model.jsx
import React from 'react';
import './Model.css';
import design_one from '../../assets/design_one.png';
import design_two from '../../assets/design_two.png';
import design_three from '../../assets/design_three.png';
import design_four from '../../assets/design_four.png';
import design_five from '../../assets/design_five.png';
import design_six from '../../assets/design_six.png';

const tools = [
  { src: design_one, name: 'Adobe' },
  { src: design_two, name: 'Asana' },
  { src: design_three, name: 'Figma' },
  { src: design_four, name: 'WordPress' },
  { src: design_five, name: 'GitHub' },
  { src: design_six, name: 'Slack' }
];

const Model = () => {
  return (
    <section className="model-section">
    <div className="model-container">
      {/* Text Content */}
      <div className="model-text">
        <h2>
          Work & Collaborate With<br />
          The Tool Of Your Choice
        </h2>
        <p>
          Now, you can take complete control over your projects with the flexibility to choose the tools and processes that best fit your agency. We value your time like our own. We will learn the tricks and build a working method shaped around you.
        </p>
        <button className="model-button">See More</button>
      </div>

      {/* Images Grid */}
      <div className="model-grid">
        {tools.map(({ src, name }, idx) => (
          <div key={idx} className="tool-icon" aria-label={name} title={name}>
            <img src={src} alt={name} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
};
export default Model;

