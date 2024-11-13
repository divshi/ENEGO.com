// src/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ServicesGrid from '../components/ServicesGrid';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Business from '../components/Business';
import Certifications from '../components/Certifications';
import StartupFunding from '../components/StartupFunding';
import Stats from '../components/Stats'; 
import OfferSection from '../components/OfferSection';
import Faq from '../components/Faq';
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OfferSection/>
        {/* <ServicesGrid /> */}
        {/* <Contact /> */}
        {/* <Business />
        <Certifications />
        <StartupFunding /> */}
        <Stats />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
