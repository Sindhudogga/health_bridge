import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bloodGroup: '',
    emergencyContact: {
      name: '',
      phone: '',
      relation: ''
    },
    medicalHistory: {
      pastIllnesses: '',
      surgeries: '',
      medications: '',
      familyHistory: '',
      allergies: '',
      currentSymptoms: ''
    }
  });

  useEffect(() => {
    // Load user profile from localStorage
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile) {
      setProfile(userProfile);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated profile to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-700">My Profile</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={profile.bloodGroup}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <textarea
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full border border-gray-300 p-2 rounded"
                rows="3"
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.emergencyContact.name}
                    onChange={handleEmergencyContactChange}
                    disabled={!isEditing}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.emergencyContact.phone}
                    onChange={handleEmergencyContactChange}
                    disabled={!isEditing}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Relation</label>
                  <input
                    type="text"
                    name="relation"
                    value={profile.emergencyContact.relation}
                    onChange={handleEmergencyContactChange}
                    disabled={!isEditing}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Medical History</h3>
              <div className="space-y-4">
                {Object.entries(profile.medicalHistory).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-gray-700 mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <textarea
                      value={value}
                      disabled
                      className="w-full border border-gray-300 p-2 rounded bg-gray-50"
                      rows="3"
                    />
                  </div>
                ))}
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile; 