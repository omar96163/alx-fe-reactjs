import React, { useState } from 'react';

const Contact = () => {
  // Define state variables for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle changes in form fields
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Optionally, handle form submission (though we won't actually submit in this case)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  // Inline styles
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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const inputStyle = {
    margin: '10px',
    padding: '10px',
    width: '80%',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
          style={inputStyle}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
          rows="4"
          style={{ ...inputStyle, resize: 'none' }}
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
