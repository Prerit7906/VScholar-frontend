import React, { useState } from 'react';
import formImage from '../assets/formImage.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    whoIsHim: '',
    name: '',
    grade: '',
    email: '',
    contactNumber: '',
    timezone: '',
    country: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const timezones = Intl.supportedValuesOf('timeZone');

  const validateForm = () => {

    let newErrors = {};
    if (!formData.whoIsHim) newErrors.whoIsHim = 'Please select an option';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.grade) newErrors.grade = 'Class/Grade is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (!formData.timezone) newErrors.timezone = 'Time zone is required';
    if (!formData.country) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(`https://tution-backend.onrender.com/api/v1.0.0/formDetails/all`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form Submitted:', formData);

          setIsSuccess(true);
          setMessage("Form submitted successfully.");
          setFormData({
            whoIsHim: '',
            name: '',
            grade: '',
            email: '',
            contactNumber: '',
            timezone: '',
            country: '',
            message: '',
          });
        setTimeout(() => {
          setMessage("");
        }, 2000);
        } else {
          console.error('Form submission failed');
          setIsSuccess(false);
          setMessage("Couldn't submit form. Please try again later.");

        setTimeout(() => {
          setMessage("");
        }, 2000);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        console.error('Form submission failed');
          setIsSuccess(false);
          setMessage("Couldn't submit form");

        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 h-full w-3/5 bg-cover bg-center" style={{ backgroundImage: `url(${formImage})` }}></div>
      <div className="absolute top-0 left-0 w-5/5 h-full bg-black opacity-30"></div>
      <div className="relative z-10 md:w-2/5 w-full bg-white p-8 rounded-lg shadow-lg ml-auto mr-10 mt-20 mb-10">
        <h2 className="text-2xl font-semibold text-[rgb(25,40,65)] mb-6 text-center">Inquiry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Are you *</label>
            <select
              value={formData.whoIsHim}
              onChange={(e) => setFormData({ ...formData, whoIsHim: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select...</option>
              <option value="Parent">Parent</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </select>
            {errors.whoIsHim && <p className="text-red-500 text-sm">{errors.whoIsHim}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Class/Grade *</label>
            <input
              type="text"
              value={formData.grade}
              onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.grade && <p className="text-red-500 text-sm">{errors.grade}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Contact Number *</label>
            <input
              type="text"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Time Zone *</label>
            <select
              value={formData.timezone}
              onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select...</option>
              {timezones.map((tz) => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
            {errors.timezone && <p className="text-red-500 text-sm">{errors.timezone}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Country *</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(25,40,65)] text-white py-2 rounded hover:bg-[rgb(135,219,219)] hover:text-black transition"
          >
            Submit
          </button>
        </form>
        {message && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-4 text-center p-2 rounded-lg text-white ${isSuccess ? "bg-green-500" : "bg-red-400"}`}
          >
            {message}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Form;