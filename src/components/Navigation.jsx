import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Check if user is logged in
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (!userProfile) {
      alert('Please login to access this feature');
      navigate('/login');
      return;
    }
    navigate(path);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Navigation</h2>
      <nav className="space-y-2">
        <button
          onClick={() => handleNavigation('/dashboard')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation('/symptom-checker')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Symptom Checker
        </button>
        <button
          onClick={() => handleNavigation('/find-tests')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Find Tests
        </button>
        <button
          onClick={() => handleNavigation('/free-tests')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Free Tests
        </button>
        <button
          onClick={() => handleNavigation('/chat')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Chat Assistant
        </button>
        <button
          onClick={() => handleNavigation('/appointments')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Appointments
        </button>
        <button
          onClick={() => handleNavigation('/health-records')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Health Records
        </button>
        <button
          onClick={() => handleNavigation('/notifications')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Notifications
        </button>
        <button
          onClick={() => handleNavigation('/help')}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Help & Support
        </button>
      </nav>
    </div>
  );
};

export default Navigation; 