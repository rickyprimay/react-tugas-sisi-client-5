import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6 fixed top-0 right-0 left-64 z-30">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </header>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-800">
        <div className="h-full px-3 py-4 overflow-y-auto">
          <h1 className="font-bold text-xl text-white mb-6">Admin Panel</h1>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                <span className="ms-3">Mahasiswa</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
                <span className="ms-3">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 mt-16 p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6 fixed bottom-0 right-0 left-64">
        <p className="text-center">INI FOOTERR.</p>
      </footer>
    </div>
  );
};

export default AdminLayout;