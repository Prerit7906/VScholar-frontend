// src/components/Footer.jsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="bg-[#192841] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">VScholar</h2>
          <p className="text-gray-400 mt-2">
          At VScholar, we connect students with skilled tutors. Experience the best of
          learning with our affordable, personalized, and flexible education model.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} style={{color: "#74C0FC",}}   className="text-xl hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#74C0FC",}} className="text-xl hover:text-gray-300" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} style={{color: "#74C0FC",}} className="text-xl hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/resources" className="hover:text-white">Resources</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/career" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Courses</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/language-courses" className="hover:text-white">Language Courses</a></li>
            <li><a href="/igcse" className="hover:text-white">IGCSE</a></li>
            <li><a href="/ib" className="hover:text-white">International Baccalaureate</a></li>
            <li><a href="/online-tuition" className="hover:text-white">Online Tuition</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
        &copy; 2024 VScholar. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
