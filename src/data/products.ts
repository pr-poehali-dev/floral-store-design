export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  categoryId: string;
  rating: number;
  inStock: boolean;
  description: string;
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "roses",
    name: "Розы",
    description: "Классические и экзотические розы для любого случая",
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    productCount: 24,
  },
  {
    id: "bouquets",
    name: "Букеты",
    description: "Готовые букеты для праздников и особых случаев",
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    productCount: 18,
  },
  {
    id: "wedding",
    name: "Свадебные",
    description: "Букеты и композиции для свадебных церемоний",
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    productCount: 15,
  },
  {
    id: "plants",
    name: "Комнатные растения",
    description: "Зелёные друзья для вашего дома",
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    productCount: 32,
  },
  {
    id: "gifts",
    name: "Подарочные наборы",
    description: "Цветы с конфетами, игрушками и другими подарками",
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    productCount: 12,
  },
  {
    id: "seasonal",
    name: "Сезонные",
    description: "Цветы по сезону: тюльпаны, пионы, хризантемы",
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    productCount: 20,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: 'Букет красных роз "Страсть"',
    price: 2500,
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    category: "Розы",
    categoryId: "roses",
    rating: 4.8,
    inStock: true,
    description:
      "Роскошный букет из 25 красных роз Эквадор. Символ страсти и любви.",
    images: [
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    ],
  },
  {
    id: "2",
    name: 'Букет белых роз "Нежность"',
    price: 2200,
    image: "/img/0c79ffe1-ece9-4afc-8a28-ce8bc549269f.jpg",
    category: "Розы",
    categoryId: "roses",
    rating: 4.9,
    inStock: true,
    description:
      "Элегантный букет из 21 белой розы. Идеален для особых моментов.",
    images: [
      "/img/0c79ffe1-ece9-4afc-8a28-ce8bc549269f.jpg",
      "/img/0c79ffe1-ece9-4afc-8a28-ce8bc549269f.jpg",
      "/img/0c79ffe1-ece9-4afc-8a28-ce8bc549269f.jpg",
    ],
  },
  {
    id: "3",
    name: 'Букет тюльпанов "Весна"',
    price: 1800,
    image: "/img/a3523f76-b79a-4c07-b0ff-18ccdde40f89.jpg",
    category: "Сезонные",
    categoryId: "seasonal",
    rating: 4.7,
    inStock: true,
    description: "Яркий весенний букет из 35 разноцветных тюльпанов.",
    images: [
      "/img/a3523f76-b79a-4c07-b0ff-18ccdde40f89.jpg",
      "/img/a3523f76-b79a-4c07-b0ff-18ccdde40f89.jpg",
      "/img/a3523f76-b79a-4c07-b0ff-18ccdde40f89.jpg",
    ],
  },
  {
    id: "4",
    name: 'Свадебный букет "Мечта"',
    price: 4500,
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    category: "Свадебные",
    categoryId: "wedding",
    rating: 5.0,
    inStock: true,
    description: "Изысканный свадебный букет из белых роз, пионов и эустомы.",
    images: [
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    ],
  },
  {
    id: "5",
    name: "Фикус Бенджамина",
    price: 1200,
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    category: "Комнатные растения",
    categoryId: "plants",
    rating: 4.6,
    inStock: true,
    description: "Красивое комнатное растение в декоративном горшке.",
    images: [
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    ],
  },
  {
    id: "6",
    name: 'Букет + конфеты "Сладость"',
    price: 3200,
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    category: "Подарочные наборы",
    categoryId: "gifts",
    rating: 4.8,
    inStock: false,
    description: "Букет из роз с коробкой премиальных конфет.",
    images: [
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    ],
  },
  {
    id: "7",
    name: "Букет полевых цветов",
    price: 1500,
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    category: "Букеты",
    categoryId: "bouquets",
    rating: 4.5,
    inStock: true,
    description: "Очаровательный букет из полевых цветов в натуральном стиле.",
    images: [
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    ],
  },
  {
    id: "8",
    name: "Композиция с орхидеями",
    price: 3800,
    image: "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    category: "Букеты",
    categoryId: "bouquets",
    rating: 4.9,
    inStock: true,
    description: "Элегантная композиция с экзотическими орхидеями.",
    images: [
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
      "/img/5f86e36a-c303-4436-9b08-a5de2fa324e4.jpg",
    ],
  },
];
