import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Instagram, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Compass 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const GoogleMapsSection: React.FC = () => {
  const directWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Encontrei a MS Ar Condicionado no Google Maps e gostaria de solicitar um atendimento no Plano Piloto.'
  )}`;

  return (
    <section id="localizacao" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            <span>Localização & Atendimento</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            Google Maps & Contato Direto
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Sediada estrategicamente para atender com máxima agilidade todo o Plano Piloto e as principais regiões do Distrito Federal.
          </p>
        </div>

        {/* Maps Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Company Details & Actions Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-7 sm:p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              
              {/* Header Title */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">
                    Perfil Google Maps
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-300" />
                    <span>5.0 Estrelas</span>
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                  MS AR CONDICIONADO DF
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Instalação e Manutenção de Ar Condicionado no Plano Piloto DF
                </p>
              </div>

              {/* Info Items List */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Endereço & Localização:</strong>
                    <span className="text-slate-300 font-medium">
                      {COMPANY_INFO.address}
                    </span>
                    <span className="block text-slate-400 text-xs mt-0.5">
                      Atendimento em domicílio e corporativo no Plano Piloto e todo o DF
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Horário de Funcionamento:</strong>
                    <span className="text-slate-300">{COMPANY_INFO.openingHours}</span>
                    <span className="block text-emerald-400 text-xs mt-0.5 font-medium">
                      ● Atendimento contínuo no WhatsApp para urgências
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Telefone & WhatsApp:</strong>
                    <span className="text-slate-300 font-semibold">{COMPANY_INFO.phoneDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <Instagram className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Instagram Oficial:</strong>
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-300 hover:text-pink-200 underline font-medium"
                    >
                      {COMPANY_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Actions: Open in Google Maps + WhatsApp */}
            <div className="pt-4 border-t border-slate-800 space-y-2.5">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm text-center transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>ABRIR ROTAS NO GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
              </a>
            </div>

          </div>

          {/* Interactive Embedded Google Maps (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative min-h-[420px] flex flex-col">
            
            {/* Top Bar for Map */}
            <div className="bg-white px-5 py-3 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Brasília - Plano Piloto, DF</span>
              </div>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:text-cyan-800 font-bold flex items-center gap-1"
              >
                <span>Ver mapa ampliado</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Iframe */}
            <div className="flex-1 w-full h-full min-h-[380px] relative">
              <iframe
                title="Localização MS Ar Condicionado DF no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122851.35372337675!2d-47.96200236465492!3d-15.780148197779953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a398c8c5c7d27%3A0x7fa26a7e0a4f5b5b!2sPlano%20Piloto%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1710600000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>

            {/* Bottom floating badge on map */}
            <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 text-xs flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold text-slate-800">Técnicos em trânsito no Plano Piloto</span>
              </div>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:underline font-bold"
              >
                Clique para abrir no aplicativo Google Maps →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
