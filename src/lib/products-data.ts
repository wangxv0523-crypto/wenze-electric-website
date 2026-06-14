import { Droplets, Wind, Zap, Box, Radio, Sun } from 'lucide-react'

export interface ProductSpecRow {
  capacity: string
  voltage: string
  dimensions: string
  weight?: string
}

export interface SpecColumn {
  key: string
  label: string
  unit?: string
}

export interface DetailedSpecRow {
  [key: string]: string | number | null | undefined
}

export interface DetailedSpecTable {
  columns: SpecColumn[]
  rows: DetailedSpecRow[]
  note?: string
}

export interface Product {
  id: string
  icon: React.ElementType
  title: string
  titleEn?: string
  shortDescription: string
  fullDescription: string
  standardSizes: string[]
  image: string
  detailImage?: string
  specs: {
    voltage: string
    capacity: string
    frequency: string
    cooling: string
    standards: string
  }
  features: Array<{ zh: string; en: string }>
  productDescription?: string
  descriptionBullets?: Array<{ zh: string; en: string }>
  specTable?: ProductSpecRow[]
  detailedSpecTable?: DetailedSpecTable
}

export const products: Product[] = [
  {
    id: 'oil-immersed-transformer',
    icon: Droplets,
    title: '油浸式变压器',
    titleEn: 'Oil Immersed Transformer',
    shortDescription: '高效油冷式变压器，广泛应用于工业及电力配网场景。',
    fullDescription: '油浸式变压器广泛应用于工业工厂、公用电网、配电系统和可再生能源项目。矿物油提供了优异的绝缘和冷却性能。',
    standardSizes: ['100kVA', '250kVA', '500kVA', '1000kVA', '2500kVA', '5000kVA', '10000kVA'],
    image: '/oil-immersed-cn.jpg',
    detailImage: '/Oil-immersed_transformer.jpg',
    specs: {
      voltage: '6kV – 11kV',
      capacity: '30kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF',
      standards: 'IEC 60076',
    },
    features: [
      { zh: '高过载能力', en: 'High Overload Capacity' },
      { zh: '低噪音运行', en: 'Low Noise Operation' },
      { zh: '使用寿命长', en: 'Long Service Life' },
      { zh: '适合户外安装', en: 'Suitable for Outdoor Installation' },
      { zh: '宽温度范围', en: 'Wide Temperature Range' },
    ],
    productDescription: '专为商业、工业及变电站应用设计的节能油浸式变压器，符合 IEC 60076 标准，性能稳定可靠。',
    descriptionBullets: [
      { zh: '符合 IEC 60076 / S13 系列节能标准', en: 'IEC 60076 / S13 Energy Efficiency Standard' },
      { zh: '电压等级 6kV–35kV，容量 30–2500kVA', en: 'Voltage 6kV–35kV, Capacity 30–2500kVA' },
      { zh: '优质矿物油或 FR3 天然酯绝缘', en: 'Mineral Oil or FR3 Natural Ester Insulation' },
      { zh: '低空载损耗，长寿命设计', en: 'Low No-load Loss, Long Service Life' },
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: '容量', unit: 'kVA' },
        { key: 'hv_kv', label: '高压', unit: 'kV' },
        { key: 'lv_kv', label: '低电压', unit: 'kV' },
        { key: 'freq_hz', label: '频率', unit: 'Hz' },
        { key: 'connection', label: '连接组' },
        { key: 'no_load_loss_w', label: '空载损耗', unit: 'W' },
        { key: 'load_loss_w', label: '负载损耗', unit: 'W' },
        { key: 'no_load_current_pct', label: '空载电流', unit: '%' },
        { key: 'noise_db', label: '噪音', unit: 'dB' },
        { key: 'impedance_pct', label: '短路阻抗', unit: '%' },
        { key: 'spec_ab_mm', label: '规格A×B', unit: 'mm' },
        { key: 'size_mm', label: '尺寸长×宽×高', unit: 'mm' },
        { key: 'weight_kg', label: '重量', unit: 'kg' },
      ],
      rows: [
        { capacity_kva: 30,   hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 80,   load_loss_w: '630/600',   no_load_current_pct: 0.5,  noise_db: 43, impedance_pct: 4.0, spec_ab_mm: '400×400', size_mm: '830×650×950',   weight_kg: 380 },
        { capacity_kva: 50,   hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 100,  load_loss_w: '910/870',   no_load_current_pct: 0.5,  noise_db: 43, impedance_pct: 4.0, spec_ab_mm: '400×400', size_mm: '850×680×960',   weight_kg: 420 },
        { capacity_kva: 80,   hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 130,  load_loss_w: '1310/1250', no_load_current_pct: 0.45, noise_db: 44, impedance_pct: 4.0, spec_ab_mm: '400×400', size_mm: '870×700×1010',  weight_kg: 520 },
        { capacity_kva: 100,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 150,  load_loss_w: '1580/1500', no_load_current_pct: 0.45, noise_db: 44, impedance_pct: 4.0, spec_ab_mm: '400×400', size_mm: '900×720×1020',  weight_kg: 580 },
        { capacity_kva: 160,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 200,  load_loss_w: '2310/2200', no_load_current_pct: 0.4,  noise_db: 46, impedance_pct: 4.0, spec_ab_mm: '550×550', size_mm: '1190×770×1090', weight_kg: 790 },
        { capacity_kva: 200,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 240,  load_loss_w: '2730/2600', no_load_current_pct: 0.4,  noise_db: 47, impedance_pct: 4.0, spec_ab_mm: '550×550', size_mm: '1260×850×1120', weight_kg: 880 },
        { capacity_kva: 250,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 290,  load_loss_w: '3200/3050', no_load_current_pct: 0.35, noise_db: 48, impedance_pct: 4.0, spec_ab_mm: '550×550', size_mm: '1300×860×1140', weight_kg: 1020 },
        { capacity_kva: 315,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 340,  load_loss_w: '3830/3650', no_load_current_pct: 0.35, noise_db: 48, impedance_pct: 4.0, spec_ab_mm: '660×660', size_mm: '1370×910×1160', weight_kg: 1220 },
        { capacity_kva: 400,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 410,  load_loss_w: '4520/4300', no_load_current_pct: 0.35, noise_db: 48, impedance_pct: 4.0, spec_ab_mm: '660×660', size_mm: '1400×920×1220', weight_kg: 1430 },
        { capacity_kva: 500,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 480,  load_loss_w: '5410/5150', no_load_current_pct: 0.3,  noise_db: 49, impedance_pct: 4.0, spec_ab_mm: '660×660', size_mm: '1530×1000×1280', weight_kg: 1730 },
        { capacity_kva: 630,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 570,  load_loss_w: 6200,        no_load_current_pct: 0.25, noise_db: 49, impedance_pct: 4.5, spec_ab_mm: '660×660', size_mm: '1610×1060×1320', weight_kg: 2100 },
        { capacity_kva: 800,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 700,  load_loss_w: 7500,        no_load_current_pct: 0.18, noise_db: 50, impedance_pct: 4.5, spec_ab_mm: '660×820', size_mm: '1670×1120×1380', weight_kg: 2480 },
        { capacity_kva: 1000, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 830,  load_loss_w: 10300,       no_load_current_pct: 0.17, noise_db: 50, impedance_pct: 4.5, spec_ab_mm: '660×820', size_mm: '1720×1160×1400', weight_kg: 2880 },
        { capacity_kva: 1250, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 970,  load_loss_w: 12000,       no_load_current_pct: 0.17, noise_db: 52, impedance_pct: 4.5, spec_ab_mm: '660×820', size_mm: '1770×1180×1500', weight_kg: 3500 },
        { capacity_kva: 1600, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1170, load_loss_w: 14500,       no_load_current_pct: 0.16, noise_db: 52, impedance_pct: 4.5, spec_ab_mm: '820×1070', size_mm: '1860×1240×1600', weight_kg: 4130 },
        { capacity_kva: 2000, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1360, load_loss_w: 18300,       no_load_current_pct: 0.16, noise_db: 54, impedance_pct: 5.0, spec_ab_mm: '820×1070', size_mm: '1950×1320×1720', weight_kg: 5420 },
        { capacity_kva: 2500, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1600, load_loss_w: 21200,       no_load_current_pct: 0.15, noise_db: 54, impedance_pct: 5.0, spec_ab_mm: '820×1070', size_mm: '2070×1400×1800', weight_kg: 6500 },
      ],
      note: '以上为10kV S13系列节能油浸式变压器的技术参数。高压选项：6 / 6.3 / 6.6 / 10 / 10.5 / 11 kV，可按项目要求定制。',
    },
  },
  {
    id: 'dry-type-transformer',
    icon: Wind,
    title: '干式变压器',
    titleEn: 'Dry Type Transformer',
    shortDescription: '环保型空冷变压器，适用于室内安装，防火安全性高。',
    fullDescription: '干式变压器采用空气作为冷却介质，无需使用油液。适用于商业建筑、医院和数据中心等室内应用场所。',
    standardSizes: ['125kVA', '250kVA', '500kVA', '1000kVA', '1600kVA', '2500kVA'],
    image: '/dry-type-transformer-cn.jpg',
    detailImage: '/dry_type_transformer.png',
    specs: {
      voltage: '6kV – 11kV',
      capacity: '125kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'AN / AF',
      standards: 'IEC 60076-11',
    },
    features: [
      { zh: '无火灾危险', en: 'Fire-Safe' },
      { zh: '环保无污染', en: 'Eco-Friendly' },
      { zh: '低维护成本', en: 'Low Maintenance Cost' },
      { zh: '适合室内安装', en: 'Suitable for Indoor Installation' },
      { zh: '自熄绝缘', en: 'Self-Extinguishing Insulation' },
    ],
    productDescription: '适用于室内变电站、数据中心、医院等对防火要求高的场所，符合 IEC 60076-11 标准。',
    descriptionBullets: [
      { zh: 'F级/H级环氧树脂绝缘，防火安全', en: 'F/H Class Epoxy Resin Insulation, Fire-Safe' },
      { zh: '防护等级 IP20/IP23 可选', en: 'Protection Grade IP20/IP23 Optional' },
      { zh: '低噪音设计，低于 55dB', en: 'Low Noise Design, <55dB' },
      { zh: '免维护，无需油液检测或更换', en: 'Maintenance-Free, No Oil Testing Required' },
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: '容量', unit: 'kVA' },
        { key: 'hv_kv', label: '高压', unit: 'kV' },
        { key: 'lv_kv', label: '低电压', unit: 'kV' },
        { key: 'freq_hz', label: '频率', unit: 'Hz' },
        { key: 'connection', label: '连接组' },
        { key: 'no_load_loss_scb12_w', label: '空载损耗SCB12', unit: 'W' },
        { key: 'no_load_loss_scb13_w', label: '空载损耗SCB13', unit: 'W' },
        { key: 'load_loss_scb12_w', label: '负载损耗SCB12', unit: 'W' },
        { key: 'load_loss_scb13_w', label: '负载损耗SCB13', unit: 'W' },
        { key: 'no_load_current_pct', label: '空载电流', unit: '%' },
        { key: 'noise_db', label: '噪音', unit: 'dB' },
        { key: 'impedance_pct', label: '短路阻抗', unit: '%' },
        { key: 'spec_ab_mm', label: '规格A×B', unit: 'mm' },
        { key: 'body_size_mm', label: '主机尺寸', unit: 'mm' },
        { key: 'body_weight_kg', label: '主机重量', unit: 'kg' },
      ],
      rows: [
        { capacity_kva: 125,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 375,  no_load_loss_scb13_w: 335,  load_loss_scb12_w: 1850,  load_loss_scb13_w: 1660,  no_load_current_pct: 1.3,  noise_db: 58, impedance_pct: 4, spec_ab_mm: '550×550',   body_size_mm: '920×610×1120',  body_weight_kg: 685 },
        { capacity_kva: 160,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 430,  no_load_loss_scb13_w: 385,  load_loss_scb12_w: 2130,  load_loss_scb13_w: 1910,  no_load_current_pct: 1.3,  noise_db: 58, impedance_pct: 4, spec_ab_mm: '550×550',   body_size_mm: '950×610×1120',  body_weight_kg: 735 },
        { capacity_kva: 200,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 495,  no_load_loss_scb13_w: 445,  load_loss_scb12_w: 2530,  load_loss_scb13_w: 2270,  no_load_current_pct: 1.1,  noise_db: 58, impedance_pct: 4, spec_ab_mm: '660×660',   body_size_mm: '990×720×1150',  body_weight_kg: 820 },
        { capacity_kva: 250,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 575,  no_load_loss_scb13_w: 515,  load_loss_scb12_w: 2760,  load_loss_scb13_w: 2480,  no_load_current_pct: 1.1,  noise_db: 58, impedance_pct: 4, spec_ab_mm: '660×660',   body_size_mm: '1030×720×1180', body_weight_kg: 960 },
        { capacity_kva: 315,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 705,  no_load_loss_scb13_w: 635,  load_loss_scb12_w: 3470,  load_loss_scb13_w: 3120,  no_load_current_pct: 1.0,  noise_db: 60, impedance_pct: 4, spec_ab_mm: '660×660',   body_size_mm: '1050×720×1210', body_weight_kg: 1080 },
        { capacity_kva: 400,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 785,  no_load_loss_scb13_w: 705,  load_loss_scb12_w: 3990,  load_loss_scb13_w: 3590,  no_load_current_pct: 1.0,  noise_db: 60, impedance_pct: 4, spec_ab_mm: '660×660',   body_size_mm: '1060×720×1270', body_weight_kg: 1330 },
        { capacity_kva: 500,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 930,  no_load_loss_scb13_w: 835,  load_loss_scb12_w: 4880,  load_loss_scb13_w: 4390,  no_load_current_pct: 1.0,  noise_db: 62, impedance_pct: 4, spec_ab_mm: '660×820',   body_size_mm: '1110×880×1340', body_weight_kg: 1480 },
        { capacity_kva: 630,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1040, no_load_loss_scb13_w: 935,  load_loss_scb12_w: 5960,  load_loss_scb13_w: 5360,  no_load_current_pct: 0.85, noise_db: 62, impedance_pct: 6, spec_ab_mm: '660×820',   body_size_mm: '1240×880×1300', body_weight_kg: 1530 },
        { capacity_kva: 800,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1210, no_load_loss_scb13_w: 1090, load_loss_scb12_w: 6960,  load_loss_scb13_w: 6260,  no_load_current_pct: 0.85, noise_db: 64, impedance_pct: 6, spec_ab_mm: '660×820',   body_size_mm: '1320×880×1350', body_weight_kg: 1840 },
        { capacity_kva: 1000, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1410, no_load_loss_scb13_w: 1270, load_loss_scb12_w: 8130,  load_loss_scb13_w: 7310,  no_load_current_pct: 0.85, noise_db: 64, impedance_pct: 6, spec_ab_mm: '660×820',   body_size_mm: '1360×880×1460', body_weight_kg: 2320 },
        { capacity_kva: 1250, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1670, no_load_loss_scb13_w: 1500, load_loss_scb12_w: 9690,  load_loss_scb13_w: 8720,  no_load_current_pct: 0.85, noise_db: 65, impedance_pct: 6, spec_ab_mm: '820×820',   body_size_mm: '1430×880×1520', body_weight_kg: 2530 },
        { capacity_kva: 1600, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1960, no_load_loss_scb13_w: 1760, load_loss_scb12_w: 11700, load_loss_scb13_w: 10500, no_load_current_pct: 0.85, noise_db: 66, impedance_pct: 6, spec_ab_mm: '1070×1070', body_size_mm: '1470×1130×1690', body_weight_kg: 3010 },
        { capacity_kva: 2000, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 2440, no_load_loss_scb13_w: 2190, load_loss_scb12_w: 14400, load_loss_scb13_w: 13000, no_load_current_pct: 0.7,  noise_db: 66, impedance_pct: 6, spec_ab_mm: '1070×1070', body_size_mm: '1510×1130×1770', body_weight_kg: 3540 },
        { capacity_kva: 2500, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 2880, no_load_loss_scb13_w: 2590, load_loss_scb12_w: 17100, load_loss_scb13_w: 15400, no_load_current_pct: 0.7,  noise_db: 71, impedance_pct: 6, spec_ab_mm: '1070×1070', body_size_mm: '1560×1130×1900', body_weight_kg: 4190 },
      ],
      note: '以上为10kV级SCB系列干式变压器的技术参数。高压选项：6 / 6.3 / 6.6 / 10 / 10.5 / 11 kV，低压：0.4 kV，可选IP20防护外壳。',
    },
  },
  {
    id: 'distribution-transformer',
    icon: Box,
    title: '配电变压器',
    titleEn: 'Distribution Transformer',
    shortDescription: '适用于公用配电网络及智能电网的可靠变压器。',
    fullDescription: '配电变压器专为公用电力配电网络设计，广泛应用于住宅区、商业开发项目和城市配电系统。',
    standardSizes: ['50kVA', '100kVA', '160kVA', '250kVA', '400kVA', '630kVA', '1000kVA'],
    image: '/distribution-cn.jpg',
    detailImage: '/Distribution_transformer.jpg',
    specs: {
      voltage: '6kV – 11kV',
      capacity: '30kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC 60076',
    },
    features: [
      { zh: '性能可靠', en: 'Reliable Performance' },
      { zh: '低能耗', en: 'Low Energy Consumption' },
      { zh: '长运行寿命', en: 'Long Operating Life' },
      { zh: '便于维护', en: 'Easy to Maintain' },
      { zh: '部署范围广', en: 'Wide Deployment Range' },
    ],
    productDescription: '覆盖住宅、商业、工业及农村电气化项目，电压等级 10–35kV，容量 50–2500kVA。',
    descriptionBullets: [
      { zh: '支持杆式、落地式、变电站式多种安装方式', en: 'Pole-Mounted, Ground-Mounted, and Substation Types' },
      { zh: '取向硅钢芯，低空载损耗', en: 'Grain-Oriented Silicon Steel Core, Low No-load Loss' },
      { zh: '符合 IEC 60076 标准，阻抗 4%–6% 可定制', en: 'IEC 60076 Compliant, Customizable 4%–6% Impedance' },
      { zh: '已部署于全球 80+ 国家和地区', en: 'Deployed in 80+ Countries Worldwide' },
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: '容量', unit: 'kVA' },
        { key: 'hv_kv', label: '高压', unit: 'kV' },
        { key: 'lv_kv', label: '低电压', unit: 'kV' },
        { key: 'freq_hz', label: '频率', unit: 'Hz' },
        { key: 'connection', label: '连接组' },
        { key: 'no_load_loss_w', label: '空载损耗', unit: 'W' },
        { key: 'load_loss_w', label: '负载损耗', unit: 'W' },
        { key: 'no_load_current_pct', label: '空载电流', unit: '%' },
        { key: 'noise_db', label: '噪音', unit: 'dB' },
        { key: 'impedance_pct', label: '短路阻抗', unit: '%' },
        { key: 'spec_ab_mm', label: '规格A×B', unit: 'mm' },
        { key: 'size_mm', label: '尺寸长×宽×高', unit: 'mm' },
        { key: 'weight_kg', label: '重量', unit: 'kg' },
      ],
      rows: [
        { capacity_kva: 30,   hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 80,   load_loss_w: '630/600',   no_load_current_pct: 0.5,  noise_db: 43, impedance_pct: 4.0, spec_ab_mm: '400×400', size_mm: '830×650×950',   weight_kg: 380 },
        { capacity_kva: 50,   hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 100,  load_loss_w: '910/870',   no_load_current_pct: 0.5,  noise_db: 43, impedance_pct: 4.0, spec_ab_mm: '400×400', size_mm: '850×680×960',   weight_kg: 420 },
        { capacity_kva: 80,   hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 130,  load_loss_w: '1310/1250', no_load_current_pct: 0.45, noise_db: 44, impedance_pct: 4.0, spec_ab_mm: '400×400', size_mm: '870×700×1010',  weight_kg: 520 },
        { capacity_kva: 100,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 150,  load_loss_w: '1580/1500', no_load_current_pct: 0.45, noise_db: 44, impedance_pct: 4.0, spec_ab_mm: '400×400', size_mm: '900×720×1020',  weight_kg: 580 },
        { capacity_kva: 160,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 200,  load_loss_w: '2310/2200', no_load_current_pct: 0.4,  noise_db: 46, impedance_pct: 4.0, spec_ab_mm: '550×550', size_mm: '1190×770×1090', weight_kg: 790 },
        { capacity_kva: 200,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 240,  load_loss_w: '2730/2600', no_load_current_pct: 0.4,  noise_db: 47, impedance_pct: 4.0, spec_ab_mm: '550×550', size_mm: '1260×850×1120', weight_kg: 880 },
        { capacity_kva: 250,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 290,  load_loss_w: '3200/3050', no_load_current_pct: 0.35, noise_db: 48, impedance_pct: 4.0, spec_ab_mm: '550×550', size_mm: '1300×860×1140', weight_kg: 1020 },
        { capacity_kva: 315,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 340,  load_loss_w: '3830/3650', no_load_current_pct: 0.35, noise_db: 48, impedance_pct: 4.0, spec_ab_mm: '660×660', size_mm: '1370×910×1160', weight_kg: 1220 },
        { capacity_kva: 400,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 410,  load_loss_w: '4520/4300', no_load_current_pct: 0.35, noise_db: 48, impedance_pct: 4.0, spec_ab_mm: '660×660', size_mm: '1400×920×1220', weight_kg: 1430 },
        { capacity_kva: 500,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 480,  load_loss_w: '5410/5150', no_load_current_pct: 0.3,  noise_db: 49, impedance_pct: 4.0, spec_ab_mm: '660×660', size_mm: '1530×1000×1280', weight_kg: 1730 },
        { capacity_kva: 630,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 570,  load_loss_w: 6200,        no_load_current_pct: 0.25, noise_db: 49, impedance_pct: 4.5, spec_ab_mm: '660×660', size_mm: '1610×1060×1320', weight_kg: 2100 },
        { capacity_kva: 800,  hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 700,  load_loss_w: 7500,        no_load_current_pct: 0.18, noise_db: 50, impedance_pct: 4.5, spec_ab_mm: '660×820', size_mm: '1670×1120×1380', weight_kg: 2480 },
        { capacity_kva: 1000, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 830,  load_loss_w: 10300,       no_load_current_pct: 0.17, noise_db: 50, impedance_pct: 4.5, spec_ab_mm: '660×820', size_mm: '1720×1160×1400', weight_kg: 2880 },
        { capacity_kva: 1250, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 970,  load_loss_w: 12000,       no_load_current_pct: 0.17, noise_db: 52, impedance_pct: 4.5, spec_ab_mm: '660×820', size_mm: '1770×1180×1500', weight_kg: 3500 },
        { capacity_kva: 1600, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1170, load_loss_w: 14500,       no_load_current_pct: 0.16, noise_db: 52, impedance_pct: 4.5, spec_ab_mm: '820×1070', size_mm: '1860×1240×1600', weight_kg: 4130 },
        { capacity_kva: 2000, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1360, load_loss_w: 18300,       no_load_current_pct: 0.16, noise_db: 54, impedance_pct: 5.0, spec_ab_mm: '820×1070', size_mm: '1950×1320×1720', weight_kg: 5420 },
        { capacity_kva: 2500, hv_kv: '6~11', lv_kv: 0.4, freq_hz: 50, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1600, load_loss_w: 21200,       no_load_current_pct: 0.15, noise_db: 54, impedance_pct: 5.0, spec_ab_mm: '820×1070', size_mm: '2070×1400×1800', weight_kg: 6500 },
      ],
      note: '以上为10kV S13系列节能油浸式变压器的技术参数。可提供杆式安装（50–500 kVA）、地面安装及变电站型号。',
    },
  },
  {
    id: 'high-voltage-power-transformer',
    icon: Zap,
    title: '高压电力变压器',
    titleEn: 'High Voltage Power Transformer',
    shortDescription: '适用于公用电网及大型工业电力系统的重型变压器，电压等级高达220kV。',
    fullDescription: '高压电力变压器专为公用输电网、大型工业电力系统和重大基础设施项目设计，可处理高电压等级，性能卓越，可靠性高。',
    standardSizes: ['6.3MVA', '10MVA', '16MVA', '25MVA', '40MVA', '63MVA'],
    image: '/high-voltage-cn.jpg',
    detailImage: '/High_voltage_power_transformer.jpg',
    specs: {
      voltage: '66kV – 220kV',
      capacity: '6.3MVA – 63MVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF / OFAF',
      standards: 'IEC 60076',
    },
    features: [
      { zh: '超强电压容量', en: 'Ultra-High Voltage Capacity' },
      { zh: '先进冷却系统', en: 'Advanced Cooling System' },
      { zh: '有载调压开关', en: 'On-Load Tap Changer' },
      { zh: '重型坚固结构', en: 'Robust Heavy-Duty Structure' },
      { zh: '超长使用寿命', en: 'Extended Service Life' },
    ],
    productDescription: '专为公用事业输电、电厂升压及大型工业基础设施设计，电压等级 66kV–750kV。',
    descriptionBullets: [
      { zh: '容量 10MVA–500MVA，通过 IEC 认证', en: 'Capacity 10MVA–500MVA, IEC Certified' },
      { zh: '油纸绝缘，介电强度优异', en: 'Oil-Paper Insulation, Excellent Dielectric Strength' },
      { zh: '配备高级有载调压器，实时电压调节', en: 'Advanced OLTC, Real-Time Voltage Regulation' },
      { zh: '适应海拔 4000m、极端温度 -50°C 至 +55°C', en: 'Altitude 4000m, Temperature -50°C to +55°C' },
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: '额定容量', unit: 'kVA' },
        { key: 'hv_kv', label: '高压', unit: 'kV' },
        { key: 'tap_range', label: '高压抽头范围' },
        { key: 'mv_kv', label: '中压', unit: 'kV' },
        { key: 'lv_kv', label: '低压', unit: 'kV' },
        { key: 'connection', label: '连接组' },
        { key: 'no_load_loss_kw', label: '空载损耗', unit: 'kW' },
        { key: 'load_loss_kw', label: '负载损耗', unit: 'kW' },
        { key: 'no_load_current_pct', label: '空载电流', unit: '%' },
        { key: 'impedance_pct', label: '短路阻抗' },
      ],
      rows: [
        { capacity_kva: 6300,  hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 7.7,  load_loss_kw: 42,  no_load_current_pct: 0.61, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 8000,  hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 9.2,  load_loss_kw: 50,  no_load_current_pct: 0.61, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 10000, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 10.9, load_loss_kw: 59,  no_load_current_pct: 0.57, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 12500, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 12.9, load_loss_kw: 70,  no_load_current_pct: 0.57, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 16000, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 15.4, load_loss_kw: 86,  no_load_current_pct: 0.54, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 20000, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 18.2, load_loss_kw: 101, no_load_current_pct: 0.54, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 25000, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 21.6, load_loss_kw: 120, no_load_current_pct: 0.5,  impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 31500, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 25.7, load_loss_kw: 142, no_load_current_pct: 0.5,  impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 40000, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 30.8, load_loss_kw: 170, no_load_current_pct: 0.46, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 50000, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 36.4, load_loss_kw: 202, no_load_current_pct: 0.46, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
        { capacity_kva: 63000, hv_kv: 110, tap_range: '±4×1.25/±6×1.25/±8×1.25', mv_kv: '36~38.5', lv_kv: '6.3~21', connection: 'YNyn0d11', no_load_loss_kw: 43.3, load_loss_kw: 243, no_load_current_pct: 0.42, impedance_pct: '高到中10.5/高到低17.5~19/中到低6.5' },
      ],
      note: '以上为110kV电力变压器的技术参数。电压范围：66kV至750kV交流，±800kV直流，标配有载调压开关，IEC认证。',
    },
  },
  {
    id: 'pole-mounted-transformer',
    icon: Radio,
    title: '杆式变压器',
    titleEn: 'Pole-Mounted Transformer',
    shortDescription: '紧凑型单相/三相变压器，专为公用电杆架空线路安装设计。',
    fullDescription: '杆式变压器是为架空配电线路设计的紧凑型轻量化设备，广泛用于农村电气化、末端供电和公用配电网络，在用电点实现中压至低压的可靠降压。',
    standardSizes: ['5kVA', '10kVA', '25kVA', '50kVA', '75kVA', '100kVA', '167kVA'],
    image: '/pole-transformer-cn.jpg',
    detailImage: '/Pole_transformer.jpg',
    specs: {
      voltage: '7.2kV – 34.5kV',
      capacity: '5kVA – 167kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC / ANSI',
    },
    features: [
      { zh: '紧凑轻便', en: 'Compact and Lightweight' },
      { zh: '单相/三相可选', en: 'Single or Three Phase' },
      { zh: '适合农村电气化', en: 'Rural Electrification' },
      { zh: '架空线路安装', en: 'Overhead Installation' },
      { zh: '耐候设计', en: 'Weather-Resistant Design' },
    ],
    productDescription: '专为架空配电网络设计，适用于公用事业公司及农村电气化项目，低维护、高可靠。',
    descriptionBullets: [
      { zh: '全钢密封罐体，耐腐蚀涂料', en: 'All-Steel Sealed Tank, Corrosion-Resistant Coating' },
      { zh: '冷轧取向硅钢芯，空载损耗降低 15–20%', en: 'Cold-Rolled Oriented Steel Core, 15–20% Loss Reduction' },
      { zh: '效率 ≥98%，低噪音，过载能力强', en: 'Efficiency ≥98%, Low Noise, High Overload Capacity' },
      { zh: '可选完全自保护配置，集成断路器和避雷器', en: 'Optional Full Self-Protection, Integrated Circuit Breaker & Arrester' },
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: '额定功率', unit: 'kVA' },
        { key: 'hv_v', label: '高电压', unit: 'V' },
        { key: 'lv_v', label: '低电压', unit: 'V' },
        { key: 'no_load_loss_w', label: '空载损耗', unit: 'W' },
        { key: 'load_loss_w', label: '负载损耗', unit: 'W' },
        { key: 'w_mm', label: 'W', unit: 'mm' },
        { key: 'd_mm', label: 'D', unit: 'mm' },
        { key: 'h_mm', label: 'H', unit: 'mm' },
        { key: 'oil_weight_kg', label: '油重', unit: 'kg' },
        { key: 'total_weight_kg', label: '总重量', unit: 'kg' },
      ],
      rows: [
        { capacity_kva: 5,    hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 19,  load_loss_w: 75,   w_mm: 465, d_mm: 485, h_mm: 855,  oil_weight_kg: 15,  total_weight_kg: 92 },
        { capacity_kva: 10,   hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 36,  load_loss_w: 120,  w_mm: 500, d_mm: 525, h_mm: 885,  oil_weight_kg: 22,  total_weight_kg: 150 },
        { capacity_kva: 15,   hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 50,  load_loss_w: 195,  w_mm: 520, d_mm: 565, h_mm: 905,  oil_weight_kg: 30,  total_weight_kg: 210 },
        { capacity_kva: 25,   hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 80,  load_loss_w: 290,  w_mm: 560, d_mm: 590, h_mm: 935,  oil_weight_kg: 45,  total_weight_kg: 258 },
        { capacity_kva: 37.5, hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 105, load_loss_w: 360,  w_mm: 610, d_mm: 625, h_mm: 935,  oil_weight_kg: 50,  total_weight_kg: 340 },
        { capacity_kva: 50,   hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 135, load_loss_w: 500,  w_mm: 635, d_mm: 675, h_mm: 1035, oil_weight_kg: 62,  total_weight_kg: 395 },
        { capacity_kva: 75,   hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 190, load_loss_w: 650,  w_mm: 745, d_mm: 840, h_mm: 1035, oil_weight_kg: 88,  total_weight_kg: 480 },
        { capacity_kva: 100,  hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 210, load_loss_w: 850,  w_mm: 770, d_mm: 965, h_mm: 1135, oil_weight_kg: 94,  total_weight_kg: 530 },
        { capacity_kva: 167,  hv_v: '34500/19920/13800/7957/13200/7620/12470/7200', lv_v: '120-240/240-480/347/600', no_load_loss_w: 350, load_loss_w: 1410, w_mm: 795, d_mm: 890, h_mm: 1335, oil_weight_kg: 138, total_weight_kg: 680 },
      ],
      note: '全密封钢罐，低损耗铁芯，标配铜绕组（铝绕组可选），耐候设计，效率 ≥98%。',
    },
  },
  {
    id: 'renewable-energy-transformer',
    icon: Sun,
    title: '可再生能源变压器',
    titleEn: 'Renewable Energy Transformer',
    shortDescription: '专为光伏、风电及其他可再生能源应用定制的升压变压器。',
    fullDescription: '可再生能源变压器专为太阳能光伏电站、风电场和储能系统的苛刻需求特别设计，能够处理逆变器型发电特有的变负载特性和谐波含量，确保高效可靠的电力转换。',
    standardSizes: ['1000kVA', '1250kVA', '1600kVA', '2500kVA', '3150kVA'],
    image: '/renewable_energy_transformer.jpg',
    specs: {
      voltage: '0.4kV / 10kV / 35kV',
      capacity: '1000kVA – 3,150kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF',
      standards: 'IEC 60076 / IEEE C57',
    },
    features: [
      { zh: '优化逆变器型发电', en: 'Inverter-Optimized Generation' },
      { zh: '低谐波损耗', en: 'Low Harmonic Loss' },
      { zh: '高过载能力', en: 'High Overload Capacity' },
      { zh: '兼容光伏和风电', en: 'Solar and Wind Compatible' },
      { zh: '适用于储能系统', en: 'Energy Storage Compatible' },
    ],
    productDescription: '适用于太阳能光伏、风力发电及储能系统，支持可变负载与高谐波环境，符合 IEC 60076。',
    descriptionBullets: [
      { zh: '覆盖 400V–220kV，容量 1000–3150kVA', en: 'Coverage 400V–220kV, Capacity 1000–3150kVA' },
      { zh: '先进谐波抑制设计，适配逆变器输出', en: 'Advanced Harmonic Suppression, Inverter-Compatible' },
      { zh: '支持双向升压，适用于储能充放电循环', en: 'Bidirectional Boost, Energy Storage Cycling' },
      { zh: '铁芯/冷却/绝缘全面定制，适应极端环境', en: 'Fully Customizable, Extreme Environment Ready' },
    ],
    detailedSpecTable: {
      columns: [
        { key: 'label', label: '参数' },
        { key: 'value', label: '规格' },
      ],
      rows: [
        { label: '额定功率',     value: '1000kVA / 1250kVA / 1600kVA / 2500kVA / 3150kVA' },
        { label: '额定一次电压', value: '10kV、11kV、20kV、33kV、35kV 或其他' },
        { label: '二次电压',     value: '定制' },
        { label: '频率',         value: '50/60Hz' },
        { label: '向量组',       value: 'Dyn11, Ynd11, Dyn11yn11, YNd11d11' },
        { label: '缠绕材料',     value: '铝/铜' },
        { label: '零序阻抗',     value: '定制' },
        { label: '安装高度',     value: '≤1000米或定制' },
        { label: '颜色',         value: 'ANSI 70 浅灰色 / 蒙塞尔 7GY3.29/1.5 或定制' },
        { label: '储罐材料',     value: '低碳钢，304不锈钢' },
      ],
      note: '可按项目要求定制规格，专为逆变器型发电系统的变负荷及谐波工况优化设计。',
    },
  },
]

export function getProductById(id: string) {
  return products.find(p => p.id === id)
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.id === slug)
}
