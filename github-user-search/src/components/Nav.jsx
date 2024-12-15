import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to="/ContactUs">ContactUs</Link>
      </nav>
    </>
  );
}

export default Nav;
