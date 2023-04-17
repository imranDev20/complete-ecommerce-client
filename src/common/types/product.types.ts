type Attributes = {
  name: string;
  value: string[];
  unit: string | null;
};

type Reviews = {
  name: string;
  email: string;
  body: string;
  rating: number;
};

export type Product = {
  _id: number;
  name: string;
  description: string;
  regularPrice: string;
  offerPrice: string;
  unit: string;
  brand: string;
  rating: number;
  stock: number;
  attributes: Attributes[];
  image: string;
  reviews: Reviews[];
};

export type Products = Product[];
