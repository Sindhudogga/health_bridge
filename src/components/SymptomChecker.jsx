import React, { useState } from 'react';
import BackButton from './BackButton';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  const commonSymptoms = [
    'Fever', 'Cough', 'Headache', 'Fatigue', 'Body Aches',
    'Shortness of Breath', 'Chest Pain', 'Nausea', 'Dizziness',
    'Loss of Taste/Smell', 'Sore Throat', 'Runny Nose'
  ];

  const handleSymptomSelect = (symptom) => {
    setSymptoms(prev => {
      const currentSymptoms = prev ? prev.split(',').map(s => s.trim()) : [];
      if (currentSymptoms.includes(symptom)) {
        return currentSymptoms.filter(s => s !== symptom).join(', ');
      }
      return [...currentSymptoms, symptom].join(', ');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate AI analysis (in a real app, this would call an API)
    setTimeout(() => {
      setRecommendations({
        tests: [
          { name: 'Complete Blood Count (CBC)', reason: 'To check for infection and overall health status' },
          { name: 'C-Reactive Protein (CRP)', reason: 'To assess inflammation levels' },
          { name: 'Basic Metabolic Panel', reason: 'To evaluate organ function and electrolyte balance' }
        ],
        suggestions: [
          'Stay hydrated and get plenty of rest',
          'Monitor your temperature regularly',
          'Consider consulting a healthcare provider if symptoms worsen'
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200">
      <BackButton />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Symptom Checker</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">AI Symptom Checker</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Describe your symptoms:
                </label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg h-32"
                  placeholder="Enter your symptoms here..."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Common Symptoms (click to add):
                </label>
                <div className="flex flex-wrap gap-2">
                  {commonSymptoms.map((symptom) => (
                    <button
                      key={symptom}
                      type="button"
                      onClick={() => handleSymptomSelect(symptom)}
                      className={`px-4 py-2 rounded-full ${
                        symptoms.includes(symptom)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
              >
                {loading ? 'Analyzing...' : 'Get Recommendations'}
              </button>
            </form>

            {recommendations && (
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Recommended Tests:</h3>
                  <ul className="space-y-3">
                    {recommendations.tests.map((test, index) => (
                      <li key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium">{test.name}</h4>
                        <p className="text-gray-600">{test.reason}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Suggestions:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {recommendations.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker; 