// Mav.jsx
import React from "react";

const Mav = () => {
  return (
    <section className="bg-blue-900 mt-20 mb-20 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center text-center">
          {/* Mission Section */}
          <div className="flex-1 px-4">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-base leading-relaxed">
            Enego is committed to bringing interactive solutions that optimize and enhance your business performance. By evaluating market positioning and scalability, we provide effective solutions for the strategic execution of policies that help your business prosper.            </p>
          </div>
          
          {/* Divider */}
          <div className="w-px h-24 bg-white mx-4"></div>
          
          {/* Vision Section */}
          <div className="flex-1 px-4">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-base leading-relaxed">
            Our vision is to revolutionize the Indian startup space and take them to greater heights. Whether you are starting a new business or already have an established firm, Enego has out-of-the-box, tailor-made solutions for you. We aim to be your partner, and to grow your venture to the next level.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mav;
