import React, { useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2024-04-15',
      time: '10:00 AM',
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'Cardiology',
      status: 'Upcoming',
      location: 'City Hospital, Room 205'
    },
    {
      id: 2,
      date: '2024-04-20',
      time: '02:30 PM',
      doctor: 'Dr. Priya Sharma',
      specialty: 'General Medicine',
      status: 'Upcoming',
      location: 'Metro Clinic, Room 101'
    },
    {
      id: 3,
      date: '2024-04-10',
      time: '11:00 AM',
      doctor: 'Dr. Amit Patel',
      specialty: 'Dermatology',
      status: 'Completed',
      location: 'Skin Care Center, Room 303'
    }
  ]);

  const [showNewAppointmentForm, setShowNewAppointmentForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    doctor: '',
    specialty: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      id: appointments.length + 1,
      ...newAppointment,
      status: 'Upcoming'
    };
    setAppointments([...appointments, appointment]);
    setShowNewAppointmentForm(false);
    setNewAppointment({
      date: '',
      time: '',
      doctor: '',
      specialty: '',
      location: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-white to-blue-200 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-700">My Appointments</h2>
            <button
              onClick={() => setShowNewAppointmentForm(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Book New Appointment
            </button>
          </div>

          {showNewAppointmentForm && (
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Book New Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={newAppointment.date}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={newAppointment.time}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Doctor</label>
                    <input
                      type="text"
                      name="doctor"
                      value={newAppointment.doctor}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Specialty</label>
                    <input
                      type="text"
                      name="specialty"
                      value={newAppointment.specialty}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={newAppointment.location}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 p-2 rounded"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowNewAppointmentForm(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{appointment.doctor}</h3>
                    <p className="text-gray-600">{appointment.specialty}</p>
                    <p className="text-gray-500 mt-2">{appointment.location}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      appointment.status === 'Upcoming'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {appointment.status}
                    </span>
                    <p className="text-gray-700 mt-2">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments; 