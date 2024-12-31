import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Mahasiswa from "./Pages/Admin/Mahasiswa";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Admin/Dashboard";
import Register from "./Pages/Auth/Register";
import FetchJson from "./Pages/FetchJson";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mahasiswa"
          element={
            <ProtectedRoute>
              <Mahasiswa />
            </ProtectedRoute>
          }
        />
        <Route
          path="/test-json"
          element={
            <ProtectedRoute>
              <FetchJson />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
