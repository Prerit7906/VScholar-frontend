import React from 'react';
import { motion } from 'framer-motion';
import homeImage from '../assets/home_image.jpg';
import chooseImage from '../assets/367.jpg';
import checkIcon from '../assets/check-mark.png';

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 py-12">
      
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Left - Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl font-bold mb-4 text-[rgb(30,48,80)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We are here <span className="text-[rgb(135,219,219)]">to teach you</span> everything!
          </motion.h1>

          <p className="text-gray-700 text-lg">
            At <span className="font-semibold text-[rgb(135,219,219)]">VScholars</span>, we provide personalized, high-quality education tailored to every student’s needs.  
            Led by an education expert with <span className="font-semibold">7+ years of experience</span>, we offer trusted learning solutions across  
            <span className="font-semibold"> IB, IGCSE, GCSE, AP, CBSE, ICSE</span>, and more for students in the <span className="font-semibold">USA, UK, Australia, Europe, and Asia.</span>
          </p>
        </div>

        {/* Right - Image Section */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={homeImage} alt="Education Expert" className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-full" />
        </div>
      </div>

      {/* Why Choose VScholars Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center">
        {/* Left - Content Section */}
        <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
          <img src={chooseImage} alt="Why Choose Us" className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-full" />
        </div>

        {/* Right - Image Section */}
        <div className="md:w-2/3 flex flex-col items-center">
  <h2 className="text-3xl font-bold text-[rgb(30,48,80)] mb-6 text-center">
    Why Choose VScholars?
  </h2>
  <ul className="space-y-2 text-gray-500 text-md text-left">
    <li className="flex items-center">
      <img src={checkIcon} alt="Check Icon" className="h-7 w-7 mr-5" /> Highly Qualified & Trained Teachers
    </li>
    <li className="flex items-center">
      <img src={checkIcon} alt="Check Icon" className="h-7 w-7 mr-5" /> Comprehensive Learning Solutions
    </li>
    <li className="flex items-center">
      <img src={checkIcon} alt="Check Icon" className="h-7 w-7 mr-5" /> Virtual labs and interactive teaching.
    </li>
    <li className="flex items-center">
      <img src={checkIcon} alt="Check Icon" className="h-7 w-7 mr-5" /> Flexible Pricing & Discounts
    </li>
    <li className="flex items-center">
      <img src={checkIcon} alt="Check Icon" className="h-7 w-7 mr-5" /> Regular Assessments and progress tracking
    </li>
    <li className="flex items-center">
      <img src={checkIcon} alt="Check Icon" className="h-7 w-7 mr-5" /> Exciting Rewards
    </li>
    <li className="flex items-center">
      <img src={checkIcon} alt="Check Icon" className="h-7 w-7 mr-5" /> Expert guidance for success.
    </li>
  </ul>
</div>

        
      </div>

    </div>
  );
}

export default AboutUs;
