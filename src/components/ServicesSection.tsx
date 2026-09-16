import React, { useState } from 'react';
import { 
  Wrench, 
  Sparkles, 
  Home, 
  Building2, 
  Compass, 
  ShieldCheck, 
  Clock, 
  Check, 
  ArrowRight, 
  Flame, 
  Droplets,
  CalendarCheck
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForQuote,
  onOpenQuoteModal 
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('todos');

  const filterTabs: { id: ServiceCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'todos', label: 'Todos os Serviços', icon: null },
    { id: 'instalacao', label: 'Instalação Padrão', icon: <Wrench className="w-3.5 h-3.5" /> },
    { id: 'manutencao', label: 'Manutenção & Limpeza', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'residencial', label: 'Residencial', icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'comercial', label: 'Comercial & PMOC', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'projeto', label: 'Projetos', icon: <Compass className="w-3.5 h-3.5" /> },
  ];

  const filteredServices = activeCategory === 'todos'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.includes(activeCategory));

  const getServiceWhatsAppUrl = (service: ServiceItem) => {
    const text = `Olá, MS Ar Condicionado! Tenho interesse no serviço de *${service.title}* no Plano Piloto. Poderiam me passar um orçamento?`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyan-600" />
            <span>Nossos Serviços Especializados</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            Soluções Completas em Ar Condicionado
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Desde o projeto de infraestrutura na sua obra até a instalação certificada e manutenção periódica. Atendimento padrão premium no Plano Piloto e DF.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                activeCategory === tab.id
                  ? 'bg-cyan-600 border-cyan-600 text-white shadow-md'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-100">
                    {service.subtitle.slice(0, 32)}...
                  </span>
                  {service.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-full border border-amber-200">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlight callout */}
                <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-100/80 text-xs text-cyan-900 font-medium flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{service.highlight}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    O que está incluído:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-cyan-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{service.warranty}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getServiceWhatsAppUrl(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl border border-emerald-500 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      onSelectServiceForQuote(service.id);
                      onOpenQuoteModal();
                    }}
                    className="py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 active:scale-95 text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Orçamento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner with Fast Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-display">
              Precisa de um serviço sob medida ou laudo para o seu condomínio/empresa?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Nossa equipe atende desde apartamentos no Plano Piloto até grandes contratos corporativos com plano PMOC e ART.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>SOLICITAR ORÇAMENTO RÁPIDO</span>
          </button>
        </div>

      </div>
    </section>
  );
};
