import type { Project } from "@/types";
import { withBasePath } from "@/lib/paths";

const projectList: Project[] = [
  {
    id: "havanna4u",
    title: "HAVanna4U",
    description:
      "WordPress site for a Cuba tour guide — authentic trips, local experiences, and bookings in multiple languages.",
    longDescription:
      "A WordPress site built with WPBakery, PHP and a child theme to present a tour guide’s services: optional tours, island itineraries, lodging, transfers, and reservations — focused on conversion and a clear service catalog.",
    url: "https://cuba4u.pl/",
    image: "/projects/havanna4u.svg",
    tech: ["WordPress", "WPBakery", "PHP", "Child Theme", "CSS"],
    featured: true,
    year: "2025",
    category: "Travel",
  },
  {
    id: "miyako-usa",
    title: "Miyako USA",
    description:
      "Brand and commerce experience for Miyako USA with refined visuals and solid CMS foundations.",
    longDescription:
      "A modern WordPress build focused on brand storytelling, product clarity, and responsive performance across devices.",
    url: "https://miyakousa.com",
    image: "/projects/miyako-usa.svg",
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
    featured: true,
    year: "2023",
    category: "Brand / Commerce",
  },
  {
    id: "workers-bid",
    title: "Workers Bid",
    description:
      "Marketplace platform connecting workers and project owners with bidding workflows.",
    longDescription:
      "A full-stack bidding marketplace experience featuring role-based flows, proposal management, and a UI designed to keep negotiation friction low.",
    url: "https://workersbid.com",
    github: "https://github.com/Mauro-Molina",
    image: "/projects/workers-bid.svg",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs"],
    featured: true,
    year: "2024",
    category: "SaaS / Marketplace",
  },
  {
    id: "luis-havana-tours",
    title: "Luis Havana Tours",
    description:
      "Tourism website designed to convert visitors into booked experiences across Havana.",
    longDescription:
      "A conversion-oriented travel site with immersive storytelling, itinerary highlights, and clear CTAs for booking tours and experiences.",
    url: "https://luishavanatours.com",
    image: "/projects/luis-havana.svg",
    tech: ["WordPress", "PHP", "JavaScript", "SEO", "CSS"],
    featured: true,
    year: "2023",
    category: "Travel",
  },
  {
    id: "kavana-multitienda",
    title: "Kavana Multitienda",
    description:
      "Multi-category store experience built for browsing speed and catalog clarity.",
    longDescription:
      "An online multistore experience with structured product categories, mobile-first UX, and a stack optimized for content updates and sales growth.",
    url: "https://kavana.store",
    image: "/projects/kavana.svg",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
    featured: true,
    year: "2023",
    category: "E-commerce",
  },
  {
    id: "ingenius-cuba",
    title: "Ingenius Cuba",
    description:
      "Digital presence for Ingenius Cuba highlighting services, talent, and modern tech capabilities.",
    longDescription:
      "A corporate web experience that communicates technical credibility through clean layout systems, strong typography, and content structured for lead generation.",
    url: "https://ingeniuscuba.com",
    image: "/projects/ingenius.svg",
    tech: ["WordPress", "PHP", "JavaScript", "CSS", "SEO"],
    featured: true,
    year: "2022",
    category: "Corporate",
  },
  {
    id: "voyz-usa",
    title: "Voyz USA",
    description:
      "Premium voice and communication platform experience engineered for conversion and clarity.",
    longDescription:
      "A polished marketing and product web experience for Voyz USA, combining modern UI patterns with a performance-focused WordPress architecture and custom interactions.",
    url: "https://voyzusa.com",
    image: "/projects/voyz-usa.svg",
    tech: ["WordPress", "PHP", "JavaScript", "CSS", "SEO"],
    featured: true,
    year: "2024",
    category: "Product / Marketing",
  },
  {
    id: "audio-electronic-warehouse",
    title: "AudioElectronicWarehouse",
    description:
      "E-commerce storefront for audio equipment with a clean catalog experience and strong product discovery.",
    longDescription:
      "A commerce-ready site built to showcase audio products with clear navigation, responsive product presentation, and a checkout-friendly UX tailored for high-intent buyers.",
    url: "https://audioelectronicwarehouse.com",
    image: "/projects/audio-electronic.svg",
    tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "MySQL"],
    featured: true,
    year: "2024",
    category: "E-commerce",
  },
  {
    id: "sainz-music",
    title: "Sainz Music",
    description:
      "WordPress guitar catalog for Sainz — product browsing for instruments and accessories designed in Spain.",
    longDescription:
      "A WordPress catalog laid out with Gutenberg to showcase guitars, drum kits, repair kits and extras with a clear product-first presentation.",
    url: "https://sainzmusic.com/",
    image: "/projects/sainz-music.svg",
    tech: ["WordPress", "Gutenberg", "PHP", "CSS"],
    featured: true,
    year: "2022",
    category: "Catalog",
  },
  {
    id: "siescribo",
    title: "SIESCRIBO",
    description:
      "Literary social network and bookstore where writers publish work and readers buy books.",
    longDescription:
      "A WordPress platform with a custom template and PHP, plus WooCommerce, built as a community for writers and readers: publish books, articles and poetry, interact, and sell downloads.",
    url: "https://siescribo.com/",
    image: "/projects/siescribo.svg",
    tech: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
    featured: true,
    year: "2024",
    category: "Social / Commerce",
  },
  {
    id: "novaterr",
    title: "Novaterr",
    description:
      "Corporate WordPress site for Novaterr Solutions, with an internal accounting plugin for the company.",
    longDescription:
      "WordPress with a PHP child theme for the public site, plus a custom plugin that runs the company’s internal accounting as a private system.",
    url: "http://novaterr.com/",
    image: "/projects/novaterr.svg",
    tech: ["WordPress", "PHP", "Child Theme", "Custom Plugin"],
    featured: true,
    year: "2022",
    category: "Corporate",
  },
  {
    id: "cubaemprende",
    title: "CubaEmprende",
    description:
      "Site for a Cuban entrepreneurship program — services, training, events and blog.",
    longDescription:
      "Built in 2026 from scratch on an Astra child theme, with a custom design for CubaEmprende: accompaniment, courses, advisory and community for entrepreneurs in Cuba.",
    url: "https://proyectocubaemprende.org/",
    image: "/projects/cubaemprende.svg",
    tech: ["WordPress", "Astra", "Child Theme", "PHP"],
    featured: true,
    year: "2026",
    category: "Non-profit",
  },
  {
    id: "ingenius-software",
    title: "Ingenius Software",
    description:
      "Software factory in Havana showing services, talent and case studies to the world.",
    longDescription:
      "WordPress site created from scratch with Astra child themes to present Ingenius Software: staff augmentation, on-demand development and project delivery for international clients.",
    url: "https://ingeniusoftware.com/",
    image: "/projects/ingenius-software.svg",
    tech: ["WordPress", "Astra", "Child Theme", "PHP"],
    featured: true,
    year: "2025",
    category: "Corporate",
  },
  {
    id: "iglesia-cubana",
    title: "Conferencia de Obispos Católicos de Cuba",
    description:
      "News and articles site for the Cuban Catholic bishops’ conference.",
    longDescription:
      "WordPress project with a child theme for internal features and an Elementor-built design for national news, commissions, podcasts and pastoral content.",
    url: "https://iglesiacubana.org/",
    image: "/projects/iglesia-cubana.svg",
    tech: ["WordPress", "Elementor", "Child Theme", "PHP"],
    featured: true,
    year: "2025",
    category: "Non-profit / News",
  },
  {
    id: "caritas-cuba",
    title: "Cáritas Cuba",
    description:
      "WordPress site for Cáritas Cuba — blog articles and church social work content.",
    longDescription:
      "A WordPress + Elementor site for the Catholic Church’s Cáritas Cuba, focused on publishing articles and organizational information.",
    url: "http://caritascuba.org/",
    image: "/projects/caritas-cuba.svg",
    tech: ["WordPress", "Elementor", "PHP"],
    featured: true,
    year: "2024",
    category: "Non-profit",
  },
  {
    id: "filexbiz",
    title: "FilexBiz",
    description:
      "Laravel platform for lawyers: service requests with AI chat support.",
    longDescription:
      "A Laravel system for law firms to manage service petitions, with AI-powered support chat and related internal tooling.",
    url: "https://filexbiz.com/",
    image: "/projects/filexbiz.svg",
    tech: ["Laravel", "PHP", "AI", "REST APIs"],
    featured: true,
    year: "2025",
    category: "SaaS",
  },
  {
    id: "academy-usafile",
    title: "Academy",
    description:
      "Internal study academy — I built the Python API that converts videos to optimized HLS.",
    longDescription:
      "Internal learning platform. The frontend was created with Lovable; I developed the Python API that takes videos in any format and transcodes them to HLS for more efficient playback.",
    url: "https://academy.usafile.app/",
    image: "/projects/academy-usafile.svg",
    tech: ["Python", "HLS", "API", "FFmpeg"],
    featured: true,
    year: "2025",
    category: "Internal / EdTech",
  },
  {
    id: "tiodomin",
    title: "Tiodomin",
    description:
      "Online appliance store — I collaborated on design, checkout points, and promoter systems.",
    longDescription:
      "Laravel + Vue e-commerce. I joined as a collaborator on specific work: design updates, point-of-sale processing at checkout, and promoter systems for users making purchases.",
    url: "https://tiodomin.com/",
    image: "/projects/tiodomin.svg",
    tech: ["Laravel", "Vue", "PHP", "JavaScript"],
    featured: true,
    year: "2023",
    category: "E-commerce",
  },
  {
    id: "home-deli",
    title: "Home Deli",
    description:
      "Laravel store with IP geolocation analytics — I collaborated, not as lead developer.",
    longDescription:
      "Laravel e-commerce for Home Deli Mercado. The team built the storefront and an internal analytics system that geolocates customers by IP. I contributed as a collaborator, not as the principal developer.",
    url: "https://homedelimercado.com/",
    image: "/projects/home-deli.svg",
    tech: ["Laravel", "PHP", "Analytics", "Geolocation"],
    featured: true,
    year: "2023",
    category: "E-commerce",
  },
  {
    id: "jessica-dannenberg",
    title: "Jessica Dannenberg",
    description:
      "Interactive landing for a clinical psychologist in Madrid offering therapy services.",
    longDescription:
      "A clean, interactive WordPress + Elementor landing page for psychologist Jessica Dannenberg: therapies, services, FAQ and appointment booking.",
    url: "https://psico.danngos.tech/",
    image: "/projects/jessica-dannenberg.svg",
    tech: ["WordPress", "Elementor", "PHP"],
    featured: true,
    year: "2025",
    category: "Landing",
  },
  {
    id: "feur-pro",
    title: "FEUR PRO",
    description:
      "WordPress product catalog for professional speakers, mixers and audio equipment.",
    longDescription:
      "A Gutenberg-built WordPress catalog for FEUR PRO, presenting line arrays, speakers, amplifiers and mixers for concerts, worship and events.",
    url: "https://feurpro.com/",
    image: "/projects/feur-pro.svg",
    tech: ["WordPress", "Gutenberg", "PHP", "CSS"],
    featured: true,
    year: "2022",
    category: "Catalog",
  },
  {
    id: "alter-design",
    title: "Alter Design",
    description:
      "WordPress site for an interior designer — made-to-measure furniture and spatial storytelling.",
    longDescription:
      "I designed and developed the full WordPress site with Gutenberg for Alter Design Group, an interior designer’s brand: custom furniture collections, services, and a visual catalog built to present spaces as finished pieces.",
    url: "https://alterdesigngroup.com/",
    image: "/projects/alter-design.svg",
    tech: ["WordPress", "Gutenberg", "PHP", "CSS"],
    featured: true,
    year: "2026",
    category: "Interior Design",
  },
  {
    id: "chalet-mille-isles",
    title: "Chalet Mille-Isles",
    description:
      "WordPress site for a Laurentides chalet with an external booking system.",
    longDescription:
      "A WordPress build with a custom theme from scratch for Chalet Mille-Isles. The public site covers the property, gallery, amenities and contact; reservations run on an external booking system wired into the experience.",
    url: "https://chaletmilleisles.com/en/home/",
    image: "/projects/chalet-mille-isles.svg",
    tech: ["WordPress", "Custom Theme", "PHP", "CSS"],
    featured: true,
    year: "2024",
    category: "Hospitality",
  },
  {
    id: "e-nova",
    title: "e-nova",
    description:
      "WordPress catalog for electric bikes and scooters — designed and developed by me.",
    longDescription:
      "A WordPress catalog I designed and programmed for e-nova, presenting electric bikes, scooters, cargo vehicles and accessories with a clear product structure and a sustainability-focused brand story.",
    url: "https://e-nova.ca/",
    image: "/projects/e-nova.svg",
    tech: ["WordPress", "PHP", "CSS", "JavaScript"],
    featured: true,
    year: "2024",
    category: "Catalog",
  },
  {
    id: "dr-martinez",
    title: "Dr. Martínez",
    description:
      "Hair-transplant site for a Spanish doctor — custom WordPress theme with Bootstrap.",
    longDescription:
      "I designed and programmed a custom WordPress theme from scratch with Bootstrap for Dr. Manuel Martínez, a hair-transplant specialist in Madrid: services, results, testimonials, and conversion-focused booking flows.",
    url: "https://drmartinez.es/",
    image: "/projects/dr-martinez.svg",
    tech: ["WordPress", "Bootstrap", "Custom Theme", "PHP"],
    featured: true,
    year: "2026",
    category: "Healthcare",
  },
  {
    id: "hotel-le-rivage",
    title: "Hôtel Le Rivage",
    description:
      "WordPress site built from scratch with Gutenberg from a design the client provided.",
    longDescription:
      "A Gutenberg WordPress build from scratch for Hôtel Le Rivage in Rosemère. The client supplied a reference design from another site; I implemented rooms, SPA, corporate pages and booking-oriented content in WordPress.",
    url: "https://hotellerivage.com/en/home/",
    image: "/projects/hotel-le-rivage.svg",
    tech: ["WordPress", "Gutenberg", "PHP", "CSS"],
    featured: true,
    year: "2026",
    category: "Hospitality",
  },
  {
    id: "inder",
    title: "INDER",
    description:
      "News site for Cuba’s national sports institute — designed and built from scratch.",
    longDescription:
      "I designed and programmed the WordPress news site for INDER (Instituto Nacional de Deportes, Educación Física y Recreación) from scratch on an Astra child theme: institutional content, sports news, and a large editorial structure.",
    url: "https://www.inder.gob.cu/",
    image: "/projects/inder.svg",
    tech: ["WordPress", "Astra", "Child Theme", "PHP"],
    featured: true,
    year: "2026",
    category: "News / Institutional",
  },
  {
    id: "lussicam",
    title: "Lussicam Évaluation",
    description:
      "Internal WordPress + ACF system for a Canadian firm’s truck and trailer technical sheets.",
    longDescription:
      "A large WordPress platform using Advanced Custom Fields to manage internal truck and trailer files for a Canadian company. The site is heavy by design: hundreds of technical sheets, internal records, and structured ACF data.",
    url: "https://lussicamevaluation.com/",
    image: "/projects/lussicam.svg",
    tech: ["WordPress", "ACF", "PHP", "MySQL"],
    featured: true,
    year: "2024",
    category: "Internal / CMS",
  },
  {
    id: "spa-le-finlandais",
    title: "Spa Le Finlandais",
    description:
      "Spa site with a custom gift-card plugin connected to QR codes and WooCommerce.",
    longDescription:
      "WordPress and WooCommerce for Spa Le Finlandais. I built a client-specific gift-card plugin that issues QR-backed cards and connects to WooCommerce after payment, so vouchers can be redeemed in the spa flow.",
    url: "https://spalefinlandais.com/",
    image: "/projects/spa-le-finlandais.svg",
    tech: ["WordPress", "WooCommerce", "Custom Plugin", "PHP"],
    featured: true,
    year: "2026",
    category: "Hospitality / Plugin",
  },
  {
    id: "surus",
    title: "Surus",
    description:
      "Astra child-theme site for a software company — loader animation and video edit by me.",
    longDescription:
      "A from-scratch WordPress build on an Astra child theme for Surus, a software company. I created the loader animation and edited the video shown in the single-section homepage, with the rest of the site programmed from the ground up.",
    url: "http://surus.net/",
    image: "/projects/surus.svg",
    tech: ["WordPress", "Astra", "Child Theme", "JavaScript"],
    featured: true,
    year: "2026",
    category: "Corporate",
  },
];

export const projects: Project[] = projectList.map((project) => ({
  ...project,
  image: withBasePath(project.image),
}));
