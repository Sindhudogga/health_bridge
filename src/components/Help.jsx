import React, { useState } from 'react';

const Help = () => {
  const [activeSection, setActiveSection] = useState('faq');

  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'To book an appointment, go to the Appointments page and click on "Book New Appointment". Fill in the required details including date, time, doctor, and location.'
    },
    {
      question: 'How can I view my test reports?',
      answer: 'You can view your test reports by going to the Health Records page and selecting the "Test Reports" tab. All your reports will be listed there.'
    },
    {
      question: 'How do I update my profile information?',
      answer: 'Go to your Profile page and click the "Edit Profile" button. Make the necessary changes and click "Save Changes" to update your information.'
    },
    {
      question: 'What should I do if I forget my password?',
      answer: 'Click on the "Forgot Password" link on the login page. You will receive an email with instructions to reset your password.'
    }
  ];

  const contactInfo = {
    email: 'support@healthbridge.com',
    phone: '+91 939702623',
    address: '123, Health Street, Bangalore, Karnataka - 560001',
    workingHours: 'Monday to Friday: 9:00 AM - 6:00 PM'
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Help & Support</h2>

          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              <button
                className={`px-6 py-3 font-medium ${
                  activeSection === 'faq'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveSection('faq')}
              >
                FAQs
              </button>
              <button
                className={`px-6 py-3 font-medium ${
                  activeSection === 'contact'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveSection('contact')}
              >
                Contact Us
              </button>
            </div>
          </div>

          {activeSection === 'faq' && (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600">Email:</p>
                      <p className="font-medium">{contactInfo.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Phone:</p>
                      <p className="font-medium">{contactInfo.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Address:</p>
                      <p className="font-medium">{contactInfo.address}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Working Hours:</p>
                      <p className="font-medium">{contactInfo.workingHours}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Message</label>
                      <textarea
                        className="w-full border border-gray-300 p-2 rounded"
                        rows="4"
                        placeholder="Your message"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help; 