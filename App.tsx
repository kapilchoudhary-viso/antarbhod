import React, { useState } from 'react';
import useScrollAnimation from './hooks/useScrollAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutVisionCare from './components/AboutVisionCare';
import WellnessMatters from './components/WellnessMatters';
import Services from './components/Services';
import WellnessClub from './components/WellnessClub';
import WhyJoin from './components/WhyJoin';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  useScrollAnimation();

  const openContact = () => {
    setIsContactOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenContact={openContact} />
      <main className="flex-grow pt-16">
        <Hero onOpenContact={openContact} />
        <AboutVisionCare />
        <WellnessMatters />
        <Services />
        <WellnessClub />
        <WhyJoin onOpenContact={openContact} />
        <Testimonials />
      </main>
      <ContactFooter />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;