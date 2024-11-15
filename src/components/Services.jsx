import React from 'react';
import s1 from '../assets/s1.jpeg';
import s2 from '../assets/s2.jpeg';
import s3 from '../assets/s3.jpeg';
import s4 from '../assets/s4.jpeg';

const servicesData = [
    { image: s1, title: "Start Your Business" },
    { image: s2, title: "Grow Your Business" },
    { image: s3, title: "Acquire Certifications" },
    { image: s4, title: "Secure Funding" },
];

const Services = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto mt-20 px-4">

            {/* Stats Section */}
            <div className="flex justify-around w-full bg-blue-900 h-[300px] text-white mx-4 lg:mx-16 shadow-xl">
            <div className="my-8 text-center w-full">
                <h2 className="text-4xl font-bold text-white">Our Services</h2>
                <div className="flex justify-between w-full space-x-6">
                    {servicesData.map((service, index) => (
                        <div key={index} className="flex flex-col items-center p-6 w-[23%]">
                            <p className="text-xl font-semibold text-white mb-5">{service.title}</p>
                            <div className="relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-20 h-20 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.2)]" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>

            {/* Services Section */}
            

        </div>
    );
};

export default Services;
