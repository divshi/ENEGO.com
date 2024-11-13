import React from 'react';
import About from '../assets/about.jpg';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="about-section flex items-center justify-center mt-20 py-16 px-6">
      <div className="container flex max-w-7xl mx-auto">
        
        {/* Image Section with Shadow */}
        <div className="relative w-2/5 pr-8">
          {/* Shadow Box */}
          <div
            className="absolute top-3 left-3 w-full h-full bg-blue-900 opacity-90 rounded-lg"
            style={{ zIndex: -1 }}
          ></div>
          <img
            src={About}
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-3/5 pl-8 space-y-4 ml-20">
          <h2 className="text-5xl font-bold text-blue-900">Who we Are?</h2>
          <hr className="w-[250px] border-t-2 border-black mb-2" />
          <p className="text-lg text-gray-700">
          We help foster collaboration, gather resources, and facilitate strategic partnerships to build a thriving community of entrepreneurs driving impactful change.
          <br /><br />Enego aims to simplify the journey for startups and is committed to offering tailored services in various verticals that help promote a healthy start-up. We understand the challenges faced by emerging businesses and strive to be the driving force behind their success. 
          <br />
          </p>
          <button className="mt-[50px] px-6 py-2 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-white hover:text-blue-900">
            Know more <FaArrowRight className="inline ml-2" />
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
