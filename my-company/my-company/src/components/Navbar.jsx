import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    margin: '0',
  };

  const liStyle = {
    marginRight: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/about" style={linkStyle}>About</Link></li>
        <li style={liStyle}><Link to="/services" style={linkStyle}>Services</Link></li>
        <li style={liStyle}><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;