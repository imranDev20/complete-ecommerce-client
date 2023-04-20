export type CartItemAttribute = {
  _id: number;
  name: string;
  value: string | [];
  unit: string | null;
};

export type CartItem = {
  _id: number;
  name: string;
  price: number;
  imageURL: string;
  quantity: number;
  store: string;
  attributes: CartItemAttribute[];
  unit: string;
};

export type CartItems = CartItem[];
