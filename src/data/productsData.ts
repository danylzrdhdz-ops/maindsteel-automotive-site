import { ProductItem } from '../types';

import imgProdDobladoTubo from '../../imgs productos/Doblado de tubo producto.png';
import imgDoblado1 from '../../imgs productos/Doblado de tubo 1.png';
import imgDoblado2 from '../../imgs productos/Doblado de tubo 2.png';
import imgDoblado3 from '../../imgs productos/Doblado de tubo 3.png';

import imgProdFormadoAlambre from '../../imgs productos/formado de alambre producto.png';
import imgFormado1 from '../../imgs productos/Formado de alambre 1.png';

import imgProdSoldaduraTigMig from '../../imgs productos/Soldadura tigmig producto.png';

import imgProdEstacionesTrabajo from '../../imgs productos/Estaciones de trabajo producto.png';
import imgEstaciones1 from '../../imgs productos/Estaciones de trabajo 1.png';
import imgEstaciones2 from '../../imgs productos/Estaciones de trabajo 2.png';

import imgProdRacksManejo from '../../imgs productos/Racks de manejo producto.png';
import imgRacks1 from '../../imgs productos/Racks de manejo y transporte de materiales 1.png';
import imgRacks2 from '../../imgs productos/Rack de manejo y transporte de materiales 2.png';

import imgProdComponentesMetalicos from '../../imgs productos/Contenedores de manejo producto.png';
import imgContenedores1 from '../../imgs productos/Contenedores para manejo de material 1.png';

import imgProdCarrosManejo from '../../imgs productos/carro para manejo de material producto.png';
import imgCarro1 from '../../imgs productos/carro de manejo 1.png';
import imgCarro2 from '../../imgs productos/Carro de manejo 2.png';
import imgCarro3 from '../../imgs productos/carro de manejo 3.png';

export const PRODUCTS_DATA: ProductItem[] = [
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

