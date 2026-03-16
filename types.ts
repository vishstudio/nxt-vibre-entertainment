
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  genre: string;
  imageUrl: string;
  ticketPrice: string;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  imageUrl: string;
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  image: string;
  status: 'Available' | 'Sold Out' | 'Pre-order';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'tiktok';
  image: string;
  caption: string;
  likes: string;
  link: string;
}

export interface YoutubeVideo {
  id: string;
  title: string;
  videoId: string;
  thumbnail: string;
  duration: string;
}
