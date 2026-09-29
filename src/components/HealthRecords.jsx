import React, { useState } from 'react';

const HealthRecords = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [searchTerm, setSearchTerm] = useState('');

  const testReports = [
    {
      id: 1,
      date: '2024-03-15',
      testName: 'Complete Blood Count',
      lab: 'City Diagnostic Center',
      status: 'Completed',
      fileUrl: '#'
    },
    {
      id: 2,
      date: '2024-02-28',
      testName: 'Lipid Profile',
      lab: 'Metro Health Labs',
      status: 'Completed',
      fileUrl: '#'
    },
    {
      id: 3,
      date: '2024-01-10',
      testName: 'Thyroid Profile',
      lab: 'Central Diagnostics',
      status: 'Completed',
      fileUrl: '#'
    }
  ];

  const medicalHistory = [
    {
      id: 1,
      date: '2024-03-20',
      condition: 'Hypertension',
      doctor: 'Dr. Rajesh Kumar',
      notes: 'Prescribed medication and lifestyle changes'
    },
    {
      id: 2,
      date: '2024-02-15',
      condition: 'Type 2 Diabetes',
      doctor: 'Dr. Priya Sharma',
      notes: 'Started insulin therapy'
    }
  ];

  const filteredReports = testReports.filter(report =>
    report.testName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Health Records</h2>

          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === 'reports'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reports')}
              >
                Test Reports
              </button>
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === 'history'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('history')}
              >
                Medical History
              </button>
            </div>
          </div>

          {activeTab === 'reports' && (
            <div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search test reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
              </div>

              <div className="space-y-4">
                {filteredReports.map((report) => (
                  <div
                    key={report.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{report.testName}</h3>
                        <p className="text-gray-600">{report.lab}</p>
                        <p className="text-gray-500 mt-2">Date: {report.date}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {report.status}
                        </span>
                        <button
                          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          View Report
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              {medicalHistory.map((record) => (
                <div
                  key={record.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{record.condition}</h3>
                      <p className="text-gray-600">Dr. {record.doctor}</p>
                      <p className="text-gray-500 mt-2">Date: {record.date}</p>
                      <p className="text-gray-700 mt-2">{record.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthRecords; 