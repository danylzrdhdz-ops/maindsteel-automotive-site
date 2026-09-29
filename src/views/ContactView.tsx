import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, ExternalLink, Navigation } from 'lucide-react';
import { dbService } from '../services/store';

export const ContactView: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessageId, setSubmittedMessageId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) return;

    setIsSubmitting(true);
    try {
      const created = await dbService.addContactMessage({
        nombre,
        email,
        telefono,
        asunto: asunto || 'Consulta General',
        mensaje
      });
      setSubmittedMessageId(created.id);
      setNombre('');
      setEmail('');
      setTelefono('');
      setAsunto('');
      setMensaje('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#0a0b0e] text-zinc-200 min-h-screen" id="contact-view">
      
      {/* 1. HERO / TITLE SECTION */}
      <section className="relative w-full py-16 px-4 text-center border-b border-zinc-800 bg-[#0d0f14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider">
            CONTÁCTANOS
          </h1>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto" />
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            En Maindsteel tenemos la mejor disposición para proveerte toda la información además de ayudarte con cualquier pregunta que puedas tener.
          </p>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN SECTION (Matching Image 1) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: Location, Phone & Interactive Map */}
          <div className="lg:col-span-5 space-y-6" id="contact-info-col">
            
            {/* Address Card */}
            <div className="p-6 rounded-lg bg-[#12141a] border border-zinc-800 hover:border-[#d4af37]/60 transition-colors shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-[#d4af37]">
                    Planta de Manufactura PIVA
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    PIVA Parque Industrial del Valle de Aguascalientes, Calle Municipio de calvillo # 103
                    Col. Valle de Aguascalientes, San Fransisco de los Romo, Aguascalientes, México.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-lg bg-[#12141a] border border-zinc-800 hover:border-[#d4af37]/60 transition-colors shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-[#d4af37]/10 text-[#d4af37] flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-[#d4af37]">
                    Teléfono Directo Conmutador
                  </h3>
                  <a
                    href="tel:+524491581709"
                    className="text-lg font-bold text-white hover:text-[#d4af37] transition-colors mt-0.5 block"
                  >
                    +52-449-158-17-09
                  </a>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">
                    Lunes a Viernes • 08:00 hrs a 18:00 hrs
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Dark Industrial Map */}
            <div className="relative rounded-lg overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 aspect-[4/3]">
              <iframe
                title="Ubicación Maindsteel PIVA Aguascalientes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.590124849646!2d-102.26908502393282!3d21.950299655386088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef9f7988365f%3A0x8992ad367a731efc!2sValle%20de%20Aguascalientes%2C%20San%20Francisco%20de%20los%20Romo%2C%20Ags.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/85 backdrop-blur-md rounded border border-[#d4af37]/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold text-white">PIVA Aguascalientes</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Parque+Industrial+del+Valle+de+Aguascalientes+Maindsteel"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] text-[#f5d47a] hover:underline"
                >
                  <span>Abrir Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form (Matching Image 1) */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div className="p-8 sm:p-10 rounded-xl bg-[#12141a] border border-[#d4af37]/60 shadow-2xl relative">
              
              <h2 className="text-xl font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#d4af37]" />
                <span>Formulario de Contacto</span>
              </h2>

              {submittedMessageId ? (
                <div className="p-8 text-center flex flex-col items-center bg-[#161822] rounded-lg border border-emerald-500/40 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <div className="inline-block px-3 py-1 bg-black/60 rounded text-xs font-mono text-[#d4af37] my-3 border border-zinc-700">
                    ID Registro: {submittedMessageId}
                  </div>
                  <p className="text-xs text-zinc-300 max-w-md mb-6 leading-relaxed">
                    Hemos recibido tus datos y requerimientos. El departamento comercial de Maindsteel
                    te contactará a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmittedMessageId(null)}
                    className="px-6 py-2.5 bg-[#b8860b] hover:bg-[#d4af37] text-white font-bold text-xs uppercase tracking-wider rounded transition-all"
                  >
                    Enviar Otro Mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  {/* Nombre */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu Nombre"
                      required
                      className="w-full px-4 py-3 bg-[#121212] border border-[#d4af37]/40 rounded-sm text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                      id="input-nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu Email"
                      required
                      className="w-full px-4 py-3 bg-[#121212] border border-[#d4af37]/40 rounded-sm text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                      id="input-email"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="Tu teléfono"
                      className="w-full px-4 py-3 bg-[#121212] border border-[#d4af37]/40 rounded-sm text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                      id="input-telefono"
                    />
                  </div>

                  {/* Asunto */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Asunto
                    </label>
                    <input
                      type="text"
                      value={asunto}
                      onChange={(e) => setAsunto(e.target.value)}
                      placeholder="Cuál es tu asunto"
                      className="w-full px-4 py-3 bg-[#121212] border border-[#d4af37]/40 rounded-sm text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                      id="input-asunto"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Mensaje *
                    </label>
                    <textarea
                      rows={5}
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="Escríbenos un mensaje"
                      required
                      className="w-full px-4 py-3 bg-[#121212] border border-[#d4af37]/40 rounded-sm text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                      id="textarea-mensaje"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#b8860b] hover:bg-[#d4af37] text-white text-xs font-black uppercase tracking-wider rounded transition-all shadow-[0_4px_16px_rgba(184,134,11,0.4)] flex items-center justify-center gap-2 disabled:opacity-60"
                      id="btn-enviar-datos"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Enviando...' : 'ENVIAR DATOS'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
