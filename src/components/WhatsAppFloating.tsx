import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Quero um orçamento de instalação no Plano Piloto',
    'Preciso de limpeza/higienização preventiva',
    'Meu ar condicionado parou de gelar (urgente)',
    'Gostaria de falar sobre projeto/PMOC para empresa'
  ];

  const handleSendPrompt = (promptText: string) => {
    const fullText = `Olá, MS Ar Condicionado DF! ${promptText}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const fullText = `Olá, MS Ar Condicionado DF! ${customMsg.trim()}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Floating Chat Box Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                  MS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">MS Ar Condicionado DF</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Online no WhatsApp</span> • <span>Plano Piloto</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="p-3 rounded-xl rounded-tl-none bg-white border border-slate-200 text-slate-800 shadow-2xs">
              <p className="font-medium">
                Olá! Como podemos te ajudar hoje com ar condicionado em Brasília? Escolha uma opção rápida ou escreva sua mensagem:
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Opções rápidas:
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left p-2 rounded-lg bg-white hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200/90 text-slate-700 text-xs font-medium transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate">{prompt}</span>
                  <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="pt-2 flex gap-1.5">
              <input
                type="text"
                placeholder="Escreva sua dúvida aqui..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                aria-label="Enviar para WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer"
        aria-label="Falar no WhatsApp"
        id="whatsapp-floating-btn"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 border-2 border-emerald-600" />
        </div>

        <span className="font-bold text-xs sm:text-sm tracking-tight hidden sm:inline">
          WhatsApp • Orçamento Rápido
        </span>
      </button>

    </div>
  );
};
