import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfoForm = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [diseases, setDiseases] = useState([]);
  const [otherDisease, setOtherDisease] = useState('');

  const diseaseOptions = [
    'Diabetes',
    'Hypertension',
    'Heart Disease',
    'Asthma',
    'Chronic Kidney Disease',
    'Thyroid Disorders',
    'Arthritis',
    'Obesity',
    'High Cholesterol',
    'Anemia',
    'Depression / Anxiety',
    'Migraine',
    'Tuberculosis',
    'Epilepsy',
    'Cancer',
    'Liver Disease',
    'Autoimmune Disorders',
    'Skin Conditions',
  ];

  const handleCheckboxChange = (disease) => {
    if (diseases.includes(disease)) {
      setDiseases(diseases.filter((d) => d !== disease));
    } else {
      setDiseases([...diseases, disease]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      gender,
      age,
      diseases: [...diseases, ...(otherDisease ? [otherDisease] : [])],
    };
    console.log('Submitted Info:', formData);
  
    // Navigate to dashboard
    navigate('/dashboard');
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Tell us about yourself</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-2">Gender:</label>
              <select
                className="w-full border border-gray-300 p-2 rounded"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-2">Age:</label>
              <input
                type="number"
                className="w-full border border-gray-300 p-2 rounded"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Select common diseases (if any):</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-56 overflow-y-auto border p-4 rounded bg-gray-50">
              {diseaseOptions.map((disease) => (
                <label key={disease} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={diseases.includes(disease)}
                    onChange={() => handleCheckboxChange(disease)}
                  />
                  <span>{disease}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Other disease (if not listed):</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={otherDisease}
              onChange={(e) => setOtherDisease(e.target.value)}
              placeholder="Enter any other condition"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/symptoms')}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded"
            >
              Skip
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
            >
              Submit Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfoForm;

