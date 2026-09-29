import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SymptomForm from './components/SymptomForm';
import Dashboard from './components/Dashboard';
import GovSchemes from './components/GovSchemes';
import AIChatbot from './components/AIChatbot';
import PastMedicalHistory from './components/PastMedicalHistory';
import SymptomChecker from './components/SymptomChecker';
import FindTests from './components/FindTests';
import FreeTests from './components/FreeTests';
import Appointments from './components/Appointments';
import HealthRecords from './components/HealthRecords';
import Profile from './components/Profile';
import Help from './components/Help';

// Home Component
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 bg-fixed text-white">
      <div className="min-h-screen w-full flex flex-col justify-center items-center text-center px-6 bg-black bg-opacity-10 backdrop-blur-sm">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Empower Your Health with <span className="text-yellow-300">HealthBridge</span>
        </h1>
        <p className="text-lg max-w-2xl mb-10 font-medium drop-shadow-sm">
          HealthBridge helps you get accurate medical test recommendations using AI. No confusion, no unnecessary tests — just smarter health decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl my-10">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30 hover:scale-105 transition shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
              alt="Symptom Check"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Symptom Checker</h3>
            <p>Input your symptoms and let our AI guide you to the right tests.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30 hover:scale-105 transition shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920233.png"
              alt="AI Assistant"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AI Assistance</h3>
            <p>Our AI suggests only what's truly needed, reducing cost & stress.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30 hover:scale-105 transition shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3639/3639591.png"
              alt="Time Saving"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Save Time</h3>
            <p>Faster, easier healthcare guidance at your fingertips.</p>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-700 hover:bg-blue-900 transition duration-300 text-white font-bold py-2 px-6 rounded-full shadow-lg"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-pink-600 hover:bg-pink-800 transition duration-300 text-white font-bold py-2 px-6 rounded-full shadow-lg"
          >
            Register
          </button>
        </div>
      </div>

      <footer className="bg-black bg-opacity-50 text-white text-center py-4 text-sm mt-10">
        © 2025 HealthBridge. Built with love using React & TailwindCSS.
      </footer>
    </div>
  );
};

// About Page
const About = () => (
  <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200 p-6">
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          About HealthBridge
        </h2>
        
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              HealthBridge is dedicated to revolutionizing healthcare access in India by leveraging AI technology to provide personalized medical test recommendations and connecting patients with affordable healthcare options through government schemes.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">AI-Powered Symptom Analysis</h4>
                <p className="text-gray-600">Get accurate test recommendations based on your symptoms, reducing unnecessary medical expenses.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Government Scheme Integration</h4>
                <p className="text-gray-600">Access free and subsidized tests through Ayushman Bharat and ESI schemes.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Lab Comparison</h4>
                <p className="text-gray-600">Compare prices and book tests at the most convenient diagnostic centers.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Health Records</h4>
                <p className="text-gray-600">Maintain your medical history and test reports in one secure place.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
                <h4 className="font-semibold">Dr. Sarah Johnson</h4>
                <p className="text-gray-600">Medical Director</p>
              </div>
              <div className="text-center">
                <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
                <h4 className="font-semibold">Rajesh Kumar</h4>
                <p className="text-gray-600">AI Specialist</p>
              </div>
              <div className="text-center">
                <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
                <h4 className="font-semibold">Priya Sharma</h4>
                <p className="text-gray-600">Healthcare Coordinator</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">support@healthbridge.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

// App Component
function App() {
  return (
    <Router>
      <nav className="bg-pink-600 text-white p-4 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center gap-4 font-medium text-lg">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/symptom-checker" className="hover:underline">Symptom Checker</Link>
            </li>
            <li>
              <Link to="/find-tests" className="hover:underline">Find Tests</Link>
            </li>
            <li>
              <Link to="/free-tests" className="hover:underline">Free Tests</Link>
            </li>
            <li>
              <Link to="/chat" className="hover:underline">Chat Assistant</Link>
            </li>
            <li>
              <Link to="/appointments" className="hover:underline">Appointments</Link>
            </li>
            <li>
              <Link to="/health-records" className="hover:underline">Health Records</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:underline">Profile</Link>
            </li>
            <li>
              <Link to="/notifications" className="hover:underline">Notifications</Link>
            </li>
            <li>
              <Link to="/help" className="hover:underline">Help</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/symptoms" element={<SymptomForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schemes" element={<GovSchemes />} />
          <Route path="/chatbot" element={<AIChatbot />} />
          <Route path="/history" element={<PastMedicalHistory />} />
          
          {/* New Routes */}
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/find-tests" element={<FindTests />} />
          <Route path="/free-tests" element={<FreeTests />} />
          <Route path="/chat" element={<AIChatbot />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<div className="min-h-screen flex items-center justify-center">Notifications Page Coming Soon</div>} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

























