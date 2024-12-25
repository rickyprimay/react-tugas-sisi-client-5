import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <Sidebar />

      <main className="ml-64 mt-16 p-6">
        {children}
      </main>

      <Footer />
      
    </div>
  );
};

export default AdminLayout;