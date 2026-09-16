import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  MapPin, 
  ExternalLink, 
  Play, 
  Pause, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface GalleryPhoto {
  id: number;
  url: string;
  title: string;
  category: string;
  location: string;
  description: string;
}

export const REAL_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlSold_GBEUp14SP2FBNC7gSDMVeE6nZG5EfpHBQEsSORBD_Xng1lT3pTg1R070yrnj5kr2-YZas4OvDv6n8ZXZx0OzJYnh7OAboCkhSw4mcHeIybmLFJaAG7tWRFK_WtAKhrwvGA=w1200-h900-k-no',
    title: 'Instalação de Split Residencial',
    category: 'Instalação no Plano Piloto',
    location: 'Asa Sul, Brasília DF',
    description: 'Instalação técnica de evaporadora Split com acabamento refinado, sem danos na pintura e furação precisa.'
  },
  {
    id: 2,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-UsBji-HtE3ThfS3h6xeE6tQO952KYJUVVXc1j8aow_lpWk4RDWzYAARgYGHQU60nTGV4MhAdmolwj-O6f_gDMMpojlTQJQT4Lgg8vvb6QDaGlXcKtrDBVuVC2K3Vc2ZXM40AmA=w1200-h900-k-no',
    title: 'Condensadora Externa com Suporte Reforçado',
    category: 'Unidade Externa',
    location: 'Sudoeste, DF',
    description: 'Fixação segura com calços antivibração e alinhamento de nível para máximo silêncio e durabilidade.'
  },
  {
    id: 3,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-ZTYU3xjUmFWK145RcuGX0ASaHrEJ0y9XgWjiYbVdYdeQvT2iTqXEZe1uI_HOV-AQekFumqBeSmEW9T4ppr1hQdEHT1HIuaH3c-sVQ9MtRR2pCHJFHkBjUo9Bx1EsHfaG2qfVyg=w1200-h900-k-no',
    title: 'Infraestrutura de Tubulação Frigorígena',
    category: 'Projeto & Infraestrutura',
    location: 'Noroeste, DF',
    description: 'Passagem técnica de tubos de cobre 100%, isolamento térmico blindado e dreno com declive perfeito.'
  },
  {
    id: 4,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCqsS8vMB03A6313ItnqSVfxq3R9D2fSwNAFsKg21F3_SzBRCgV4YNYww6TNnmgRDfUCfHhyodxSpVyRnqvY6YbWJRxQPuU359QbDGCD1vjn9jP8gnW4k7tNeP2EjpzoXEZ51a=w1200-h900-k-no',
    title: 'Manutenção Preventiva & Limpeza Química',
    category: 'Manutenção Especializada',
    location: 'Asa Norte, DF',
    description: 'Higienização completa da turbina e serpentina com produtos bactericidas homologados pela Anvisa.'
  },
  {
    id: 5,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkN4GTPaLvmEDkQr4yPANWWYAoMdn4E9ZYUgKsaRVGSJsnWjgL1IA5_Vg2uFoB-1gSaX37WtoCbsnUrXNEvREeZBgHxRuGgUqzRujMbdMDevKCTREzeqvPx8dZ3Bfjpu0UAScJC=w1200-h900-k-no',
    title: 'Teste de Pressão e Estanqueidade',
    category: 'Controle de Qualidade',
    location: 'Plano Piloto, Brasília',
    description: 'Verificação rigorosa com manifold digital para garantir zero vazamento e rendimento térmico máximo.'
  },
  {
    id: 6,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQz7Z5AwldxGQFMJRzyliSwgjA7q_bWvyQiLto-Exay_k_m8uOY4IYrpE_UFBxXytFzI1OsP2Efj047uMbZ9GsvQ6kSlm9CeNX4cORiEBkkpVIr8yvtQgDMZo8w-abUWTfoS2c=w1200-h900-k-no',
    title: 'Conexões Elétricas e Frigoríficas de Padrão',
    category: 'Serviço Técnico',
    location: 'Setor Comercial Sul, DF',
    description: 'Flangeamento preciso e cabeamento normatizado, preservando a garantia de fábrica do equipamento.'
  },
  {
    id: 7,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk4JjAxnzTObzje9gsrkmUYkohBk7ygsyD2j0ubKKWpUsaNT4bREvNfpsY38uD_zqM-muhDeL9I5p01PR82hrbsDEV4AhtxrKyz_yBEJLwWrzt9n-acX6JezEYw0MqrWOuBuZKiNw=w1200-h900-k-no',
    title: 'Revisão Técnica e Carga de Gás',
    category: 'Manutenção Corretiva',
    location: 'Lago Sul, DF',
    description: 'Diagnóstico rápido e pesagem exata de fluido refrigerante com balança digital de alta precisão.'
  },
  {
    id: 8,
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnGlEwR8fcsLFxfjhLbG-oYtwA8lNE3Hk-zcRAISOz9LZuL6Vfco6Uu4kTQ3g_zbnTWcgjcAIp_OYvtQ0BfleppOCewEpWYUFHCqn-ohZsmojgxv8ZL97JZfSQVC0cortNUvOIp=w1200-h900-k-no',
    title: 'Aparelho Instalado e Operando com Excelência',
    category: 'Resultado Final',
    location: 'Plano Piloto, DF',
    description: 'Ambiente refrigerado rapidamente, operação ultrassilenciosa e cliente 100% satisfeito.'
  }
];

interface RealPhotosCarouselProps {
  onOpenQuoteModal: () => void;
}

export const RealPhotosCarousel: React.FC<RealPhotosCarouselProps> = ({ onOpenQuoteModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const DURATION_SECONDS = 7;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REAL_PHOTOS.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REAL_PHOTOS.length) % REAL_PHOTOS.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Timer of 7 seconds with progress bar update
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const intervalStep = 100; // update progress every 100ms
    const totalSteps = (DURATION_SECONDS * 1000) / intervalStep;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / totalSteps);
      });
    }, intervalStep);

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, DURATION_SECONDS * 1000);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPlaying]);

  const activePhoto = REAL_PHOTOS[currentIndex];

  return (
    <section id="fotos-reais" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              <span>Fotos Reais dos Serviços • Google Maps</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white">
              Nossos Serviços na Prática no Plano Piloto
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Fotografias reais das instalações, manutenções e infraestruturas executadas pela equipe da <strong>MS AR CONDICIONADO DF</strong> retiradas diretamente da nossa ficha pública do Google Maps.
            </p>
          </div>

          {/* Carousel Controls & Status */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 text-xs font-semibold"
              title={isPlaying ? 'Pausar carrossel' : 'Iniciar carrossel automático (7s)'}
              id="carousel-play-pause-btn"
            >
              {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pausar (7s)' : 'Reproduzir'}</span>
            </button>

            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                aria-label="Foto anterior"
                id="carousel-prev-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="px-3 text-xs font-mono font-bold text-cyan-400">
                {currentIndex + 1} / {REAL_PHOTOS.length}
              </span>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
                aria-label="Próxima foto"
                id="carousel-next-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Carousel Display Box */}
        <div 
          className="relative rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden group"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Progress Bar (7 Seconds Timer) */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-30">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Carousel Layout: Image (7 cols) + Info Card (5 cols) on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[520px]">
            
            {/* Image Section */}
            <div className="lg:col-span-8 relative bg-black/60 flex items-center justify-center overflow-hidden">
              <img
                key={activePhoto.id}
                src={activePhoto.url}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[560px] transition-all duration-500 animate-in fade-in"
              />

              {/* Floating Overlay Badge on Mobile */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 shadow-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activePhoto.category}</span>
                </span>
              </div>

              {/* Navigation Arrows on Hover */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-cyan-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-xs shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-cyan-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-xs shadow-lg"
                aria-label="Próxima"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Info Side Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono font-bold text-cyan-400 uppercase tracking-widest text-[11px]">
                    Foto {currentIndex + 1} de {REAL_PHOTOS.length} (Troca a cada 7s)
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{activePhoto.location}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {activePhoto.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activePhoto.description}
                </p>

                {/* Quality bullets */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Execução pelo técnico responsável Moisés</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Ferramentas de alta precisão e bomba de vácuo</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Preservação da garantia de fábrica</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  id="carousel-quote-cta-btn"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>SOLICITAR SERVIÇO IGUAL A ESSE</span>
                </button>

                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-700/80"
                >
                  <span>Ver todas as fotos no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>

            </div>

          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2.5 overflow-x-auto scrollbar-thin">
            {REAL_PHOTOS.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => goToSlide(index)}
                className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentIndex === index
                    ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-900/50'
                    : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                }`}
                title={photo.title}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-cyan-500/20" />
                )}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
