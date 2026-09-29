import React from 'react';
import { useNavigate } from 'react-router-dom';
import AIChatbot from './AIChatbot';
import GovSchemes from './GovSchemes';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    navigate('/login');
  };

  const handleNavigation = (path) => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (!userProfile) {
      alert('Please log in to access this feature');
      navigate('/login');
      return;
    }
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">HealthBridge Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Home Button */}
          <button
            onClick={() => handleNavigation('/dashboard')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Home</h3>
                <p className="text-gray-600">Return to dashboard</p>
              </div>
            </div>
          </button>

          {/* Symptom Checker */}
          <button
            onClick={() => handleNavigation('/symptom-checker')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Symptom Checker</h3>
                <p className="text-gray-600">Check your symptoms</p>
              </div>
            </div>
          </button>

          {/* Find Tests */}
          <button
            onClick={() => handleNavigation('/find-tests')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Find Tests</h3>
                <p className="text-gray-600">Search for medical tests</p>
              </div>
            </div>
          </button>

          {/* Free Tests */}
          <button
            onClick={() => handleNavigation('/free-tests')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Free Tests</h3>
                <p className="text-gray-600">Access free medical tests</p>
              </div>
            </div>
          </button>

          {/* Appointments */}
          <button
            onClick={() => handleNavigation('/appointments')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Appointments</h3>
                <p className="text-gray-600">Manage your appointments</p>
              </div>
            </div>
          </button>

          {/* Health Records */}
          <button
            onClick={() => handleNavigation('/health-records')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Health Records</h3>
                <p className="text-gray-600">View your medical history</p>
              </div>
            </div>
          </button>

          {/* Notifications */}
          <button
            onClick={() => handleNavigation('/notifications')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Notifications</h3>
                <p className="text-gray-600">View your alerts</p>
              </div>
            </div>
          </button>

          {/* Help */}
          <button
            onClick={() => handleNavigation('/help')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Help</h3>
                <p className="text-gray-600">Get support and guidance</p>
              </div>
            </div>
          </button>

          {/* About */}
          <button
            onClick={() => handleNavigation('/about')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">About</h3>
                <p className="text-gray-600">Learn about HealthBridge</p>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8">
          <AIChatbot />
        </div>

        <div className="mt-8">
          <GovSchemes />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;