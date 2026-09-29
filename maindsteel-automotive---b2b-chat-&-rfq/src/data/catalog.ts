import { CatalogItem } from '../types';

export const CATALOG_ITEMS: CatalogItem[] = [
  // ── 12 PROCESOS ──
  {
    id: 1,
    code: 'PRC-01',
    name: 'Corte Láser',
    shortName: 'Corte Láser',
    category: 'proceso',
    description: 'Corte láser de fibra óptica de alta potencia para láminas y placas de acero al carbón, inoxidable y aluminio.',
    machinery: 'Fibra Óptica CNC Trumpf / Bystronic 12kW',
    specs: 'Espesores de 0.5mm a 25mm · Tolerancia ±0.05mm',
    automotiveStandard: 'IATF 16949 / ISO 9001:2015'
  },
  {
    id: 2,
    code: 'PRC-02',
    name: 'Estampado',
    shortName: 'Estampado',
    category: 'proceso',
    description: 'Estampado en frío y conformado con prensas mecánicas e hidráulicas de alto tonelaje para volumen masivo.',
    machinery: 'Prensas mecánicas y transfer de 150T a 800T',
    specs: 'Troquelado progresivo, embutido profundo y troquel manual',
    automotiveStandard: 'IATF 16949 / CQI-9'
  },
  {
    id: 3,
    code: 'PRC-03',
    name: 'Punzonado CNC',
    shortName: 'Punzonado CNC',
    category: 'proceso',
    description: 'Punzonado computarizado de alta velocidad y formación de características especiales en lámina metálica.',
    machinery: 'Torretas CNC Amada Vipros / EM Series',
    specs: 'Hasta 500 golpes/min · Formado de louvers, avellanados y cuellos',
    automotiveStandard: 'IATF 16949'
  },
  {
    id: 4,
    code: 'PRC-04',
    name: 'Soldadura con Celda Robótica',
    shortName: 'Celda Robótica',
    category: 'proceso',
    description: 'Celdas robotizadas multieje para cordones continuos de alta velocidad, máxima penetración y cero salpicadura.',
    machinery: 'Celdas Fanuc / Yaskawa Motoman ArcWorld dual-arm',
    specs: 'Soldadura GMAW/FCAW robotizada · Repetibilidad ±0.08mm',
    automotiveStandard: 'AWS D1.1 / D8.8 Automotive Resistance/Arc'
  },
  {
    id: 5,
    code: 'PRC-05',
    name: 'Soldadura TIG and MIG',
    shortName: 'Soldadura TIG/MIG',
    category: 'proceso',
    description: 'Procesos de soldadura manual y semiautomática certificados para aceros estructurales y aleaciones.',
    machinery: 'Fuentes sinérgicas Miller / Fronius TPS/i',
    specs: 'Soldadores homologados AWS D1.1 / ASME IX',
    automotiveStandard: 'AWS D1.1 Structural / D1.3 Sheet Metal'
  },
  {
    id: 6,
    code: 'PRC-06',
    name: 'Soldadura por Proyección',
    shortName: 'S. Proyección',
    category: 'proceso',
    description: 'Soldadura por resistencia eléctrica de alta densidad para tuercas, pernos y estampados automotrices.',
    machinery: 'Máquinas de resistencia MFDC 100kVA a 250kVA',
    specs: 'Monitoreo de corriente WeldComputer y prueba push-out torque',
    automotiveStandard: 'AWS D8.1M / D8.9M Automotive Spot & Projection'
  },
  {
    id: 7,
    code: 'PRC-07',
    name: 'Corte de Lámina CNC',
    shortName: 'Corte Lámina',
    category: 'proceso',
    description: 'Cizallado de precisión y corte longitudinal para desbaste y geometrías de desarrollo plano.',
    machinery: 'Cizallas guillotina CNC con calibrador automático',
    specs: 'Longitud de corte hasta 3,050mm · Espesor hasta 1/4"',
    automotiveStandard: 'IATF 16949'
  },
  {
    id: 8,
    code: 'PRC-08',
    name: 'Doblado de Lámina CNC',
    shortName: 'Doblez Lámina',
    category: 'proceso',
    description: 'Prensas dobladoras CNC de 7 a 9 ejes con compensación de flexión dinámica y control de ángulo láser.',
    machinery: 'Prensas CNC Amada / Bystronic Xpert 150T - 320T',
    specs: 'Largo hasta 3,100mm · Compensación automática de corona',
    automotiveStandard: 'IATF 16949 / Tolerancias DIN ISO 2768-m'
  },
  {
    id: 9,
    code: 'PRC-09',
    name: 'Doblado de Tubo',
    shortName: 'Doblez Tubo',
    category: 'proceso',
    description: 'Dobladora CNC multirradio con mandril interno para tubería redonda, cuadrada y perfiles estructurales.',
    machinery: 'Dobladoras CNC todo-eléctrico Crippa / BLM Group',
    specs: 'Diámetros de 1/2" a 3.5" · Radio de doblado 1D sin ovalamiento',
    automotiveStandard: 'IATF 16949 / CQI-15'
  },
  {
    id: 10,
    code: 'PRC-10',
    name: 'Pintura Líquida con Robot',
    shortName: 'Pintura Robot',
    category: 'proceso',
    description: 'Cabina climatizada con robots de pintura y campana rotativa para aplicación de primers y acabados técnicos.',
    machinery: 'Robots ABB / Fanuc Painting con atomizadores electrostáticos',
    specs: 'Control de espesor de capa micrométrico (30-80 µm)',
    automotiveStandard: 'ASTM B117 Cámara Salina 500-1000 hrs / CQI-12'
  },
  {
    id: 11,
    code: 'PRC-11',
    name: 'Línea de Recubrimiento (Powder Coating)',
    shortName: 'Recubrimiento',
    category: 'proceso',
    description: 'Línea continua automatizada de pintura electrostática en polvo con túnel de pretratamiento multietapa y horno.',
    machinery: 'Túnel de lavado fosfatado + cabina automática Gema + horno 220°C',
    specs: 'Grosor de capa 60-120 µm · Adherencia Cross-hatch 5B',
    automotiveStandard: 'CQI-12 Coating Assessment / IATF 16949'
  },
  {
    id: 12,
    code: 'PRC-12',
    name: 'Fabricación de Troqueles',
    shortName: 'Troqueles',
    category: 'proceso',
    description: 'Diseño CAD/CAM, maquinado CNC de precisión, temple y ajuste de troqueles progresivos y de embutido.',
    machinery: 'Centros de maquinado 5 ejes Makino / Mazak + Electroerosión de hilo',
    specs: 'Aceros para herramientas D2, S7, O1 · CMM Hexagon de verificación',
    automotiveStandard: 'VDI 3386 / Estándares GM, Stellantis, Nissan'
  },

  // ── 8 PRODUCTOS ──
  {
    id: 13,
    code: 'PRD-01',
    name: 'Doblado de Tubo (Componente)',
    shortName: 'Componente Tubo',
    category: 'producto',
    description: 'Subensambles y componentes de tubo doblado para marcos de asiento, escapes, refuerzos y líneas de fluido.',
    machinery: 'Célula integrada de corte, doblado CNC, conificado y perforado',
    specs: 'Acero al carbono, inoxidable 304/409, aluminio automotriz',
    automotiveStandard: 'Tier 1 OEM Specs (Ford WSS, Nissan NES)'
  },
  {
    id: 14,
    code: 'PRD-02',
    name: 'Formado de Alambre',
    shortName: 'Alambre',
    category: 'producto',
    description: 'Piezas tridimensionales de alambre de alta resistencia para estructuras de asientos, guías y clips.',
    machinery: 'Máquinas formadoras de alambre CNC Wafios multieje',
    specs: 'Calibres de alambre de 2.0mm a 12.0mm en acero resortado y bajo carbón',
    automotiveStandard: 'SAE J403 / IATF 16949'
  },
  {
    id: 15,
    code: 'PRD-03',
    name: 'Estaciones de Trabajo',
    shortName: 'Estaciones Trabajo',
    category: 'producto',
    description: 'Estaciones de ensamble ergonómicas para líneas automotrices, con iluminación LED, canaletas y balanceadores.',
    machinery: 'Fabricación modular de perfiles tubulares y estructuras soldadas',
    specs: 'Capacidad de carga 500-2000 kg · Cumplimiento ergonómico OSHA/ISO 6385',
    automotiveStandard: 'WCM (World Class Manufacturing) Ergonomics'
  },
  {
    id: 16,
    code: 'PRD-04',
    name: 'Racks de Manejo',
    shortName: 'Racks Manejo',
    category: 'producto',
    description: 'Racks contenedores especializados con insertos de poliuretano, UHMW y dunnage para piezas estampadas clase A.',
    machinery: 'Línea de habilitado, ensamble, soldadura y pintura electrostática',
    specs: 'Diseño a la medida para fascias, puertas, cofres y subchasis',
    automotiveStandard: 'Estándar AIAG de Empaque / Honda / Toyota / GM'
  },
  {
    id: 17,
    code: 'PRD-05',
    name: 'Carros de Manejo de Material',
    shortName: 'Carros Manejo',
    category: 'producto',
    description: 'Dollys, carros de arrastre (tugger carts) y trenes logísticos con dirección pivotante para planta Lean.',
    machinery: 'Corte láser de perfiles, soldadura MIG certificada y ensamble de rodajas',
    specs: 'Rodajas de poliuretano de baja fricción · Capacidad hasta 1,500 kg',
    automotiveStandard: 'Lean Logistics / Intralogística Automotriz'
  },
  {
    id: 18,
    code: 'PRD-06',
    name: 'Contenedores de Manejo',
    shortName: 'Contenedores Manejo',
    category: 'producto',
    description: 'Contenedores metálicos colapsables y apilables de uso rudo para piezas fundidas, forjadas y estampadas.',
    machinery: 'Celdas robotizadas de soldadura MIG y línea de recubrimiento en polvo',
    specs: 'Apilables hasta 4 niveles estáticos y 2 dinámicos · Malla perimetral reforzada',
    automotiveStandard: 'Norma AIAG RC-8 / DIN 15155'
  },
  {
    id: 19,
    code: 'PRD-07',
    name: 'Soldadura TIG & MIG (Estructura)',
    shortName: 'Soldadura Estructura',
    category: 'producto',
    description: 'Subchasis, soportes de motor y ensambles estructurales de alta integridad soldados bajo norma AWS D8.8.',
    machinery: 'Celdas mixtas robóticas y manuales con inspección por ultrasonido y macroataque',
    specs: 'Tolerancias dimensionales con nidos CMM y reportes PPAP nivel 3',
    automotiveStandard: 'AWS D8.8 Automotive Arc Welding'
  },
  {
    id: 20,
    code: 'PRD-08',
    name: 'Soldadura por Proyección (Estructura)',
    shortName: 'Proyección Estructura',
    category: 'producto',
    description: 'Ensambles de lámina con múltiples tuercas y pernos de alta resistencia para sujeción de componentes críticos.',
    machinery: 'Línea de proyección indexada con poka-yoke de presencia de rosca',
    specs: '100% prueba no destructiva de torque y presencia de tornillería',
    automotiveStandard: 'CQI-15 Welding System Assessment'
  }
];

// Helper to look up an item by user input (number or text)
export function matchCatalogItem(input: string): CatalogItem | undefined {
  const clean = input.trim().toLowerCase();

  // Check if input is a pure number (1 - 20)
  const num = parseInt(clean, 10);
  if (!isNaN(num) && num >= 1 && num <= 20) {
    return CATALOG_ITEMS.find(item => item.id === num);
  }

  // Check prefix numbers like "1.", "16.", "16.-", "#16"
  const prefixMatch = clean.match(/^(?:#|\b)?(\d{1,2})\b/);
  if (prefixMatch) {
    const parsed = parseInt(prefixMatch[1], 10);
    if (parsed >= 1 && parsed <= 20) {
      return CATALOG_ITEMS.find(item => item.id === parsed);
    }
  }

  // Check exact or partial name matches
  return CATALOG_ITEMS.find(item => {
    const itemName = item.name.toLowerCase();
    const shortName = item.shortName.toLowerCase();
    const code = item.code.toLowerCase();
    return clean.includes(shortName) || 
           itemName.includes(clean) || 
           clean.includes(itemName) ||
           clean.includes(code);
  });
}
