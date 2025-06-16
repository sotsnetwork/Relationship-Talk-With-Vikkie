export interface Session {
  id: string;
  name: string;
  type: 'counseling' | 'workshop';
  duration: number;
  price: number;
  description: string;
  features?: string[];
}

export interface Product {
  id: string;
  name: string;
  type: 'pdf' | 'course';
  price: number;
  description: string;
  image?: string;
  features?: string[];
}

export interface Purchase {
  id: string;
  email: string;
  product_slug: string;
  delivered: boolean;
  purchased_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  published_at: string;
  slug: string;
}