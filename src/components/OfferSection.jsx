import React, { useState } from 'react';
import s5 from '../assets/s5.jpeg';
import s6 from '../assets/s6.jpeg';
import s7 from '../assets/s7.jpeg';
import s8 from '../assets/s8.png';
import s9 from '../assets/s9.jpeg';
import s10 from '../assets/s10.png';
import s11 from '../assets/s11.jpeg';
import s12 from '../assets/s12.jpg';
import s13 from '../assets/s13.jpeg';
import s14 from '../assets/s14.jpeg';
import s15 from '../assets/s15.jpeg';
import s16 from '../assets/s16.jpeg';
import s17 from '../assets/s17.jpeg';
import d1 from '../assets/d1.jpeg';
import d2 from '../assets/d2.jpeg';
import d3 from '../assets/d3.jpeg';
import d4 from '../assets/d4.jpeg';
import d5 from '../assets/d5.jpeg';
import d6 from '../assets/d6.jpeg';
import d7 from '../assets/d7.jpeg';
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('Start Your Business');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const servicesData = {
    'Start Your Business': [
      { img: s5, title: 'AGNii', description: 'Accelerating New Innovations...' },
      { img: s6, title: 'GeM', description: 'Transparency in e-marketplace...' },
      { img: s7, title: 'Private Limited', description: 'Private Limited Company...' },
      { img: s8, title: 'Limited Liability Partnership', description: 'Features similar to traditional...' },
      { img: s9, title: 'Proprietorship', description: 'Single person management...' },
      { img: s10, title: 'Goods and Service Tax', description: 'GST registration and regulation...' }
    ],
    'Acquire Certifications': [
      { img: s11, title: 'Startup India Certification' },
      { img: s12, title: 'MSME Registration' },
      { img: s13, title: 'Udyam Certification' },
      { img: s14, title: 'ZED Certification' },
      { img: s15, title: 'Tax Exemption Certificate' }
    ],
    'Grow Your Business': [
      { img: s16, title: 'ISO Certification', description: 'Achieve internationally recognized standards and elevate your brand reputation.' },
      { img: s17, title: 'IEC Certification', description: 'Get certified for international trade and take your business global.' }
    ],
    'Startup Funding': [
      { img: s13, title: 'Government Grants and Funding', description: 'The Government of India provides Grants and Funding opportunities to innovative startups...' },
      { img: d1, title: 'Seed Fund', description: 'The Government of India\'s Startup India initiative aims to create a strong startup ecosystem...' },
      { img: d2, title: 'Nidhi Prayas Yojna', description: 'ENEGO SERVICES PRIVATE LIMITED provides 360° business solutions...' },
      { img: d3, title: 'MSME Loans', description: 'The government of India offers loans for Micro, Small and Medium Enterprises...' },
      { img: d4, title: 'Venture Capital', description: 'Venture Capital Assistance is financial assistance in the form of an interest-free loan...' },
      { img: d5, title: 'Project Finance', description: 'This type of financing is where the lender accepts the future revenues as a guarantee...' },
      { img: d6, title: 'Greenfield Loan', description: 'Greenfield projects are those projects which are still in their initial stages...' },
      { img: d7, title: 'Unsecured Business Loans', description: 'No need for collateral if you are looking for funds as a budding entrepreneur...' }
    ]
  };

  return (
    <section className="about-section py-16 px-10">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">What We Offer</h2>
      <div className="flex justify-center mb-6 space-x-6">
        {Object.keys(servicesData).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 font-semibold rounded-lg ${activeTab === tab ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {servicesData[activeTab].map((service, index) => (
          <div key={index} className="content p-6 rounded-lg shadow-lg bg-white text-center">
            <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-xl font-semibold text-blue-900">{service.title}</p>
            {service.description && <p className="text-gray-700 text-sm mt-2">{service.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
