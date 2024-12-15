import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
