import React from 'react';

const RegistrationForm = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0081a7] p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Registration Form
        </h2>

        <form className="space-y-4">
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all"
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all"
          />

          {/* Phone Field */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            required
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all"
          />

          {/* Subject Dropdown */}
          <select
            name="subject"
            required
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all appearance-none text-gray-600"
          >
            <option value="" disabled selected>Subject*</option>
            <option value="BCA">BCA</option>
            <option value="CSIT">BScCSIT</option>
            <option value="BIT">BIT</option>
          </select>

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Message*"
            required
            rows="1"
            className="w-full p-4 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-[#0081a7] outline-none transition-all resize-none"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#006d77] hover:bg-[#005a63] text-white font-semibold py-3 px-12 rounded-lg transition-colors duration-200 text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;