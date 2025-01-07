export interface item {
  id: string;
  register: Date;
  category: number; // 1 t-shirt, 2 shirt, 3 pants
  title: string;
  images: string[]
  price: number;
  sale?: number;
  description: string;
  colors: string[];
  quantity?: number
}