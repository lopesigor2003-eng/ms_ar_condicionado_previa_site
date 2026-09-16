import React from 'react';
import { 
  CheckCircle2, 
  Star, 
  MapPin, 
  ShieldCheck, 
  CalendarCheck, 
  MessageCircle, 
  Sparkles, 
  Wrench, 
  Building2, 
  Home, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO, BRANDS } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onScrollToSection }) => {
  const directWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá, MS Ar Condicionado! Gostaria de um orçamento para ar condicionado no Plano Piloto DF.'
  )}`;

  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-100/80 via-white to-slate-50">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-100/50 via-blue-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Suggested HVAC Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>Serviço de aquecimento, ventilação e ar condicionado</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-display">
                MS AR CONDICIONADO <span className="text-cyan-600">DF</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-700">
                Instalação e Manutenção de Ar Condicionado no Plano Piloto DF
              </p>
            </div>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Soluções completas em climatização com técnicos certificados, pontualidade e garantia. Atendemos apartamentos, residências e empresas em todo o Distrito Federal com máxima eficiência térmica e economia de energia.
            </p>

            {/* The 5 Key Pillars Highlighted */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Especialidades Atendidas:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Projeto Térmico</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
                  <Home className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Residencial</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
                  <Building2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Comercial & PMOC</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
                  <Wrench className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Instalação Padrão</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 sm:col-span-2">
                  <Sparkles className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Manutenção Preventiva e Corretiva</span>
                </div>
              </div>
            </div>

            {/* CTAs Requested: SOLICITAR ORÇAMENTO + WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onOpenQuoteModal}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-extrabold text-base shadow-lg shadow-cyan-600/20 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2.5 group text-center"
                id="hero-cta-quote"
              >
                <CalendarCheck className="w-5 h-5 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>SOLICITAR ORÇAMENTO</span>
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-base shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2.5 text-center"
                id="hero-cta-whatsapp"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp Rápido</span>
              </a>

              <button
                onClick={() => onScrollToSection('servicos')}
                className="px-4 py-3.5 rounded-xl text-slate-700 hover:text-cyan-700 hover:bg-slate-100 font-semibold text-sm transition-colors text-center cursor-pointer"
              >
                Ver Serviços ↓
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 grid grid-cols-3 gap-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium leading-tight">
                  Garantia de 1 ano por escrito
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium leading-tight">
                  Atendimento ágil no Plano Piloto
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium leading-tight">
                  Instalação limpa sem sujeira
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Trust Card & Google Maps Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white p-6 sm:p-7 shadow-xl border border-slate-200/90 space-y-6">
              
              {/* Google Maps Official Verified Card Header */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-extrabold text-sm tracking-wide text-cyan-300">
                      GOOGLE MAPS
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      PERFIL VERIFICADO
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-white text-base">5.0 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Mais de 40 avaliações de clientes satisfeitos no DF
                  </p>
                </div>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors"
                  title="Abrir no Google Maps"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Service Feature Highlights list */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Vácuo e Medição Digital</h4>
                    <p className="text-xs text-slate-500">
                      Bomba de vácuo de duplo estágio e manifold digital para proteger a vida útil do compressor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Higienização Química Antibactericida</h4>
                    <p className="text-xs text-slate-500">
                      Produtos biodegradáveis com registro Anvisa para eliminar fungos, mofo e ácaros.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Suporte a Todas as Principais Marcas</h4>
                    <p className="text-xs text-slate-500">
                      Daikin, LG Inverter, Fujitsu, Midea, Gree, Springer, Samsung e Consul.
                    </p>
                  </div>
                </div>
              </div>

              {/* Brands bar */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Marcas que instalamos e fazemos manutenção:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {BRANDS.slice(0, 6).map((brand) => (
                    <span
                      key={brand.name}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                    >
                      {brand.name}
                    </span>
                  ))}
                  <span className="px-2 py-1 rounded-md bg-cyan-50 text-cyan-700 text-xs font-medium border border-cyan-100">
                    + outras
                  </span>
                </div>
              </div>

              {/* Fast Direct Action to Real Reviews */}
              <button
                onClick={() => onScrollToSection('avaliacoes')}
                className="w-full py-3 rounded-xl border border-amber-300 bg-amber-50/80 hover:bg-amber-100 text-amber-950 font-bold text-xs sm:text-sm text-center transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Ver Comentários Reais dos Clientes no Google Maps</span>
                <span className="text-amber-600 font-extrabold">★ 5.0 →</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
