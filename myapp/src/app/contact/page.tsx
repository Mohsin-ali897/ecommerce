
'use client'
import React, { useState } from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Offers from '@/app/components/offers';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import Mainbanner from '../components/pagebanner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mgvovvag", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <Mainbanner pageName="Contact" />
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Get In Touch With Us</h1>
        <p className="text-gray-600 text-center max-w-lg mx-auto mb-10">
          For more information about our products & services, feel free to drop us an email. We are always here to help you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FaLocationDot className="text-xl text-black" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, USA</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-xl text-black" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <IoTimeSharp className="text-xl text-black" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="h-12 border rounded px-4"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="h-12 border rounded px-4"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="h-12 border rounded px-4"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="h-32 border rounded px-4 py-2"
              required
            ></textarea>
            <button
              type="submit"
              className="h-12 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Offers />
      <Footer />
    </div>
  );
}
