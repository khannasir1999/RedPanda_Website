export interface WPCategory {
  term_id: number;
  name: string;
  slug: string;
}

export interface WPTag {
  term_id: number;
  name: string;
  slug: string;
}

export interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_image: {
    source_url: string;
  };
  categories: WPCategory[];
  tags: WPTag[];
  link: string;
}

export interface Blog {
  id: number;
  title: string;
  category: string;
  badges: string[];
  image: string;
  content: string;
  date: string;
}
