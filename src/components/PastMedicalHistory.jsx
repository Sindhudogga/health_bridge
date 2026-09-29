import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PastMedicalHistory = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    surgeries: '',
    hospitalizations: '',
    allergies: '',
    medications: '',
    familyHistory: '',
    lifestyle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Medical History:', formData);
    // Here you would typically save to a database
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Past Medical History</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Previous Surgeries:</label>
            <textarea
              name="surgeries"
              value={formData.surgeries}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded h-24"
              placeholder="List any previous surgeries with dates"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Hospitalizations:</label>
            <textarea
              name="hospitalizations"
              value={formData.hospitalizations}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded h-24"
              placeholder="List any hospitalizations with reasons and dates"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Allergies:</label>
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded h-24"
              placeholder="List any allergies to medications, food, or other substances"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Current Medications:</label>
            <textarea
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded h-24"
              placeholder="List current medications with dosages"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Family Medical History:</label>
            <textarea
              name="familyHistory"
              value={formData.familyHistory}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded h-24"
              placeholder="List significant medical conditions in immediate family"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Lifestyle Information:</label>
            <textarea
              name="lifestyle"
              value={formData.lifestyle}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded h-24"
              placeholder="Include information about smoking, alcohol, exercise, and diet"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
            >
              Save Medical History
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PastMedicalHistory;

