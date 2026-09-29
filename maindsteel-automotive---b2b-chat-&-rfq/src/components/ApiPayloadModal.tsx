import React, { useState } from 'react';
import { X, Copy, Check, Terminal } from 'lucide-react';
import { ChatMessage, RFQData, StepNumber } from '../types';

interface ApiPayloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: StepNumber;
  messages: ChatMessage[];
  currentRfq: Partial<RFQData>;
}

export const ApiPayloadModal: React.FC<ApiPayloadModalProps> = ({
  isOpen,
  onClose,
  currentStep,
  messages,
  currentRfq,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const payload = {
    api_endpoint: "https://api.maindsteel-automotive.com/v1/render-stream",
    facility: "Planta Aguascalientes PIVA (Tier 2 Certified)",
    runtime_profile: {
      theme: "maindsteel_industrial_gold",
      bubble_style: {
        client: "solid_gold_right",
        bot: "gold_filament_container_left",
        max_line_constraint: 1
      },
      catalog_capacity: "20_real_manufacturing_elements_tier2"
    },
    conversation_state: {
      current_step: currentStep,
      total_steps: 5,
      history_count: messages.length,
      current_rfq_draft: currentRfq
    },
    message_stream: messages.map(m => ({
      id: m.id,
      role: m.role,
      step: m.step,
      timestamp: m.timestamp,
      rendered_lines: m.botLines || [m.content]
    }))
  };

  const jsonString = JSON.stringify(payload, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0D0E11] border border-[#E5A824]/60 w-full max-w-3xl max-h-[85vh] rounded-lg flex flex-col shadow-[0_0_50px_rgba(229,168,36,0.15)] overflow-hidden font-mono-tech">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-[#E5A824]/30 flex items-center justify-between bg-[#121317]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#E5A824]" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              API Render Engine · Payload JSON en Tiempo Real
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* JSON Preview */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#08090B] text-neutral-300 text-xs leading-relaxed select-all">
          <pre className="text-emerald-400/90 whitespace-pre-wrap">{jsonString}</pre>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-neutral-900 bg-[#121317] flex items-center justify-between">
          <div className="text-[11px] text-neutral-400">
            Renderizador listo para conexión con backend industrial
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded bg-[#E5A824] hover:bg-[#F1B434] text-black text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : <Copy className="w-3.5 h-3.5 stroke-[2.5]" />}
              <span>{copied ? 'Copiado' : 'Copiar JSON'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
