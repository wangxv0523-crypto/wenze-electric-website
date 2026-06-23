import { Droplets, Wind, Zap, Box, Radio } from "lucide-react";

export interface ProductSpecRow {
  capacity: string;
  voltage: string;
  dimensions: string;
  weight?: string;
}

export interface SpecColumn {
  key: string;
  label: string;
  unit?: string;
}

export interface DetailedSpecRow {
  [key: string]: string | number | null | undefined;
}

export interface QuickSpecification {
  label: string;
  value: string;
}

export interface DetailedSpecTable {
  columns: SpecColumn[];
  rows: DetailedSpecRow[];
  note?: string;
  publicationStatus?: "published" | "technical-review";
  reviewNote?: string;
  applicability?: {
    productSeriesModelBasis: string;
    applicableStandard: string;
    windingConductor: string;
    lossReferenceTemperature: string;
    tappingRange: string;
    vectorGroup: string;
    energyEfficiencyBasis: string;
    soundMeasurementBasis: string;
    dimensionsAndWeight: string;
  };
}

export interface ProductFaqItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  icon: React.ElementType;
  title: string;
  titleEn: string;
  seoDescription: string;
  shortDescription: string;
  shortDescriptionEn: string;
  fullDescription: string;
  fullDescriptionEn: string;
  standardSizes: string[];
  image: string;
  cardImage?: string;
  detailImage?: string;
  galleryImages?: Array<{
    src: string;
    alt: string;
  }>;
  specs: {
    voltage: string;
    capacity: string;
    secondaryVoltage?: string;
    frequency: string;
    phase?: string;
    cooling: string;
    vectorGroup?: string;
    insulationMedium?: string;
    tappingRange?: string;
    standards: string;
  };
  features: Array<{ zh: string; en: string }>;
  productDescription?: string;
  descriptionBullets?: Array<{ zh: string; en: string }>;
  specTable?: ProductSpecRow[];
  detailedSpecTable?: DetailedSpecTable;
  applications: string[];
  customizationOptions: string[];
  quotationRequirements: string[];
  faq: ProductFaqItem[];
  relatedProductSlugs: string[];
  technicalDocuments: string[];
  technicalNotes: string[];
}

const quotationRequirements = [
  "Transformer type",
  "Rated capacity",
  "Primary voltage",
  "Secondary voltage",
  "Frequency",
  "Phase",
  "Vector group",
  "Quantity",
  "Installation environment",
  "Destination country",
  "Required delivery date",
  "Applicable standard",
  "Any special technical requirements",
];

const technicalDocuments = [
  "Technical datasheet",
  "General arrangement drawing",
  "Nameplate drawing",
  "Routine test report",
  "Packing list",
  "Operation and maintenance manual",
];

const baseTechnicalNotes = [
  "Typical values are provided for preliminary product selection. Final losses, dimensions, weight, accessories and technical configuration depend on the approved design, winding material, applicable standard and project requirements.",
  "Final technical data shall be confirmed in the approved datasheet, drawings and technical agreement.",
];

const lossTechnicalNotes = [
  ...baseTechnicalNotes,
  "Load loss values are subject to confirmation of the reference temperature and product design.",
];

function createProductFaq(productName: string, applicableStandards: string): ProductFaqItem[] {
  return [
    {
      question: "What information is required for transformer selection?",
      answer: `Please provide the required capacity, primary and secondary voltage, frequency, phase, vector group, installation environment, quantity and applicable standard for the ${productName}.`,
    },
    {
      question: "Can the voltage ratio be customized?",
      answer:
        "Voltage ratio and tapping requirements can be reviewed against the project specification. The final design is subject to the approved technical agreement.",
    },
    {
      question: "Are copper and aluminum windings available?",
      answer:
        "Winding conductor options depend on the product rating, design review and project requirements. Please identify the preferred conductor in the inquiry.",
    },
    {
      question: "Which standards can the transformer be designed to meet?",
      answer: `The design can be reviewed against ${applicableStandards} and other applicable project requirements. The final standard scope must be confirmed in the technical agreement.`,
    },
    {
      question: "What technical documents can be provided?",
      answer:
        "Available technical documents depend on the final project specification and contract requirements.",
    },
    {
      question: "How is the transformer packed for export?",
      answer:
        "The packing method is selected according to the equipment configuration, transport route and agreed contract requirements.",
    },
  ];
}

export const products: Product[] = [
  {
    id: "oil-immersed-distribution-transformer",
    icon: Box,
    title: "油浸式配电变压器",
    titleEn: "Oil Immersed Distribution Transformer",
    seoDescription:
      "Oil immersed distribution transformers for utility, industrial and commercial distribution projects, configured to approved project requirements.",
    shortDescription: "中小型油浸式配电变压器，适用于公用配电网络、工商业配电和农村电气化。",
    shortDescriptionEn:
      "Oil-immersed distribution transformer for utility, industrial, commercial and rural distribution projects.",
    fullDescription:
      "油浸式配电变压器专为公用电力配电网络设计，广泛应用于住宅区、商业开发项目、工业园区和城市配电系统。",
    fullDescriptionEn:
      "Oil-immersed distribution transformers provide medium-to-low-voltage conversion for utility networks, industrial facilities, commercial developments and rural distribution systems. Ratings and accessories are selected against the approved project requirements.",
    standardSizes: [
      "30 kVA",
      "50 kVA",
      "100 kVA",
      "160 kVA",
      "250 kVA",
      "400 kVA",
      "630 kVA",
      "1000 kVA",
      "2500 kVA",
    ],
    image: "/images/products/oil-immersed-distribution-transformer.webp",
    cardImage: "/images/products/oil-immersed-distribution-transformer.webp",
    detailImage: "/images/products/oil-immersed-distribution-transformer.webp",
    galleryImages: [
      {
        src: "/images/gallery-07.jpg",
        alt: "Oil-immersed distribution transformers in the finished product yard",
      },
    ],
    specs: {
      voltage: "6–11 kV",
      capacity: "30–2500 kVA",
      secondaryVoltage: "0.4 kV",
      frequency: "50 Hz",
      phase: "Three-phase",
      cooling: "ONAN",
      vectorGroup: "Dyn11 / Yyn0",
      insulationMedium: "Transformer oil",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEC 60076",
    },
    features: [
      { zh: "性能可靠", en: "Reliable Performance" },
      { zh: "低能耗", en: "Low Energy Consumption" },
      { zh: "长运行寿命", en: "Long Operating Life" },
      { zh: "便于维护", en: "Easy to Maintain" },
      { zh: "部署范围广", en: "Wide Deployment Range" },
    ],
    productDescription:
      "适用于住宅、商业、工业及农村配电项目，额定电压 6–11 kV，容量 30–2500 kVA，二次电压 0.4 kV。",
    descriptionBullets: [
      {
        zh: "支持杆式、落地式、变电站式多种安装方式",
        en: "Pole-Mounted, Ground-Mounted, and Substation Types",
      },
      { zh: "取向硅钢芯，低空载损耗", en: "Grain-Oriented Silicon Steel Core, Low No-load Loss" },
      { zh: "联结组为 Dyn11 / Yyn0", en: "Vector Group: Dyn11 / Yyn0" },
      { zh: "额定频率 50 Hz，冷却方式 ONAN", en: "Frequency: 50 Hz; Cooling: ONAN" },
      { zh: "执行 IEC 60076 标准", en: "Standard: IEC 60076" },
    ],
    applications: [
      "Utility distribution networks",
      "Industrial facilities and production plants",
      "Commercial buildings and residential developments",
      "Rural electrification projects",
      "Auxiliary distribution for renewable energy projects",
    ],
    customizationOptions: [
      "Rated capacity and primary voltage",
      "Secondary voltage and tapping range",
      "Frequency: 50 Hz / 60 Hz",
      "Vector group and impedance",
      "Copper or aluminum winding",
      "Cooling method and insulating oil requirements",
      "Terminal arrangement and protection accessories",
      "Applicable IEC or project-specific requirements",
    ],
    quotationRequirements: [...quotationRequirements],
    faq: createProductFaq(
      "Oil Immersed Distribution Transformer",
      "IEC 60076 or applicable project requirements",
    ),
    relatedProductSlugs: ["dry-type-transformer", "pole-mounted-transformer", "compact-substation"],
    technicalDocuments: [...technicalDocuments],
    technicalNotes: [...lossTechnicalNotes],
    detailedSpecTable: {
      publicationStatus: "technical-review",
      reviewNote:
        "Detailed loss, sound level, dimension and weight values are under technical review before public quotation use.",
      columns: [
        { key: "capacity_kva", label: "Rated Capacity", unit: "kVA" },
        { key: "hv_kv", label: "High Voltage", unit: "kV" },
        { key: "lv_kv", label: "Low Voltage", unit: "kV" },
        { key: "freq_hz", label: "Frequency", unit: "Hz" },
        { key: "connection", label: "Vector Group" },
        { key: "no_load_loss_w", label: "No-load Loss", unit: "W" },
        { key: "load_loss_w", label: "Load Loss", unit: "W" },
        { key: "no_load_current_pct", label: "No-load Current", unit: "%" },
        { key: "noise_db", label: "Sound Level", unit: "dB" },
        { key: "impedance_pct", label: "Short-circuit Impedance", unit: "%" },
        { key: "spec_ab_mm", label: "Installation Dimensions A × B", unit: "mm" },
        { key: "size_mm", label: "Approx. Overall Dimensions L × W × H", unit: "mm" },
        { key: "weight_kg", label: "Approx. Total Weight", unit: "kg" },
      ],
      rows: [
        {
          capacity_kva: 30,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 80,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.5,
          noise_db: 43,
          impedance_pct: 4.0,
          spec_ab_mm: "400×400",
          size_mm: "830×650×950",
          weight_kg: 380,
        },
        {
          capacity_kva: 50,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 100,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.5,
          noise_db: 43,
          impedance_pct: 4.0,
          spec_ab_mm: "400×400",
          size_mm: "850×680×960",
          weight_kg: 420,
        },
        {
          capacity_kva: 80,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 130,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.45,
          noise_db: 44,
          impedance_pct: 4.0,
          spec_ab_mm: "400×400",
          size_mm: "870×700×1010",
          weight_kg: 520,
        },
        {
          capacity_kva: 100,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 150,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.45,
          noise_db: 44,
          impedance_pct: 4.0,
          spec_ab_mm: "400×400",
          size_mm: "900×720×1020",
          weight_kg: 580,
        },
        {
          capacity_kva: 160,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 200,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.4,
          noise_db: 46,
          impedance_pct: 4.0,
          spec_ab_mm: "550×550",
          size_mm: "1190×770×1090",
          weight_kg: 790,
        },
        {
          capacity_kva: 200,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 240,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.4,
          noise_db: 47,
          impedance_pct: 4.0,
          spec_ab_mm: "550×550",
          size_mm: "1260×850×1120",
          weight_kg: 880,
        },
        {
          capacity_kva: 250,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 290,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.35,
          noise_db: 48,
          impedance_pct: 4.0,
          spec_ab_mm: "550×550",
          size_mm: "1300×860×1140",
          weight_kg: 1020,
        },
        {
          capacity_kva: 315,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 340,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.35,
          noise_db: 48,
          impedance_pct: 4.0,
          spec_ab_mm: "660×660",
          size_mm: "1370×910×1160",
          weight_kg: 1220,
        },
        {
          capacity_kva: 400,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 410,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.35,
          noise_db: 48,
          impedance_pct: 4.0,
          spec_ab_mm: "660×660",
          size_mm: "1400×920×1220",
          weight_kg: 1430,
        },
        {
          capacity_kva: 500,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 480,
          load_loss_w: "To be confirmed",
          no_load_current_pct: 0.3,
          noise_db: 49,
          impedance_pct: 4.0,
          spec_ab_mm: "660×660",
          size_mm: "1530×1000×1280",
          weight_kg: 1730,
        },
        {
          capacity_kva: 630,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 570,
          load_loss_w: 6200,
          no_load_current_pct: 0.25,
          noise_db: 49,
          impedance_pct: 4.5,
          spec_ab_mm: "660×660",
          size_mm: "1610×1060×1320",
          weight_kg: 2100,
        },
        {
          capacity_kva: 800,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 700,
          load_loss_w: 7500,
          no_load_current_pct: 0.18,
          noise_db: 50,
          impedance_pct: 4.5,
          spec_ab_mm: "660×820",
          size_mm: "1670×1120×1380",
          weight_kg: 2480,
        },
        {
          capacity_kva: 1000,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 830,
          load_loss_w: 10300,
          no_load_current_pct: 0.17,
          noise_db: 50,
          impedance_pct: 4.5,
          spec_ab_mm: "660×820",
          size_mm: "1720×1160×1400",
          weight_kg: 2880,
        },
        {
          capacity_kva: 1250,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 970,
          load_loss_w: 12000,
          no_load_current_pct: 0.17,
          noise_db: 52,
          impedance_pct: 4.5,
          spec_ab_mm: "660×820",
          size_mm: "1770×1180×1500",
          weight_kg: 3500,
        },
        {
          capacity_kva: 1600,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 1170,
          load_loss_w: 14500,
          no_load_current_pct: 0.16,
          noise_db: 52,
          impedance_pct: 4.5,
          spec_ab_mm: "820×1070",
          size_mm: "1860×1240×1600",
          weight_kg: 4130,
        },
        {
          capacity_kva: 2000,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 1360,
          load_loss_w: 18300,
          no_load_current_pct: 0.16,
          noise_db: 54,
          impedance_pct: 5.0,
          spec_ab_mm: "820×1070",
          size_mm: "1950×1320×1720",
          weight_kg: 5420,
        },
        {
          capacity_kva: 2500,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_w: 1600,
          load_loss_w: 21200,
          no_load_current_pct: 0.15,
          noise_db: 54,
          impedance_pct: 5.0,
          spec_ab_mm: "820×1070",
          size_mm: "2070×1400×1800",
          weight_kg: 6500,
        },
      ],
      note: "Typical reference data for 6–11 kV oil-immersed distribution transformers with a 0.4 kV secondary voltage and Dyn11 / Yyn0 vector group.",
      applicability: {
        productSeriesModelBasis:
          "6–11 kV oil-immersed distribution transformer reference range; final model by approved project datasheet",
        applicableStandard: "IEC 60076 and approved project requirements",
        windingConductor: "To be confirmed in the approved technical datasheet",
        lossReferenceTemperature: "To be confirmed in the approved technical datasheet",
        tappingRange: "To be confirmed in the approved technical datasheet",
        vectorGroup: "Dyn11 / Yyn0 reference options; final value by approved datasheet",
        energyEfficiencyBasis: "To be confirmed against the approved loss evaluation basis",
        soundMeasurementBasis: "To be confirmed in the approved datasheet or test plan",
        dimensionsAndWeight: "Approximate only and subject to approved drawings",
      },
    },
  },
  {
    id: "dry-type-transformer",
    icon: Wind,
    title: "干式变压器",
    titleEn: "Dry Type Transformer",
    seoDescription:
      "Dry type transformers for indoor commercial, industrial and infrastructure applications, with project-specific voltage and enclosure options.",
    shortDescription: "环保型空冷变压器，适用于室内安装，防火安全性高。",
    shortDescriptionEn:
      "Dry-type transformer for indoor commercial, industrial and infrastructure power distribution.",
    fullDescription:
      "干式变压器采用空气作为冷却介质，无需使用油液。适用于商业建筑、医院和数据中心等室内应用场所。",
    fullDescriptionEn:
      "Dry-type transformers use air cooling and solid insulation without insulating oil. They are applied in indoor substations, commercial buildings, data centers, hospitals and industrial distribution rooms, subject to the approved project configuration.",
    standardSizes: ["125 kVA", "250 kVA", "500 kVA", "1000 kVA", "1600 kVA", "2500 kVA"],
    image: "/images/products/dry-type-transformer.webp",
    cardImage: "/images/products/dry-type-transformer.webp",
    detailImage: "/images/products/dry-type-transformer.webp",
    galleryImages: [
      {
        src: "/images/dry-transformer-workshop.jpg",
        alt: "Dry-type transformers arranged in the production workshop",
      },
      {
        src: "/images/three-dry-type-transformers.jpg",
        alt: "Three dry-type transformers on the factory floor",
      },
    ],
    specs: {
      voltage: "6–11 kV",
      capacity: "125–2500 kVA",
      secondaryVoltage: "0.4 kV",
      frequency: "50 Hz",
      phase: "Three-phase",
      cooling: "AN / AF",
      vectorGroup: "Dyn11 / Yyn0",
      insulationMedium: "Cast resin",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEC 60076-11",
    },
    features: [
      { zh: "降低火灾风险", en: "Reduced Fire Risk Compared with Liquid-Filled Transformers" },
      { zh: "环保无污染", en: "Eco-Friendly" },
      { zh: "低维护成本", en: "Low Maintenance Cost" },
      { zh: "适合室内安装", en: "Suitable for Indoor Installation" },
      { zh: "防火等级按项目确认", en: "Fire Behaviour Class Subject to the Approved Specification" },
    ],
    productDescription:
      "适用于室内变电站、数据中心、医院等对防火要求高的场所，符合 IEC 60076-11 标准。",
    descriptionBullets: [
      {
        zh: "F级/H级环氧树脂绝缘，防火性能按项目确认",
        en: "F/H class epoxy resin insulation; fire behaviour class subject to the approved specification",
      },
      { zh: "防护等级 IP20/IP23 可选", en: "Protection Grade IP20/IP23 Optional" },
      {
        zh: "优化低噪音设计，实际声级取决于额定容量、外壳和冷却配置。",
        en: "Optimized low-noise design; actual sound level depends on rated capacity, enclosure and cooling configuration.",
      },
      {
        zh: "低维护，无需绝缘油检测",
        en: "Low maintenance with no insulating-oil testing required",
      },
    ],
    applications: [
      "Commercial buildings and shopping centers",
      "Data centers and communication facilities",
      "Hospitals and public buildings",
      "Indoor industrial distribution rooms",
      "Rail, metro and infrastructure projects",
    ],
    customizationOptions: [
      "Rated capacity and voltage ratio",
      "Frequency: 50 Hz / 60 Hz",
      "Number of phases and vector group",
      "Copper or aluminum winding",
      "AN or AF cooling configuration",
      "Enclosure protection level",
      "Temperature monitoring and control accessories",
      "Applicable IEC or project-specific requirements",
    ],
    quotationRequirements: [...quotationRequirements],
    faq: createProductFaq(
      "Dry Type Transformer",
      "IEC 60076-11 or applicable project requirements",
    ),
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "compact-substation",
      "power-transformer",
    ],
    technicalDocuments: [...technicalDocuments],
    technicalNotes: [...lossTechnicalNotes],
    detailedSpecTable: {
      publicationStatus: "technical-review",
      reviewNote:
        "Detailed SCB12 / SCB13 loss, sound level, dimension and weight values are under technical review before public quotation use.",
      columns: [
        { key: "capacity_kva", label: "Rated Capacity", unit: "kVA" },
        { key: "hv_kv", label: "High Voltage", unit: "kV" },
        { key: "lv_kv", label: "Low Voltage", unit: "kV" },
        { key: "freq_hz", label: "Frequency", unit: "Hz" },
        { key: "connection", label: "Vector Group" },
        { key: "no_load_loss_scb12_w", label: "No-load Loss — SCB12", unit: "W" },
        { key: "no_load_loss_scb13_w", label: "No-load Loss — SCB13", unit: "W" },
        { key: "load_loss_scb12_w", label: "Load Loss — SCB12", unit: "W" },
        { key: "load_loss_scb13_w", label: "Load Loss — SCB13", unit: "W" },
        { key: "no_load_current_pct", label: "No-load Current", unit: "%" },
        { key: "noise_db", label: "Sound Level", unit: "dB" },
        { key: "impedance_pct", label: "Short-circuit Impedance", unit: "%" },
        { key: "spec_ab_mm", label: "Installation Dimensions A × B", unit: "mm" },
        { key: "body_size_mm", label: "Approx. Overall Dimensions L × W × H", unit: "mm" },
        { key: "body_weight_kg", label: "Approx. Total Weight", unit: "kg" },
      ],
      rows: [
        {
          capacity_kva: 125,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 375,
          no_load_loss_scb13_w: 335,
          load_loss_scb12_w: 1850,
          load_loss_scb13_w: 1660,
          no_load_current_pct: 1.3,
          noise_db: 58,
          impedance_pct: 4,
          spec_ab_mm: "550×550",
          body_size_mm: "920×610×1120",
          body_weight_kg: 685,
        },
        {
          capacity_kva: 160,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 430,
          no_load_loss_scb13_w: 385,
          load_loss_scb12_w: 2130,
          load_loss_scb13_w: 1910,
          no_load_current_pct: 1.3,
          noise_db: 58,
          impedance_pct: 4,
          spec_ab_mm: "550×550",
          body_size_mm: "950×610×1120",
          body_weight_kg: 735,
        },
        {
          capacity_kva: 200,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 495,
          no_load_loss_scb13_w: 445,
          load_loss_scb12_w: 2530,
          load_loss_scb13_w: 2270,
          no_load_current_pct: 1.1,
          noise_db: 58,
          impedance_pct: 4,
          spec_ab_mm: "660×660",
          body_size_mm: "990×720×1150",
          body_weight_kg: 820,
        },
        {
          capacity_kva: 250,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 575,
          no_load_loss_scb13_w: 515,
          load_loss_scb12_w: 2760,
          load_loss_scb13_w: 2480,
          no_load_current_pct: 1.1,
          noise_db: 58,
          impedance_pct: 4,
          spec_ab_mm: "660×660",
          body_size_mm: "1030×720×1180",
          body_weight_kg: 960,
        },
        {
          capacity_kva: 315,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 705,
          no_load_loss_scb13_w: 635,
          load_loss_scb12_w: 3470,
          load_loss_scb13_w: 3120,
          no_load_current_pct: 1.0,
          noise_db: 60,
          impedance_pct: 4,
          spec_ab_mm: "660×660",
          body_size_mm: "1050×720×1210",
          body_weight_kg: 1080,
        },
        {
          capacity_kva: 400,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 785,
          no_load_loss_scb13_w: 705,
          load_loss_scb12_w: 3990,
          load_loss_scb13_w: 3590,
          no_load_current_pct: 1.0,
          noise_db: 60,
          impedance_pct: 4,
          spec_ab_mm: "660×660",
          body_size_mm: "1060×720×1270",
          body_weight_kg: 1330,
        },
        {
          capacity_kva: 500,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 930,
          no_load_loss_scb13_w: 835,
          load_loss_scb12_w: 4880,
          load_loss_scb13_w: 4390,
          no_load_current_pct: 1.0,
          noise_db: 62,
          impedance_pct: 4,
          spec_ab_mm: "660×820",
          body_size_mm: "1110×880×1340",
          body_weight_kg: 1480,
        },
        {
          capacity_kva: 630,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 1040,
          no_load_loss_scb13_w: 935,
          load_loss_scb12_w: 5960,
          load_loss_scb13_w: 5360,
          no_load_current_pct: 0.85,
          noise_db: 62,
          impedance_pct: 6,
          spec_ab_mm: "660×820",
          body_size_mm: "1240×880×1300",
          body_weight_kg: 1530,
        },
        {
          capacity_kva: 800,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 1210,
          no_load_loss_scb13_w: 1090,
          load_loss_scb12_w: 6960,
          load_loss_scb13_w: 6260,
          no_load_current_pct: 0.85,
          noise_db: 64,
          impedance_pct: 6,
          spec_ab_mm: "660×820",
          body_size_mm: "1320×880×1350",
          body_weight_kg: 1840,
        },
        {
          capacity_kva: 1000,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 1410,
          no_load_loss_scb13_w: 1270,
          load_loss_scb12_w: 8130,
          load_loss_scb13_w: 7310,
          no_load_current_pct: 0.85,
          noise_db: 64,
          impedance_pct: 6,
          spec_ab_mm: "660×820",
          body_size_mm: "1360×880×1460",
          body_weight_kg: 2320,
        },
        {
          capacity_kva: 1250,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 1670,
          no_load_loss_scb13_w: 1500,
          load_loss_scb12_w: 9690,
          load_loss_scb13_w: 8720,
          no_load_current_pct: 0.85,
          noise_db: 65,
          impedance_pct: 6,
          spec_ab_mm: "820×820",
          body_size_mm: "1430×880×1520",
          body_weight_kg: 2530,
        },
        {
          capacity_kva: 1600,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 1960,
          no_load_loss_scb13_w: 1760,
          load_loss_scb12_w: 11700,
          load_loss_scb13_w: 10500,
          no_load_current_pct: 0.85,
          noise_db: 66,
          impedance_pct: 6,
          spec_ab_mm: "1070×1070",
          body_size_mm: "1470×1130×1690",
          body_weight_kg: 3010,
        },
        {
          capacity_kva: 2000,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 2440,
          no_load_loss_scb13_w: 2190,
          load_loss_scb12_w: 14400,
          load_loss_scb13_w: 13000,
          no_load_current_pct: 0.7,
          noise_db: 66,
          impedance_pct: 6,
          spec_ab_mm: "1070×1070",
          body_size_mm: "1510×1130×1770",
          body_weight_kg: 3540,
        },
        {
          capacity_kva: 2500,
          hv_kv: "6–11",
          lv_kv: 0.4,
          freq_hz: 50,
          connection: "Dyn11 / Yyn0",
          no_load_loss_scb12_w: 2880,
          no_load_loss_scb13_w: 2590,
          load_loss_scb12_w: 17100,
          load_loss_scb13_w: 15400,
          no_load_current_pct: 0.7,
          noise_db: 71,
          impedance_pct: 6,
          spec_ab_mm: "1070×1070",
          body_size_mm: "1560×1130×1900",
          body_weight_kg: 4190,
        },
      ],
      note: "Typical reference data for the existing 10 kV-class SCB dry-type transformer series. Available high-voltage configurations shown in the source data are 6, 6.3, 6.6, 10, 10.5 and 11 kV, with a 0.4 kV low-voltage side. Final enclosure configuration is subject to the approved project datasheet.",
    },
  },
  {
    id: "pole-mounted-transformer",
    icon: Radio,
    title: "柱上式变压器",
    titleEn: "Pole Mounted Transformer",
    seoDescription:
      "Single-phase pole mounted transformers for overhead utility distribution, rural electrification and project-specific network requirements.",
    shortDescription: "紧凑型单相配电变压器，专为公用电杆架空线路安装设计。",
    shortDescriptionEn:
      "Single-phase pole-mounted transformer for overhead utility distribution and rural electrification.",
    fullDescription:
      "单相柱上式配电变压器用于架空配电线路、农村电气化和末端供电，在用电点实现中压至低压的可靠降压。",
    fullDescriptionEn:
      "Single-phase pole-mounted distribution transformers provide medium-to-low-voltage conversion on overhead networks for utility, rural, agricultural and remote distribution applications.",
    standardSizes: ["5 kVA", "10 kVA", "25 kVA", "50 kVA", "75 kVA", "100 kVA", "167 kVA"],
    image: "/images/products/pole-mounted-transformer.webp",
    cardImage: "/images/products/pole-mounted-transformer.webp",
    detailImage: "/images/products/pole-mounted-transformer.webp",
    galleryImages: [
      {
        src: "/images/products/pole-mounted-transformers-workshop.jpg",
        alt: "Pole-mounted transformers arranged in the workshop",
      },
    ],
    specs: {
      voltage: "Subject to project specification",
      capacity: "5–167 kVA",
      secondaryVoltage: "120/240 V",
      frequency: "60 Hz",
      phase: "Single Phase",
      cooling: "ONAN",
      insulationMedium: "Transformer oil",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEEE C57.12.20 / applicable utility requirements",
    },
    features: [
      { zh: "紧凑轻便", en: "Compact and Lightweight" },
      { zh: "单相设计", en: "Single-Phase Design" },
      { zh: "适合农村电气化", en: "Rural Electrification" },
      { zh: "架空线路安装", en: "Overhead Installation" },
      { zh: "耐候设计", en: "Weather-Resistant Design" },
    ],
    productDescription:
      "专为架空配电网络设计，适用于公用事业公司及农村电气化项目，低维护、高可靠。",
    descriptionBullets: [
      { zh: "全钢密封罐体，耐腐蚀涂料", en: "All-Steel Sealed Tank, Corrosion-Resistant Coating" },
      { zh: "容量范围 5–167 kVA", en: "Capacity Range: 5–167 kVA" },
      { zh: "60 Hz 单相配电应用", en: "60 Hz Single-Phase Distribution Application" },
      {
        zh: "保护附件按项目要求确认",
        en: "Protection accessories subject to the approved utility specification",
      },
    ],
    applications: [
      "Overhead utility distribution networks",
      "Rural electrification projects",
      "Residential overhead distribution",
      "Remote infrastructure and agricultural sites",
      "Small commercial distribution loads",
    ],
    customizationOptions: [
      "Rated capacity and primary voltage",
      "Secondary voltage, including 120/240 V arrangements",
      "Frequency and single-phase network requirements",
      "Copper or aluminum winding",
      "Tank finish and corrosion protection",
      "Mounting brackets and terminal arrangement",
      "Protection accessories where required",
      "Applicable IEEE C57.12.20 or utility project requirements",
    ],
    quotationRequirements: [...quotationRequirements],
    faq: createProductFaq(
      "Pole Mounted Transformer",
      "IEEE C57.12.20 or applicable utility requirements",
    ),
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "compact-substation",
      "dry-type-transformer",
    ],
    technicalDocuments: [...technicalDocuments],
    technicalNotes: [...baseTechnicalNotes],
    detailedSpecTable: {
      publicationStatus: "published",
      columns: [
        { key: "label", label: "Parameter" },
        { key: "value", label: "Typical Specification" },
      ],
      rows: [
        { label: "Capacity", value: "5–167 kVA" },
        { label: "Secondary Voltage", value: "120/240 V" },
        { label: "Frequency", value: "60 Hz" },
        { label: "Phase", value: "Single Phase" },
        { label: "Cooling", value: "ONAN" },
        { label: "Standard", value: "IEEE C57.12.20 / applicable utility requirements" },
      ],
      note: "Typical reference configuration for a single-phase pole-mounted distribution transformer.",
      applicability: {
        productSeriesModelBasis:
          "Single-phase pole-mounted distribution transformer; final model by approved project datasheet",
        applicableStandard:
          "IEEE C57.12.20 or applicable utility requirements identified in the project specification",
        windingConductor: "To be confirmed in the approved technical datasheet",
        lossReferenceTemperature: "To be confirmed in the approved technical datasheet",
        tappingRange: "To be confirmed in the approved technical datasheet",
        vectorGroup: "Not applicable to the single-phase reference configuration",
        energyEfficiencyBasis: "To be confirmed against the project and utility requirements",
        soundMeasurementBasis: "To be confirmed in the approved datasheet or test plan",
        dimensionsAndWeight: "Approximate only and subject to approved drawings",
      },
    },
  },
  {
    id: "power-transformer",
    icon: Droplets,
    title: "电力变压器",
    titleEn: "Power Transformer",
    seoDescription:
      "Oil immersed power transformers for substations, industrial power systems and project-specific transmission or distribution applications.",
    shortDescription: "大型油浸式电力变压器，适用于工业变电站、电厂升压和主配电系统。",
    shortDescriptionEn:
      "Oil-immersed power transformer for substations, industrial power systems and project-specific grid applications.",
    fullDescription:
      "电力变压器广泛应用于工业工厂、公用电网、变电站和新能源项目。油浸式绝缘与冷却结构适合中高容量连续运行场景。",
    fullDescriptionEn:
      "Power transformers support voltage transformation in utility substations, industrial systems, generation facilities and renewable energy projects. Voltage, capacity, winding arrangement, cooling and accessories are determined by the approved project specification.",
    standardSizes: [],
    image: "/images/products/power-transformer.webp",
    cardImage: "/images/products/power-transformer.webp",
    detailImage: "/images/products/power-transformer.webp",
    galleryImages: [
      {
        src: "/images/gallery-04.jpg",
        alt: "Large oil-immersed power transformers inside the workshop",
      },
    ],
    specs: {
      voltage: "Customized according to project requirements",
      capacity: "Customized according to project requirements",
      frequency: "50 Hz or 60 Hz, subject to project requirements",
      cooling: "ONAN / ONAF",
      insulationMedium: "Transformer oil",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEC 60076",
    },
    features: [
      { zh: "按项目技术要求设计", en: "Designed According to Project Technical Requirements" },
      { zh: "油浸式绝缘结构", en: "Oil-Immersed Insulation Structure" },
      { zh: "ONAN / ONAF 冷却方式", en: "ONAN / ONAF Cooling" },
      { zh: "适用于变电站和工业供电项目", en: "For Substation and Industrial Power Projects" },
      { zh: "执行 IEC 60076 标准", en: "Designed to IEC 60076" },
    ],
    productDescription:
      "用于变电站、工业供电和电力工程项目的油浸式电力变压器，额定电压、容量及技术配置按项目要求确定。",
    descriptionBullets: [
      {
        zh: "额定电压按项目要求定制",
        en: "Rated Voltage: Customized According to Project Requirements",
      },
      {
        zh: "额定容量按项目要求定制",
        en: "Rated Capacity: Customized According to Project Requirements",
      },
      {
        zh: "频率为 50 Hz 或 60 Hz，以项目要求为准",
        en: "Frequency: 50 Hz or 60 Hz, Subject to Project Requirements",
      },
      { zh: "冷却方式为 ONAN / ONAF", en: "Cooling: ONAN / ONAF" },
      { zh: "执行 IEC 60076 标准", en: "Standard: IEC 60076" },
    ],
    applications: [
      "Utility and industrial substations",
      "Power generation step-up and step-down systems",
      "Mining and heavy industrial facilities",
      "Oil and gas power distribution projects",
      "Grid connection for renewable energy projects",
    ],
    customizationOptions: [
      "Rated capacity and voltage class",
      "Secondary and tertiary voltage requirements",
      "Frequency: 50 Hz / 60 Hz",
      "Number of phases and vector group",
      "Copper or aluminum winding",
      "ONAN / ONAF cooling configuration",
      "Insulating medium and accessory package",
      "Applicable IEC or project-specific requirements",
    ],
    quotationRequirements: [...quotationRequirements],
    faq: createProductFaq("Power Transformer", "IEC 60076 or applicable project requirements"),
    relatedProductSlugs: [
      "high-voltage-power-transformer",
      "oil-immersed-distribution-transformer",
      "compact-substation",
    ],
    technicalDocuments: [...technicalDocuments],
    technicalNotes: [...baseTechnicalNotes],
  },
  {
    id: "high-voltage-power-transformer",
    icon: Zap,
    title: "高压电力变压器",
    titleEn: "High Voltage Power Transformer",
    seoDescription:
      "High voltage power transformers for utility substations, industrial grid connections and large infrastructure power projects.",
    shortDescription: "110 kV 三绕组有载调压电力变压器，适用于公用电网和大型工业供电项目。",
    shortDescriptionEn:
      "110 kV three-winding OLTC power transformer for utility substations and large industrial grid connections.",
    fullDescription:
      "本产品页面展示 110 kV 三绕组有载调压电力变压器的典型参考范围，最终配置以项目技术协议和确认图纸为准。",
    fullDescriptionEn:
      "This page presents a typical reference range for a 110 kV three-winding on-load tap-changing power transformer. Final voltage ratios, capacity, losses, insulation, cooling and accessories are subject to the approved technical datasheet and drawings.",
    standardSizes: ["6.3 MVA", "10 MVA", "16 MVA", "25 MVA", "40 MVA", "63 MVA"],
    image: "/images/products/high-voltage-power-transformer.webp",
    cardImage: "/images/products/high-voltage-power-transformer.webp",
    detailImage: "/images/products/high-voltage-power-transformer.webp",
    galleryImages: [
      {
        src: "/images/high-voltage.jpg",
        alt: "Installed high-voltage power transformer with radiators and bushings",
      },
    ],
    specs: {
      voltage: "110 kV",
      capacity: "6.3–63 MVA",
      frequency: "50 Hz",
      phase: "Three-phase",
      cooling: "ONAN / ONAF",
      vectorGroup: "YNyn0d11",
      insulationMedium: "Transformer oil",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEC 60076",
    },
    features: [
      { zh: "110 kV 电压等级", en: "110 kV Voltage Class" },
      { zh: "三绕组结构", en: "Three-Winding Design" },
      { zh: "有载调压", en: "On-Load Tap Changing" },
      { zh: "ONAN / ONAF 冷却", en: "ONAN / ONAF Cooling" },
      { zh: "执行 IEC 60076 标准", en: "Designed to IEC 60076" },
    ],
    productDescription:
      "110 kV 三绕组有载调压电力变压器，典型容量范围为 6.3–63 MVA，额定频率为 50 Hz。",
    descriptionBullets: [
      { zh: "电压等级 110 kV", en: "Voltage Class: 110 kV" },
      { zh: "容量 6.3–63 MVA", en: "Capacity: 6.3–63 MVA" },
      { zh: "联结组 YNyn0d11", en: "Vector Group: YNyn0d11" },
      { zh: "冷却方式 ONAN / ONAF", en: "Cooling: ONAN / ONAF" },
    ],
    applications: [
      "Utility transmission and grid substations",
      "Large industrial grid interconnections",
      "Power generation substations",
      "Renewable energy collection and grid connection",
      "Mining and major infrastructure projects",
    ],
    customizationOptions: [
      "Rated capacity and voltage class",
      "Winding arrangement and voltage ratio",
      "Frequency and vector group",
      "On-load or off-circuit tap changing requirements",
      "Copper winding and insulation coordination",
      "ONAN / ONAF cooling configuration",
      "Monitoring, protection and bushing accessories",
      "Applicable IEC and project-specific requirements",
    ],
    quotationRequirements: [...quotationRequirements],
    faq: createProductFaq(
      "High Voltage Power Transformer",
      "IEC 60076 and applicable grid or project requirements",
    ),
    relatedProductSlugs: [
      "power-transformer",
      "compact-substation",
      "oil-immersed-distribution-transformer",
    ],
    technicalDocuments: [...technicalDocuments],
    technicalNotes: [...baseTechnicalNotes],
    detailedSpecTable: {
      publicationStatus: "published",
      columns: [
        { key: "label", label: "Parameter" },
        { key: "value", label: "Typical Specification" },
      ],
      rows: [
        { label: "Voltage Class", value: "110 kV" },
        { label: "Capacity", value: "6.3–63 MVA" },
        { label: "Frequency", value: "50 Hz" },
        { label: "Cooling", value: "ONAN / ONAF" },
        { label: "Vector Group", value: "YNyn0d11" },
        { label: "Standard", value: "IEC 60076" },
      ],
      note: "Typical reference parameters for a 110 kV three-winding OLTC power transformer.",
      applicability: {
        productSeriesModelBasis:
          "110 kV three-winding OLTC power transformer reference configuration",
        applicableStandard: "IEC 60076 and approved project requirements",
        windingConductor: "To be confirmed in the approved technical datasheet",
        lossReferenceTemperature: "To be confirmed in the approved technical datasheet",
        tappingRange: "To be confirmed in the approved technical datasheet",
        vectorGroup: "YNyn0d11 reference configuration; final value by approved datasheet",
        energyEfficiencyBasis: "To be confirmed against the approved loss evaluation basis",
        soundMeasurementBasis: "To be confirmed in the approved datasheet or test plan",
        dimensionsAndWeight: "Approximate only and subject to approved drawings",
      },
    },
  },
  {
    id: "compact-substation",
    icon: Box,
    title: "箱式变电站",
    titleEn: "Compact Substation",
    seoDescription:
      "Compact substations integrating high-voltage, transformer and low-voltage sections for industrial, commercial and infrastructure projects.",
    shortDescription: "集成高压开关、变压器和低压配电单元的一体化箱式变电站。",
    shortDescriptionEn:
      "Compact substation integrating high-voltage, transformer and low-voltage distribution sections.",
    fullDescription:
      "箱式变电站将高压开关设备、配电变压器和低压配电系统集成在紧凑的户外防护外壳内，安装快捷、占地面积小，适用于工业园区、商业建筑、基础设施和新能源项目。",
    fullDescriptionEn:
      "Compact substations integrate a high-voltage compartment, transformer compartment, low-voltage compartment, protective enclosure and internal connections. Electrical configuration, transformer type, protection level and enclosure design are selected for the project.",
    standardSizes: [
      "315 kVA",
      "500 kVA",
      "630 kVA",
      "800 kVA",
      "1000 kVA",
      "1250 kVA",
      "1600 kVA",
      "2500 kVA",
    ],
    image: "/images/products/compact-substation-workshop.jpg",
    cardImage: "/images/products/compact-substation-workshop.jpg",
    detailImage: "/images/products/compact-substation-workshop.jpg",
    galleryImages: [
      {
        src: "/images/gallery-05.jpg",
        alt: "Compact substations lined up in the production workshop",
      },
    ],
    specs: {
      voltage: "6–35 kV",
      capacity: "315–2500 kVA",
      secondaryVoltage: "0.4 kV",
      frequency: "50 Hz / 60 Hz",
      cooling: "ONAN for oil-immersed transformer; AN / AF for dry-type transformer",
      tappingRange: "To be confirmed for the selected transformer",
      standards: "IEC 62271-202 / IEC 60076",
    },
    features: [
      { zh: "高低压设备一体化", en: "Integrated HV and LV Equipment" },
      { zh: "紧凑型模块化设计", en: "Compact Modular Design" },
      { zh: "户外防护外壳", en: "Weather-Resistant Enclosure" },
      { zh: "快速安装和调试", en: "Fast Installation and Commissioning" },
      { zh: "支持项目定制", en: "Project-Specific Configuration" },
    ],
    productDescription:
      "适用于工业、商业、基础设施及新能源项目的一体化配电解决方案，符合 IEC 62271-202 与 IEC 60076。",
    descriptionBullets: [
      {
        zh: "高压、变压器和低压单元集成设计",
        en: "Integrated HV, Transformer and LV Compartments",
      },
      { zh: "容量覆盖 315–2500 kVA", en: "Capacity Range from 315 to 2500 kVA" },
      { zh: "紧凑占地，适合快速现场安装", en: "Compact Footprint for Fast On-Site Installation" },
      {
        zh: "外壳、防护等级和电气配置均可定制",
        en: "Customizable Enclosure, Protection and Electrical Configuration",
      },
    ],
    applications: [
      "Industrial parks and production facilities",
      "Commercial buildings and residential developments",
      "Renewable energy distribution projects",
      "Mining, construction and temporary power sites",
      "Transport and municipal infrastructure projects",
    ],
    customizationOptions: [
      "Rated capacity and high-voltage input",
      "Low-voltage distribution arrangement",
      "Frequency: 50 Hz / 60 Hz",
      "Oil-immersed or dry-type transformer section",
      "High-voltage and low-voltage switchgear configuration",
      "Enclosure material and protection level subject to ventilation, transformer type and project requirements",
      "Metering, protection and auxiliary accessories",
      "Applicable IEC and project-specific requirements",
    ],
    quotationRequirements: [...quotationRequirements],
    faq: createProductFaq(
      "Compact Substation",
      "IEC 62271-202, IEC 60076 or applicable project requirements",
    ),
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "dry-type-transformer",
      "power-transformer",
    ],
    technicalDocuments: [...technicalDocuments],
    technicalNotes: [...baseTechnicalNotes],
    detailedSpecTable: {
      publicationStatus: "published",
      columns: [
        { key: "label", label: "Parameter" },
        { key: "value", label: "Typical Specification" },
      ],
      rows: [
        {
          label: "Rated Capacity",
          value:
            "315 kVA / 500 kVA / 630 kVA / 800 kVA / 1000 kVA / 1250 kVA / 1600 kVA / 2500 kVA",
        },
        {
          label: "High-Voltage Side",
          value: "6 kV, 10 kV, 11 kV, 20 kV, 33 kV, 35 kV or project-specific",
        },
        { label: "Low-Voltage Side", value: "0.4 kV or project-specific" },
        { label: "Frequency", value: "50 Hz / 60 Hz" },
        { label: "Transformer Type", value: "Oil-immersed or dry-type" },
        {
          label: "Protection Class",
          value:
            "Available enclosure protection levels depend on ventilation, transformer type and project requirements.",
        },
        {
          label: "Enclosure Material",
          value: "Coated steel, stainless steel or composite material",
        },
        { label: "Installation Altitude", value: "Up to 1000 m or project-specific" },
        { label: "Enclosure Color", value: "Project-specific" },
        { label: "Applicable Standard", value: "IEC 62271-202 / IEC 60076, as applicable" },
      ],
      note: "High-voltage switchgear, transformer, low-voltage distribution and enclosure configuration are selected against the approved single-line diagram and site conditions.",
      applicability: {
        productSeriesModelBasis: "Project-specific compact substation configuration",
        applicableStandard: "IEC 62271-202 / IEC 60076, as applicable to the selected equipment",
        windingConductor: "To be confirmed for the selected transformer in the approved datasheet",
        lossReferenceTemperature:
          "To be confirmed for the selected transformer in the approved datasheet",
        tappingRange: "To be confirmed for the selected transformer in the approved datasheet",
        vectorGroup: "To be confirmed for the selected transformer in the approved datasheet",
        energyEfficiencyBasis: "To be confirmed against the project requirements",
        soundMeasurementBasis:
          "To be confirmed for the selected transformer and enclosure configuration",
        dimensionsAndWeight:
          "Approximate only and subject to approved general arrangement drawings",
      },
    },
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.id === slug);
}

export function getQuickSpecifications(product: Product): QuickSpecification[] {
  const specifications: Array<QuickSpecification | undefined> = [
    { label: "Rated Capacity", value: product.specs.capacity },
    { label: "Primary Voltage", value: product.specs.voltage },
    product.specs.secondaryVoltage
      ? { label: "Secondary Voltage", value: product.specs.secondaryVoltage }
      : undefined,
    { label: "Frequency", value: product.specs.frequency },
    product.specs.phase ? { label: "Phase", value: product.specs.phase } : undefined,
    product.specs.vectorGroup
      ? { label: "Vector Group", value: product.specs.vectorGroup }
      : undefined,
    { label: "Cooling Method", value: product.specs.cooling },
    product.specs.insulationMedium
      ? { label: "Insulation Medium", value: product.specs.insulationMedium }
      : undefined,
    product.specs.tappingRange
      ? { label: "Tapping Range", value: product.specs.tappingRange }
      : undefined,
    { label: "Applicable Standard", value: product.specs.standards },
  ];

  return specifications.filter((specification): specification is QuickSpecification =>
    Boolean(specification?.value),
  );
}
