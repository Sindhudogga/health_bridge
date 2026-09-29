import React from 'react';

const GovSchemes = () => {
  const schemes = [
    {
      name: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)',
      description: 'Provides health coverage of Rs. 5 lakh per family per year for secondary and tertiary care hospitalization.',
      eligibility: 'Families identified as deprived rural families and occupational categories of urban workers\' families',
      benefits: [
        'Cashless and paperless access to services',
        'Covers pre and post-hospitalization expenses',
        'No restriction on family size, age or gender',
        'Covers pre-existing conditions'
      ]
    },
    {
      name: 'Employees\' State Insurance Scheme (ESIS)',
      description: 'Social security and health insurance scheme for Indian workers.',
      eligibility: 'Employees earning up to Rs. 21,000 per month',
      benefits: [
        'Medical care for employees and their families',
        'Unemployment allowance',
        'Maternity benefits',
        'Disablement benefits'
      ]
    },
    {
      name: 'Central Government Health Scheme (CGHS)',
      description: 'Comprehensive medical care facilities for Central Government employees and pensioners.',
      eligibility: 'Central Government employees, pensioners and their dependent family members',
      benefits: [
        'Outpatient and inpatient treatment',
        'Pathology and radiology investigations',
        'Domiciliary care',
        'Emergency treatment'
      ]
    },
    {
      name: 'Rashtriya Swasthya Bima Yojana (RSBY)',
      description: 'Health insurance scheme for Below Poverty Line (BPL) families.',
      eligibility: 'BPL families and 11 other defined categories of unorganized workers',
      benefits: [
        'Coverage up to Rs. 30,000 per family per year',
        'Cashless hospitalization',
        'Transportation costs (actual with limit of Rs. 100 per visit)',
        'Pre-existing conditions covered'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {schemes.map((scheme, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{scheme.name}</h3>
          <p className="text-gray-600 mb-3">{scheme.description}</p>
          
          <div className="mb-3">
            <h4 className="font-medium text-gray-800">Eligibility:</h4>
            <p className="text-gray-600">{scheme.eligibility}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {scheme.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GovSchemes;
