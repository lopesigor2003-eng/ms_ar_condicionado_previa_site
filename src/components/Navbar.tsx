import React, { useState } from 'react';
import { Phone, MapPin, Star, Instagram, Menu, X, Wind, MessageCircle, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá, MS Ar Condicionado! Gostaria de informações e um orçamento para meu ar condicionado no Plano Piloto.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top Announcement & Social Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Google rating & Location */}
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Ver perfil oficial no Google Maps"
            >
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </span>
              <span className="font-semibold text-white">5.0</span>
              <span className="text-slate-400 hidden sm:inline">no Google Maps ({COMPANY_INFO.googleReviewCount}+ avaliações)</span>
            </a>

            <span className="hidden sm:inline text-slate-600">|</span>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Plano Piloto e todo o Distrito Federal</span>
            </div>
          </div>

          {/* Right: Instagram & WhatsApp Fast Contact */}
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
              title="Siga @arcondicionadoms no Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span className="hidden md:inline">{COMPANY_INFO.instagramHandle}</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            id="nav-brand-logo"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Wind className="w-7 h-7 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 font-display">
                  MS <span className="text-cyan-600">AR CONDICIONADO</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-200">
                  DF
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Instalação e Manutenção no Plano Piloto DF
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('inicio')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1"
              id="nav-link-inicio"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('servicos')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1"
              id="nav-link-servicos"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick('fotos-reais')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1"
              id="nav-link-fotos-reais"
            >
              Fotos Reais
            </button>
            <button
              onClick={() => handleNavClick('diferenciais')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1"
              id="nav-link-diferenciais"
            >
              Por que a MS
            </button>
            <button
              onClick={() => handleNavClick('avaliacoes')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1 flex items-center gap-1.5"
              id="nav-link-avaliacoes"
            >
              <span>Avaliações Google</span>
              <span className="text-amber-500 font-bold text-xs bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-200">
                5.0 ★
              </span>
            </button>
            <button
              onClick={() => handleNavClick('localizacao')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1"
              id="nav-link-localizacao"
            >
              Google Maps & Contato
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-colors flex items-center justify-center"
              title="Conversar direto no WhatsApp"
              id="nav-direct-whatsapp"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg hover:from-cyan-500 hover:to-blue-600 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              id="nav-cta-quote"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>SOLICITAR ORÇAMENTO</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-cyan-600 text-white shadow-xs"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50 text-sm"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('servicos')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50 text-sm"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick('fotos-reais')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50 text-sm"
            >
              Fotos Reais
            </button>
            <button
              onClick={() => handleNavClick('diferenciais')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50 text-sm"
            >
              Por que a MS
            </button>
            <button
              onClick={() => handleNavClick('avaliacoes')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50 text-sm flex items-center justify-between"
            >
              <span>Avaliações</span>
              <span className="text-amber-500 font-bold text-xs bg-amber-50 px-1.5 py-0.5 rounded">5.0 ★</span>
            </button>
            <button
              onClick={() => handleNavClick('localizacao')}
              className="text-left px-3 py-2.5 rounded-lg font-medium text-slate-800 hover:bg-slate-50 text-sm"
            >
              Google Maps & DF
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-cyan-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm text-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>SOLICITAR ORÇAMENTO AGORA</span>
            </button>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-emerald-500 text-emerald-700 bg-emerald-50/70 font-semibold text-center flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar no WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
