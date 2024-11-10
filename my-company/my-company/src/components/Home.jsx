import React from 'react';

const Home = () => {
  const pageStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Welcome to Our Company!</h1>
      <p style={paragraphStyle}>We're excited to have you visit our website. Explore our services and learn more about us!</p>
    </div>
  );
};

export default Home;
