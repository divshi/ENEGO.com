import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/logowobg.png";

const Afooter = () => {
  return (
    <footer className="bg-blue-100 py-8 p-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <img className="w-[250px]" src={logo} alt="Enego Logo" />
        </div>

        {/* Office Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">OUR OFFICES</h2>
          <h3 className="font-semibold">HEAD OFFICE</h3>
          <p>906A iconic corenthum tower c, near ITHUM TOWER, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301</p>
          <h3 className="font-semibold mt-4">BRANCH OFFICE</h3>
          <p>iconic corenthum tower c, 1206A, near ITHUM TOWER, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301</p>
          <p className="mt-4">We are Enego services private limited, your partner in propelling startups to corporate success.</p>
        </div>

        {/* Popular Services and Terms & Policy */}
        <div>
          <h2 className="text-lg font-bold mb-4">OUR POPULAR SERVICES</h2>
          <ul className="space-y-2">
            <li>Seed Funding</li>
            <li>Startup India Recognition</li>
            <li>Company Formation</li>
            <li>GST Registration</li>
            <li>Website Development</li>
          </ul>
          <br />
          <h2 className="text-lg font-bold mb-4">TERMS & POLICY</h2>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Confidentiality Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">CONTACT INFO</h2>
          <p><strong>Whatsapp Us</strong></p>
          <p>Address- 906A, iconic corenthum tower c, Noida sector 62, electronic city-201301</p>
          <p>Email: <a href="mailto:support@enego.co.in" className="text-blue-600">support@enego.co.in</a></p>
          
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-red-600 mt-8 text-sm">
        Note: Payments for services are only accepted in the name of ENEGO SERVICES PRIVATE LIMITED and the type of account is solely "Current Account" via NEFT/IMPS, RTGS, Razorpay, and we do not accept payments on personal accounts or under any other name.
      </div>
     
    </footer>
  );
};

export default Afooter;
