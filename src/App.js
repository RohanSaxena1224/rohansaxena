import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';  // This will be our About page
import Personal from './Personal';
import './App.css';

function App() {
  return (
      <Router>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="nav-item">about</Link>
            <Link to="/projects" className="nav-item">projects</Link>
            <Link to="/personal" className="nav-item">personal</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<div>Building 🔨⚙️</div>} />
            <Route path="/personal" element={<Personal />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
