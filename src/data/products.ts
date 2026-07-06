export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  sizes: string[];
  image: string;
  hoverImage: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Jordan 1 Retro High OG "Chicago"',
    price: 35000,
    originalPrice: 40000,
    category: 'Sneakers',
    brand: 'Jordan',
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isNew: true,
  },
  {
    id: '2',
    name: 'Yeezy Boost 350 V2 "Zebra"',
    price: 28000,
    category: 'Sneakers',
    brand: 'Adidas',
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9'],
    image: 'https://images.unsplash.com/photo-1614026480209-cd9934144671?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1552346154-21d32810baa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Supreme Box Logo Hoodie',
    price: 45000,
    originalPrice: 50000,
    category: 'Streetwear',
    brand: 'Supreme',
    sizes: ['M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Nike Dunk Low "Panda"',
    price: 15000,
    category: 'Sneakers',
    brand: 'Nike',
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9'],
    image: 'https://images.unsplash.com/photo-1606890658317-7d14490b76fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isNew: true,
  },
  {
    id: '5',
    name: 'Essentials Fear of God T-Shirt',
    price: 8000,
    category: 'Streetwear',
    brand: 'Essentials',
    sizes: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'New Balance 550 White Grey',
    price: 12000,
    originalPrice: 14000,
    category: 'Sneakers',
    brand: 'New Balance',
    sizes: ['UK 8', 'UK 9', 'UK 10'],
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    name: 'BAPE Shark Full Zip Hoodie',
    price: 38000,
    category: 'Streetwear',
    brand: 'BAPE',
    sizes: ['L', 'XL'],
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1578587018452-892bace94f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isNew: true,
  },
  {
    id: '8',
    name: 'Off-White Industrial Belt',
    price: 18000,
    category: 'Accessories',
    brand: 'Off-White',
    sizes: ['OS'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1620805307773-ce774eb06691?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const BRANDS = Array.from(new Set(products.map(p => p.brand)));
export const CATEGORIES = Array.from(new Set(products.map(p => p.category)));
export const SIZES = Array.from(new Set(products.flatMap(p => p.sizes)));
