import React from 'react';
import { 
  Wind, 
  MapPin, 
  Phone, 
  Instagram, 
  ExternalLink, 
  Star, 
  ShieldCheck, 
  MessageCircle,
  Clock,
  Heart
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  const directWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de um orçamento para ar condicionado com a MS Ar Condicionado DF.'
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-md">
                <Wind className="w-7 h-7" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  MS <span className="text-cyan-400">AR CONDICIONADO</span>
                </span>
                <p className="text-xs text-slate-400">
                  Plano Piloto e Distrito Federal
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Especialistas em projetos, instalação certificada e manutenção preventiva e corretiva de ar condicionado para residências, condomínios e empresas no DF.
            </p>

            {/* Google Rating Badge */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-white font-bold mt-0.5 block">
                  Nota 5.0 no Google Maps
                </span>
              </div>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Ver perfil</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-900/40 text-pink-400 border border-slate-800 flex items-center justify-center transition-colors"
                title="Instagram da MS Ar Condicionado"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-900/40 text-blue-400 border border-slate-800 flex items-center justify-center transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-900/40 text-emerald-400 border border-slate-800 flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onScrollToSection('inicio')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('servicos')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('fotos-reais')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Fotos Reais (Google Maps)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('diferenciais')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Por que Escolher
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('avaliacoes')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Avaliações Google
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('localizacao')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Google Maps & DF
                </button>
              </li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Serviços Especializados
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onScrollToSection('servicos')}
                    className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                  >
                    • {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento no DF
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Plano Piloto, Asa Sul, Asa Norte, Sudoeste, Noroeste e regiões do DF.</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Segunda a Sexta: 08h às 18h | Sábado: 08h às 13h</span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors cursor-pointer text-center"
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} MS AR CONDICIONADO DF. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Google Maps
            </a>
            <span>•</span>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Instagram @arcondicionadoms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
