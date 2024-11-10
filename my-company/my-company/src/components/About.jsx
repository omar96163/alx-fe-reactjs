import React from 'react';

const About = () => {
  const pageStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#e9ecef',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        We are a dedicated team committed to providing exceptional services to our clients. Our company was founded with the goal of delivering high-quality solutions that meet the evolving needs of businesses worldwide. With a strong focus on innovation, customer satisfaction, and professionalism, we strive to make a positive impact in everything we do.
      </p>
    </div>
  );
};

export default About;
