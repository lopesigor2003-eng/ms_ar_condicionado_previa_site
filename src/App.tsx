import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { RealPhotosCarousel } from './components/RealPhotosCarousel';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { CoverageAreas } from './components/CoverageAreas';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('instalacao');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      {/* Top sticky Navbar */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-grow">
        {/* 1. Hero with badge "Serviço de aquecimento, ventilação e ar condicionado" & Primary "SOLICITAR ORÇAMENTO" button */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToSection={scrollToSection}
        />

        {/* 2. Serviços (• Projeto • Residencial • Comercial • Instalação • Manutenção Preventiva e Corretiva) */}
        <ServicesSection
          onSelectServiceForQuote={(serviceId) => handleOpenQuoteModal(serviceId)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 3. Carrossel de Fotos Reais dos Ar-Condicionados (Google Maps - Troca automática a cada 7 segundos) */}
        <RealPhotosCarousel
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 4. Por que escolher a empresa (Diferenciais técnicos, pontualidade, honestidade, comparativo) */}
        <WhyChooseUs />

        {/* 5. Comentários Reais Positivos do Google Maps (Depoimentos reais dos clientes sobre Moisés e a MS Ar Condicionado) */}
        <GoogleReviewsSection />

        {/* 6. Cobertura Técnica nas Regiões do DF */}
        <CoverageAreas onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 7. Google Maps Oficial & Contato WhatsApp / Instagram */}
        <GoogleMapsSection />

        {/* FAQ - Perguntas Frequentes */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating WhatsApp Quick Chat */}
      <WhatsAppFloating />

      {/* Interactive Modal for Quote Request */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedServiceId={preselectedService}
      />
    </div>
  );
}



