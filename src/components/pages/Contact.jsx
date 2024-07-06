
import React from 'react';
import { BiLogoGmail, BiLogoWhatsapp } from 'react-icons/bi';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form action= "https://getform.io/f/aejyynpb" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
              id="message"
              name="message"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6">
  
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center transform transition duration-500 hover:scale-110">
              <a href="https://wa.me/+2347012282616" target="_blank" rel="noopener noreferrer">
                <BiLogoWhatsapp size={40} className="text-green-500 " />
                <span>Whatsapp</span>
              </a>
            </div>
            <div className="flex items-center justify-center transform transition duration-500 hover:scale-110">
              <a href="lingualcafeeng@gmail.com">
                <BiLogoGmail size={40} className="text-red-500" />
                <span>Gmail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

