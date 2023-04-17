import {
  Product as ProductType,
  Products as ProductsType,
} from "@/common/types/product.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartStateType = {
  products: ProductsType;
  persisted: boolean;
  count: number;
  open: boolean;
};

const initialState: CartStateType = {
  products: [],
  persisted: false,
  count: 0,
  open: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const newCart = [...state.products];
      newCart.push(action.payload);
      state.products = newCart;
    },

    deleteFromCart: (state, action: PayloadAction<number>) => {
      const indexOfProduct = state.products.findIndex((product) => {
        return product._id === action.payload;
      });

      const newCart = [...state.products];

      if (indexOfProduct >= 0) {
        newCart.splice(indexOfProduct, 1);
      }

      state.products = newCart;
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
