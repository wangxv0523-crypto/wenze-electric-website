export type NewsCategory = "Factory Update" | "Product Insight" | "Project Highlight";

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
    slug: "100mw-200mwh-battery-energy-storage-station",
    title: "100 MW / 200 MWh Battery Energy Storage Station",
    excerpt:
      "Aerial views of a large-scale 100 MW / 200 MWh battery energy storage station featuring containerized energy storage units, power conversion equipment and grid interconnection facilities. The project demonstrates the application of utility-scale energy storage in grid balancing, peak-load management and renewable energy integration.",
    publishedAt: "2026-06-21",
    modifiedAt: "2026-06-21",
    coverImage: "/images/news/100mw-200mwh-battery-energy-storage-station.jpg",
    coverAlt: "Aerial view of the 100 MW / 200 MWh battery energy storage station",
    coverCaption:
      "Aerial view of the 100 MW / 200 MWh battery energy storage station, showing the containerized storage units, grid interconnection area, supporting electrical facilities and overall site arrangement.",
    category: "Project Highlight",
    content: [
      {
        type: "paragraph",
        text: "This utility-scale battery energy storage station has a rated power of 100 MW and an energy storage capacity of 200 MWh, corresponding to a nominal two-hour storage duration at rated output.",
      },
      {
        type: "paragraph",
        text: "The site integrates containerized battery energy storage units, power conversion and control equipment, supporting electrical systems and grid interconnection facilities within a centralized station layout.",
      },
      {
        type: "heading",
        text: "Project Overview",
      },
      {
        type: "paragraph",
        text: "Large-scale battery energy storage systems are increasingly used to improve the flexibility and stability of modern power networks.",
      },
      {
        type: "paragraph",
        text: "By storing electricity during periods of lower demand and releasing it when additional power is required, a 100 MW / 200 MWh energy storage station can support applications such as peak shaving, load shifting, renewable energy integration and grid frequency regulation.",
      },
      {
        type: "paragraph",
        text: "The aerial photograph provides a clear overview of the station layout, including the organized battery container arrays, electrical equipment areas, internal access roads and grid connection infrastructure.",
      },
      {
        type: "heading",
        text: "Key Project Information",
      },
      {
        type: "list",
        items: [
          "Rated Power: 100 MW",
          "Energy Storage Capacity: 200 MWh",
          "Nominal Storage Duration: 2 hours",
          "System Type: Utility-scale battery energy storage system",
          "Installation Format: Containerized energy storage units",
          "Typical Applications: Grid balancing, peak shaving, load shifting and renewable energy integration",
        ],
      },
      {
        type: "heading",
        text: "Site Layout",
      },
      {
        type: "paragraph",
        text: "The energy storage units are arranged in multiple organized rows to support equipment access, operation and maintenance.",
      },
      {
        type: "paragraph",
        text: "The central electrical area includes grid interconnection and power transformation equipment, while dedicated internal roads provide access between the battery storage zones and supporting facilities.",
      },
      {
        type: "paragraph",
        text: "This modular arrangement allows the station to integrate a large number of energy storage units within a clearly divided site configuration.",
      },
      {
        type: "heading",
        text: "Role of Energy Storage in the Power System",
      },
      {
        type: "paragraph",
        text: "A battery energy storage station can absorb excess electrical energy when generation exceeds demand and discharge stored energy when demand increases.",
      },
      {
        type: "paragraph",
        text: "For renewable energy projects, energy storage can help reduce the impact of fluctuations in solar and wind power generation. It can also provide additional operational flexibility for industrial power systems, utility networks and regional power infrastructure.",
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
    cardButtonLabel: "View Project",
    relatedSectionTitle: "Related Solutions",
    relatedSectionDescription:
      "Explore transformer and electrical equipment solutions for battery energy storage, renewable energy and utility power projects.",
    relatedSectionButtonLabel: "View Transformer Solutions",
    inquiryButtonLabel: "Discuss Your Project",
    seoTitle: "100 MW / 200 MWh Battery Energy Storage Station Project | Wenze Electric",
    seoDescription:
      "Explore aerial views and the site layout of a 100 MW / 200 MWh battery energy storage station designed to support grid stability and energy management.",
  },
  {
    slug: "100mw-200mwh-battery-energy-storage-station-video",
    title: "100 MW / 200 MWh Battery Energy Storage Station Video",
    excerpt:
      "Aerial video presenting the overall layout of a utility-scale battery energy storage station, including containerized storage units, electrical equipment areas, internal roads and grid interconnection facilities.",
    publishedAt: "2026-06-21",
    modifiedAt: "2026-06-21",
    coverImage: "/images/news/100mw-200mwh-battery-energy-storage-station.jpg",
    coverAlt: "Aerial view of the battery energy storage station featured in the project video",
    category: "Project Highlight",
    content: [
      {
        type: "heading",
        text: "Project Video",
      },
      {
        type: "paragraph",
        text: "This aerial video provides an overview of the battery energy storage station and its centralized site arrangement.",
      },
      {
        type: "video",
        videoUrl: "/videos/news/100mw-200mwh-battery-energy-storage-station.mp4",
        poster: "/images/news/100mw-200mwh-battery-energy-storage-station.jpg",
        title: "100 MW / 200 MWh Battery Energy Storage Station Aerial View",
        description:
          "Aerial video showing the containerized storage units, electrical equipment areas and grid interconnection facilities at the battery energy storage station.",
        transcript:
          "The aerial footage presents the overall station arrangement, including rows of containerized battery energy storage units, supporting electrical equipment, internal access roads and the grid interconnection area.",
        uploadDate: "2026-06-21",
        contentUrl: "/videos/news/100mw-200mwh-battery-energy-storage-station.mp4",
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
    cardButtonLabel: "Watch Video",
    relatedSectionTitle: "Related Solutions",
    relatedSectionDescription:
      "Explore transformer and electrical equipment solutions for battery energy storage, renewable energy and utility power projects.",
    relatedSectionButtonLabel: "View Transformer Solutions",
    inquiryButtonLabel: "Discuss Your Project",
    seoTitle: "Battery Energy Storage Station Aerial Video | Wenze Electric",
    seoDescription:
      "Watch an aerial overview of a utility-scale battery energy storage station and its containerized equipment layout and grid interconnection facilities.",
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
