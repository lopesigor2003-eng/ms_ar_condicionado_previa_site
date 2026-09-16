import React, { useState, useEffect } from 'react';
import { X, Send, Check, Phone, MessageCircle, CalendarCheck, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedServiceId 
}) => {
  const [selectedService, setSelectedService] = useState<string>('instalacao');
  const [propertyType, setPropertyType] = useState<string>('residencial');
  const [region, setRegion] = useState<string>('Asa Sul');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [btuOption, setBtuOption] = useState<string>('12000');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedService(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceObj = SERVICES_DATA.find((s) => s.id === selectedService);
    const serviceName = serviceObj ? serviceObj.title : selectedService;

    let text = `❄️ *SOLICITAÇÃO DE ORÇAMENTO - MS AR CONDICIONADO DF*\n\n`;
    if (name.trim()) text += `👤 *Cliente:* ${name.trim()}\n`;
    if (phone.trim()) text += `📱 *Telefone/WhatsApp:* ${phone.trim()}\n`;
    text += `📍 *Região no DF:* ${region}\n`;
    text += `🏢 *Tipo de Imóvel:* ${propertyType.toUpperCase()}\n`;
    text += `🔧 *Serviço Solicitado:* ${serviceName}\n`;
    text += `⚡ *Capacidade aproximada:* ${btuOption} BTUs\n`;
    if (notes.trim()) text += `📝 *Detalhes:* ${notes.trim()}\n`;
    text += `\nOlá! Gostaria de receber a proposta de orçamento para esse atendimento no Plano Piloto.`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 p-6 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Orçamento Rápido & Sem Compromisso</span>
            </div>
            <h3 className="text-xl font-bold font-display text-white mt-1">
              Solicitar Orçamento
            </h3>
            <p className="text-xs text-slate-300">
              MS Ar Condicionado DF • Atendimento no Plano Piloto
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-4 text-xs sm:text-sm">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Orçamento Encaminhado para o WhatsApp!
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                Abrimos o WhatsApp com todos os detalhes pré-preenchidos. Nossa equipe técnica responderá em poucos minutos.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              
              {/* Service selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Serviço Desejado:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-600"
                >
                  <option value="instalacao">Instalação Padrão (Split / Inverter / Multi-Split)</option>
                  <option value="manutencao-preventiva">Manutenção Preventiva & Higienização Química</option>
                  <option value="manutencao-corretiva">Manutenção Corretiva (Conserto / Vazamento / Gás)</option>
                  <option value="projeto-climatizacao">Projeto de Climatização / Infraestrutura</option>
                  <option value="comercial">Plano PMOC Empresarial / Laudo Técnico</option>
                </select>
              </div>

              {/* Property & Region */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tipo de Imóvel:
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                  >
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa Residencial</option>
                    <option value="escritorio">Escritório Comercial</option>
                    <option value="clinica">Clínica / Consultório</option>
                    <option value="loja">Loja / Restaurante</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Região no DF:
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                  >
                    <option value="Asa Sul">Asa Sul</option>
                    <option value="Asa Norte">Asa Norte</option>
                    <option value="Sudoeste">Sudoeste</option>
                    <option value="Noroeste">Noroeste</option>
                    <option value="Lago Sul">Lago Sul</option>
                    <option value="Lago Norte">Lago Norte</option>
                    <option value="Setor Comercial">Setores Comerciais (SAS/SBS/SCN)</option>
                    <option value="Águas Claras">Águas Claras</option>
                    <option value="Guará">Guará</option>
                    <option value="Taguatinga">Taguatinga</option>
                    <option value="Outra região">Outra Região DF</option>
                  </select>
                </div>
              </div>

              {/* BTUs Estimated */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Potência Estimada (BTUs):
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['9000', '12000', '18000', '24000+'].map((btu) => (
                    <button
                      key={btu}
                      type="button"
                      onClick={() => setBtuOption(btu)}
                      className={`py-2 px-2 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                        btuOption === btu
                          ? 'bg-cyan-600 text-white border-cyan-600 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {btu} BTUs
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Amanda Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Seu WhatsApp / Telefone:
                  </label>
                  <input
                    type="tel"
                    placeholder="(61) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Observações ou Modelo do Aparelho:
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Apartamento no 3º andar, aparelho LG Dual Inverter..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="modal-submit-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>SOLICITAR ORÇAMENTO NO WHATSAPP</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Atendimento direto com técnico • Garantia por escrito</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
