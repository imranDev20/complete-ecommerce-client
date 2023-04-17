import {
  Product as ProductType,
  Products as ProductsType,
} from "@/common/types/product.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

type CartStateType = {
  products: ProductsType;
  persisted: boolean;
  count: number;
};

const initialState: CartStateType = {
  products: [],
  persisted: false,
  count: 0,
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
