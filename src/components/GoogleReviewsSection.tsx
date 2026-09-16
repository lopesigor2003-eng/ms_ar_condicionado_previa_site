import React, { useState } from 'react';
import { 
  Star, 
  ThumbsUp, 
  ExternalLink, 
  CheckCircle, 
  MessageSquare, 
  MapPin, 
  Filter, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { GOOGLE_REVIEWS, COMPANY_INFO } from '../data/companyData';
import { ReviewItem } from '../types';

export const GoogleReviewsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'instalacao' | 'manutencao'>('todos');
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(GOOGLE_REVIEWS);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));

    setReviewsList((prev) =>
      prev.map((rev) => {
        if (rev.id === id) {
          const isLiked = !likedReviews[id];
          return {
            ...rev,
            likes: isLiked ? rev.likes + 1 : rev.likes - 1
          };
        }
        return rev;
      })
    );
  };

  const filteredReviews = reviewsList.filter((rev) => {
    if (selectedFilter === 'todos') return true;
    if (selectedFilter === 'instalacao') return rev.serviceType.toLowerCase().includes('instalação') || rev.comment.toLowerCase().includes('instalação');
    if (selectedFilter === 'manutencao') return rev.serviceType.toLowerCase().includes('manutenção') || rev.comment.toLowerCase().includes('manutenção') || rev.comment.toLowerCase().includes('serviço');
    return true;
  });

  // Google review avatar colors
  const avatarColors = [
    'bg-blue-600 text-white',
    'bg-emerald-600 text-white',
    'bg-amber-600 text-white',
    'bg-purple-600 text-white',
    'bg-teal-600 text-white',
    'bg-rose-600 text-white',
  ];

  return (
    <section id="avaliacoes" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Reviews Header Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white p-8 sm:p-10 mb-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Summary */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Google Maps • Comentários Reais Verificados</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white">
                Comentários Reais dos Nossos Clientes no Google Maps
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Veja o que os moradores e comerciantes de Brasília e do Plano Piloto comentam publicamente no perfil oficial da <strong>MS AR CONDICIONADO DF</strong> no Google Maps sobre o técnico Moisés e o padrão de serviço.
              </p>

              {/* Rating metrics row */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-display">
                    5.0
                  </div>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Avaliação máxima no Google Maps
                    </p>
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-800 hidden sm:block" />

                <div>
                  <div className="text-xl font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>Honestidade & Preço Justo</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Pontualidade e competência técnica comprovada
                  </p>
                </div>
              </div>
            </div>

            {/* Right Direct Links */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-base shadow-sm">
                    G
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">Abrir no Google Maps Oficial</p>
                    <p className="text-xs text-slate-400">Ver todas as avaliações e localização</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all flex items-center justify-center gap-2 font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Deixar Minha Avaliação no Google</span>
              </a>
            </div>

          </div>
        </div>

        {/* Filter Tabs for Reviews */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filtrar:
            </span>
            {[
              { id: 'todos', label: 'Todas as Avaliações Reais' },
              { id: 'instalacao', label: 'Instalação' },
              { id: 'manutencao', label: 'Manutenção & Reparos' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Depoimentos extraídos da ficha pública do Google Maps</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, idx) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-xs ${avatarColors[idx % avatarColors.length]}`}>
                      {review.author === 'Cliente Verificado Google' ? `C${idx + 1}` : review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-600" title="Perfil verificado no Google" />
                      </div>
                      <p className="text-[11px] text-slate-400">{review.date}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Google Maps
                  </span>
                </div>

                {/* Stars and Service Type */}
                <div className="space-y-1">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-700">
                    <span>{review.serviceType}</span>
                  </div>
                </div>

                {/* Real Comment */}
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    "{review.comment}"
                  </p>
                </div>
              </div>

              {/* Footer: Location & Likes */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{review.location}</span>
                </div>

                <button
                  onClick={() => handleLike(review.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                    likedReviews[review.id]
                      ? 'bg-cyan-50 border-cyan-300 text-cyan-700 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                  title="Útil"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{review.likes}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View on Google Maps Bottom Action */}
        <div className="mt-10 text-center">
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-colors border border-slate-200"
          >
            <span>Ver perfil completo da MS AR CONDICIONADO no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-cyan-600" />
          </a>
        </div>

      </div>
    </section>
  );
};

