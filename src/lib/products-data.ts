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
  heading?: string;
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
  regionalSpecifications: QuickSpecification[];
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
  downloadableDatasheet?: {
    href: string;
    fileName: string;
    title: string;
  };
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

const southeastAsiaTechnicalNotes = [
  "For Southeast Asia projects, confirm the destination country and local utility because nominal voltage, frequency, earthing arrangement and insulation coordination vary by network.",
  "Declare maximum ambient temperature, installation altitude, humidity, coastal or salt-pollution exposure, seismic requirements and indoor or outdoor service before the final design is approved.",
  "Common regional configurations include 11 kV, 20 kV, 22 kV, 33 kV and 0.4/0.415 kV at 50 Hz or 60 Hz. Final frequency, voltage ratio and insulation coordination must be confirmed against the destination-country utility and approved project specification.",
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

const accessoryQuotationRequirements = [
  "Accessory category and required item",
  "Transformer model, serial number and nameplate photo",
  "Existing part number or device label, if available",
  "Approved drawing, dimensions or interface photo",
  "Electrical duty, voltage/current or control-circuit requirements where applicable",
  "Quantity and required delivery date",
  "Destination country and installation environment",
  "Applicable utility or project specification",
];

const accessoryTechnicalDocuments = [
  "Accessory technical datasheet",
  "Outline and interface drawing",
  "Wiring diagram or terminal schematic, where applicable",
  "Material and compatibility statement",
  "Inspection record or test certificate, where applicable",
  "Packing list",
];

const accessoryTechnicalNotes = [
  "Accessory information is provided for preliminary selection. No cross-brand or cross-model interchangeability is assumed.",
  "Final compatibility is confirmed against the transformer model, nameplate, existing interface, approved drawing and engineering review.",
  "For Southeast Asia projects, confirm ambient temperature, humidity, coastal or salt-pollution exposure, indoor or outdoor service, and local utility requirements before final selection.",
];

function createAccessoryFaq(productName: string): ProductFaqItem[] {
  return [
    {
      question: `How is compatibility for ${productName} confirmed?`,
      answer:
        "Please provide the transformer model, serial number, nameplate photo, existing part number and interface drawing or dimensions. Our engineering team reviews these details before confirming a replacement or retrofit item.",
    },
    {
      question: "Are replacement accessories universal across transformer brands?",
      answer:
        "No. Electrical duty, mechanical interface, material compatibility and control wiring can differ by transformer design. Final selection must be based on the approved drawing and technical review.",
    },
    {
      question: "Can parts be supplied for tropical or coastal sites?",
      answer:
        "Yes. Please identify humidity, temperature, salt-pollution and outdoor exposure conditions so that enclosure protection, coating and material selection can be reviewed for the site.",
    },
    {
      question: "Which documents can be provided before ordering?",
      answer:
        "Available documents can include a technical datasheet, outline or interface drawing, wiring diagram where applicable, material statement and inspection record, subject to the selected item and contract scope.",
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
      "Oil immersed distribution transformer manufacturer in China for Southeast Asia utility and industrial projects, including 11/22/33 kV and IEC 60076 options.",
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
      voltage: "6–35 kV",
      capacity: "30–2500 kVA",
      secondaryVoltage: "0.4 / 0.415 kV",
      frequency: "50 Hz / 60 Hz",
      phase: "Three-phase",
      cooling: "ONAN",
      vectorGroup: "Dyn11 / Yyn0",
      insulationMedium: "Transformer oil",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEC 60076",
    },
    regionalSpecifications: [
      { label: "Rated Capacity Range", value: "30–2500 kVA" },
      {
        label: "Common Southeast Asia Voltage Ratios",
        value:
          "10/0.4 kV, 11/0.415 kV, 20/0.4 kV, 22/0.415 kV and 33/0.415 kV; final ratio by utility specification",
      },
      {
        label: "Frequency",
        value:
          "50 Hz / 60 Hz according to the destination-country utility and approved project specification",
      },
      { label: "Phase / Vector Group", value: "Three-phase; Dyn11 or Yyn0 as specified" },
      { label: "Cooling / Insulation", value: "ONAN / transformer oil" },
      {
        label: "Tap Changer",
        value: "Off-circuit or project-specific arrangement; tapping range confirmed by datasheet",
      },
      {
        label: "Winding Conductor",
        value: "Copper or aluminum subject to rating, loss requirement and approved design",
      },
      {
        label: "Service Environment",
        value: "Indoor or outdoor; tropical humidity and coastal pollution requirements by project",
      },
      {
        label: "Installation Altitude",
        value:
          "Up to 1000 m under standard service conditions; higher altitude requires design review",
      },
      {
        label: "Tests and Standards",
        value:
          "IEC 60076 routine tests; type or special tests and local efficiency rules by agreement",
      },
    ],
    features: [
      { zh: "性能可靠", en: "Reliable Performance" },
      { zh: "低能耗", en: "Low Energy Consumption" },
      { zh: "长运行寿命", en: "Long Operating Life" },
      { zh: "便于维护", en: "Easy to Maintain" },
      { zh: "部署范围广", en: "Wide Deployment Range" },
    ],
    productDescription:
      "适用于住宅、商业、工业及农村配电项目，覆盖 6–35 kV 中压等级，常见 11/22/33 kV 项目可按技术参数确认，二次电压支持 0.4/0.415 kV。",
    descriptionBullets: [
      {
        zh: "支持杆式、落地式、变电站式多种安装方式",
        en: "Pole-Mounted, Ground-Mounted, and Substation Types",
      },
      { zh: "取向硅钢芯，低空载损耗", en: "Grain-Oriented Silicon Steel Core, Low No-load Loss" },
      { zh: "联结组为 Dyn11 / Yyn0", en: "Vector Group: Dyn11 / Yyn0" },
      { zh: "额定频率 50/60 Hz，冷却方式 ONAN", en: "Frequency: 50/60 Hz; Cooling: ONAN" },
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
    downloadableDatasheet: {
      href: "/downloads/wenze-oil-immersed-distribution-transformer-datasheet-en.pdf",
      fileName: "wenze-oil-immersed-distribution-transformer-datasheet-en.pdf",
      title: "Oil Immersed Distribution Transformer - English Product Datasheet",
    },
    technicalNotes: [...lossTechnicalNotes, ...southeastAsiaTechnicalNotes],
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
      note: "Typical reference data for 6–11 kV oil-immersed distribution transformers. Southeast Asia 11 kV, 22 kV, 33 kV and 0.4/0.415 kV configurations are confirmed by the approved project datasheet.",
      applicability: {
        productSeriesModelBasis:
          "6–11 kV oil-immersed distribution transformer reference range; 11/22/33 kV Southeast Asia configurations by approved project datasheet",
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
      "Dry type transformer manufacturer in China for Southeast Asia indoor substations, data centers and industrial distribution, with IEC 60076-11 options.",
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
      voltage: "6–35 kV",
      capacity: "125–2500 kVA",
      secondaryVoltage: "0.4 / 0.415 kV",
      frequency: "50 Hz / 60 Hz",
      phase: "Three-phase",
      cooling: "AN / AF",
      vectorGroup: "Dyn11 / Yyn0",
      insulationMedium: "Cast resin",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEC 60076-11",
    },
    regionalSpecifications: [
      { label: "Rated Capacity Range", value: "125–2500 kVA" },
      {
        label: "Common Southeast Asia Voltage Ratios",
        value:
          "10/0.4 kV, 11/0.415 kV, 20/0.4 kV, 22/0.415 kV and 33/0.415 kV; final ratio by utility specification",
      },
      {
        label: "Frequency",
        value:
          "50 Hz / 60 Hz according to the destination-country utility and approved project specification",
      },
      { label: "Phase / Vector Group", value: "Three-phase; Dyn11 or Yyn0 as specified" },
      { label: "Cooling / Insulation", value: "AN or AF / cast-resin insulation" },
      {
        label: "Enclosure Protection",
        value: "IP00 for open indoor installation; IP20 or IP23 enclosure options by project",
      },
      {
        label: "Environmental Classification",
        value: "Climatic, environmental and fire-behaviour classes confirmed under IEC 60076-11",
      },
      {
        label: "Temperature Monitoring",
        value: "Winding sensors, temperature controller and cooling fans configured as required",
      },
      {
        label: "Installation Altitude",
        value:
          "Up to 1000 m under standard service conditions; higher altitude requires design review",
      },
      {
        label: "Tests and Standards",
        value:
          "IEC 60076-11 routine tests; type or special tests and local efficiency rules by agreement",
      },
    ],
    features: [
      { zh: "降低火灾风险", en: "Reduced Fire Risk Compared with Liquid-Filled Transformers" },
      { zh: "环保无污染", en: "Eco-Friendly" },
      { zh: "低维护成本", en: "Low Maintenance Cost" },
      { zh: "适合室内安装", en: "Suitable for Indoor Installation" },
      {
        zh: "防火等级按项目确认",
        en: "Fire Behaviour Class Subject to the Approved Specification",
      },
    ],
    productDescription:
      "适用于室内变电站、数据中心、医院等对防火要求高的场所，支持东南亚常见 11/22/33 kV 与 0.4/0.415 kV 配置，符合 IEC 60076-11 标准。",
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
    downloadableDatasheet: {
      href: "/downloads/wenze-dry-type-transformer-datasheet-en.pdf",
      fileName: "wenze-dry-type-transformer-datasheet-en.pdf",
      title: "Dry Type Transformer - English Product Datasheet",
    },
    technicalNotes: [...lossTechnicalNotes, ...southeastAsiaTechnicalNotes],
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
      note: "Typical reference data for the existing 10 kV-class SCB dry-type transformer series. 11 kV, 22 kV, 33 kV and 0.4/0.415 kV Southeast Asia configurations are reviewed against the approved project datasheet.",
    },
  },
  {
    id: "pole-mounted-transformer",
    icon: Radio,
    title: "柱上式变压器",
    titleEn: "Pole Mounted Transformer",
    seoDescription:
      "Pole mounted transformer manufacturer in China for Southeast Asia overhead distribution and rural electrification, with 11/22/33 kV and 50/60 Hz options.",
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
      voltage: "11 / 22 / 33 kV or project-specific",
      capacity: "5–167 kVA",
      secondaryVoltage: "230/400 V, 240/415 V or 120/240 V",
      frequency: "50 Hz / 60 Hz",
      phase: "Single Phase",
      cooling: "ONAN",
      insulationMedium: "Transformer oil",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEC 60076 / IEEE C57.12.20 / applicable utility requirements",
    },
    regionalSpecifications: [
      { label: "Rated Capacity Range", value: "5–167 kVA" },
      {
        label: "Primary Voltage",
        value:
          "11 kV, 22 kV or 33 kV; 13.2/13.8 kV and 34.5 kV utility systems subject to design review",
      },
      {
        label: "Secondary Voltage",
        value: "230/400 V, 240/415 V or 120/240 V according to the local distribution system",
      },
      {
        label: "Frequency",
        value: "50 Hz or 60 Hz according to the destination-country utility",
      },
      { label: "Phase / Cooling", value: "Single-phase / ONAN" },
      {
        label: "Mounting Arrangement",
        value: "Pole-mounted tank, lifting and support provisions confirmed by utility drawing",
      },
      {
        label: "Protection Accessories",
        value: "Surge arrester, fuse cutout and CSP accessories available when specified",
      },
      {
        label: "Tap Changer",
        value: "Off-circuit tapping range and step confirmed by the approved utility datasheet",
      },
      {
        label: "Outdoor Service",
        value: "Weather-resistant configuration; coastal corrosion protection by project",
      },
      {
        label: "Tests and Standards",
        value:
          "IEC 60076, IEEE C57.12.20 or applicable utility requirements; test scope by agreement",
      },
    ],
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
      { zh: "50/60 Hz 架空配电应用", en: "50/60 Hz Overhead Distribution Application" },
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
      "Secondary voltage, including 230/400 V, 240/415 V and 120/240 V arrangements",
      "Frequency and single-phase network requirements",
      "Copper or aluminum winding",
      "Tank finish and corrosion protection",
      "Mounting brackets and terminal arrangement",
      "Protection accessories where required",
      "Applicable IEC 60076, IEEE C57.12.20 or utility project requirements",
    ],
    quotationRequirements: [...quotationRequirements],
    faq: createProductFaq(
      "Pole Mounted Transformer",
      "IEC 60076, IEEE C57.12.20 or applicable utility requirements",
    ),
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "compact-substation",
      "dry-type-transformer",
    ],
    technicalDocuments: [...technicalDocuments],
    technicalNotes: [...baseTechnicalNotes, ...southeastAsiaTechnicalNotes],
    detailedSpecTable: {
      publicationStatus: "published",
      columns: [
        { key: "label", label: "Parameter" },
        { key: "value", label: "Typical Specification" },
      ],
      rows: [
        { label: "Capacity", value: "5–167 kVA" },
        { label: "Primary Voltage", value: "11 kV / 22 kV / 33 kV or utility-specific" },
        { label: "Secondary Voltage", value: "230/400 V, 240/415 V or 120/240 V" },
        { label: "Frequency", value: "50 Hz / 60 Hz" },
        { label: "Phase", value: "Single Phase" },
        { label: "Cooling", value: "ONAN" },
        {
          label: "Standard",
          value: "IEC 60076 / IEEE C57.12.20 / applicable utility requirements",
        },
      ],
      note: "Typical reference configuration for pole-mounted distribution projects. Southeast Asia utility voltage and frequency requirements are confirmed by the approved project datasheet.",
      applicability: {
        productSeriesModelBasis:
          "Single-phase pole-mounted distribution transformer; final model by approved project datasheet",
        applicableStandard:
          "IEC 60076, IEEE C57.12.20 or applicable utility requirements identified in the project specification",
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
      "Oil-immersed power transformers for utility substations, industrial power systems, renewable energy and grid applications, configured to approved project requirements.",
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
    regionalSpecifications: [
      {
        label: "Rated Capacity",
        value: "Project-specific MVA rating confirmed from the load profile and expansion plan",
      },
      {
        label: "Regional Voltage-Ratio Inputs",
        value:
          "Typical inquiries include 33/11 kV, 66/11 kV, 69/13.8 kV, 110/22 kV and 115/34.5/13.8 kV; final capability by technical review",
      },
      {
        label: "Frequency",
        value: "50 Hz or 60 Hz according to the destination-country grid",
      },
      {
        label: "Winding Arrangement",
        value: "Two-winding or three-winding configuration according to the single-line diagram",
      },
      {
        label: "Vector Group / Earthing",
        value: "Selected from the grid connection study and approved system earthing design",
      },
      {
        label: "Tap Changer",
        value: "On-load or off-circuit tap changing with range and step defined by the grid study",
      },
      { label: "Cooling", value: "ONAN / ONAF or project-specific cooling stages" },
      {
        label: "Losses and Impedance",
        value:
          "Guaranteed values confirmed against the purchaser's evaluation and short-circuit study",
      },
      {
        label: "Monitoring and Protection",
        value: "Buchholz relay, pressure relief, oil and winding temperature devices as specified",
      },
      {
        label: "Tests and Standards",
        value: "IEC 60076 routine tests; agreed type and special tests included in the test plan",
      },
    ],
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
    technicalNotes: [...baseTechnicalNotes, ...southeastAsiaTechnicalNotes],
  },
  {
    id: "high-voltage-power-transformer",
    icon: Zap,
    title: "高压电力变压器",
    titleEn: "High Voltage Power Transformer",
    seoDescription:
      "High voltage power transformer manufacturer in China for Southeast Asia utility substations, 110 kV-class projects and industrial grid connections.",
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
      voltage: "110 kV class / project-specific",
      capacity: "6.3–63 MVA",
      frequency: "50 Hz / 60 Hz",
      phase: "Three-phase",
      cooling: "ONAN / ONAF",
      vectorGroup: "YNyn0d11",
      insulationMedium: "Transformer oil",
      tappingRange: "To be confirmed in the approved technical datasheet",
      standards: "IEC 60076",
    },
    regionalSpecifications: [
      { label: "Reference Capacity Range", value: "6.3–63 MVA" },
      {
        label: "Voltage Class",
        value: "110 kV class; secondary and tertiary voltages confirmed by the local grid study",
      },
      {
        label: "Frequency",
        value: "50 Hz or 60 Hz according to the destination-country grid",
      },
      { label: "Phase / Winding", value: "Three-phase / three-winding reference design" },
      {
        label: "Vector Group",
        value: "YNyn0d11 reference configuration; final group by approved system design",
      },
      {
        label: "Voltage Regulation",
        value: "OLTC reference design; tapping range, step and regulating winding by grid study",
      },
      { label: "Cooling", value: "ONAN / ONAF with approved staged cooling duty" },
      {
        label: "Insulation Coordination",
        value: "Power-frequency and lightning impulse levels confirmed by utility requirements",
      },
      {
        label: "Monitoring and Protection",
        value:
          "Gas, pressure, oil level, oil temperature and winding temperature devices as specified",
      },
      {
        label: "Tests and Standards",
        value: "IEC 60076 routine tests; agreed type and special tests included in the test plan",
      },
    ],
    features: [
      { zh: "110 kV 及项目指定电压等级", en: "110 kV Class and Project-Specific Voltage" },
      { zh: "三绕组结构", en: "Three-Winding Design" },
      { zh: "有载调压", en: "On-Load Tap Changing" },
      { zh: "ONAN / ONAF 冷却", en: "ONAN / ONAF Cooling" },
      { zh: "执行 IEC 60076 标准", en: "Designed to IEC 60076" },
    ],
    productDescription:
      "110 kV 级三绕组有载调压电力变压器，典型容量范围为 6.3–63 MVA，频率可按 50/60 Hz 项目要求确认。",
    descriptionBullets: [
      {
        zh: "电压等级按当地电网要求确认",
        en: "Voltage class confirmed by local grid requirements",
      },
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
    technicalNotes: [...baseTechnicalNotes, ...southeastAsiaTechnicalNotes],
    detailedSpecTable: {
      publicationStatus: "published",
      columns: [
        { key: "label", label: "Parameter" },
        { key: "value", label: "Typical Specification" },
      ],
      rows: [
        { label: "Voltage Class", value: "110 kV class or project-specific" },
        { label: "Capacity", value: "6.3–63 MVA" },
        { label: "Frequency", value: "50 Hz / 60 Hz" },
        { label: "Cooling", value: "ONAN / ONAF" },
        { label: "Vector Group", value: "YNyn0d11" },
        { label: "Standard", value: "IEC 60076" },
      ],
      note: "Typical reference parameters for a 110 kV-class three-winding OLTC power transformer. Final voltage class and frequency are confirmed by the local grid and approved project datasheet.",
      applicability: {
        productSeriesModelBasis:
          "110 kV-class three-winding OLTC power transformer reference configuration",
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
      "Compact substation manufacturer in China for Southeast Asia industrial and infrastructure projects with integrated high-voltage, transformer and low-voltage sections.",
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
      secondaryVoltage: "0.4 / 0.415 kV",
      frequency: "50 Hz / 60 Hz",
      cooling: "ONAN for oil-immersed transformer; AN / AF for dry-type transformer",
      tappingRange: "To be confirmed for the selected transformer",
      standards: "IEC 62271-202 / IEC 60076",
    },
    regionalSpecifications: [
      { label: "Transformer Capacity Range", value: "315–2500 kVA" },
      {
        label: "High-Voltage Side",
        value: "6 kV, 10 kV, 11 kV, 20 kV, 22 kV, 33 kV or 35 kV by project",
      },
      { label: "Low-Voltage Side", value: "0.4 kV, 0.415 kV or project-specific" },
      {
        label: "Frequency",
        value: "50 Hz or 60 Hz according to the destination-country utility",
      },
      {
        label: "Transformer Type",
        value: "Oil-immersed or dry-type transformer according to the approved layout",
      },
      {
        label: "HV Switchgear",
        value:
          "RMU, load-break switch with fuse or circuit-breaker configuration by protection study",
      },
      {
        label: "LV Switchboard",
        value:
          "Rated current, short-circuit rating, feeder quantity and metering by single-line diagram",
      },
      {
        label: "Enclosure / Corrosion Protection",
        value: "Protection class, ventilation and coastal coating system selected for the site",
      },
      {
        label: "Service Conditions",
        value:
          "Outdoor tropical service; ambient temperature, humidity, solar load and altitude declared",
      },
      {
        label: "Tests and Standards",
        value:
          "IEC 62271-202, IEC 60076 and IEC 61439 as applicable; internal-arc requirements by agreement",
      },
    ],
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
    downloadableDatasheet: {
      href: "/downloads/wenze-compact-substation-datasheet-en.pdf",
      fileName: "wenze-compact-substation-datasheet-en.pdf",
      title: "Compact Substation - English Product Datasheet",
    },
    technicalNotes: [...baseTechnicalNotes, ...southeastAsiaTechnicalNotes],
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
          value: "6 kV, 10 kV, 11 kV, 20 kV, 22 kV, 33 kV, 35 kV or project-specific",
        },
        { label: "Low-Voltage Side", value: "0.4 kV / 0.415 kV or project-specific" },
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
  {
    id: "transformer-bushings-connectors",
    icon: Radio,
    title: "Transformer Bushings & Terminal Connectors",
    titleEn: "Transformer Bushings & Terminal Connectors",
    seoDescription:
      "Transformer bushings and terminal connectors for oil-immersed distribution and power transformers, selected by voltage class, current rating, insulation and interface drawing.",
    shortDescription:
      "Porcelain, epoxy and composite transformer bushings with matched terminal connection components.",
    shortDescriptionEn:
      "Porcelain, epoxy and composite transformer bushings with matched terminal connection components.",
    fullDescription:
      "Transformer bushings and terminal connectors are selected for replacement, retrofit or new transformer projects. Voltage class, current rating, creepage distance, terminal arrangement and flange dimensions are confirmed against the transformer nameplate and approved drawing.",
    fullDescriptionEn:
      "Transformer bushings and terminal connectors are selected for replacement, retrofit or new transformer projects. Voltage class, current rating, creepage distance, terminal arrangement and flange dimensions are confirmed against the transformer nameplate and approved drawing.",
    standardSizes: [
      "LV equipment class Um <= 1.1 kV",
      "MV equipment class Um 7.2 / 12 / 17.5 / 24 / 36 kV",
      "Higher voltage by project",
    ],
    image: "/images/products/transformer-bushings-connectors.png",
    cardImage: "/images/products/transformer-bushings-connectors.png",
    detailImage: "/images/products/transformer-bushings-connectors.png",
    specs: {
      voltage:
        "Equipment class Um <= 1.1 / 7.2 / 12 / 17.5 / 24 / 36 kV; matched to the local grid",
      capacity:
        "Current rating follows the selected bushing construction, transformer load, terminal configuration and temperature-rise duty",
      frequency: "50/60 Hz system service",
      phase: "Single bushing or matched 3-phase set",
      cooling: "N/A - insulation and terminal component",
      insulationMedium: "Porcelain / epoxy resin / composite",
      tappingRange: "Not applicable",
      standards: "IEC 60137 / applicable utility specification",
    },
    regionalSpecifications: [
      {
        label: "Typical Nominal System Voltage",
        value: "6.6 kV / 11 kV / 13.8 kV / 20 kV / 22 kV / 33 kV examples; final by local utility",
      },
      {
        label: "Equipment Voltage Class",
        value: "Um <= 1.1 / 7.2 / 12 / 17.5 / 24 / 36 kV selected by insulation coordination",
      },
      {
        label: "Current Rating",
        value:
          "Current duty is model-specific and is confirmed from the bushing construction, conductor and temperature-rise duty",
      },
      { label: "Insulation Type", value: "Porcelain, epoxy resin or composite insulation selected for the service environment" },
      { label: "Connection Style", value: "Threaded, spade, plug-in or project-specific terminal arrangement" },
      { label: "Mechanical Interface", value: "Flange, gasket, stud pattern and conductor dimensions matched to the approved drawing" },
      { label: "Environmental Selection", value: "Creepage distance, coating and material selected for humidity, pollution and coastal exposure" },
      { label: "Applicable Standard", value: "IEC 60137 or applicable utility and project specification" },
      { label: "Required for Quotation", value: "Nameplate, existing bushing drawing, terminal details and quantity" },
    ],
    features: [
      { zh: "Matched electrical and mechanical interface", en: "Matched electrical and mechanical interface" },
      { zh: "Porcelain, epoxy and composite options", en: "Porcelain, epoxy and composite options" },
      { zh: "Tropical and coastal environment review", en: "Tropical and coastal environment review" },
      { zh: "Replacement or retrofit selection", en: "Replacement or retrofit selection" },
    ],
    applications: [
      "Oil-immersed distribution transformer replacement",
      "Power transformer retrofit and maintenance",
      "Utility, industrial and compact substation projects",
      "Indoor, outdoor, tropical and coastal installations",
    ],
    customizationOptions: [
      "Voltage class, current rating and insulation type",
      "Creepage distance and pollution performance",
      "Terminal, conductor and flange interface",
      "Gasket and hardware material selection",
    ],
    quotationRequirements: [...accessoryQuotationRequirements],
    faq: createAccessoryFaq("Transformer Bushings & Terminal Connectors"),
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "power-transformer",
      "high-voltage-power-transformer",
    ],
    technicalDocuments: [...accessoryTechnicalDocuments],
    technicalNotes: [
      ...accessoryTechnicalNotes,
      "Nominal system voltage and the bushing Um equipment voltage class are not interchangeable. Current rating, creepage distance and terminal configuration must match the transformer and grid insulation-coordination requirements.",
    ],
    detailedSpecTable: {
      heading: "Bushing Selection Reference Parameters",
      columns: [
        { key: "parameter", label: "Parameter" },
        { key: "reference", label: "Typical Reference" },
        { key: "confirmation", label: "Confirm for Order" },
      ],
      rows: [
        {
          parameter: "Equipment voltage class",
          reference: "Um <= 1.1 / 7.2 / 12 / 17.5 / 24 / 36 kV",
          confirmation: "Required Um, insulation coordination, impulse level and local-utility requirement",
        },
        {
          parameter: "Rated current",
          reference: "Model-specific; confirmed from the required continuous current and selected bushing construction",
          confirmation: "Transformer load, terminal design and temperature rise duty",
        },
        {
          parameter: "Insulation material",
          reference: "Porcelain / epoxy resin / composite",
          confirmation: "Indoor or outdoor service, humidity, pollution and coastal exposure",
        },
        {
          parameter: "Creepage selection",
          reference: "Selected for site pollution severity; no universal mm/kV value is claimed",
          confirmation: "IEC TS 60815 basis and destination-utility requirement",
        },
        {
          parameter: "Terminal arrangement",
          reference: "Threaded stud / palm / plug-in / project-specific connector",
          confirmation: "Stud size, hole pattern, phase spacing and conductor direction",
        },
        {
          parameter: "Mounting interface",
          reference: "Flange, gasket, bolt pattern and oil-side length",
          confirmation: "Approved bushing drawing and transformer cover interface",
        },
        {
          parameter: "Applicable standard",
          reference: "IEC 60137 for applicable AC bushing duty",
          confirmation: "Product-specific test and utility or project requirements",
        },
      ],
      publicationStatus: "published",
      note:
        "These are reference selection parameters, not universal interchangeability claims. The approved accessory drawing and transformer nameplate control the final supply.",
      applicability: {
        productSeriesModelBasis: "Transformer bushing and terminal accessory category",
        applicableStandard: "IEC 60137 and applicable utility or project specification",
        windingConductor: "Not applicable; conductor and terminal interface are confirmed by drawing",
        lossReferenceTemperature: "Not applicable",
        tappingRange: "Not applicable",
        vectorGroup: "Not applicable",
        energyEfficiencyBasis: "Not applicable; electrical duty and insulation coordination are reviewed",
        soundMeasurementBasis: "Not applicable",
        dimensionsAndWeight: "Subject to selected voltage class, terminal design and approved interface drawing",
      },
    },
  },
  {
    id: "transformer-protection-monitoring",
    icon: Zap,
    title: "Transformer Protection & Monitoring Devices",
    titleEn: "Transformer Protection & Monitoring Devices",
    seoDescription:
      "Buchholz relays, pressure relief devices, oil level indicators and temperature monitoring accessories for oil-immersed transformers and OLTC applications.",
    shortDescription:
      "Protection and monitoring devices selected for oil-immersed transformers and on-load tap changers.",
    shortDescriptionEn:
      "Protection and monitoring devices selected for oil-immersed transformers and on-load tap changers.",
    fullDescription:
      "Protection and monitoring devices support transformer condition indication, alarm and trip functions. Device type, mounting interface, contact arrangement, enclosure protection and pressure setting are confirmed against the transformer tank design and approved electrical schematic.",
    fullDescriptionEn:
      "Protection and monitoring devices support transformer condition indication, alarm and trip functions. Device type, mounting interface, contact arrangement, enclosure protection and pressure setting are confirmed against the transformer tank design and approved electrical schematic.",
    standardSizes: ["Buchholz relay", "Pressure relief device", "MOG / OTI / WTI"],
    image: "/images/products/transformer-protection-monitoring.png",
    cardImage: "/images/products/transformer-protection-monitoring.png",
    detailImage: "/images/products/transformer-protection-monitoring.png",
    specs: {
      voltage: "Auxiliary and contact circuit by project",
      capacity: "Oil-immersed transformer / OLTC duty",
      frequency: "50/60 Hz system service",
      phase: "Alarm and trip contacts as specified",
      cooling: "N/A - protection and monitoring devices",
      insulationMedium: "Not applicable",
      tappingRange: "Not applicable",
      standards: "IEC 60076-22-1 / IEC 60529 for enclosure protection / project specification",
    },
    regionalSpecifications: [
      { label: "Typical Devices", value: "Buchholz relay, PRD, magnetic oil gauge, OTI, WTI and related contacts" },
      { label: "Application", value: "Oil-immersed transformers, conservators and on-load tap changer compartments" },
      { label: "Signal Function", value: "Local indication with alarm and trip contacts selected to the control schematic" },
      { label: "PRD Selection", value: "Operating pressure, flange and discharge arrangement confirmed against tank design" },
      {
        label: "Enclosure Protection",
        value:
          "IP rating is stated on the selected device datasheet and assessed with its actual cable-entry arrangement to IEC 60529",
      },
      { label: "Control Interface", value: "Terminal box, cable entry, contact rating and wiring identified on the approved schematic" },
      { label: "Environmental Selection", value: "Outdoor coating, stainless hardware and corrosion protection reviewed for site conditions" },
      { label: "Required for Quotation", value: "Device label, existing drawing, tank interface, wiring requirement and quantity" },
    ],
    features: [
      { zh: "Alarm and trip contact options", en: "Alarm and trip contact options" },
      { zh: "Tank and piping interface review", en: "Tank and piping interface review" },
      { zh: "Outdoor and corrosive site options", en: "Outdoor and corrosive site options" },
      { zh: "New-build and retrofit support", en: "New-build and retrofit support" },
    ],
    applications: [
      "Oil-immersed distribution and power transformers",
      "On-load tap changer protection circuits",
      "Substation condition monitoring upgrades",
      "Replacement of failed or obsolete protection devices",
    ],
    customizationOptions: [
      "Device type and alarm/trip contact arrangement",
      "Mounting flange, piping and cable entry interface",
      "Pressure setting and discharge shield for PRD applications",
      "Enclosure protection and corrosion-resistant materials",
    ],
    quotationRequirements: [...accessoryQuotationRequirements],
    faq: createAccessoryFaq("Transformer Protection & Monitoring Devices"),
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "power-transformer",
      "high-voltage-power-transformer",
    ],
    technicalDocuments: [...accessoryTechnicalDocuments],
    technicalNotes: [
      ...accessoryTechnicalNotes,
      "Pressure-relief settings, contact ratings and wiring arrangements are device-specific and must be confirmed against the approved transformer tank design and control schematic.",
    ],
    detailedSpecTable: {
      heading: "Protection Device Configuration Parameters",
      columns: [
        { key: "parameter", label: "Parameter" },
        { key: "reference", label: "Typical Reference" },
        { key: "confirmation", label: "Confirm for Order" },
      ],
      rows: [
        {
          parameter: "Device scope",
          reference: "Buchholz relay / PRD / MOG / OTI / WTI",
          confirmation: "Transformer type, conservator or OLTC application and required function",
        },
        {
          parameter: "Protection function",
          reference: "Gas accumulation, oil surge, pressure, oil level or temperature monitoring",
          confirmation: "Approved protection philosophy and control schematic",
        },
        {
          parameter: "Alarm and trip contacts",
          reference: "Local indication with alarm / trip contact options",
          confirmation: "Contact quantity, NO/NC logic and circuit duty",
        },
        {
          parameter: "Auxiliary and control supply",
          reference: "AC or DC auxiliary circuits; 50/60 Hz where AC is used",
          confirmation: "Control voltage, terminal arrangement and cable entry",
        },
        {
          parameter: "PRD configuration",
          reference: "Operating pressure and discharge arrangement selected by tank design",
          confirmation: "Tank pressure calculation, flange and discharge clearance",
        },
        {
          parameter: "Enclosure protection",
          reference: "IP rating stated on the selected device datasheet and cable-entry arrangement",
          confirmation: "Outdoor exposure, cable glands and IEC 60529 requirement",
        },
        {
          parameter: "Mechanical interface",
          reference: "Pipe, flange, gasket, mounting and terminal-box interface",
          confirmation: "Approved tank drawing and existing device label",
        },
        {
          parameter: "Applicable standard",
          reference: "IEC 60076-22-1; IEC 60529 applies to the declared enclosure IP rating",
          confirmation: "Utility and project specification",
        },
      ],
      publicationStatus: "published",
      note:
        "Protection-device ratings and interfaces are not universal. The approved transformer tank drawing, electrical schematic and protection philosophy control the final supply.",
      applicability: {
        productSeriesModelBasis: "Oil-immersed transformer and OLTC protection accessory category",
        applicableStandard: "IEC 60076-22-1 and applicable project specification",
        windingConductor: "Not applicable",
        lossReferenceTemperature: "Not applicable",
        tappingRange: "Not applicable",
        vectorGroup: "Not applicable",
        energyEfficiencyBasis: "Not applicable; protection function and device interface are reviewed",
        soundMeasurementBasis: "Not applicable",
        dimensionsAndWeight: "Subject to selected device, tank interface and terminal-box configuration",
      },
    },
  },
  {
    id: "transformer-tap-changers-controls",
    icon: Box,
    title: "Transformer Tap Changers & Control Panels",
    titleEn: "Transformer Tap Changers & Control Panels",
    seoDescription:
      "Off-circuit and on-load transformer tap changer components, motor drive mechanisms and control panels selected by transformer winding design and voltage regulation requirements.",
    shortDescription:
      "DETC, OLTC components and control panels for transformer voltage regulation and retrofit projects.",
    shortDescriptionEn:
      "DETC, OLTC components and control panels for transformer voltage regulation and retrofit projects.",
    fullDescription:
      "Tap changer equipment is selected for transformer voltage regulation, maintenance and retrofit projects. DETC or OLTC type, contact arrangement, step range, motor-drive controls and mechanical interface must match the transformer winding design and approved control scheme.",
    fullDescriptionEn:
      "Tap changer equipment is selected for transformer voltage regulation, maintenance and retrofit projects. DETC or OLTC type, contact arrangement, step range, motor-drive controls and mechanical interface must match the transformer winding design and approved control scheme.",
    standardSizes: ["DETC components", "OLTC components", "Motor drive and control panels"],
    image: "/images/products/transformer-tap-changers-controls.png",
    cardImage: "/images/products/transformer-tap-changers-controls.png",
    detailImage: "/images/products/transformer-tap-changers-controls.png",
    specs: {
      voltage: "Regulation range by transformer winding design",
      capacity: "DETC / OLTC selected by transformer rating",
      frequency: "50/60 Hz control supply by project",
      phase: "Single- or three-phase transformer application",
      cooling: "N/A - switching and control equipment",
      insulationMedium: "Oil-immersed or dry-type application by design",
      tappingRange: "Number of positions and step percent by approved datasheet",
      standards: "IEC 60214-1 / IEC/IEEE 60214-2 / project specification",
    },
    regionalSpecifications: [
      { label: "Tap Changer Type", value: "DETC or OLTC selected by transformer design and operating requirement" },
      { label: "Voltage Regulation", value: "Tap range, number of positions and step percentage confirmed by approved winding data" },
      { label: "Contact System", value: "Diverter, selector, fixed or moving contacts matched to existing mechanism" },
      { label: "Motor Drive", value: "Motor-drive mechanism, RTCC or local control panel by project control philosophy" },
      { label: "Auxiliary Supply", value: "Voltage, frequency, phase and terminal arrangement confirmed by control schematic" },
      { label: "Mechanical Interface", value: "Mounting, shaft, drive linkage and enclosure dimensions matched to drawing" },
      {
        label: "Applicable Standard",
        value: "IEC 60214-1 / IEC/IEEE 60214-2 or applicable utility and project specification",
      },
      { label: "Required for Quotation", value: "Tap changer nameplate, schematic, mechanism photo and transformer drawing" },
    ],
    features: [
      { zh: "DETC and OLTC selection support", en: "DETC and OLTC selection support" },
      { zh: "Motor drive and RTCC options", en: "Motor drive and RTCC options" },
      { zh: "Existing mechanism matching", en: "Existing mechanism matching" },
      { zh: "Voltage regulation retrofit review", en: "Voltage regulation retrofit review" },
    ],
    applications: [
      "Distribution and power transformer voltage regulation",
      "OLTC maintenance and component replacement",
      "Motor-drive cabinet and RTCC retrofit projects",
      "Utility and industrial transformer refurbishment",
    ],
    customizationOptions: [
      "DETC or OLTC configuration",
      "Tap range, steps and contact arrangement",
      "Motor-drive supply and control-panel wiring",
      "Mounting, drive-shaft and linkage interface",
    ],
    quotationRequirements: [...accessoryQuotationRequirements],
    faq: createAccessoryFaq("Transformer Tap Changers & Control Panels"),
    relatedProductSlugs: [
      "power-transformer",
      "high-voltage-power-transformer",
      "transformer-protection-monitoring",
    ],
    technicalDocuments: [...accessoryTechnicalDocuments],
    technicalNotes: [
      ...accessoryTechnicalNotes,
      "Tap changer components are strictly matched to the existing mechanism, winding data and control schematic; a visual similarity alone is not sufficient for selection.",
    ],
    detailedSpecTable: {
      heading: "Tap Changer Configuration Parameters",
      columns: [
        { key: "parameter", label: "Parameter" },
        { key: "reference", label: "Typical Reference" },
        { key: "confirmation", label: "Confirm for Order" },
      ],
      rows: [
        {
          parameter: "Tap changer type",
          reference: "DETC or OLTC; selector, diverter, fixed or moving contact components",
          confirmation: "Existing device nameplate, transformer winding design and duty",
        },
        {
          parameter: "Voltage regulation",
          reference: "Tap range, position count and step percentage by transformer winding data",
          confirmation: "Approved nameplate and voltage-regulation requirement",
        },
        {
          parameter: "Electrical duty",
          reference: "Rated through-current, step voltage and short-circuit duty by device design",
          confirmation: "Tap winding data and approved tap changer datasheet",
        },
        {
          parameter: "Motor-drive supply",
          reference: "Motor and control supply by schematic; 50/60 Hz where AC is used",
          confirmation: "Voltage, phase, terminal arrangement and local supply",
        },
        {
          parameter: "Control functions",
          reference: "Local / remote operation, position indication, electrical and mechanical end limits",
          confirmation: "RTCC interface, interlocking and signal list",
        },
        {
          parameter: "Mechanical interface",
          reference: "Mounting, drive shaft, linkage and enclosure dimensions",
          confirmation: "Mechanism drawing and retrofit installation space",
        },
        {
          parameter: "Applicable standard",
          reference: "IEC 60214-1 / IEC/IEEE 60214-2",
          confirmation: "Utility and project specification",
        },
      ],
      publicationStatus: "published",
      note:
        "Tap changer parts are model-specific. Replacement and retrofit supply must follow the approved device nameplate, mechanism drawing and control-circuit documentation.",
      applicability: {
        productSeriesModelBasis: "Transformer DETC / OLTC and motor-drive accessory category",
        applicableStandard: "IEC 60214-1 / IEC/IEEE 60214-2 and applicable project specification",
        windingConductor: "Confirmed through the transformer winding and tap changer design review",
        lossReferenceTemperature: "Not applicable",
        tappingRange: "Confirmed by approved transformer winding data and required voltage regulation range",
        vectorGroup: "Confirmed through the transformer design where relevant",
        energyEfficiencyBasis: "Not applicable; regulation duty and component compatibility are reviewed",
        soundMeasurementBasis: "Not applicable",
        dimensionsAndWeight: "Subject to selected mechanism, motor-drive cabinet and approved drawings",
      },
    },
  },
  {
    id: "transformer-cooling-system-components",
    icon: Wind,
    title: "Transformer Cooling System Components",
    titleEn: "Transformer Cooling System Components",
    seoDescription:
      "Transformer radiators, cooling fans, oil pumps and cooling-system components selected for ONAN, ONAF and OFAF transformer cooling arrangements.",
    shortDescription:
      "Radiators, cooling fans, oil pumps and associated parts for transformer cooling-system maintenance or retrofit.",
    shortDescriptionEn:
      "Radiators, cooling fans, oil pumps and associated parts for transformer cooling-system maintenance or retrofit.",
    fullDescription:
      "Transformer cooling-system components include radiator banks, cooling fans, oil pumps, valves and related controls. Selection is based on transformer heat-loss duty, cooling mode, auxiliary supply, interface dimensions, insulating-fluid review and site ambient conditions.",
    fullDescriptionEn:
      "Transformer cooling-system components include radiator banks, cooling fans, oil pumps, valves and related controls. Selection is based on transformer heat-loss duty, cooling mode, auxiliary supply, interface dimensions, insulating-fluid review and site ambient conditions.",
    standardSizes: ["Radiator bank", "Cooling fan set", "Oil pump and cooling controls"],
    image: "/images/products/transformer-cooling-system-components.png",
    cardImage: "/images/products/transformer-cooling-system-components.png",
    detailImage: "/images/products/transformer-cooling-system-components.png",
    specs: {
      voltage: "Fan and pump auxiliary supply by project",
      capacity: "Radiator, fan and pump sizing by heat-loss duty",
      frequency: "50/60 Hz",
      phase: "Single- or three-phase auxiliary supply",
      cooling: "ONAN / ONAF / OFAF system components",
      insulationMedium: "Material selected after insulating-fluid compatibility review",
      tappingRange: "Not applicable",
      standards: "IEC 60076-2 / applicable project specification",
    },
    regionalSpecifications: [
      { label: "Component Scope", value: "Radiators, cooling fans, oil pumps, valves, controls and associated fittings" },
      { label: "Cooling Arrangement", value: "ONAN, ONAF or OFAF arrangement confirmed by the transformer cooling calculation" },
      { label: "Thermal Duty", value: "Heat dissipation, oil flow and fan duty selected against transformer losses and ambient temperature" },
      { label: "Auxiliary Supply", value: "Fan or pump voltage, frequency, phase, cable entry and control interface by project" },
      { label: "Mechanical Interface", value: "Radiator flange pitch, valve size, pipework and mounting dimensions matched to drawing" },
      {
        label: "Material and Coating",
        value: "Material and coating selected after insulating-fluid, humidity and corrosion review",
      },
      { label: "Noise Requirement", value: "Fan and pump acoustic requirement confirmed where the installation has a sound limit" },
      { label: "Required for Quotation", value: "Transformer rating, losses, cooling mode, drawing and auxiliary supply details" },
    ],
    features: [
      { zh: "ONAN, ONAF and OFAF support", en: "ONAN, ONAF and OFAF support" },
      { zh: "Radiator and fan interface matching", en: "Radiator and fan interface matching" },
      { zh: "Auxiliary control-supply review", en: "Auxiliary control-supply review" },
      { zh: "Hot and humid site selection", en: "Hot and humid site selection" },
    ],
    applications: [
      "Power transformer cooling-system overhaul",
      "Radiator, fan and pump replacement",
      "ONAN to ONAF cooling upgrade studies",
      "Industrial and utility substation maintenance",
    ],
    customizationOptions: [
      "Radiator bank dimensions and flange arrangement",
      "Fan and pump auxiliary supply configuration",
      "Control-panel and cable-entry interface",
      "Coating and corrosion-protection system",
    ],
    quotationRequirements: [...accessoryQuotationRequirements],
    faq: createAccessoryFaq("Transformer Cooling System Components"),
    relatedProductSlugs: [
      "power-transformer",
      "high-voltage-power-transformer",
      "transformer-maintenance-spares",
    ],
    technicalDocuments: [...accessoryTechnicalDocuments],
    technicalNotes: [
      ...accessoryTechnicalNotes,
      "Cooling components must be sized using transformer heat losses, cooling mode, auxiliary supply and approved radiator or pipework drawings.",
    ],
    detailedSpecTable: {
      heading: "Cooling System Engineering Parameters",
      columns: [
        { key: "parameter", label: "Parameter" },
        { key: "reference", label: "Typical Reference" },
        { key: "confirmation", label: "Confirm for Order" },
      ],
      rows: [
        {
          parameter: "Cooling arrangement",
          reference: "ONAN / ONAF / OFAF radiator, fan, pump and control components",
          confirmation: "Existing cooling mode and planned transformer duty",
        },
        {
          parameter: "Thermal duty",
          reference: "Heat dissipation selected from total losses, ambient temperature and temperature-rise limits",
          confirmation: "Approved thermal calculation and loss data",
        },
        {
          parameter: "Radiator configuration",
          reference: "Panel or bank quantity, center distance, valve and flange arrangement",
          confirmation: "Radiator drawing, pipework and mounting dimensions",
        },
        {
          parameter: "Fan and pump duty",
          reference: "Motor rating, voltage, phase, flow and head are model-specific; 50/60 Hz where AC is used",
          confirmation: "Supply voltage, rotation, flow, head and control sequence",
        },
        {
          parameter: "Control interface",
          reference: "Staged fan / pump control, terminal box and cable entry",
          confirmation: "Temperature signals, control panel and site wiring",
        },
        {
          parameter: "Material and coating",
          reference: "Material and coating selected after insulating-fluid, humidity and corrosion review",
          confirmation: "Oil type, outdoor humidity and coastal exposure",
        },
        {
          parameter: "Noise requirement",
          reference: "Fan and pump acoustic duty reviewed where a site limit applies",
          confirmation: "Substation boundary limit and installation arrangement",
        },
        {
          parameter: "Applicable standard",
          reference: "IEC 60076-2 governs transformer thermal performance; component data is model-specific",
          confirmation: "Fan, pump and radiator datasheets plus project temperature-rise specification",
        },
      ],
      publicationStatus: "published",
      note:
        "Cooling-system components are selected from the approved thermal design and cannot be confirmed from transformer rating alone. The final arrangement follows the loss, heat-run and auxiliary-system requirements.",
      applicability: {
        productSeriesModelBasis: "Transformer radiator, fan, oil-pump and cooling control accessory category",
        applicableStandard: "IEC 60076-2 and applicable project specification",
        windingConductor: "Not applicable",
        lossReferenceTemperature: "Confirmed through transformer loss and cooling calculation",
        tappingRange: "Not applicable",
        vectorGroup: "Not applicable",
        energyEfficiencyBasis: "Cooling duty is reviewed against transformer losses and agreed performance requirements",
        soundMeasurementBasis: "Fan and pump sound limits are confirmed where required by the project",
        dimensionsAndWeight: "Subject to radiator bank dimensions, fan set, pump and interface drawing",
      },
    },
  },
  {
    id: "transformer-conservator-breathers-oil-accessories",
    icon: Droplets,
    title: "Transformer Conservator, Breathers & Oil Accessories",
    titleEn: "Transformer Conservator, Breathers & Oil Accessories",
    seoDescription:
      "Transformer conservator, silica-gel breather, oil level indication, air-cell and oil-accessory components for oil-immersed transformer maintenance and retrofit projects.",
    shortDescription:
      "Conservator, breather, oil-level and oil-preservation accessories for oil-immersed transformers.",
    shortDescriptionEn:
      "Conservator, breather, oil-level and oil-preservation accessories for oil-immersed transformers.",
    fullDescription:
      "Conservator and oil-preservation accessories are selected to control moisture ingress, support oil-level indication and maintain the oil system of an oil-immersed transformer. Breather size, air-cell material, gauge interface, valve and flange dimensions are matched to the existing conservator arrangement.",
    fullDescriptionEn:
      "Conservator and oil-preservation accessories are selected to control moisture ingress, support oil-level indication and maintain the oil system of an oil-immersed transformer. Breather size, air-cell material, gauge interface, valve and flange dimensions are matched to the existing conservator arrangement.",
    standardSizes: ["Silica-gel breather", "Oil level indication", "Air cell and conservator fittings"],
    image: "/images/products/transformer-conservator-breathers-oil-accessories.png",
    cardImage: "/images/products/transformer-conservator-breathers-oil-accessories.png",
    detailImage: "/images/products/transformer-conservator-breathers-oil-accessories.png",
    specs: {
      voltage: "N/A - oil preservation accessory",
      capacity: "Breather, air cell and gauge sized by conservator design",
      frequency: "N/A",
      cooling: "N/A - oil preservation and indication components",
      insulationMedium: "Material selected after insulating-fluid compatibility review",
      tappingRange: "Not applicable",
      standards: "IEC 60076 / IEC 60296 for mineral oil / project specification",
    },
    regionalSpecifications: [
      { label: "Component Scope", value: "Silica-gel breathers, oil level gauges, air cells, valves and conservator fittings" },
      { label: "Breather Selection", value: "Desiccant quantity, connection size and mounting arrangement matched to conservator duty" },
      { label: "Oil Level Indication", value: "Gauge type, flange or thread interface, dial range and contacts by the existing arrangement" },
      { label: "Air Cell Selection", value: "Material, dimensions and oil compatibility confirmed against conservator design" },
      { label: "Valve and Fittings", value: "Thread, flange, gasket and material selected from the approved interface drawing" },
      { label: "Environmental Selection", value: "Humidity, UV exposure, coastal corrosion and outdoor service conditions reviewed" },
      {
        label: "Oil Compatibility",
        value:
          "IEC 60296 specifies mineral insulating oil; component materials and seals are verified against the actual fluid and OEM or utility requirements",
      },
      { label: "Required for Quotation", value: "Conservator drawing, existing item photo, interface dimensions and quantity" },
    ],
    features: [
      { zh: "Moisture-control accessory options", en: "Moisture-control accessory options" },
      { zh: "Oil-level indication matching", en: "Oil-level indication matching" },
      { zh: "Air-cell and conservator interface review", en: "Air-cell and conservator interface review" },
      { zh: "Oil-compatible material selection", en: "Oil-compatible material selection" },
    ],
    applications: [
      "Oil-immersed transformer conservator maintenance",
      "Silica-gel breather replacement",
      "Oil level indication upgrade or retrofit",
      "Moisture-control and oil-system refurbishment",
    ],
    customizationOptions: [
      "Breather capacity, connection and mounting arrangement",
      "Oil level gauge interface and contact arrangement",
      "Air-cell material and conservator dimensions",
      "Valve, flange and gasket material selection",
    ],
    quotationRequirements: [...accessoryQuotationRequirements],
    faq: createAccessoryFaq("Transformer Conservator, Breathers & Oil Accessories"),
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "power-transformer",
      "transformer-maintenance-spares",
    ],
    technicalDocuments: [...accessoryTechnicalDocuments],
    technicalNotes: [
      ...accessoryTechnicalNotes,
      "Oil-preservation accessories are confirmed against the existing conservator volume, interface, insulating-fluid type and local environmental conditions.",
    ],
    detailedSpecTable: {
      heading: "Oil-System Accessory Configuration Parameters",
      columns: [
        { key: "parameter", label: "Parameter" },
        { key: "reference", label: "Typical Reference" },
        { key: "confirmation", label: "Confirm for Order" },
      ],
      rows: [
        {
          parameter: "Breather type",
          reference: "Silica-gel dehydrating breather for conservator and OLTC oil systems",
          confirmation: "Air-breathing duty, connection size and mounting arrangement",
        },
        {
          parameter: "Desiccant capacity",
          reference: "Selected by conservator oil volume, breathing volume and ambient humidity",
          confirmation: "Transformer rating, climate and service interval requirement",
        },
        {
          parameter: "Oil level indication",
          reference: "Gauge dial range, local indication and optional alarm contacts",
          confirmation: "Existing gauge interface, contact logic and required viewing position",
        },
        {
          parameter: "Air cell and conservator",
          reference: "Fluid-compatible air-cell material, conservator volume and dimensions",
          confirmation: "Existing conservator drawing, oil type and internal arrangement",
        },
        {
          parameter: "Fittings and seals",
          reference: "Thread, flange, gasket, valve and mounting hardware",
          confirmation: "Approved interface drawing and material compatibility",
        },
        {
          parameter: "Environmental selection",
          reference: "Outdoor humidity, UV exposure and coastal corrosion consideration",
          confirmation: "Destination climate and installation location",
        },
        {
          parameter: "Oil compatibility",
          reference: "IEC 60296 specifies mineral insulating oil; material compatibility is component-specific",
          confirmation: "Insulating-fluid type, component material data and OEM or utility requirement",
        },
      ],
      publicationStatus: "published",
      note:
        "Breather, gauge and air-cell replacements are selected from the existing conservator design, not by transformer capacity alone. The final item follows the drawing, existing label and site environment.",
      applicability: {
        productSeriesModelBasis: "Oil-immersed transformer conservator and oil-preservation accessory category",
        applicableStandard: "IEC 60076 and applicable project specification",
        windingConductor: "Not applicable",
        lossReferenceTemperature: "Not applicable",
        tappingRange: "Not applicable",
        vectorGroup: "Not applicable",
        energyEfficiencyBasis: "Not applicable; oil-system compatibility and site conditions are reviewed",
        soundMeasurementBasis: "Not applicable",
        dimensionsAndWeight: "Subject to conservator volume, breather size, gauge interface and approved drawing",
      },
    },
  },
  {
    id: "transformer-maintenance-spares",
    icon: Box,
    title: "Transformer Maintenance & Repair Spare Parts",
    titleEn: "Transformer Maintenance & Repair Spare Parts",
    seoDescription:
      "Transformer maintenance and repair spare parts including gaskets, seals, valves, fittings, fasteners and project-matched replacement kits for oil-immersed and dry-type transformers.",
    shortDescription:
      "Gaskets, seals, valves, fittings and repair kits matched to transformer model, drawing and BOM.",
    shortDescriptionEn:
      "Gaskets, seals, valves, fittings and repair kits matched to transformer model, drawing and BOM.",
    fullDescription:
      "Transformer maintenance and repair spare parts support planned servicing, breakdown repair and export spare packages. Material compatibility, thread and flange dimensions, gasket profile and part identification are verified against the transformer model, approved drawing and bill of materials.",
    fullDescriptionEn:
      "Transformer maintenance and repair spare parts support planned servicing, breakdown repair and export spare packages. Material compatibility, thread and flange dimensions, gasket profile and part identification are verified against the transformer model, approved drawing and bill of materials.",
    standardSizes: ["Single replacement item", "Repair kit", "Scheduled maintenance spare package"],
    image: "/images/products/transformer-maintenance-spares.png",
    cardImage: "/images/products/transformer-maintenance-spares.png",
    detailImage: "/images/products/transformer-maintenance-spares.png",
    specs: {
      voltage: "N/A - replacement items by equipment interface",
      capacity: "Single item, repair kit or maintenance package",
      frequency: "N/A",
      cooling: "N/A - preventive maintenance items",
      insulationMedium: "Gasket and seal material selected after insulating-fluid compatibility review",
      tappingRange: "Not applicable",
      standards: "Approved transformer drawing / BOM / project specification",
    },
    regionalSpecifications: [
      { label: "Typical Items", value: "Gaskets, seals, valves, fittings, fasteners, breathers and maintenance hardware" },
      { label: "Supply Format", value: "Single item, repair kit or scheduled maintenance spare package" },
      {
        label: "Material Selection",
        value:
          "Seal, gasket and hardware material selected after insulating-fluid, service-temperature and corrosion review",
      },
      { label: "Mechanical Interface", value: "Thread, flange, gasket profile, stud pattern and dimensions verified to drawing" },
      { label: "Identification", value: "Transformer model, serial number, nameplate, part number and BOM used for matching" },
      { label: "Site Condition", value: "Tropical, coastal, corrosive or outdoor exposure considered for material and packing" },
      { label: "Packing", value: "Labelled and packed by item or maintenance kit as agreed for export handling" },
      { label: "Required for Quotation", value: "Part label or photo, quantity, dimensions, transformer details and delivery need" },
    ],
    features: [
      { zh: "Single item and repair-kit supply", en: "Single item and repair-kit supply" },
      { zh: "Model and drawing verification", en: "Model and drawing verification" },
      { zh: "Oil-compatible material review", en: "Oil-compatible material review" },
      { zh: "Export packing by item list", en: "Export packing by item list" },
    ],
    applications: [
      "Planned transformer maintenance",
      "Emergency repair and replacement needs",
      "Export spare-part packages for utility or industrial sites",
      "Oil-immersed and dry-type transformer service work",
    ],
    customizationOptions: [
      "Single item, repair kit or annual maintenance package",
      "Gasket, seal and valve material selection",
      "Item labelling, kit packing and export documentation",
      "Project-specific inspection or preservation requirements",
    ],
    quotationRequirements: [...accessoryQuotationRequirements],
    faq: createAccessoryFaq("Transformer Maintenance & Repair Spare Parts"),
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "transformer-cooling-system-components",
      "transformer-conservator-breathers-oil-accessories",
    ],
    technicalDocuments: [...accessoryTechnicalDocuments],
    technicalNotes: [
      ...accessoryTechnicalNotes,
      "Maintenance spares are matched by part identity and interface dimensions. A visual photo alone may not be sufficient to confirm compatibility.",
    ],
    detailedSpecTable: {
      heading: "Spare-Part Identification Parameters",
      columns: [
        { key: "parameter", label: "Parameter" },
        { key: "reference", label: "Typical Reference" },
        { key: "confirmation", label: "Confirm for Order" },
      ],
      rows: [
        {
          parameter: "Part identification",
          reference: "Existing part number, label, photo, transformer model and serial number",
          confirmation: "Approved BOM or manufacturer drawing",
        },
        {
          parameter: "Typical spare scope",
          reference: "Gaskets, seals, valves, hardware, terminals, gauges and accessory repair items",
          confirmation: "Required quantity, item list and maintenance task",
        },
        {
          parameter: "Seal and gasket material",
          reference: "Material grade selected from oil type, service temperature and interface design",
          confirmation: "Fluid compatibility, temperature range, gasket profile and approved material requirement",
        },
        {
          parameter: "Mechanical interface",
          reference: "Thread, flange, bolt pattern, gasket profile and mating dimensions",
          confirmation: "Existing part measurement and approved interface drawing",
        },
        {
          parameter: "Supply package",
          reference: "Single replacement item, repair kit or planned-maintenance spare package",
          confirmation: "BOM, quantity and required maintenance interval",
        },
        {
          parameter: "Documentation",
          reference: "Part list, identification photos and dimensional confirmation",
          confirmation: "Destination-country document and packing requirement",
        },
        {
          parameter: "Export packing",
          reference: "Item separation, labeling and moisture-protection package as required",
          confirmation: "Transport mode, destination and customer packing instruction",
        },
      ],
      publicationStatus: "published",
      note:
        "Maintenance spare parts must be identified by the existing part and transformer interface. The final bill of materials, material grade and item quantities are agreed before production or export packing.",
      applicability: {
        productSeriesModelBasis: "Transformer maintenance and repair spare-part category",
        applicableStandard: "Approved transformer drawing, BOM and applicable project specification",
        windingConductor: "Not applicable",
        lossReferenceTemperature: "Not applicable",
        tappingRange: "Not applicable",
        vectorGroup: "Not applicable",
        energyEfficiencyBasis: "Not applicable; part compatibility and material selection are reviewed",
        soundMeasurementBasis: "Not applicable",
        dimensionsAndWeight: "Subject to selected item, kit contents and approved interface dimensions",
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

const accessoryQuickSpecificationLabels: Record<string, string[]> = {
  "transformer-bushings-connectors": [
    "Equipment Voltage Class", "Current Rating", "Insulation Type", "Mechanical Interface",
  ],
  "transformer-protection-monitoring": [
    "Typical Devices", "Signal Function", "Control Interface", "Required for Quotation",
  ],
  "transformer-tap-changers-controls": [
    "Tap Changer Type", "Voltage Regulation", "Motor Drive", "Mechanical Interface",
  ],
  "transformer-cooling-system-components": [
    "Component Scope", "Cooling Arrangement", "Thermal Duty", "Auxiliary Supply",
  ],
  "transformer-conservator-breathers-oil-accessories": [
    "Component Scope", "Breather Selection", "Oil Level Indication", "Oil Compatibility",
  ],
  "transformer-maintenance-spares": [
    "Typical Items", "Supply Format", "Material Selection", "Mechanical Interface",
  ],
};

export function getQuickSpecifications(product: Pick<Product, "id" | "specs" | "regionalSpecifications">): QuickSpecification[] {
  const accessoryLabels = accessoryQuickSpecificationLabels[product.id];
  if (accessoryLabels) {
    return accessoryLabels.map((label) => {
      const specification = product.regionalSpecifications.find((item) => item.label === label);
      if (!specification) throw new Error(`Missing quick specification ${label} for ${product.id}`);
      return specification;
    });
  }

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
