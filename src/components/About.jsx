import React from 'react';
import About from '../assets/about.jpg';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="about-section flex items-center justify-center mt-20 py-16 px-6">
      <div className="container flex max-w-7xl mx-auto">
        
        {/* Image Section with Shadow */}
        <div className="relative w-2/5 pr-8">
          <img
            src={About}
            alt="About Us"
            className="rounded-lg shadow-3d w-full"
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

      <style jsx>{`
          .shadow-3d {
            box-shadow: 
              4px 4px 6px rgba(15, 23, 42, 0.5),   /* Soft shadow with blue-900 */
              8px 8px 20px rgba(15, 23, 42, 0.6),  /* Medium shadow with blue-900 */
              12px 12px 40px rgba(15, 23, 42, 0.7); /* Deeper shadow with blue-900 */
          }
        `}</style>

    </section>
  );
};

export default AboutSection;
