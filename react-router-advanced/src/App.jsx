import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import ProtectedRoute from "./ProtectedRoute";

function App() {

  const isAuthenticated = true
  
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/blog/1">BlogPost</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
