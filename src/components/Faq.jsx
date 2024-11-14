import React from 'react'; 
import animation from '../assets/animation.mov';

const Faq = () => {
  return (
    <section className="relative h-[70vh] mt-20 mb-20">
      {/* Background animation video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={animation}
        autoPlay 
        loop 
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex justify-center items-center text-center text-white z-10">
        <div>
          {/* Horizontal Line and FAQ in one line */}
          <div className="flex items-center justify-center mb-6">
            <hr className="w-[50px] border-t-2 border-white mr-2" />
            <h1 className="text-5xl font-extrabold text-shadow-3d mb-4">FAQ</h1>
          </div>

          <p className="text-5xl font-extrabold text-shadow-3d mb-4">Excited About Growing Your</p>
          <p className="text-5xl font-extrabold text-shadow-3d mb-4">New Startup Business?</p>
          <p className="text-3xl font-extrabold text-shadow-3d mb-4">Give Your New Unique Startup</p>
          <p className="text-3xl font-extrabold text-shadow-3d mb-8">The Wings It Needs With ENEGO.</p>
          <p className="text-2xl font-extrabold text-shadow-3d">आपकी सफलता , हमारी जिम्मेदारी</p>
        </div>
      </div>

      {/* Style for 3D text effect */}
      <style jsx>{`
        .text-shadow-3d {
          text-shadow: 
            3px 3px 0 rgba(1, 1, 1, 0.5),
            6px 6px 0 rgba(1, 1, 1, 0.3),
            9px 9px 0 rgba(1, 1, 1, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Faq;
