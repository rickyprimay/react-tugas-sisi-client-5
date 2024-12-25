import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mahasiswa from './Pages/Admin/Mahasiswa';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/Admin/Dashboard';
import Register from './Pages/Auth/Register';
import FetchJson from './Pages/FetchJson';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mahasiswa" element={<Mahasiswa />} />
        <Route path="/test-json" element={<FetchJson />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
