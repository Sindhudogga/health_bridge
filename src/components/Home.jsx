
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-pink-700 to-indigo-900 min-h-screen text-white">
      {/* Main Container */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to HealthBridge</h1>
        <p className="text-xl mb-8 px-4">
          Your trusted AI-powered platform for medical test recommendations, symptom checking, and more.
        </p>
        <div className="flex justify-center space-x-8">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all"
          >
            Login
          </Link>
           <Link
            to="/register"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all"
          >
            Register
          </Link> 
        </div>
      </div>

      {/* Symptom Checker, AI Chatbot, and Test Recommendations Sections */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          
          {/* Symptom Checker */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100/0000FF/808080?Text=Symptoms"
              alt="Symptoms"
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">AI-Powered Symptom Checker</h2>
            <p>
              Quickly identify potential conditions by inputting your symptoms. Our AI provides intelligent,
              real-time insights.
            </p>
          </div>

          {/* AI Chatbot */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100/FF5733/FFFFFF?Text=Chatbot"
              alt="AI Chatbot"
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">AI Chatbot Assistance</h2>
            <p>
              Need help? Chat with our AI-driven assistant to get personalized test recommendations and medical
              advice.
            </p>
          </div>

          {/* Test Recommendations */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100/28A745/FFFFFF?Text=Tests"
              alt="Test Recommendations"
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Test Recommendations</h2>
            <p>
              Based on your symptoms and health profile, receive accurate test suggestions for a more informed
              healthcare decision.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-6">
        <p>&copy; 2025 HealthBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;









