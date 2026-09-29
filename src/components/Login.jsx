// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate successful login (replace with real auth later)
    if (email && password) {
      // Check if user exists in localStorage
      const userProfile = JSON.parse(localStorage.getItem('userProfile'));
      
      if (userProfile) {
        // Navigate to symptoms page
        navigate('/symptoms');
      } else {
        // If no profile exists, create a new one
        const newUserProfile = {
          email,
          emergencyContact: {
            name: '',
            phone: '',
            relation: ''
          },
          medicalHistory: {
            pastIllnesses: '',
            surgeries: '',
            medications: '',
            familyHistory: '',
            allergies: '',
            currentSymptoms: ''
          }
        };
        localStorage.setItem('userProfile', JSON.stringify(newUserProfile));
        navigate('/symptoms');
      }
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <form
        onSubmit={handleLogin}
        className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-md w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-white/10 border border-white/30 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-white/10 border border-white/30 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-900 py-3 rounded font-bold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;










 