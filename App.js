import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdminForm from './components/AdminForm';
import Experience from './components/Experience';
import './App.css'; // Create this for sidebar styles

function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3">
        <h4 className="text-white">My Dashboard</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link to="/components/AdminForm" className="nav-link text-white">Admin Form</Link>
          </li>
          <li className="nav-item">
            <Link to="/components/Experience" className="nav-link text-white">Experience</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content p-4 w-100">
        <Routes>
          <Route path="/components/AdminForm" element={<AdminForm />} />
          <Route path="/components/Experience" element={<Experience />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
