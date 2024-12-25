import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-800">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <h1 className="font-bold text-xl text-white mb-6">Admin Panel</h1>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            >
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/mahasiswa" 
              className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            >
              <span className="ms-3">Mahasiswa</span>
            </Link>
          </li>
          <li>
            <Link
              to="/login" 
              className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            >
              <span className="ms-3">Log out</span>
            </Link>
          </li>
          <li>
            <Link
              to="/test-json" 
              className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700"
            >
              <span className="ms-3">Cek Response JSON</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
