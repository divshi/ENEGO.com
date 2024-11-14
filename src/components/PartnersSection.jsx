import React from "react";
import EastbridgeLogo from "../assets/eastbridge.png";
import KotakLogo from "../assets/Kotak.png";
import GooglePayLogo from "../assets/googlepay.png";
import PaytmLogo from "../assets/paytm.png";
import PhonePeLogo from "../assets/phonepe.png";
import RazorpayLogo from "../assets/razorpay.png";
import ComplianceLogo from "../assets/compliance.png";
import AbstractLogo from "../assets/abstract.png";
import Banner from "../assets/banner.jpeg";

import "./PartnersSection.css";

const PartnersSection = () => {
  return (
    <section className="partners-section mb-20">
      <div className="container text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-10" >Our Partners</h2>
        <div className="slider">
          <div className="inner-slider">
            {/* Logos duplicated twice for seamless scrolling */}
            <div className="partner-logo  rounded-full">
              <img src={EastbridgeLogo} alt="Eastbridge Group" className="logo-image" />
            </div>
            <div className="partner-logo  rounded-full">
              <img src={KotakLogo} alt="Kotak Mahindra Bank" className="logo-image" />
            </div>
            <div className="partner-logo  rounded-full">
              <img src={GooglePayLogo} alt="Google Pay" className="logo-image" />
            </div>
            <div className="partner-logo  rounded-full">
              <img src={PaytmLogo} alt="Paytm" className="logo-image" />
            </div>
            <div className="partner-logo  rounded-full">
              <img src={PhonePeLogo} alt="PhonePe" className="logo-image" />
            </div>
            <div className="partner-logo  rounded-full">
              <img src={RazorpayLogo} alt="Razorpay" className="logo-image" />
            </div>
            <div className="partner-logo  rounded-full">
              <img src={ComplianceLogo} alt="Compliance Simplified" className="logo-image" />
            </div>
            <div className="partner-logo  rounded-full">
              <img src={AbstractLogo} alt="Abstract Media" className="logo-image" />
            </div>

            <div className="partner-logo">
              <img src={EastbridgeLogo} alt="Eastbridge Group" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={KotakLogo} alt="Kotak Mahindra Bank" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={GooglePayLogo} alt="Google Pay" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={PaytmLogo} alt="Paytm" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={PhonePeLogo} alt="PhonePe" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={RazorpayLogo} alt="Razorpay" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={ComplianceLogo} alt="Compliance Simplified" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={AbstractLogo} alt="Abstract Media" className="logo-image" />
            </div>

            <div className="partner-logo">
              <img src={EastbridgeLogo} alt="Eastbridge Group" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={KotakLogo} alt="Kotak Mahindra Bank" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={GooglePayLogo} alt="Google Pay" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={PaytmLogo} alt="Paytm" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={PhonePeLogo} alt="PhonePe" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={RazorpayLogo} alt="Razorpay" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={ComplianceLogo} alt="Compliance Simplified" className="logo-image" />
            </div>
            <div className="partner-logo">
              <img src={AbstractLogo} alt="Abstract Media" className="logo-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
