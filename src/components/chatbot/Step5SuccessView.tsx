import React, { useRef, useState } from 'react';
import { RFQData } from '../../types';
import { 
  Copy, 
  RefreshCw, 
  Database, 
  ShieldCheck, 
  Clock, 
  Download, 
  Printer, 
  Building, 
  Mail, 
  MapPin, 
  Briefcase,
  CheckCircle2,
  Cpu,
  Layers,
  FileCheck,
  Home
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Step5SuccessViewProps {
  rfq: RFQData;
  onRestart: () => void;
  onOpenHistory: () => void;
  onGoHome: () => void;
}

export const Step5SuccessView: React.FC<Step5SuccessViewProps> = ({
  rfq,
  onRestart,
  onOpenHistory,
  onGoHome,
}) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    const text = `==========================================================
              ✓ OPERACIÓN EXITOSA ✓
                  .---.  .---.
                 /     \\/     \\
                 \\   ✓        /
                  \\          /
                   \\        /
                    \\      /
                     \\    /
                      '--'

  Tu requerimiento de ${rfq.itemName} para la empresa 
  ${rfq.clientCompany || 'Cliente'} ha sido guardado con éxito en la Base de Datos.

  ESTATUS: Turnado a Ingeniería Tier 2. Un agente 
  te contactará de forma manual en menos de 5 minutos o
  a primera hora del siguiente día hábil.
==========================================================
FOLIO: ${rfq.id}
FECHA: ${rfq.timestamp}
PROYECTO: ${rfq.clientProject}
CONTACTO: ${rfq.clientName} (${rfq.clientEmail})
DESTINO: ${rfq.shippingCountry}
PLANTA: Maindsteel Automotive - Planta PIVA Aguascalientes Tier 2
==========================================================`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadPdf = async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);

    try {
      if (previewRef.current) {
        const canvas = await html2canvas(previewRef.current, {
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
        pdf.save(`Maindsteel_RFQ_${rfq.id}.pdf`);
      } else {
        fallbackDownloadPdf();
      }
    } catch (err) {
      console.warn('html2canvas rendering fallback to direct jsPDF text render', err);
      fallbackDownloadPdf();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const fallbackDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFillColor(11, 12, 14);
    doc.rect(0, 0, 210, 297, 'F');

    // Golden accent border
    doc.setDrawColor(229, 168, 36);
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 277);

    // Header
    doc.setTextColor(229, 168, 36);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('MAINDSTEEL AUTOMOTIVE', 15, 25);

    doc.setTextColor(180, 180, 180);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Planta Aguascalientes PIVA Tier 2 · Certificación IATF 16949', 15, 32);

    doc.setTextColor(241, 180, 52);
    doc.setFontSize(12);
    doc.setFont('courier', 'bold');
    doc.text(`FOLIO: ${rfq.id}`, 145, 25);

    doc.setDrawColor(60, 50, 20);
    doc.line(15, 36, 195, 36);

    // Estatus Box
    doc.setFillColor(25, 21, 12);
    doc.roundedRect(15, 42, 180, 24, 2, 2, 'F');
    doc.setTextColor(229, 168, 36);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('ESTATUS: Turnado a Ingenieria Tier 2', 20, 51);

    doc.setTextColor(220, 220, 220);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Un agente te contactara de forma manual en menos de 5 minutos o a primera hora del siguiente dia habil.', 20, 59);

    // Requerimiento Details
    let y = 78;
    const drawItem = (label: string, value: string, sub?: string) => {
      doc.setFillColor(18, 19, 23);
      doc.roundedRect(15, y, 180, 20, 2, 2, 'F');
      doc.setTextColor(229, 168, 36);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(label.toUpperCase(), 20, y + 6);

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(value || 'N/A', 20, y + 14);

      if (sub) {
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.text(sub, 120, y + 14);
      }
      y += 24;
    };

    drawItem('Proceso o Producto Solicitado', rfq.itemName, `Codigo: ${rfq.itemCode || 'PRD/PRC'}`);
    drawItem('Empresa Solicitante', rfq.clientCompany || 'Cliente Industrial');
    drawItem('Contacto y Correo Corporativo', `${rfq.clientName}`, rfq.clientEmail);
    drawItem('Proyecto Especifico', rfq.clientProject || 'Plataforma Industrial');
    drawItem('Pais / Region de Embarque', rfq.shippingCountry || 'No especificado');

    // Footer
    doc.setDrawColor(60, 50, 20);
    doc.line(15, 260, 195, 260);

    doc.setTextColor(140, 140, 140);
    doc.setFontSize(8);
    doc.text(`Fecha y hora de emision: ${rfq.timestamp}`, 15, 267);
    doc.text('Maindsteel Automotive de Mexico S.A. de C.V. - PIVA Aguascalientes, Ags.', 15, 273);

    doc.save(`Maindsteel_RFQ_${rfq.id}.pdf`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full mx-auto py-2 animate-in fade-in duration-300">
      {/* Top Banner and System Status */}
      <div className="flex items-center justify-between text-xs text-[#E5A824] mb-3 pb-2 border-b border-[#E5A824]/30">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#E5A824]" />
          <span className="font-bold tracking-wider">SOLICITUD PROCESADA CON ÉXITO</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 flex items-center gap-1 font-semibold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            REGISTRO TIER 2 OFICIAL
          </span>
        </div>
      </div>

      {/* Main Container: VISTA PREVIA DIRECTA DE LA FICHA TÉCNICA DE SOLICITUD (RFQ) */}
      <div className="bg-[#0B0C0E] border border-[#E5A824] rounded-lg shadow-[0_0_30px_rgba(229,168,36,0.18)] overflow-hidden relative">
        {/* Quick Actions Header Toolbar */}
        <div className="bg-gradient-to-r from-[#1E190E] via-[#141519] to-[#0E1013] px-4 py-3 border-b border-[#E5A824]/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#F1B434]" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wider font-sans uppercase">
                FICHA DE SOLICITUD GENERADA (RFQ)
              </span>
              <div className="text-[10px] text-[#E5A824]">
                Documento de Cotización Listo para Descarga y Archivo
              </div>
            </div>
          </div>

          {/* Primary Action Button: PDF Download */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-4 py-1.5 text-xs font-bold text-black bg-[#E5A824] hover:bg-[#F1B434] disabled:opacity-50 rounded flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(229,168,36,0.35)] cursor-pointer active:scale-95"
              title="Descargar Ficha Técnica en formato PDF"
            >
              <Download className="w-4 h-4 text-black stroke-[2.5]" />
              {isGeneratingPdf ? 'Generando PDF...' : 'Descargar PDF'}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:flex px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded items-center gap-1.5 transition-colors cursor-pointer"
              title="Imprimir ficha técnica"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-400" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            DOCUMENTO TÉCNICO COMPLETO (Previewable & Capturable)
           ======================================================== */}
        <div 
          ref={previewRef}
          className="p-5 sm:p-6 bg-[#0B0C0E] text-neutral-100 select-text space-y-5"
        >
          {/* Header of the Technical Sheet */}
          <div className="border-b border-[#E5A824]/40 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded border border-[#E5A824] bg-black flex items-center justify-center text-[#E5A824] shadow-[0_0_12px_rgba(229,168,36,0.25)] shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#E5A824]" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-black tracking-widest text-white uppercase font-sans">
                  MAINDSTEEL <span className="text-[#E5A824]">AUTOMOTIVE</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Planta de Manufactura PIVA · Aguascalientes, México
                </div>
                <div className="text-[10px] text-[#E5A824] mt-0.5 font-medium">
                  Certificación Automotriz: IATF 16949 / ISO 9001:2015
                </div>
              </div>
            </div>

            {/* Dossier Folio & Date */}
            <div className="bg-[#141519] border border-neutral-800 rounded p-2.5 text-left sm:text-right shrink-0">
              <div className="text-[10px] uppercase tracking-widest text-neutral-400">
                FOLIO DE SOLICITUD
              </div>
              <div className="text-sm font-bold text-[#F1B434] font-mono-tech">
                {rfq.id}
              </div>
              <div className="text-[10px] text-neutral-400 mt-0.5">
                {rfq.timestamp}
              </div>
            </div>
          </div>

          {/* Status & Assignment Banner */}
          <div className="bg-[#121317] border-l-4 border-[#E5A824] p-3.5 rounded-r">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F1B434] mb-1 font-sans">
              <Clock className="w-4 h-4 text-[#E5A824]" />
              ESTATUS: {rfq.status}
            </div>
            <p className="text-xs text-neutral-200 leading-relaxed font-sans">
              Tu requerimiento de <span className="text-white font-bold underline decoration-[#E5A824]">{rfq.itemName}</span> para la empresa{' '}
              <span className="text-white font-bold underline decoration-[#E5A824]">{rfq.clientCompany || 'la Empresa'}</span> ha sido registrado en la Base de Datos.
            </p>
            <div className="mt-2 text-xs text-neutral-300 font-sans flex items-center gap-1.5 pt-2 border-t border-neutral-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A824] shrink-0" />
              <span>Un <strong className="text-white font-bold">agente</strong> te contactará de forma manual en menos de 5 minutos o a primera hora del siguiente día hábil.</span>
            </div>
          </div>

          {/* Technical Data Grid: Industrial Engineering Dossier */}
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[#E5A824] font-bold mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>DATOS TÉCNICOS DEL REQUERIMIENTO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {/* Box 1: Process / Product */}
              <div className="bg-[#101115] p-3 rounded border border-neutral-800">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <Cpu className="w-3 h-3" />
                  Elemento de Manufactura
                </div>
                <div className="text-sm font-bold text-white font-sans">
                  {rfq.itemName}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 flex items-center gap-2">
                  <span>Código: <strong className="text-[#F1B434] font-mono-tech">{rfq.itemCode || 'PRD/PRC'}</strong></span>
                  <span>·</span>
                  <span>Catálogo #{rfq.itemNumber || '16'}</span>
                </div>
              </div>

              {/* Box 2: Client & Company */}
              <div className="bg-[#101115] p-3 rounded border border-neutral-800">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <Building className="w-3 h-3" />
                  Empresa Solicitante
                </div>
                <div className="text-sm font-bold text-white font-sans">
                  {rfq.clientCompany || 'Sin especificar'}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Cliente Industrial (OEM / Tier 1)
                </div>
              </div>

              {/* Box 3: Contact & Corporate Email */}
              <div className="bg-[#101115] p-3 rounded border border-neutral-800">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <Mail className="w-3 h-3" />
                  Contacto Corporativo
                </div>
                <div className="text-xs font-semibold text-white font-sans">
                  {rfq.clientName}
                </div>
                <div className="text-[11px] text-[#F1B434] font-mono-tech mt-0.5 truncate">
                  {rfq.clientEmail}
                </div>
              </div>

              {/* Box 4: Specific Project */}
              <div className="bg-[#101115] p-3 rounded border border-neutral-800">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <Briefcase className="w-3 h-3" />
                  Proyecto Industrial
                </div>
                <div className="text-xs font-semibold text-white font-sans truncate">
                  {rfq.clientProject || 'General'}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Programa de Ensamble
                </div>
              </div>

              {/* Box 5: Destination */}
              <div className="bg-[#101115] p-3 rounded border border-neutral-800 sm:col-span-2">
                <div className="text-[10px] text-[#E5A824] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3 h-3" />
                  Destino de Embarque Industrial
                </div>
                <div className="text-xs font-bold text-white font-sans">
                  {rfq.shippingCountry || 'No especificado'}
                </div>
              </div>
            </div>
          </div>

          {/* Verification Bar */}
          <div className="pt-2 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#E5A824] font-bold">✓ REGISTRO VALIDADO</span>
              <span className="text-neutral-700">·</span>
              <span>Planta PIVA Aguascalientes</span>
            </div>
            <div className="text-[10px] text-neutral-500">
              Maindsteel Automotive de México S.A. de C.V.
            </div>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="bg-[#0D0E11] px-4 py-3 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-4 py-1.5 text-xs font-bold text-black bg-[#E5A824] hover:bg-[#F1B434] disabled:opacity-50 rounded flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(229,168,36,0.3)] cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-black stroke-[2.5]" />
              {isGeneratingPdf ? 'Generando...' : 'Descargar PDF'}
            </button>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-[#E5A824]" />
              {copied ? '¡Copiado!' : 'Copiar Registro'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenHistory}
              className="px-3 py-1.5 text-xs text-[#E5A824] hover:text-[#F1B434] border border-[#E5A824]/40 hover:border-[#E5A824] rounded flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Database className="w-3.5 h-3.5" />
              Ver Base de Datos
            </button>
            <button
              onClick={onRestart}
              className="px-3.5 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Nueva Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
