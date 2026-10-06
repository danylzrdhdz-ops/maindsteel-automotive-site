import { ProcessDetails } from '../types';
import { useTranslation } from 'react-i18next';

import imgCorteLaser from '../../images/corte laser.webp';
import imgPunzonado from '../../images/punzonado cnc.webp';
import imgDobladoTubo from '../../images/doblado de tubo.webp';
import imgEstampado from '../../images/estampado.webp';
import imgSoldaduraTigMig from '../../images/soldadura tig & mig.webp';
import imgCorteLamina from '../../images/corte de lámina cnc.webp';
import imgSoldaduraProyeccion from '../../images/soldadura por proyección.webp';
import imgDobladoLamina from '../../images/doblado de lámina cnc.webp';
import imgPinturaLiquida from '../../images/pintura líquida en robot.webp';
import imgLineaRecubrimiento from '../../images/linea de recubrimiento.webp';
import imgFabricacionTroqueles from '../../images/fabricación de troqueles.webp';

import mmaqCorteLaser from '../../imgs procesos/Nuestra maquinaria Corte laser.webp';
import mventCorteLaser from '../../imgs procesos/Ventajas del corte laser.webp';
import mmaqPunzonado from '../../imgs procesos/Nuestra maquinaria punzonado cnc.webp';
import mventPunzonado from '../../imgs procesos/Ventajas de punzonado cnc.webp';
import mmaqDobladoTubo from '../../imgs procesos/Nuestra maquinaria doblado de tubo.webp';
import mventDobladoTubo from '../../imgs procesos/Ventajas de doblado de tubo.webp';
import mmaqEstampado from '../../imgs procesos/Nuestra maquinaria estampado.webp';
import mventEstampado from '../../imgs procesos/Proceso de estampado.webp';
import mmaqTigMig from '../../imgs procesos/Nuestra maquinaria soldadura tigmig.webp';
import mventTigMig from '../../imgs procesos/ventajas de soldadura tigmig.webp';
import mmaqCorteDoblez from '../../imgs procesos/Nuestra maquinaria cnc.webp';
import mventCorteDoblez from '../../imgs procesos/Proceso de corte y doblez cnc.webp';
import mmaqPinturaLiq from '../../imgs procesos/Pintura líquida con robot proceso.webp';
import TitPintRobot from '../../imgs procesos/Titulo pintura con robot.webp';
import MmaqRobotsApp from '../../imgs procesos/robots de aplicación.webp';

import mmaqPinturaElec from '../../imgs procesos/Nuestra maquinaria pintura electroestática.webp';
import mventPinturaElec from '../../imgs procesos/Ventajas de la pintura electroestática.webp';
export const PROCESSES_DATA_ES: ProcessDetails[] = [
  {
    id: 'corte-laser',
    slug: 'corte-laser',
    title: 'Corte laser',
    cardImage: imgCorteLaser,
    coverImage: imgCorteLaser,
    bannerImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqCorteLaser,
    machineryTitle: 'Nuestra maquinaria',
    machineryText: 'Maquila de corte láser CO2 y Fibra óptica con capacidad hasta de 1 pulgada de espesor en acero al carbón. Con nuestro servicio de corte láser podemos obtener resultados precisos y de calidad superior para los requerimientos más exigentes de la industria automotriz.',
    advantagesTitle: 'Ventajas del corte láser',
    advantagesText: 'Por medio del corte con láser podemos obtener cortes precisos y de calidad, lo cual nos permite ofrecer un producto con mayor presentación. Su versatilidad es la mayor ventaja en el proceso de corte láser, ya que se pueden cortar diversos tipos de materiales.',
    advantagesImage: mventCorteLaser,
    machineryCardSpecs: 'Maquila de corte láser CO2 y Fibra óptica con capacidad hasta de 1 pulgada de espesor en acero al carbón.',
    additionalSpecs: [
      { label: 'Tolerancia estándar', value: '± 0.05 mm' },
      { label: 'Espesor máximo acero carbón', value: 'Hasta 25.4 mm (1")' },
      { label: 'Materiales procesables', value: 'Acero al carbón, acero inoxidable, aluminio' },
      { label: 'Área de corte útil', value: '3,000 x 1,500 mm' }
    ]
  },
  {
    id: 'punzonado-cnc',
    slug: 'punzonado-cnc',
    title: 'Punzonado CNC',
    cardImage: imgPunzonado,
    coverImage: imgPunzonado,
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqPunzonado,
    machineryTitle: 'Nuestra maquinaria',
    machineryText: 'Maquila de corte láser CO2 y Fibra óptica con capacidad hasta de 1 pulgada de espesor en acero al carbón. Con nuestro servicio de punzonado podemos obtener resultados precisos y de calidad en geometrías complejas, embutidos y perforaciones repetitivas.',
    advantagesTitle: 'Ventajas del punzonado CNC',
    advantagesText: 'Por medio del punzonado de alta velocidad podemos obtener cortes y perforaciones precisas con gran repetibilidad volumétrica, lo cual nos permite ofrecer un producto con mayor presentación y costos optimizados para series medianas y grandes.',
    advantagesImage: mventPunzonado,
    machineryCardSpecs: '3 Punzonadoras CNC (auto index, torreta baja y torreta alta)',
    additionalSpecs: [
      { label: 'Capacidad de torreta', value: 'Torreta baja y torreta alta auto-index' },
      { label: 'Golpes por minuto', value: 'Hasta 600 HPM' },
      { label: 'Espesor máximo', value: 'Hasta 6.35 mm (1/4")' },
      { label: 'Aplicaciones', value: 'Rejillas, gabinetes, ménsulas, soportes automotrices' }
    ]
  },
  {
    id: 'doblado-de-tubo',
    slug: 'doblado-de-tubo',
    title: 'Doblado de tubo',
    cardImage: imgDobladoTubo,
    coverImage: imgDobladoTubo,
    bannerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqDobladoTubo,
    machineryTitle: 'Nuestra maquinaria',
    machineryText: 'Contamos con 6 dobladoras CNC, 4 con alta precisión de 60 toneladas y 1 con capacidad de 200 toneladas. Desarrollamos ingeniería propia para cualquier aplicación en el doblado de tubo y alambre.',
    advantagesTitle: 'Ventajas del doblado de tubo',
    advantagesText: 'Por medio del doblado de control numérico computarizado logramos radios de curvatura constantes sin deformaciones en pared ni arrugas perjudiciales, garantizando el flujo ideal y ensamble milimétrico en líneas automotrices.',
    advantagesImage: mventDobladoTubo,
    machineryCardSpecs: '6 Dobladoras CNC (4 alta precisión de 60 tons. and 1 con capacidad de 200 ton.)',
    additionalSpecs: [
      { label: 'Fuerza de prensado', value: 'Hasta 200 toneladas' },
      { label: 'Diámetros procesables', value: 'Desde 3/8" hasta 3" de diámetro exterior' },
      { label: 'Geometrías', value: 'Curvado 3D multi-radio con mandril' },
      { label: 'Sistemas automotrices', value: 'Chasis, escapes, barras estabilizadoras, arneses' }
    ]
  },
  {
    id: 'estampado',
    slug: 'estampado',
    title: 'Estampado',
    cardImage: imgEstampado,
    coverImage: imgEstampado,
    bannerImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqEstampado,
    machineryTitle: 'Nuestra maquinaria',
    machineryText: 'Contamos con 8 prensas para estampado de partes metálicas de alta precisión con capacidad de hasta 200 toneladas. Además, de 2 servoprensas KOMATSU para troqueles progresivos y prensas tipo OBI para aplicaciones tándem.',
    advantagesTitle: 'Proceso de estampado',
    advantagesText: 'Nuestras máquinas para corte y estampado de precisión son ideales para series de producción pequeñas y medianas, mejor adaptadas a los productos personalizados que el mercado demanda y de menor costo.',
    advantagesImage: mventEstampado,
    machineryCardSpecs: '8 prensas para estampado (desde 30 hasta 120 ton de capacidad) y 2 servoprensas KOMATSU',
    additionalSpecs: [
      { label: 'Capacidad de prensas', value: '30 a 200 Toneladas' },
      { label: 'Tecnología servoprensa', value: 'KOMATSU H1F series servo control' },
      { label: 'Troqueles compatibles', value: 'Progresivos, transferencia y tándem OBI' },
      { label: 'Cadencia de producción', value: 'Alta cadencia automotriz continua' }
    ]
  },
  {
    id: 'soldadura-tig-mig',
    slug: 'soldadura-tig-mig',
    title: 'Soldadura TIG & MIG y por Proyección',
    cardImage: imgSoldaduraTigMig,
    coverImage: imgSoldaduraTigMig,
    bannerImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqTigMig,
    machineryTitle: 'Nuestra maquinaria',
    machineryText: 'Contamos con un amplio servicio de soldadura: MIG, TIG y soldadura por proyección. Contamos con 30 máquinas de soldadura MIG, 2 de soldadura TIG y 10 de soldadura por proyección.',
    advantagesTitle: 'Ventajas de nuestra Soldadura',
    advantagesText: 'Nuestros diversos servicios nos permiten ofrecer un servicio completo en el proceso de manufactura necesario para su empresa, con cordones limpios, nula porosidad y control estricto de penetración bajo normas AWS y automotrices.',
    advantagesImage: mventTigMig,
    machineryCardSpecs: 'Maquila de soldadura por resistencia, contamos con máquinas punteadoras y por proyección para aplicaciones especiales, nuestra capacidad es hasta de 200 KVA\'s.',
    additionalSpecs: [
      { label: 'Parque de máquinas', value: '30 MIG + 2 TIG + 10 proyección' },
      { label: 'Capacidad por resistencia', value: 'Hasta 200 KVA' },
      { label: 'Certificaciones soldadores', value: 'AWS D1.1 / D1.2 / IATF 16949' },
      { label: 'Inspección de calidad', value: 'Líquidos penetrantes y pruebas macrográficas' }
    ]
  },
  {
    id: 'corte-de-lamina-cnc',
    slug: 'corte-de-lamina-cnc',
    title: 'Corte de lámina CNC',
    cardImage: imgCorteLamina,
    coverImage: imgCorteLamina,
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqCorteDoblez,
    machineryTitle: 'Nuestra maquinaria',
    machineryText: 'Contamos con 6 Dobladoras CNC y 2 guillotinas de alta precisión para corte de lámina y placa, nuestra capacidad tecnológica de última generación nos permite realizar un sin fín de aplicaciones en la industria metalmecánica, automotriz e industrial.',
    advantagesTitle: 'Proceso de Corte y Doblez CNC',
    advantagesText: 'El doblez de lámina de control numérico (CNC), permite doblar con tecnología servo hidráulica para un mercado que demanda producción de piezas metálicas de alta precisión. Asimismo, ofrecemos nuestro proceso especializado de corte de lámina y placa con capacidad hasta de 1/4 en acero al carbón.',
    advantagesImage: mventCorteDoblez,
    machineryCardSpecs: '6 Dobladoras CNC (4 alta precisión de 60 tons. and 1 con capacidad de 200 ton.) y 2 guillotinas para corte de lamina y placa (hasta 1/4" a 3 mts.)',
    additionalSpecs: [
      { label: 'Longitud de guillotina', value: 'Hasta 3,050 mm de corte contínuo' },
      { label: 'Espesor de corte', value: 'Hasta 6.35 mm (1/4") acero al carbón' },
      { label: 'Compensación de flexión', value: 'CNC Crowning automático activo' },
      { label: 'Software de desdoble', value: 'Integración directa CAD/CAM SolidWorks / Radan' }
    ]
  },
  // Additional catalog processes
  {
    id: 'doblado-de-lamina-cnc',
    slug: 'doblado-de-lamina-cnc',
    title: 'Doblado de Lámina CNC',
    cardImage: imgDobladoLamina,
    coverImage: imgDobladoLamina,
    bannerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80',
    machineryImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    machineryTitle: 'Dobladoras Servo-Hidráulicas CNC',
    machineryText: 'Equipos de plegado CNC de alta precisión con compensación activa de flexión para mantener el ángulo idéntico en toda la longitud de doblez.',
    advantagesTitle: 'Precisión angular en cada plegado',
    advantagesText: 'Capacidad de realizar plegados progresivos complejos con herramentales segmentados para cajas, envolventes y perfiles especiales.',
    advantagesImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
    machineryCardSpecs: '6 Prensas dobladoras CNC de 60 a 200 toneladas con tope trasero multi-eje.',
    additionalSpecs: [
      { label: 'Fuerza máxima', value: '200 Toneladas métricas' },
      { label: 'Longitud de mesa', value: '3,200 mm' },
      { label: 'Control CNC', value: 'Delem / Cybelec gráficos 3D' }
    ]
  },
  {
    id: 'pintura-liquida-robot',
    slug: 'pintura-liquida-robot',
    title: 'Pintura Líquida con Robot',
    cardImage: imgPinturaLiquida,
    coverImage: MmaqRobotsApp,
    coverImageFit: 'cover',
    bannerImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1600&q=80',
    machineryImage: TitPintRobot,
    machineryImageFit: 'cover',
    machineryTitle: 'Robots de Aplicación Automatizada',
    machineryText: 'Cabina presurizada con robots antropomorfos diseñados para la aplicación uniforme de recubrimientos líquidos base solvente y base agua.',
    advantagesTitle: 'Espesor uniforme y cero defectos',
    advantagesText: 'Monitoreo continuo de viscosidad y flujo para asegurar micrajes controlados y acabados Clase A requeridos por armadoras automotrices.',
    advantagesImage: mmaqPinturaLiq,
    machineryCardSpecs: 'Cabina de flujo laminar con 2 robots de pintura y transportador aéreo contínuo.',
    additionalSpecs: [
      { label: 'Control de espesor', value: 'Control en tiempo real ± 5 micras' },
      { label: 'Horno de curado', value: 'Horno continuo por convección a 180°C' },
      { label: 'Normas superadas', value: 'Prueba de cámara salina ASTM B117' }
    ]
  },
  {
    id: 'linea-de-recubrimiento',
    slug: 'linea-de-recubrimiento',
    title: 'Pintura Electroestática y Recubrimiento',
    cardImage: imgLineaRecubrimiento,
    coverImage: imgLineaRecubrimiento,
    bannerImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqPinturaElec,
    machineryTitle: 'Línea de Pintura en Polvo',
    machineryText: 'Túnel de pretratamiento por aspersión de 5 etapas (desengrase, fosfatizado y sellado nano-cerámico) seguido de cabina electrostática.',
    advantagesTitle: 'Máxima adherencia anticorrosiva',
    advantagesText: 'Resistencia probada a más de 1,000 horas de cámara salina, ideal para componentes de suspensión, racks y herrajes exteriores.',
    advantagesImage: mventPinturaElec,
    machineryCardSpecs: 'Línea continua automatizada con túnel de 5 etapas y horno de polimerizado.',
    additionalSpecs: [
      { label: 'Pretratamiento', value: '5 etapas desengrase y sellado nanocerámico' },
      { label: 'Cámara de niebla salina', value: 'Supera > 1,000 horas ASTM B117' },
      { label: 'Colores disponibles', value: 'Gama RAL automotriz completa' }
    ]
  },
  {
    id: 'fabricacion-de-troqueles',
    slug: 'fabricacion-de-troqueles',
    title: 'Fabricación de Troqueles',
    cardImage: imgFabricacionTroqueles,
    coverImage: imgFabricacionTroqueles,
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    machineryImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    machineryTitle: 'Taller de Matricería y Troquelería',
    machineryText: 'Centros de maquinado vertical CNC, rectificadoras de superficies planas y electroerosionadoras para manufactura y mantenimiento de troqueles.',
    advantagesTitle: 'Diseño integral y vida útil prolongada',
    advantagesText: 'Desarrollo de ingeniería propia en troqueles progresivos y tándem con aceros grado herramienta templados bajo tratamiento térmico controlado.',
    advantagesImage: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    machineryCardSpecs: 'Centros de maquinado vertical Haas y electroerosionadoras de hilo CNC.',
    additionalSpecs: [
      { label: 'Tipos de troqueles', value: 'Progresivos, transferencia, corte y embutido profundo' },
      { label: 'Aceros de herramientas', value: 'D2, A2, O1 tratados térmicamente 58-62 HRC' },
      { label: 'Mantenimiento preventivo', value: 'Servicio in-house para cero paros de línea' }
    ]
  }
];

export const PROCESSES_DATA_EN: ProcessDetails[] = [
  {
    id: 'corte-laser',
    slug: 'corte-laser',
    title: 'Laser Cutting',
    cardImage: imgCorteLaser,
    coverImage: imgCorteLaser,
    bannerImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqCorteLaser,
    machineryTitle: 'Our machinery',
    machineryText: 'CO2 and Fiber optic laser cutting manufacturing with capacity up to 1 inch thickness in carbon steel. With our laser cutting service we can obtain precise and superior quality results for the most demanding requirements of the automotive industry.',
    advantagesTitle: 'Advantages of laser cutting',
    advantagesText: 'Through laser cutting we can obtain precise and quality cuts, which allows us to offer a product with better presentation. Its versatility is the greatest advantage in the laser cutting process, as various types of materials can be cut.',
    advantagesImage: mventCorteLaser,
    machineryCardSpecs: 'CO2 and Fiber optic laser cutting manufacturing with capacity up to 1 inch thickness in carbon steel.',
    additionalSpecs: [
      { label: 'Standard tolerance', value: '± 0.05 mm' },
      { label: 'Max thickness carbon steel', value: 'Up to 25.4 mm (1")' },
      { label: 'Processable materials', value: 'Carbon steel, stainless steel, aluminum' },
      { label: 'Useful cutting area', value: '3,000 x 1,500 mm' }
    ]
  },
  {
    id: 'punzonado-cnc',
    slug: 'punzonado-cnc',
    title: 'CNC Punching',
    cardImage: imgPunzonado,
    coverImage: imgPunzonado,
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqPunzonado,
    machineryTitle: 'Our machinery',
    machineryText: 'With our CNC punching service we can obtain precise and quality results in complex geometries, deep drawing and repetitive perforations.',
    advantagesTitle: 'Advantages of CNC punching',
    advantagesText: 'Through high-speed punching we can obtain precise cuts and perforations with great volumetric repeatability, which allows us to offer a product with better presentation and optimized costs for medium and large series.',
    advantagesImage: mventPunzonado,
    machineryCardSpecs: '3 CNC Punching machines (auto index, low turret and high turret)',
    additionalSpecs: [
      { label: 'Turret capacity', value: 'Low turret and auto-index high turret' },
      { label: 'Hits per minute', value: 'Up to 600 HPM' },
      { label: 'Max thickness', value: 'Up to 6.35 mm (1/4")' },
      { label: 'Applications', value: 'Grids, cabinets, brackets, automotive supports' }
    ]
  },
  {
    id: 'doblado-de-tubo',
    slug: 'doblado-de-tubo',
    title: 'Tube Bending',
    cardImage: imgDobladoTubo,
    coverImage: imgDobladoTubo,
    bannerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqDobladoTubo,
    machineryTitle: 'Our machinery',
    machineryText: 'We have 6 CNC bending machines, 4 with high precision of 60 tons and 1 with a capacity of 200 tons. We develop our own engineering for any application in tube and wire bending.',
    advantagesTitle: 'Advantages of tube bending',
    advantagesText: 'Through computer numerical control bending we achieve constant curvature radii without wall deformations or harmful wrinkles, guaranteeing ideal flow and millimetric assembly in automotive lines.',
    advantagesImage: mventDobladoTubo,
    machineryCardSpecs: '6 CNC Bending machines (4 high precision of 60 tons and 1 with a capacity of 200 ton.)',
    additionalSpecs: [
      { label: 'Pressing force', value: 'Up to 200 tons' },
      { label: 'Processable diameters', value: 'From 3/8" to 3" external diameter' },
      { label: 'Geometries', value: 'Multi-radius 3D bending with mandrel' },
      { label: 'Automotive systems', value: 'Chassis, exhausts, stabilizer bars, harnesses' }
    ]
  },
  {
    id: 'estampado',
    slug: 'estampado',
    title: 'Stamping',
    cardImage: imgEstampado,
    coverImage: imgEstampado,
    bannerImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqEstampado,
    machineryTitle: 'Our machinery',
    machineryText: 'We have 8 presses for high-precision metal parts stamping with a capacity of up to 200 tons. In addition, 2 KOMATSU servo presses for progressive dies and OBI type presses for tandem applications.',
    advantagesTitle: 'Stamping Process',
    advantagesText: 'Our precision cutting and stamping machines are ideal for small and medium production series, better adapted to the customized products demanded by the market at a lower cost.',
    advantagesImage: mventEstampado,
    machineryCardSpecs: '8 stamping presses (from 30 to 120 ton capacity) and 2 KOMATSU servo presses',
    additionalSpecs: [
      { label: 'Press capacity', value: '30 to 200 Tons' },
      { label: 'Servo press technology', value: 'KOMATSU H1F series servo control' },
      { label: 'Compatible dies', value: 'Progressive, transfer and OBI tandem' },
      { label: 'Production rate', value: 'High continuous automotive rate' }
    ]
  },
  {
    id: 'soldadura-tig-mig',
    slug: 'soldadura-tig-mig',
    title: 'TIG & MIG and Projection Welding',
    cardImage: imgSoldaduraTigMig,
    coverImage: imgSoldaduraTigMig,
    bannerImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqTigMig,
    machineryTitle: 'Our machinery',
    machineryText: 'We have a wide welding service: MIG, TIG and projection welding. We have 30 MIG welding machines, 2 TIG welding machines and 10 projection welding machines.',
    advantagesTitle: 'Advantages of our Welding',
    advantagesText: 'Our diverse services allow us to offer a complete manufacturing process required for your company, with clean beads, zero porosity and strict penetration control under AWS and automotive standards.',
    advantagesImage: mventTigMig,
    machineryCardSpecs: 'Resistance welding manufacturing, we have spot and projection machines for special applications, our capacity is up to 200 KVA\'s.',
    additionalSpecs: [
      { label: 'Machine park', value: '30 MIG + 2 TIG + 10 projection' },
      { label: 'Resistance capacity', value: 'Up to 200 KVA' },
      { label: 'Welder certifications', value: 'AWS D1.1 / D1.2 / IATF 16949' },
      { label: 'Quality inspection', value: 'Penetrant testing and macrographic tests' }
    ]
  },
  {
    id: 'corte-de-lamina-cnc',
    slug: 'corte-de-lamina-cnc',
    title: 'CNC Sheet Metal Cutting',
    cardImage: imgCorteLamina,
    coverImage: imgCorteLamina,
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqCorteDoblez,
    machineryTitle: 'Our machinery',
    machineryText: 'We have 6 CNC Bending machines and 2 high-precision guillotines for sheet and plate cutting, our state-of-the-art technological capacity allows us to perform endless applications in the metal-mechanic, automotive and industrial sector.',
    advantagesTitle: 'CNC Cutting and Bending Process',
    advantagesText: 'CNC sheet bending allows bending with servo-hydraulic technology for a market that demands the production of high-precision metal parts. We also offer our specialized sheet and plate cutting process with capacity up to 1/4 in carbon steel.',
    advantagesImage: mventCorteDoblez,
    machineryCardSpecs: '6 CNC Bending machines (4 high precision of 60 tons. and 1 with a capacity of 200 ton.) and 2 guillotines for sheet and plate cutting (up to 1/4" at 3 mts.)',
    additionalSpecs: [
      { label: 'Guillotine length', value: 'Up to 3,050 mm of continuous cutting' },
      { label: 'Cutting thickness', value: 'Up to 6.35 mm (1/4") carbon steel' },
      { label: 'Bending compensation', value: 'Active automatic CNC Crowning' },
      { label: 'Unfolding software', value: 'Direct CAD/CAM integration SolidWorks / Radan' }
    ]
  },
  {
    id: 'doblado-de-lamina-cnc',
    slug: 'doblado-de-lamina-cnc',
    title: 'CNC Sheet Metal Bending',
    cardImage: imgDobladoLamina,
    coverImage: imgDobladoLamina,
    bannerImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80',
    machineryImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    machineryTitle: 'CNC Servo-Hydraulic Press Brakes',
    machineryText: 'High-precision CNC folding equipment with active bending compensation to maintain the exact angle throughout the entire bending length.',
    advantagesTitle: 'Angular precision in every fold',
    advantagesText: 'Ability to perform complex progressive bending with segmented tooling for boxes, enclosures, and special profiles.',
    advantagesImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
    machineryCardSpecs: '6 CNC Press Brakes from 60 to 200 tons with multi-axis back gauge.',
    additionalSpecs: [
      { label: 'Max force', value: '200 Metric tons' },
      { label: 'Table length', value: '3,200 mm' },
      { label: 'CNC Control', value: 'Delem / Cybelec 3D graphics' }
    ]
  },
  {
    id: 'pintura-liquida-robot',
    slug: 'pintura-liquida-robot',
    title: 'Liquid Painting with Robot',
    cardImage: imgPinturaLiquida,
    coverImage: MmaqRobotsApp,
    coverImageFit: 'cover',
    bannerImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1600&q=80',
    machineryImage: TitPintRobot,
    machineryImageFit: 'cover',
    machineryTitle: 'Automated Application Robots',
    machineryText: 'Pressurized booth with anthropomorphic robots designed for the uniform application of solvent-based and water-based liquid coatings.',
    advantagesTitle: 'Uniform thickness and zero defects',
    advantagesText: 'Continuous monitoring of viscosity and flow to ensure controlled micronnage and Class A finishes required by automotive assemblers.',
    advantagesImage: mmaqPinturaLiq,
    machineryCardSpecs: 'Laminar flow booth with 2 painting robots and continuous overhead conveyor.',
    additionalSpecs: [
      { label: 'Thickness control', value: 'Real-time control ± 5 microns' },
      { label: 'Curing oven', value: 'Continuous convection oven at 180°C' },
      { label: 'Standards exceeded', value: 'Salt spray testing ASTM B117' }
    ]
  },
  {
    id: 'linea-de-recubrimiento',
    slug: 'linea-de-recubrimiento',
    title: 'Electrostatic Painting and Coating',
    cardImage: imgLineaRecubrimiento,
    coverImage: imgLineaRecubrimiento,
    bannerImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80',
    machineryImage: mmaqPinturaElec,
    machineryTitle: 'Powder Coating Line',
    machineryText: '5-stage spray pretreatment tunnel (degreasing, phosphating and nano-ceramic sealing) followed by an electrostatic booth.',
    advantagesTitle: 'Maximum anti-corrosive adhesion',
    advantagesText: 'Proven resistance to more than 1,000 hours of salt spray, ideal for suspension components, racks and exterior hardware.',
    advantagesImage: mventPinturaElec,
    machineryCardSpecs: 'Automated continuous line with 5-stage tunnel and polymerization oven.',
    additionalSpecs: [
      { label: 'Pretreatment', value: '5 stages degreasing and nanoceramic seal' },
      { label: 'Salt spray chamber', value: 'Exceeds > 1,000 hours ASTM B117' },
      { label: 'Available colors', value: 'Full automotive RAL range' }
    ]
  },
  {
    id: 'fabricacion-de-troqueles',
    slug: 'fabricacion-de-troqueles',
    title: 'Die Manufacturing',
    cardImage: imgFabricacionTroqueles,
    coverImage: imgFabricacionTroqueles,
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    machineryImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    machineryTitle: 'Tool and Die Shop',
    machineryText: 'CNC vertical machining centers, flat surface grinders and wire EDMs for manufacturing and maintenance of stamping dies.',
    advantagesTitle: 'Integral design and extended lifespan',
    advantagesText: 'Development of proprietary engineering in progressive and tandem dies with tool-grade steels hardened under controlled heat treatment.',
    advantagesImage: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    machineryCardSpecs: 'Haas vertical machining centers and CNC wire EDMs.',
    additionalSpecs: [
      { label: 'Die types', value: 'Progressive, transfer, cutting and deep drawing' },
      { label: 'Tool steels', value: 'D2, A2, O1 heat treated 58-62 HRC' },
      { label: 'Preventive maintenance', value: 'In-house service for zero line stoppages' }
    ]
  }
];

export const PROCESSES_DATA = PROCESSES_DATA_ES; // Legacy fallback export

export const useProcesses = () => {
  const { i18n } = useTranslation();
  return i18n.language === 'en' ? PROCESSES_DATA_EN : PROCESSES_DATA_ES;
};

export function useProcessBySlug() {
  const { i18n } = useTranslation();
  return (slug: string): ProcessDetails | undefined => {
    const dataSource = i18n.language === 'en' ? PROCESSES_DATA_EN : PROCESSES_DATA_ES;
    return dataSource.find((p) => p.slug === slug || p.id === slug);
  };
}

export function getProcessBySlug(slug: string): ProcessDetails | undefined {
  return PROCESSES_DATA.find((p) => p.slug === slug || p.id === slug);
}
