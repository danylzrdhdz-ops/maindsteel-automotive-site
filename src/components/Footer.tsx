import React from 'react';
import { MapPin, Mail, Shield, Award, CheckCircle2 } from 'lucide-react';
import tiktokImg from '../../images/tiktok icon.png';
import linkedinImg from '../../images/linkedin icon.png';
import instagramImg from '../../images/instagram icon.png';
import emailImg from '../../images/Email icon.png';
import facebookImg from '../../images/facebook icon.png';
import { RoutePath } from '../types';
import certificacionesImg from '../../images/certificaciones.png';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#08090c] border-t border-zinc-800 text-zinc-300 pt-16 pb-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Column 1: MENU */}
          <div className="space-y-4" id="footer-menu-col">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#d4af37] pb-2 inline-block">
              Menú
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="text-zinc-400 hover:text-[#f5d47a] transition-colors"
                >
                  INICIO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('procesos')}
                  className="text-zinc-400 hover:text-[#f5d47a] transition-colors"
                >
                  PROCESOS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('productos')}
                  className="text-zinc-400 hover:text-[#f5d47a] transition-colors"
                >
                  PRODUCTOS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="text-zinc-400 hover:text-[#f5d47a] transition-colors"
                >
                  CONTACTO
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: CONTACTO */}
          <div className="space-y-4" id="footer-contact-col">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#d4af37] pb-2 inline-block">
              Contacto
            </h4>
            <div className="flex items-start gap-3 text-xs leading-relaxed text-zinc-400">
              <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <p>
                PIVA Parque Industrial del Valle de Aguascalientes, Calle Municipio de Calvillo # 103,
                Col. Valle de Aguascalientes, San Francisco de los Romo, Aguascalientes, México.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-300 pt-1">
              <span className="text-[#d4af37] font-semibold">Tel:</span>
              <a href="tel:+524491581709" className="hover:text-[#f5d47a] hover:underline">
                +52-449-158-17-09
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <span className="text-[#d4af37] font-semibold">Email:</span>
              <a href="mailto:contacto@maindsteel.com.mx" className="hover:text-[#f5d47a] hover:underline">
                contacto@maindsteel.com.mx
              </a>
            </div>
          </div>

          {/* Column 3: REDES SOCIALES */}
          <div className="space-y-4" id="footer-social-col">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#d4af37] pb-2 inline-block">
              Redes Sociales
            </h4>
            <p className="text-xs text-zinc-400">
              Síguenos en nuestras plataformas corporativas para conocer nuevos lanzamientos e inversiones tecnológicas:
            </p>
            <div className="flex items-center justify-start gap-4 sm:gap-6 pt-4">
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok Maindsteel"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group hover:drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] transition-all"
              >
                <img src={tiktokImg} alt="TikTok Maindsteel" className="w-full h-full object-contain transform scale-[4.5] hover:scale-[5] transition-transform duration-300 pointer-events-none" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Maindsteel"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group hover:drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] transition-all"
              >
                <img src={linkedinImg} alt="LinkedIn Maindsteel" className="w-full h-full object-contain transform scale-[4.5] hover:scale-[5] transition-transform duration-300 pointer-events-none" />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Maindsteel"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group hover:drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] transition-all"
              >
                <img src={instagramImg} alt="Instagram Maindsteel" className="w-full h-full object-contain transform scale-[4.5] hover:scale-[5] -translate-y-[4px] transition-transform duration-300 pointer-events-none" />
              </a>
              {/* Email */}
              <a
                href="mailto:contacto@maindsteel.com.mx"
                aria-label="Enviar Correo Directo"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group hover:drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] transition-all"
              >
                <img src={emailImg} alt="Email Maindsteel" className="w-full h-full object-contain transform scale-[4.5] hover:scale-[5] transition-transform duration-300 pointer-events-none" />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Maindsteel"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group hover:drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] transition-all"
              >
                <img src={facebookImg} alt="Facebook Maindsteel" className="w-full h-full object-contain transform scale-[4.5] hover:scale-[5] translate-y-[6px] -translate-x-[5px] transition-transform duration-300 pointer-events-none" />
              </a>
            </div>
          </div>

          {/* Column 4: CERTIFICACIONES Y ALIANZAS */}
          <div className="space-y-4" id="footer-certifications-col">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#d4af37] pb-2 inline-block">
              Certificaciones
            </h4>
            <div className="pt-2 flex justify-start">
              <img 
                src={certificacionesImg} 
                alt="Certificaciones Maindsteel" 
                className="w-auto max-w-[75px] h-auto object-contain drop-shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Maindsteel Automotive. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('contacto')} className="hover:text-[#f5d47a]">
              Aviso de Privacidad
            </button>
            <button onClick={() => onNavigate('procesos')} className="hover:text-[#f5d47a]">
              Capacidades CNC
            </button>
            <button onClick={() => onNavigate('contacto')} className="hover:text-[#f5d47a]">
              Ubicación Planta PIVA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
