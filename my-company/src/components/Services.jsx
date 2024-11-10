import React from 'react';

const Services = () => {
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

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    fontSize: '18px',
    color: '#555',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const listItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Our Services</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>Web Design & Development</li>
        <li style={listItemStyle}>Mobile App Development</li>
        <li style={listItemStyle}>SEO Optimization</li>
        <li style={listItemStyle}>Consulting & Strategy</li>
        <li style={listItemStyle}>Branding & Marketing</li>
      </ul>
    </div>
  );
};

export default Services;
