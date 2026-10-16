import React, { useRef, useState } from 'react';
import { PromoBanner } from './components/PromoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { PromotionalPackages } from './components/PromotionalPackages';
import { AdvertisingBillboard } from './components/AdvertisingBillboard';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Contact } from './components/Contact';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Website Development');
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      // Focus the name input if accessible
      setTimeout(() => {
        const nameInput = document.getElementById('contact-name');
        if (nameInput) {
          nameInput.focus();
        }
      }, 500);
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProject = (projectTitle: string) => {
    setSelectedService('Website Development');
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F8FAFC] flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 0. Advertising Promotional Banner */}
      <PromoBanner onClaimOffer={() => scrollToContact('Special Promo: Web & Strategy Bundle')} />

      {/* 1. Header */}
      <Header onQuoteClick={() => scrollToContact()} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero
          onStartProject={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 3. About */}
        <About />

        {/* 4. Services */}
        <Services onInquireService={(serviceName) => scrollToContact(serviceName)} />

        {/* Advertising Package Deals */}
        <PromotionalPackages onSelectPackage={(pkgName) => scrollToContact(pkgName)} />

        {/* High-Impact Advertising Conversion Billboard */}
        <AdvertisingBillboard onStartInquiry={() => scrollToContact()} />

        {/* 5. Portfolio */}
        <Portfolio onInquireProject={handleInquireProject} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Contact with Instant Quote Configurator */}
        <Contact
          ref={contactSectionRef}
          selectedServiceFromCard={selectedService}
        />
      </main>

      {/* 9. Floating Contact Buttons */}
      <FloatingContactButtons />

      {/* 10. Footer */}
      <Footer
        onNavClick={handleNavClick}
        onServiceSelect={(serviceName) => scrollToContact(serviceName)}
      />
    </div>
  );
}
