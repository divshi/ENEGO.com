import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import bannerImage from '../assets/banner.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState('Growth');
  const textOptions = ['Growth', 'Funding', 'Certification', 'Marketing'];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Start animation

      setTimeout(() => {
        setAnimate(false); // Reset animation after transition
        setCurrentText((prev) => {
          const currentIndex = textOptions.indexOf(prev);
          return textOptions[(currentIndex + 1) % textOptions.length];
        });
      }, 500); // Duration should match animation timing
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Blue Opaque Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-40"></div>

      <div className="relative z-10 flex items-center justify-center w-full h-full px-10 text-white">
        <div className="space-y-6 text-center max-w-2xl w-full">
          <h1 className="text-5xl font-extrabold leading-tight">
            We Can Help You With Your Company's
            <br />
            <span
              style={{
                display: 'inline-block',
                transition: 'transform 0.5s ease, opacity 0.5s ease',
                transform: animate ? 'rotateX(-90deg)' : 'rotateX(0deg)',
                opacity: animate ? 0 : 1,
              }}
              className="text-blue-900"
            >
              {currentText}
            </span>
          </h1>
          <h2 className="text-2xl font-extrabold">
            <span className="text-white">आपकी सफलता , हमारी जिम्मेदारी</span>
          </h2>

          <div className="flex items-center justify-center space-x-20">
            <div className="text-2xl font-bold text-center">
              <span className="text-blue-900">1,000+</span> <br /> Happy Clients
            </div>
            <div className="text-2xl font-bold text-center">
              <span className="text-blue-900">100%</span> <br /> Client Satisfaction
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center font-bold bg-blue-900 text-white px-6 py-3 hover:bg-white hover:text-blue-900 mt-6"
          >
            Connect With Us
            <FaArrowRight className="ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
