import React from 'react';

const Services = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto mt-20 px-4">

            {/* Stats Section */}
            <div className="flex justify-around w-full bg-gradient-to-r from-blue-700 via-red-600 to-blue-900 text-white py-8 mt-12 mx-4 lg:mx-16 rounded-xl shadow-xl">
                <div className="text-center space-y-2">
                    <p className="text-6xl font-extrabold">60+</p>
                    <p className="text-lg">Service Options</p>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-6xl font-extrabold">1,500+</p>
                    <p className="text-lg">Completed Projects</p>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-6xl font-extrabold">40+</p>
                    <p className="text-lg">Combined Experience</p>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-6xl font-extrabold">10CR</p>
                    <p className="text-lg">Seed Funding</p>
                </div>
            </div>

        </div>
    );
};

export default Services;
