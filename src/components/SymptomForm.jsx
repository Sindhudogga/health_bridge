import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SymptomForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pastIllnesses: "",
    surgeries: "",
    medications: "",
    familyHistory: "",
    allergies: "",
    currentSymptoms: ""
  });

  useEffect(() => {
    // Load existing medical history if available
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile && userProfile.medicalHistory) {
      setFormData(userProfile.medicalHistory);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Update user profile with medical history
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile) {
      userProfile.medicalHistory = formData;
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
    
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl p-6 rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Medical History Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <textarea
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
            />
          </div>
        ))}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Back
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SymptomForm;


