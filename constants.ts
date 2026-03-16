import { Event, Artist, MerchItem, SocialPost } from "./types";

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "DUNES OF SAHARA",
    date: "OCT 24, 2024",
    location: "Marrakech, Morocco",
    description:
      "A spiritual journey through Afrohouse rhythms beneath the stars.",
    genre: "Afrohouse",
    // Desert / Sand Dunes vibe
    imageUrl:
      "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800",
    ticketPrice: "$120",
  },
  {
    id: "2",
    title: "BALI RITUALS",
    date: "NOV 12, 2024",
    location: "Uluwatu, Indonesia",
    description:
      "Deep Indohouse vibrations on the cliffs of Uluwatu. An immersive auditory experience.",
    genre: "Indohouse",
    // Tropical / Dark Green / Jungle vibe
    imageUrl:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800",
    ticketPrice: "$95",
  },
  {
    id: "3",
    title: "BERLIN STATIC",
    date: "DEC 05, 2024",
    location: "Berlin, Germany",
    description: "Raw, industrial Techno in a decommissioned power plant.",
    genre: "Techno",
    // Industrial / Red Lights / Club vibe
    imageUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800",
    ticketPrice: "$55",
  },
  {
    id: "4",
    title: "CAPETOWN PULSE",
    date: "JAN 15, 2025",
    location: "Cape Town, South Africa",
    description:
      "The future of Afrotech featuring pioneering artists from the continent.",
    genre: "Afrotech",
    // Vibrant / Crowd / Energy vibe
    imageUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    ticketPrice: "$80",
  },
];

export const ARTISTS: Artist[] = [
  {
    id: "a1",
    name: "djash ley",
    genre: "Indohouse",
    bio: "Spiritual, and deeply rooted from the Gamelan scales.",
    // Moody Male Portrait
    imageUrl:
      "https://scontent.fmru2-1.fna.fbcdn.net/v/t39.30808-6/512663251_9961131060608546_1217954378827536643_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=53a332&_nc_ohc=839C0H07I38Q7kNvwE1OATG&_nc_oc=AdkxotB8E7iCepFGQ9l-D_81WLsrNXcXD5XJnRE9Lm6ORg63wEiOCrrOCFQ0HhtVdFY&_nc_zt=23&_nc_ht=scontent.fmru2-1.fna&_nc_gid=uDlOpsLwbZHZK2y7fKkDAQ&_nc_ss=8&oh=00_Afz9pt4Ms43FpseZJA4FMNdb3ffKj6pttDe2JYbOHoBJ7A&oe=69BE0428",
  },
  {
    id: "a2",
    name: "VSH",
    genre: "Afrohouse/Afrotech",
    bio: "Melodic ands Minimalist soundscapes that bend time and space.",
    // Edgy / Flash Photography Portrait
    imageUrl:
      "https://scontent.fmru2-1.fna.fbcdn.net/v/t39.30808-1/652324132_26346202191711090_2540311865484074837_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=E6PFY-olSXQQ7kNvwHQwyBs&_nc_oc=AdlZoStsoYVjdbOAjtzxFi3C5tW0dZ-vENHPAW_D9Ly3rE8o2Y_57l3sIGHszd2ifU8&_nc_zt=24&_nc_ht=scontent.fmru2-1.fna&_nc_gid=-B1HoWfBPWncxRiD7bCT8g&_nc_ss=8&oh=00_AfyiqXYCjvGm8b05Yk3e7T6PtaQ6fgzX8Vs6PJERQx9VAg&oe=69BE0B06",
  },
  {
    id: "a3",
    name: "Avi S",
    genre: "Afrohouse/Tribal",
    bio: "Melodic, spiritual, and deeply rooted in Gamelan scales.",
    // Artistic / Silhouette / Atmosphere
    imageUrl:
      "https://scontent.fmru2-1.fna.fbcdn.net/v/t39.30808-1/651879988_1571947551597154_6740482670222263864_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=zLCYDiMTcysQ7kNvwF2EPOZ&_nc_oc=AdlGN9HwCB1RKGN_2vBazFZ4sA55wIIM9rZ5woYomKgk4cUrVnLp0YSlyFMXBLvvXKY&_nc_zt=24&_nc_ht=scontent.fmru2-1.fna&_nc_gid=9Q80t2qA4s7BK_8n_GvDMw&_nc_ss=8&oh=00_Afx4jijKesHCNglSptiqC_RmyzdtX-nOIFKi31nfdnPN2Q&oe=69BDEE03",
  },
];

export const MERCH_ITEMS: MerchItem[] = [
  {
    id: "m1",
    name: "OVERSIZED SIGNATURE TEE",
    price: "$45.00",
    // Black T-Shirt / Streetwear
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    status: "Available",
  },
  {
    id: "m2",
    name: "NOISE CANCELLATION HOODIE",
    price: "$85.00",
    // Dark Hoodie / Urban
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    status: "Pre-order",
  },
  {
    id: "m3",
    name: "RITUAL CANVAS TOTE",
    price: "$35.00",
    // Canvas Bag
    image:
      "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80&w=800",
    status: "Sold Out",
  },
  {
    id: "m4",
    name: "VIBRÉ DAD HAT",
    price: "$28.00",
    // Cap
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800",
    status: "Available",
  },
  {
    id: "m5",
    name: "TECHNO UTILITY VEST",
    price: "$110.00",
    // Vest
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    status: "Available",
  },
  {
    id: "m6",
    name: "HEAVYWEIGHT SWEATPANTS",
    price: "$75.00",
    // Sweatpants
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
    status: "Available",
  },
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "s1",
    platform: "instagram",
    image:
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600",
    caption: "Lost in the frequency. Berlin, you were unreal. 🖤",
    likes: "12.4K",
    link: "#",
  },
  {
    id: "s2",
    platform: "instagram",
    image:
      "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=600",
    caption: "New Merch Drop: 001 Collection sold out in 4 minutes.",
    likes: "8.2K",
    link: "#",
  },
  {
    id: "s3",
    platform: "instagram",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
    caption: "Soundcheck at Uluwatu. The spirits are listening.",
    likes: "15.1K",
    link: "#",
  },
  {
    id: "s4",
    platform: "instagram",
    image:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=600",
    caption: "KAYIN live set from the dunes is now available on SC.",
    likes: "5.3K",
    link: "#",
  },
];

export const GENRES = [
  { name: "AFROHOUSE", desc: "Soulful rhythms meets electronic beats." },
  { name: "AFROTECH", desc: "Futuristic African sounds with tech precision." },
  { name: "TECHNO", desc: "Raw, driving, and hypnotic." },
  { name: "INDOHOUSE", desc: "Mystical eastern melodies on a house groove." },
];

export const YOUTUBE_VIDEOS = [
  {
    id: "y1",
    title: "VIBRÉ LIVE: Bali Rituals 2024",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    duration: "1:45:20",
  },
  {
    id: "y2",
    title: "KAYIN - Dunes of Sahara (Full Set)",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1547234935-80c7142ee969?auto=format&fit=crop&q=80&w=800",
    duration: "2:10:05",
  },
  {
    id: "y3",
    title: "Berlin Static - Aftermovie",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800",
    duration: "0:04:30",
  },
  {
    id: "y4",
    title: "SINTRA - Boiler Room Set",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    duration: "1:15:00",
  },
];
