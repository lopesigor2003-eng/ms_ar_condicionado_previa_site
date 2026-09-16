import React from 'react';
import { 
  Award, 
  Clock, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  XCircle,
  ThumbsUp
} from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-cyan-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-cyan-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-600" />;
      case 'Star':
        return <Star className="w-6 h-6 text-cyan-600" />;
      default:
        return <ThumbsUp className="w-6 h-6 text-cyan-600" />;
    }
  };

  const comparisonRows = [
    {
      criteria: 'Processo de Vácuo no Sistema',
      ms: 'Obrigatório, com bomba de vácuo de duplo estágio (< 500 microns)',
      others: 'Muitas vezes ignorado ("expurgo de gás"), queimando o compressor'
    },
    {
      criteria: 'Material da Tubulação',
      ms: 'Tubulação 100% cobre com espessura homologada pelos fabricantes',
      others: 'Tubos finos de alumínio sujeitos a corrosão e vazamento rápido'
    },
    {
      criteria: 'Limpeza durante a Furação',
      ms: 'Aspirador profissional e lona protetora para não sujar o imóvel',
      others: 'Poeira de alvenaria por todo o quarto/móveis do cliente'
    },
    {
      criteria: 'Preservação da Garantia de Fábrica',
      ms: '100% garantida (seguimos rigorosamente o manual do fabricante)',
      others: 'Risco de perda imediata da garantia por má instalação'
    },
    {
      criteria: 'Reputação Comprovada',
      ms: 'Nota máxima 5.0 no Google Maps com clientes reais no DF',
      others: 'Sem histórico ou avaliações duvidosas em redes sociais'
    },
    {
      criteria: 'Garantia de Mão de Obra',
      ms: 'Garantia de 1 ano por escrito com nota fiscal de serviços',
      others: 'Sem garantia formal ou dificuldade de contato no pós-venda'
    }
  ];

  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/70 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-700" />
            <span>Diferenciais de Excelência</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            Por que escolher a MS AR CONDICIONADO DF?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Instalar ou consertar um ar condicionado exige conhecimento de refrigeração e ferramentas de precisão. Conheça os pilares que nos tornaram referência no Plano Piloto.
          </p>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 font-display">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table: MS vs Amateurs */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
          <div className="p-6 sm:p-7 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Padrão de Qualidade
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                Compare a diferença do nosso serviço
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              O barato sem padrão técnico custa caro na conta de luz e estraga o aparelho
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
                  <th className="py-3.5 px-4 sm:px-6 w-1/3">Critério Técnico</th>
                  <th className="py-3.5 px-4 sm:px-6 w-1/3 text-cyan-900 bg-cyan-50/70 border-x border-cyan-100">
                    MS AR CONDICIONADO DF
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 w-1/3 text-slate-500">
                    Instaladores Sem Certificação
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                      {row.criteria}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 bg-cyan-50/30 border-x border-cyan-100/60 font-medium text-slate-900">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.ms}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
