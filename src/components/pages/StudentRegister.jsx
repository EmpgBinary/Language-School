import React from 'react';

const StudentRegister = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Student Registration</h2>
        <form action="https://getform.io/f/aejyynpb" method="POST">
          {/* Personal Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">First Name</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">Last Name</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">Phone Number</label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
          </div>

          {/* Nationality */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Nationality</h3>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="nationality">Nationality</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                type="text"
                id="nationality"
                name="nationality"
                placeholder="Nationality"
                required
              />
            </div>
          </div>

          {/* Preferred Language */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Preferred Language</h3>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="languages">Languages</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                id="languages"
                name="languages"
                placeholder="List languages you intend to study"
                required
              ></textarea>
            </div>
          </div>

          {/* Academic Qualifications */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Academic Qualifications</h3>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="qualifications">Qualifications</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                id="qualifications"
                name="qualifications"
                required
              >
                <option value="">Select your qualification</option>
                <option value="ssce">SSCE</option>
                <option value="hnd">HND</option>
                <option value="bsc">BSc</option>
                <option value="masters">Masters</option>
                <option value="phd">PhD</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;


