import { ProductItem } from '../types';
import { useTranslation } from 'react-i18next';

import imgProdDobladoTubo from '../../imgs productos/Doblado de tubo producto.webp';
import imgDoblado1 from '../../imgs productos/Doblado de tubo 1.webp';
import imgDoblado2 from '../../imgs productos/Doblado de tubo 2.webp';
import imgDoblado3 from '../../imgs productos/Doblado de tubo 3.webp';

import imgProdFormadoAlambre from '../../imgs productos/formado de alambre producto.webp';
import imgFormado1 from '../../imgs productos/Formado de alambre 1.webp';

import imgProdSoldaduraTigMig from '../../imgs productos/Soldadura tigmig producto.webp';

import imgProdEstacionesTrabajo from '../../imgs productos/Estaciones de trabajo producto.webp';
import imgEstaciones1 from '../../imgs productos/Estaciones de trabajo 1.webp';
import imgEstaciones2 from '../../imgs productos/Estaciones de trabajo 2.webp';

import imgProdRacksManejo from '../../imgs productos/Racks de manejo producto.webp';
import imgRacks1 from '../../imgs productos/Racks de manejo y transporte de materiales 1.webp';
import imgRacks2 from '../../imgs productos/Rack de manejo y transporte de materiales 2.webp';

import imgProdComponentesMetalicos from '../../imgs productos/Contenedores de manejo producto.webp';
import imgContenedores1 from '../../imgs productos/Contenedores para manejo de material 1.webp';

import imgProdCarrosManejo from '../../imgs productos/carro para manejo de material producto.webp';
import imgCarro1 from '../../imgs productos/carro de manejo 1.webp';
import imgCarro2 from '../../imgs productos/Carro de manejo 2.webp';
import imgCarro3 from '../../imgs productos/carro de manejo 3.webp';

export const PRODUCTS_DATA_ES: ProductItem[] = [
  {
    id: 'prod-doblado-tubo',
    title: 'DOBLADO DE TUBO',
    category: 'tubo-alambre',
    categoryLabel: 'DOBLADO DE TUBO Y FORMADO DE ALAMBRE',
    image: imgProdDobladoTubo,
    images: [imgDoblado1, imgDoblado2, imgDoblado3],
    description: 'Componentes tubulares conformados en frío con dobladoras CNC multi-radio con y sin mandril interior para líneas de fluidos, estructuras de asientos y barras estabilizadoras.',
    features: [
      'Sin arrugamiento ni deformación de sección oval',
      'Curvado espacial 3D multi-eje continuo',
      'Extremos con abocinado, recalcado o punzonado',
      'Cumplimiento de especificaciones automotrices OEM'
    ],
    materials: ['Acero al carbón (1010, 1020)', 'Acero inoxidable 304/316', 'Aluminio 6061-T6'],
    tolerance: '± 0.25° angular / ± 0.3 mm geométrico'
  },
  {
    id: 'prod-formado-alambre',
    title: 'FORMADO DE ALAMBRE',
    category: 'tubo-alambre',
    categoryLabel: 'DOBLADO DE TUBO Y FORMADO DE ALAMBRE',
    image: imgProdFormadoAlambre,
    images: [imgFormado1, imgProdFormadoAlambre],
    description: 'Soportes, varillas de accionamiento y grapas de alambre de alta resistencia conformados en dobladoras automáticas CNC con roscado, chaflán y tratamiento térmico.',
    features: [
      'Alambre desde calibre 1/8" hasta 1/2"',
      'Doblado 3D de alta velocidad y repetibilidad',
      'Acabado electrogalvanizado o tropicalizado anticorrosivo',
      'Diseño para ensamble rápido en carrocería'
    ],
    materials: ['Acero trefilado suave y semiduro', 'Acero resorte 1070', 'Acero inoxidable'],
    tolerance: '± 0.2 mm'
  },
  {
    id: 'prod-soldadura-tig-mig',
    title: 'SOLDADURA TIG & MIG Y POR PROYECCIÓN',
    category: 'soldadura',
    categoryLabel: 'SOLDADURA TIG & MIG Y POR PROYECCIÓN',
    image: imgProdSoldaduraTigMig,
    images: [imgProdSoldaduraTigMig],
    description: 'Subensambles soldados estructurales de alta integridad mecánica para suspensiones, soportes de motor y travesaños automotrices.',
    features: [
      'Proceso MIG sinérgica pulsada de baja salpicadura',
      'Soldadura TIG de precisión para aleaciones ligeras',
      'Dispositivos de fijación Poke-Yoke dedicados',
      'Pruebas de torsión y macroataque metalográfico'
    ],
    materials: ['Acero estructural A36 / HSLA', 'Acero inoxidable', 'Aluminio 5000/6000'],
    tolerance: 'Norma AWS D1.1 / ISO 5817 Nivel B'
  },
  {
    id: 'prod-estaciones-trabajo',
    title: 'ESTACIONES DE TRABAJO',
    category: 'estaciones',
    categoryLabel: 'ESTACIONES DE TRABAJO',
    image: imgProdEstacionesTrabajo,
    images: [imgEstaciones1, imgEstaciones2],
    description: 'Mesas y celdas ergonómicas de ensamble diseñadas a la medida bajo principios Lean Manufacturing y metodología 5S para líneas automotrices.',
    features: [
      'Ajuste de altura eléctrico o manual para operarios',
      'Iluminación LED integrada y rieles para balanceadores',
      'Superficies antiestáticas ESD o placa metálica de uso rudo',
      'Canalizaciones neumáticas y eléctricas integradas'
    ],
    materials: ['Perfil estructural tubular de acero', 'Cubiertas de fenol / UHMW / Acero'],
    tolerance: 'Capacidad de carga hasta 1,500 kg repartidos'
  },
  {
    id: 'prod-racks-manejo',
    title: 'RACKS DE MANEJO',
    category: 'racks',
    categoryLabel: 'RACKS',
    image: imgProdRacksManejo,
    images: [imgRacks1, imgRacks2],
    description: 'Contenedores y racks metálicos colapsables y fijos para transporte de partes de chasis, tableros, defensas y cristales entre plantas.',
    features: [
      'Protecciones en dunnage de poliuretano y polietileno virgen',
      'Apilables hasta 4 niveles en almacén de producto terminado',
      'Bolsas para montacargas con guías de seguridad',
      'Acabado en pintura electrostática de alta resistencia'
    ],
    materials: ['Tubo cuadrado estructural ASTM A500', 'Chapa metálica cortada en láser'],
    tolerance: '± 1.0 mm en puntos de centrado de apilamiento'
  },
  {
    id: 'prod-componentes-metalicos',
    title: 'CONTENEDORES PARA MANEJO DE MATERIAL',
    category: 'componentes',
    categoryLabel: 'CONTENEDORES PARA MANEJO DE MATERIAL',
    image: imgProdComponentesMetalicos,
    images: [imgContenedores1, imgProdComponentesMetalicos],
    description: 'Ménsulas, soportes de fijación, bridas y herrajes fabricados por corte láser, estampado y punzonado CNC para ensamble en carrocerías.',
    features: [
      'Biselado y achaflanado mecánico para cero filos cortantes',
      'Tolerancias geométricas estrechas bajo norma ISO 2768-m',
      'Tratamientos superficiales: cataforesis (KTL) o galvanizado',
      'Marcado láser de trazabilidad por código Datamatrix'
    ],
    materials: ['Acero al carbón SAE 1018, 1045, HSLA 340/420', 'Aluminio 5052'],
    tolerance: '± 0.1 mm'
  },
  {
    id: 'prod-carros-manejo',
    title: 'CARROS DE MANEJO DE MATERIAL',
    category: 'carros',
    categoryLabel: 'CARROS PARA MANEJO DE MATERIAL',
    image: imgProdCarrosManejo,
    images: [imgCarro1, imgCarro2, imgCarro3],
    description: 'Carros remolcables estilo Tugger train y carros manuales para abastecimiento de partes Just-in-Time a pie de línea de ensamble.',
    features: [
      'Ruedas industriales de poliuretano con freno direccional',
      'Enganche tipo lanza articulada para trenes de arrastre',
      'Freno de hombre muerto y protecciones perimetrales',
      'Capacidad de giro en pasillos reducidos sin derrape'
    ],
    materials: ['Estructura de acero reforzado tubular', 'Placas antideslizantes'],
    tolerance: 'Capacidad de carga 800 - 2,500 kg'
  }
];

export const PRODUCTS_DATA_EN: ProductItem[] = [
  {
    id: 'prod-doblado-tubo',
    title: 'TUBE BENDING',
    category: 'tubo-alambre',
    categoryLabel: 'TUBE BENDING AND WIRE FORMING',
    image: imgProdDobladoTubo,
    images: [imgDoblado1, imgDoblado2, imgDoblado3],
    description: 'Cold-formed tubular components with multi-radius CNC bending machines with and without internal mandrel for fluid lines, seat structures and stabilizer bars.',
    features: [
      'No wrinkling or oval section deformation',
      'Continuous multi-axis 3D spatial bending',
      'Ends with flaring, upsetting or punching',
      'Compliance with OEM automotive specifications'
    ],
    materials: ['Carbon steel (1010, 1020)', 'Stainless steel 304/316', 'Aluminum 6061-T6'],
    tolerance: '± 0.25° angular / ± 0.3 mm geometric'
  },
  {
    id: 'prod-formado-alambre',
    title: 'WIRE FORMING',
    category: 'tubo-alambre',
    categoryLabel: 'TUBE BENDING AND WIRE FORMING',
    image: imgProdFormadoAlambre,
    images: [imgFormado1, imgProdFormadoAlambre],
    description: 'High strength wire brackets, drive rods and clips formed on CNC automatic benders with threading, chamfering and heat treatment.',
    features: [
      'Wire from 1/8" to 1/2" gauge',
      'High speed and repeatability 3D bending',
      'Electrogalvanized or tropicalized anticorrosive finish',
      'Design for quick body assembly'
    ],
    materials: ['Soft and half-hard drawn steel', '1070 spring steel', 'Stainless steel'],
    tolerance: '± 0.2 mm'
  },
  {
    id: 'prod-soldadura-tig-mig',
    title: 'TIG & MIG AND PROJECTION WELDING',
    category: 'soldadura',
    categoryLabel: 'TIG & MIG AND PROJECTION WELDING',
    image: imgProdSoldaduraTigMig,
    images: [imgProdSoldaduraTigMig],
    description: 'High mechanical integrity structural welded subassemblies for suspensions, engine mounts and automotive crossmembers.',
    features: [
      'Low spatter pulsed synergic MIG process',
      'Precision TIG welding for light alloys',
      'Dedicated Poke-Yoke fixtures',
      'Torsion and metallographic macroetch testing'
    ],
    materials: ['Structural steel A36 / HSLA', 'Stainless steel', 'Aluminum 5000/6000'],
    tolerance: 'AWS D1.1 standard / ISO 5817 Level B'
  },
  {
    id: 'prod-estaciones-trabajo',
    title: 'WORKSTATIONS',
    category: 'estaciones',
    categoryLabel: 'WORKSTATIONS',
    image: imgProdEstacionesTrabajo,
    images: [imgEstaciones1, imgEstaciones2],
    description: 'Ergonomic assembly tables and cells custom designed under Lean Manufacturing principles and 5S methodology for automotive lines.',
    features: [
      'Electric or manual height adjustment for operators',
      'Integrated LED lighting and rails for balancers',
      'ESD antistatic surfaces or heavy duty metal plate',
      'Integrated pneumatic and electrical channeling'
    ],
    materials: ['Tubular steel structural profile', 'Phenol / UHMW / Steel covers'],
    tolerance: 'Load capacity up to 1,500 kg distributed'
  },
  {
    id: 'prod-racks-manejo',
    title: 'MATERIAL HANDLING RACKS',
    category: 'racks',
    categoryLabel: 'RACKS',
    image: imgProdRacksManejo,
    images: [imgRacks1, imgRacks2],
    description: 'Collapsible and fixed metal containers and racks for transporting chassis parts, dashboards, bumpers and glass between plants.',
    features: [
      'Virgin polyurethane and polyethylene dunnage protections',
      'Stackable up to 4 levels in finished product warehouse',
      'Forklift pockets with safety guides',
      'High resistance electrostatic paint finish'
    ],
    materials: ['ASTM A500 square tubular steel', 'Laser cut sheet metal'],
    tolerance: '± 1.0 mm at stacking centering points'
  },
  {
    id: 'prod-componentes-metalicos',
    title: 'MATERIAL HANDLING CONTAINERS',
    category: 'componentes',
    categoryLabel: 'MATERIAL HANDLING CONTAINERS',
    image: imgProdComponentesMetalicos,
    images: [imgContenedores1, imgProdComponentesMetalicos],
    description: 'Brackets, mounting brackets, flanges and hardware manufactured by laser cutting, stamping and CNC punching for body assembly.',
    features: [
      'Mechanical bevelling and chamfering for zero sharp edges',
      'Tight geometric tolerances under ISO 2768-m standard',
      'Surface treatments: cataphoresis (KTL) or galvanized',
      'Laser marking for traceability by Datamatrix code'
    ],
    materials: ['Carbon steel SAE 1018, 1045, HSLA 340/420', 'Aluminum 5052'],
    tolerance: '± 0.1 mm'
  },
  {
    id: 'prod-carros-manejo',
    title: 'MATERIAL HANDLING CARTS',
    category: 'carros',
    categoryLabel: 'MATERIAL HANDLING CARTS',
    image: imgProdCarrosManejo,
    images: [imgCarro1, imgCarro2, imgCarro3],
    description: 'Tugger train style towable carts and manual carts for Just-in-Time component supply to the assembly line.',
    features: [
      'Industrial polyurethane steering wheels with directional brake',
      'Articulated drawbar hitch for tugger trains',
      'Dead man brake and perimeter protections',
      'Turning capacity in narrow aisles without skidding'
    ],
    materials: ['Reinforced tubular steel structure', 'Anti-slip plates'],
    tolerance: 'Load capacity 800 - 2,500 kg'
  }
];

export const PRODUCTS_DATA = PRODUCTS_DATA_ES;

export const useProducts = () => {
  const { i18n } = useTranslation();
  return i18n.language === 'en' ? PRODUCTS_DATA_EN : PRODUCTS_DATA_ES;
};
