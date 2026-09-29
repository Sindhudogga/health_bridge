import React, { useState } from 'react';
import BackButton from './BackButton';

const FreeTests = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const schemes = [
    {
      id: 1,
      name: 'Ayushman Bharat PM-JAY',
      description: 'Provides health coverage of Rs. 5 lakh per family per year for secondary and tertiary care hospitalization.',
      tests: [
        { name: 'Complete Blood Count', category: 'Blood Test' },
        { name: 'Basic Metabolic Panel', category: 'Blood Test' },
        { name: 'Liver Function Test', category: 'Blood Test' },
        { name: 'Kidney Function Test', category: 'Blood Test' },
        { name: 'ECG', category: 'Cardiac Test' },
        { name: 'X-Ray', category: 'Imaging' }
      ]
    },
    {
      id: 2,
      name: 'Employees State Insurance (ESI)',
      description: 'Social security and health insurance scheme for Indian workers.',
      tests: [
        { name: 'Blood Sugar Test', category: 'Blood Test' },
        { name: 'Lipid Profile', category: 'Blood Test' },
        { name: 'Thyroid Profile', category: 'Blood Test' },
        { name: 'Urine Analysis', category: 'Urine Test' },
        { name: 'Chest X-Ray', category: 'Imaging' }
      ]
    }
  ];

  const filteredTests = selectedScheme?.tests.filter(test =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200">
      <BackButton />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Free Tests</h1>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Free & Subsidized Tests</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Scheme Selection */}
              <div className="md:col-span-1">
                <div className="space-y-4">
                  {schemes.map((scheme) => (
                    <div
                      key={scheme.id}
                      onClick={() => setSelectedScheme(scheme)}
                      className={`p-4 rounded-lg cursor-pointer ${
                        selectedScheme?.id === scheme.id
                          ? 'bg-blue-100 border-2 border-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <h3 className="font-medium text-lg">{scheme.name}</h3>
                      <p className="text-sm text-gray-600 mt-2">{scheme.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Test List */}
              <div className="md:col-span-2">
                {selectedScheme ? (
                  <div>
                    <div className="mb-4">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={`Search tests in ${selectedScheme.name}...`}
                        className="w-full border border-gray-300 p-3 rounded-lg"
                      />
                    </div>

                    <div className="space-y-4">
                      {filteredTests?.map((test, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">{test.name}</h4>
                              <p className="text-sm text-gray-500">{test.category}</p>
                            </div>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                              Book Free Test
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-medium text-blue-700 mb-2">How to Avail Free Tests:</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-600">
                        <li>Check your eligibility for the selected scheme</li>
                        <li>Visit the nearest empaneled hospital/lab</li>
                        <li>Show your scheme card/ID</li>
                        <li>Get your tests done without any cost</li>
                      </ol>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Select a scheme to view available tests</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTests; 