import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      padding: '10px', 
      backgroundColor: '#333', 
      color: 'white',
      display: 'flex', // Ensures the links are displayed in a row
      justifyContent: 'space-between', // Distributes space between links
      alignItems: 'center', // Vertically aligns the items in the center
    }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
      <Link to="/services" style={{ color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
