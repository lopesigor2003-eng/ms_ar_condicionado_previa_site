import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle2 } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/companyData';

interface CoverageAreasProps {
  onOpenQuoteModal: () => void;
}

export const CoverageAreas: React.FC<CoverageAreasProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-14 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
              <Navigation className="w-3.5 h-3.5" />
              <span>Cobertura Técnica no Distrito Federal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Atendimento com Equipes Volantes no Plano Piloto
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Estrutura ágil para atender chamados residenciais e comerciais em todas as quadras de Brasília.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
          >
            Consultar Minha Região
          </button>
        </div>

        {/* Areas Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.id}
              className={`p-3 rounded-xl border transition-all ${
                area.featured
                  ? 'bg-white border-cyan-300 shadow-xs'
                  : 'bg-white/80 border-slate-200 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span className="truncate">{area.name}</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                <span>{area.zone}</span>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1 rounded">
                  {area.responseTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
