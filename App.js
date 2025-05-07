import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminForm from './components/AdminForm';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/components/AdminForm" element={<AdminForm />} />
        <Route path="/components/Experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
