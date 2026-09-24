export type NewsCategory = "Factory Update" | "Product Insight" | "Project Reference";

export type NewsContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    }
  | {
      type: "video";
      videoUrl: string;
      poster: string;
      title: string;
      description?: string;
      transcript?: string;
      uploadDate?: string;
      contentUrl?: string;
      embedUrl?: string;
      duration?: string;
    };

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  modifiedAt?: string;
  coverImage: string;
  coverAlt: string;
  coverCaption?: string;
  category: NewsCategory;
  content: NewsContentBlock[];
  relatedProductSlugs?: string[];
  cardButtonLabel?: string;
  relatedSectionTitle?: string;
  relatedSectionDescription?: string;
  relatedSectionButtonLabel?: string;
  inquiryButtonLabel?: string;
  seoTitle?: string;
  seoDescription?: string;
  isPlaceholder?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    slug: "transformer-stock-available-fast-export-delivery",
    title: "Transformer Stock Available for Fast Export Delivery",
    excerpt:
      "Wenze Electric maintains transformer stock and active production capacity for oil-immersed, dry-type and compact substation orders, supporting faster export preparation and delivery.",
    publishedAt: "2026-06-23",
    modifiedAt: "2026-07-14",
    coverImage: "/images/news/overtime-production-export-transformer-shipment-preparation.jpg",
    coverAlt:
      "Transformer stock and production capacity inside the Wenze Electric factory",
    coverCaption:
      "Transformer inventory, components and organized production areas for export order preparation.",
    category: "Factory Update",
    content: [
      {
        type: "paragraph",
        text: "Wenze Electric maintains available transformer stock together with active production capacity for standard and project-specific export orders.",
      },
      {
        type: "paragraph",
        text: "The factory images show finished transformer units, dry-type transformer components, winding materials, compact substation enclosure sections and organized work areas prepared to support efficient inspection, packing and delivery coordination.",
      },
      {
        type: "paragraph",
        text: "Stock availability varies by transformer type, capacity, voltage ratio and quantity. Customers should confirm the current model inventory and delivery schedule against the approved technical specification before placing an order.",
      },
      {
        type: "heading",
        text: "Transformer Stock and Supply Readiness",
      },
      {
        type: "paragraph",
        text: "Available inventory is supported by organized material storage, assembly lines and routine production scheduling. This combination helps reduce preparation time for common oil-immersed distribution transformers, dry-type transformers and compact substations.",
      },
      {
        type: "heading",
        text: "Transformer Products Available for Export Supply",
      },
      {
        type: "list",
        items: [
          "Oil-immersed distribution transformers for utility, commercial and industrial networks",
          "Dry-type transformers for indoor substations, buildings and industrial facilities",
          "Compact substations for integrated medium-voltage distribution projects",
          "Transformer winding materials, accessories and production tooling",
          "Organized inspection, packing and export delivery preparation areas",
        ],
      },
      {
        type: "heading",
        text: "Transformer Inventory and Factory Gallery",
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-01.jpg",
        alt: "Oil-immersed transformer top cover and bushings during workshop preparation",
        caption: "Oil-immersed transformer unit prepared in the workshop before shipment coordination.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-02.jpg",
        alt: "Finished transformer units arranged along a workshop aisle",
        caption: "Finished transformer units arranged in the workshop production aisle.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-03.jpg",
        alt: "Rows of oil-immersed transformer units prepared in the workshop",
        caption: "Oil-immersed transformer units organized for final preparation.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-04.jpg",
        alt: "Workshop staff working near transformer assembly equipment",
        caption: "Assembly work area supporting transformer stock and production readiness.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-05.jpg",
        alt: "Compact substation enclosure section on the workshop floor",
        caption: "Compact substation enclosure section prepared in the workshop.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-06.jpg",
        alt: "Oil-immersed transformer with radiator fins and top bushings",
        caption: "Oil-immersed transformer unit shown during workshop preparation.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-07.jpg",
        alt: "Compact substation enclosure sections arranged in the workshop",
        caption: "Compact substation enclosure sections arranged for production workflow.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-08.jpg",
        alt: "Transformer tank components and metal structures in the production area",
        caption: "Transformer tank components and metal structures in the production area.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-09.jpg",
        alt: "Transformer winding and assembly materials in the workshop",
        caption: "Winding and assembly materials arranged in the workshop.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-10.jpg",
        alt: "Workshop production lane with winding equipment and materials",
        caption: "Production lane with winding equipment and materials.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-11.jpg",
        alt: "Transformer production workshop with equipment and organized work zones",
        caption: "Transformer production workshop showing organized work zones.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-12.jpg",
        alt: "Wide transformer workshop view during production preparation",
        caption: "Wide workshop view during production and shipment preparation.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-13.jpg",
        alt: "Dry-type transformer coil components arranged in the workshop",
        caption: "Dry-type transformer coil components arranged for production.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-14.jpg",
        alt: "Cable reels and winding materials prepared in the transformer workshop",
        caption: "Cable reels and winding materials prepared in the workshop.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-15.jpg",
        alt: "Workshop material storage area with coils and production components",
        caption: "Material storage area with coils and production components.",
        width: 1440,
        height: 1920,
      },
      {
        type: "image",
        src: "/images/news/overtime-production-export-transformer-shipment-preparation/factory-overtime-shipment-16.jpg",
        alt: "Transformer stock and production workshop overview",
        caption: "Transformer workshop overview showing inventory and active production areas.",
        width: 1440,
        height: 1920,
      },
      {
        type: "heading",
        text: "Confirm Current Stock and Delivery Time",
      },
      {
        type: "paragraph",
        text: "Before export delivery, transformer products and related electrical equipment are checked against the approved technical documents, packing requirements and delivery plan. Accessories, labels, packing marks and documentation are coordinated according to the contract scope.",
      },
      {
        type: "paragraph",
        text: "To check current transformer stock and lead time, provide the required product type, rated capacity, voltage ratio, frequency, quantity, destination country, applicable standard and any special technical requirements.",
      },
    ],
    relatedProductSlugs: [
      "oil-immersed-distribution-transformer",
      "dry-type-transformer",
      "compact-substation",
    ],
    cardButtonLabel: "Check Transformer Stock",
    relatedSectionTitle: "Related Transformer Products",
    relatedSectionDescription:
      "Review oil-immersed, dry-type and compact substation solutions available for export power distribution projects.",
    relatedSectionButtonLabel: "View Transformer Products",
    inquiryButtonLabel: "Check Stock and Delivery Time",
    seoTitle: "Transformer Stock for Fast Export Delivery | Wenze Electric",
    seoDescription:
      "Check Wenze Electric transformer stock and production availability for oil-immersed, dry-type and compact substation orders with export delivery support.",
  },
  {
    slug: "nigeria-100mw-200mwh-bess-project-completed",
    title: "Nigeria 100 MW / 200 MWh Battery Energy Storage Project Completed",
    excerpt:
      "The completed 100 MW / 200 MWh battery energy storage project in Nigeria integrates containerized BESS equipment, power conversion systems and grid interconnection facilities.",
    publishedAt: "2026-06-21",
    modifiedAt: "2026-07-14",
    coverImage: "/images/news/100mw-200mwh-battery-energy-storage-station.jpg",
    coverAlt: "Completed 100 MW 200 MWh battery energy storage project in Nigeria",
    coverCaption:
      "Aerial view of the completed Nigeria battery energy storage project, including containerized BESS units and grid interconnection facilities.",
    category: "Project Reference",
    content: [
      {
        type: "paragraph",
        text: "This article presents a project reference for technical discussion. It does not specify Wenze Electric's role in equipment supply, construction or ownership of this project.",
      },
      {
        type: "paragraph",
        text: "The 100 MW / 200 MWh battery energy storage project in Nigeria has reached completion, marking an important stage in the delivery of utility-scale energy storage and supporting power infrastructure.",
      },
      {
        type: "paragraph",
        text: "The completed site integrates containerized battery energy storage units, power conversion and control equipment, supporting electrical systems, power transformation equipment and grid interconnection facilities within a centralized station layout.",
      },
      {
        type: "heading",
        text: "Nigeria Battery Energy Storage Project Overview",
      },
      {
        type: "paragraph",
        text: "Utility-scale battery energy storage systems can improve power network flexibility, support peak-load management and help integrate variable renewable generation.",
      },
      {
        type: "paragraph",
        text: "With 100 MW of rated power and 200 MWh of storage capacity, the Nigeria BESS project provides a nominal two-hour storage duration at rated output and can support peak shaving, load shifting, renewable energy integration and grid balancing.",
      },
      {
        type: "paragraph",
        text: "The aerial project image shows the completed station layout, including organized battery container arrays, electrical equipment areas, internal access roads and grid connection infrastructure.",
      },
      {
        type: "heading",
        text: "Nigeria BESS Project Information",
      },
      {
        type: "list",
        items: [
          "Rated Power: 100 MW",
          "Energy Storage Capacity: 200 MWh",
          "Nominal Storage Duration: 2 hours",
          "System Type: Utility-scale battery energy storage system",
          "Installation Format: Containerized energy storage units",
          "Project Location: Nigeria",
          "Project Status: Completed",
          "Typical Applications: Grid balancing, peak shaving, load shifting and renewable energy integration",
        ],
      },
      {
        type: "heading",
        text: "Completed Site and Grid Connection",
      },
      {
        type: "paragraph",
        text: "The containerized energy storage units are arranged in organized rows to support equipment access, operation and maintenance after project completion.",
      },
      {
        type: "paragraph",
        text: "The central electrical area includes grid interconnection and power transformation equipment, while dedicated internal roads provide access between the battery storage zones and supporting facilities.",
      },
      {
        type: "paragraph",
        text: "This modular arrangement allows the Nigeria energy storage station to integrate a large number of BESS units within a clearly divided site configuration.",
      },
      {
        type: "heading",
        text: "Role of Energy Storage in Nigeria's Power System",
      },
      {
        type: "paragraph",
        text: "A battery energy storage station can absorb electrical energy when supply exceeds demand and discharge stored energy when additional power is required.",
      },
      {
        type: "paragraph",
        text: "For Nigeria power projects, energy storage can help manage fluctuations in solar and wind generation while providing additional operational flexibility for utility networks, industrial power systems and regional infrastructure.",
      },
      {
        type: "paragraph",
        text: "Actual operating functions and performance depend on the final system design, control strategy, grid requirements and project configuration.",
      },
    ],
    relatedProductSlugs: [
      "power-transformer",
      "high-voltage-power-transformer",
      "compact-substation",
    ],
    cardButtonLabel: "View Nigeria Project",
    relatedSectionTitle: "Related Power Solutions",
    relatedSectionDescription:
      "Explore transformer and compact substation solutions for battery energy storage, renewable energy and utility power projects.",
    relatedSectionButtonLabel: "View Transformer Solutions",
    inquiryButtonLabel: "Discuss a Nigeria Power Project",
    seoTitle: "Nigeria 100 MW / 200 MWh BESS Project Completed | Wenze Electric",
    seoDescription:
      "See the completed 100 MW / 200 MWh battery energy storage project in Nigeria, including containerized BESS equipment and grid interconnection facilities.",
  },
  {
    slug: "220kv-substation-completion-120mva-transformer-energization-video",
    title: "220 kV Substation Completion: 120 MVA Transformer Energization Video",
    excerpt:
      "Watch the completed 220 kV step-up substation begin operation as its 120 MVA main transformer is successfully energized alongside the installed high-voltage equipment.",
    publishedAt: "2026-06-21",
    modifiedAt: "2026-07-14",
    coverImage: "/images/news/220kv-step-up-substation-120mva-main-transformer-energization.jpg",
    coverAlt: "Completed 220 kV step-up substation with 120 MVA main transformer",
    coverCaption:
      "Completed 220 kV step-up substation during startup and 120 MVA main transformer energization.",
    category: "Project Reference",
    content: [
      {
        type: "paragraph",
        text: "This article presents project footage as a technical reference. It does not specify Wenze Electric's role in equipment supply, construction or ownership of this substation.",
      },
      {
        type: "heading",
        text: "Substation Completion and Startup Video",
      },
      {
        type: "paragraph",
        text: "This project video records the completed 220 kV step-up substation entering the startup stage as its installed 120 MVA main transformer receives power and is energized.",
      },
      {
        type: "list",
        items: [
          "Substation Voltage Level: 220 kV",
          "Main Transformer Capacity: 120 MVA",
          "Project Status: Substation completed",
          "Startup Stage: Main transformer energization",
          "Equipment Shown: Main transformer and high-voltage substation equipment",
        ],
      },
      {
        type: "video",
        videoUrl: "/videos/news/220kv-step-up-substation-120mva-main-transformer-energization.mp4",
        poster: "/images/news/220kv-step-up-substation-120mva-main-transformer-energization.jpg",
        title: "220 kV Substation Completion and 120 MVA Transformer Energization",
        description:
          "Video of a completed 220 kV step-up substation starting operation with successful energization of its 120 MVA main transformer.",
        transcript:
          "The footage shows the completed 220 kV step-up substation, its installed 120 MVA main transformer and surrounding high-voltage equipment during the startup and transformer energization process.",
        uploadDate: "2026-06-21",
        contentUrl:
          "/videos/news/220kv-step-up-substation-120mva-main-transformer-energization.mp4",
      },
      {
        type: "heading",
        text: "Commissioning and Energization",
      },
      {
        type: "paragraph",
        text: "Main transformer energization is a key milestone after substation installation and pre-commissioning checks. The operating sequence, protection settings, electrical tests and acceptance requirements are completed according to the approved project procedures and grid requirements.",
      },
      {
        type: "heading",
        text: "Power Transformer and Substation Applications",
      },
      {
        type: "paragraph",
        text: "Large power transformers and high-voltage substations support utility grids, renewable energy step-up stations, industrial power systems and regional transmission projects. Final equipment ratings and protection requirements are engineered for the destination grid and approved technical specification.",
      },
    ],
    relatedProductSlugs: ["high-voltage-power-transformer", "power-transformer"],
    cardButtonLabel: "Watch Startup Video",
    relatedSectionTitle: "Related Transformer Solutions",
    relatedSectionDescription:
      "Explore power transformer solutions for utility substations, step-up stations and high-voltage power projects.",
    relatedSectionButtonLabel: "View Transformer Solutions",
    inquiryButtonLabel: "Discuss a Substation Project",
    seoTitle: "220 kV Substation Completion & Transformer Energization Video | Wenze Electric",
    seoDescription:
      "Watch a completed 220 kV step-up substation start operation with successful energization of its 120 MVA main transformer and high-voltage equipment.",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

export function getNewsByDate(): NewsItem[] {
  return [...newsItems].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function formatNewsDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function newsHasVideo(item: NewsItem): boolean {
  return item.content.some((block) => block.type === "video");
}
