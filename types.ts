
export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  image: string;
  gallery: string[];
  category: string;
  sizes: string[];
  reviews: ProductReview[];
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'customer' | 'admin';
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: CartItem[];
}
