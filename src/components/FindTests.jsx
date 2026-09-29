import React, { useState } from 'react';
import BackButton from './BackButton';

const FindTests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTest, setSelectedTest] = useState(null);
  const [selectedLab, setSelectedLab] = useState(null);

  const tests = [
    { id: 1, name: 'Complete Blood Count (CBC)', category: 'Blood Test' },
    { id: 2, name: 'Lipid Profile', category: 'Blood Test' },
    { id: 3, name: 'Thyroid Profile', category: 'Blood Test' },
    { id: 4, name: 'Liver Function Test', category: 'Blood Test' },
    { id: 5, name: 'Urine Analysis', category: 'Urine Test' },
    { id: 6, name: 'ECG', category: 'Cardiac Test' },
  ];

  const labs = [
    {
      id: 1,
      name: 'City Diagnostic Center',
      rating: 4.5,
      price: 1200,
      distance: '2.5 km',
      timing: '8:00 AM - 8:00 PM',
      address: '123 Main Street, City'
    },
    {
      id: 2,
      name: 'Metro Health Labs',
      rating: 4.2,
      price: 1100,
      distance: '3.2 km',
      timing: '7:00 AM - 9:00 PM',
      address: '456 Park Avenue, City'
    },
    {
      id: 3,
      name: 'Central Diagnostics',
      rating: 4.7,
      price: 1300,
      distance: '1.8 km',
      timing: '24/7',
      address: '789 Market Road, City'
    }
  ];

  const filteredTests = tests.filter(test =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200">
      <BackButton />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Find Tests</h1>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Find & Compare Tests</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Test Search Section */}
              <div className="md:col-span-1">
                <div className="mb-4">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for tests..."
                    className="w-full border border-gray-300 p-3 rounded-lg"
                  />
                </div>

                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {filteredTests.map((test) => (
                    <div
                      key={test.id}
                      onClick={() => setSelectedTest(test)}
                      className={`p-4 rounded-lg cursor-pointer ${
                        selectedTest?.id === test.id
                          ? 'bg-blue-100 border-2 border-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <h3 className="font-medium">{test.name}</h3>
                      <p className="text-sm text-gray-500">{test.category}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lab Comparison Section */}
              <div className="md:col-span-2">
                {selectedTest ? (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Compare Labs for {selectedTest.name}
                    </h3>

                    <div className="space-y-4">
                      {labs.map((lab) => (
                        <div
                          key={lab.id}
                          onClick={() => setSelectedLab(lab)}
                          className={`p-4 rounded-lg cursor-pointer ${
                            selectedLab?.id === lab.id
                              ? 'bg-blue-100 border-2 border-blue-500'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{lab.name}</h4>
                              <p className="text-sm text-gray-500">{lab.address}</p>
                              <p className="text-sm text-gray-500">Timing: {lab.timing}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-blue-600">₹{lab.price}</p>
                              <p className="text-sm text-gray-500">{lab.distance} away</p>
                              <div className="flex items-center justify-end">
                                <span className="text-yellow-500">★</span>
                                <span className="ml-1">{lab.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {selectedLab && (
                      <div className="mt-6">
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                          Book Test at {selectedLab.name}
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Select a test to compare labs</p>
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

export default FindTests; 