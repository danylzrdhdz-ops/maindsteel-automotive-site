import React, { useRef, useState } from 'react';
import { RFQData } from '../types';
import { X, Download, Printer, ShieldCheck, CheckCircle2, Building, Mail, MapPin, Briefcase, FileText, Cpu, Layers } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface RfqSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfq: RFQData;
}

export const RfqSheetModal: React.FC<RfqSheetModalProps> = ({
  isOpen,
  onClose,
  rfq,
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    if (downloading) return;
    setDownloading(true);

    try {
      if (sheetRef.current) {
        const canvas = await html2canvas(sheetRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#0B0C0E',
          logging: false
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, Math.min(imgHeight, pageHeight));
        pdf.save(`Maindsteel_Ficha_${rfq.id}.pdf`);
      } else {
        fallbackPdfDownload();
      }
    } catch (e) {
      console.warn('html2canvas error, falling back to jsPDF direct', e);
      fallbackPdfDownload();
    } finally {
      setDownloading(false);
    }
  };

  const fallbackPdfDownload = () => {
    const doc = new jsPDF();
    doc.setFillColor(11, 12, 14);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setDrawColor(229, 168, 36);
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 277);

    doc.setTextColor(229, 168, 36);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('MAINDSTEEL AUTOMOTIVE', 15, 25);

    doc.setTextColor(180, 180, 180);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Planta Aguascalientes PIVA Tier 2 · Certificación IATF 16949', 15, 32);

    doc.setTextColor(241, 180, 52);
    doc.setFontSize(11);
    doc.setFont('courier', 'bold');
    doc.text(`FOLIO: ${rfq.id}`, 140, 25);

    doc.setDrawColor(60, 50, 20);
    doc.line(15, 36, 195, 36);

    doc.setFillColor(23, 20, 11);
    doc.roundedRect(15, 42, 180, 24, 2, 2, 'F');
    doc.setTextColor(229, 168, 36);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`ESTATUS: ${rfq.status}`, 20, 50);

    doc.setTextColor(220, 220, 220);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.text('Un agente te contactara de forma manual en menos de 5 minutos o a primera hora del siguiente dia habil.', 20, 58);

    let y = 76;
    const addRow = (label: string, val: string, sub?: string) => {
      doc.setFillColor(18, 18, 18);
      doc.roundedRect(15, y, 180, 18, 2, 2, 'F');
      doc.setTextColor(229, 168, 36);
      doc.setFontSize(8.5);
      doc.text(label.toUpperCase(), 20, y + 6);
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.text(val, 20, y + 13);
      if (sub) {
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(8.5);
        doc.text(sub, 120, y + 13);
      }
      y += 22;
    };

    addRow('Elemento Cotizado', rfq.itemName, `Código: ${rfq.itemCode || 'PRD/PRC'}`);
    addRow('Empresa Solicitante', rfq.clientCompany || 'Cliente Industrial');
    addRow('Contacto Directo', rfq.clientName, rfq.clientEmail);
    addRow('Proyecto Industrial', rfq.clientProject || 'General');
    addRow('Destino de Embarque', rfq.shippingCountry || 'No especificado');

    doc.setTextColor(120, 120, 120);
    doc.setFontSize(8);
    doc.text(`Fecha y hora de emision: ${rfq.timestamp}`, 15, 268);
    doc.text('Maindsteel Automotive de Mexico S.A. de C.V. - Aguascalientes, Ags.', 15, 274);

    doc.save(`Maindsteel_Ficha_${rfq.id}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0B0C0E] border border-[#E5A824] w-full max-w-2xl max-h-[92vh] rounded-lg flex flex-col shadow-[0_0_50px_rgba(229,168,36,0.25)] overflow-hidden font-sans animate-in fade-in duration-300">
        {/* Top Modal Controls */}
        <div className="px-5 py-3.5 border-b border-[#E5A824]/40 flex items-center justify-between bg-[#121317]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E5A824]" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase font-sans">
                Ficha Oficial de Solicitud de Cotización (RFQ)
              </span>
              <div className="text-[10px] text-neutral-400">
                Maindsteel Automotive · Documento Oficial Tier 2
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable/Viewable Sheet Body */}
        <div ref={sheetRef} className="flex-1 overflow-y-auto p-5 sm:p-7 bg-[#0B0C0E] space-y-5 select-text">
          {/* Sheet Header Card */}
          <div className="border-b-2 border-[#E5A824] pb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#E5A824]" />
                <h1 className="text-base sm:text-lg font-black text-[#F1B434] tracking-widest font-sans uppercase">
                  MAINDSTEEL AUTOMOTIVE
                </h1>
              </div>
              <p className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                Planta de Manufactura PIVA Aguascalientes · Cotizaciones Tier 2
              </p>
            </div>
            <div className="bg-[#17140B] border border-[#E5A824] px-3 py-1.5 rounded text-right">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">Folio Oficial</div>
              <div className="text-xs sm:text-sm font-bold text-[#F1B434] font-mono-tech">{rfq.id}</div>
            </div>
          </div>

          {/* Turn status banner */}
          <div className="bg-[#141519] border-l-4 border-[#E5A824] p-3.5 rounded-r">
            <div className="flex items-center gap-2 text-[#F1B434] text-xs font-bold mb-1 font-sans">
              <CheckCircle2 className="w-4 h-4 text-[#E5A824]" />
              ESTATUS: {rfq.status}
            </div>
            <p className="text-neutral-300 text-xs font-sans leading-relaxed">
              Un <strong className="text-white font-bold">agente</strong> te contactará de forma manual en menos de 5 minutos o a primera hora del siguiente día hábil para la revisión de planos y corrida de cotización.
            </p>
          </div>

          {/* Requerimiento Grid */}
          <div className="space-y-3">
            <div className="text-[11px] text-[#E5A824] uppercase tracking-wider font-bold flex items-center gap-2 font-sans">
              <Layers className="w-3.5 h-3.5 text-[#E5A824]" />
              <span>DATOS TÉCNICOS DEL REQUERIMIENTO</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#101115] p-3.5 rounded border border-neutral-800">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold font-sans">
                  <Cpu className="w-3.5 h-3.5 text-[#E5A824]" />
                  Elemento de Manufactura
                </div>
                <div className="text-sm font-bold text-white font-sans">{rfq.itemName}</div>
                <div className="text-[11px] text-[#E5A824] mt-0.5 font-mono-tech">
                  Código: {rfq.itemCode || 'PRD/PRC'} · Elemento #{rfq.itemNumber || '16'}
                </div>
              </div>

              <div className="bg-[#101115] p-3.5 rounded border border-neutral-800">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold font-sans">
                  <Building className="w-3.5 h-3.5 text-[#E5A824]" />
                  Empresa Solicitante
                </div>
                <div className="text-sm font-bold text-white font-sans">{rfq.clientCompany || 'Sin especificar'}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5 font-sans">Cliente / Comprador Industrial</div>
              </div>

              <div className="bg-[#101115] p-3.5 rounded border border-neutral-800">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold font-sans">
                  <Mail className="w-3.5 h-3.5 text-[#E5A824]" />
                  Contacto y Correo Corporativo
                </div>
                <div className="text-xs font-semibold text-white font-sans">{rfq.clientName}</div>
                <div className="text-[11px] text-[#F1B434] font-mono-tech mt-0.5 truncate">{rfq.clientEmail}</div>
              </div>

              <div className="bg-[#101115] p-3.5 rounded border border-neutral-800">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold font-sans">
                  <Briefcase className="w-3.5 h-3.5 text-[#E5A824]" />
                  Proyecto Industrial
                </div>
                <div className="text-xs font-semibold text-white font-sans truncate">{rfq.clientProject || 'General'}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5 font-sans">Plataforma / Ensamble</div>
              </div>

              <div className="bg-[#101115] p-3.5 rounded border border-neutral-800 sm:col-span-2">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[#E5A824]" />
                  País o Región de Embarque Industrial
                </div>
                <div className="text-xs font-bold text-white font-sans">{rfq.shippingCountry || 'No especificado'}</div>
              </div>
            </div>
          </div>

          {/* Footer of Sheet */}
          <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center justify-between text-[11px] text-neutral-400 gap-2 font-sans">
            <div>Fecha de emisión: {rfq.timestamp}</div>
            <div className="text-neutral-500">Maindsteel Automotive · Aguascalientes, México</div>
          </div>
        </div>

        {/* Modal Action Controls */}
        <div className="px-5 py-3 border-t border-[#E5A824]/30 bg-[#121317] flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] text-neutral-400 font-sans">
            Ficha lista para visualización y descarga en PDF
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-400" />
              Imprimir
            </button>
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="px-4 py-1.5 text-xs font-bold text-black bg-[#E5A824] hover:bg-[#F1B434] disabled:opacity-50 rounded flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(229,168,36,0.3)] cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              {downloading ? 'Generando PDF...' : 'Descargar PDF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
