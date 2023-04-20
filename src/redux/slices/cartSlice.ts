import { CartItem, CartItems } from "@/common/types/cart.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartStateType = {
  cartItems: CartItems;
  persisted: boolean;
  drawerOpen: boolean;
};

type UpdateCartQuantityPayload = {
  id: number;
  type: "increase" | "decrease";
};

const initialState: CartStateType = {
  cartItems: [],
  persisted: false,
  drawerOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newCart = [...state.cartItems];
      const {} = action.payload;

      newCart.push(action.payload);
      state.cartItems = newCart;
    },

    updateItemQuantity: (
      state,
      action: PayloadAction<UpdateCartQuantityPayload>
    ) => {
      const { id, type } = action.payload;
      const newCart = [...state.cartItems];
      const itemInCart = newCart.find((item) => item._id === id);
      const itemInCartIndex = newCart.findIndex((item) => item._id === id);

      if (itemInCart?.quantity) {
        const updatedItem = {
          ...itemInCart,
          quantity:
            type === "increase"
              ? itemInCart.quantity + 1
              : itemInCart.quantity - 1,
        };

        newCart[itemInCartIndex] = updatedItem;
        state.cartItems = newCart;
      }
    },

    deleteFromCart: (state, action: PayloadAction<number>) => {
      const indexOfProduct = state.cartItems.findIndex((cartItem) => {
        return cartItem._id === action.payload;
      });

      const newCart = [...state.cartItems];

      if (indexOfProduct >= 0) {
        newCart.splice(indexOfProduct, 1);
      }

      state.cartItems = newCart;
    },

    toggleCartDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  updateItemQuantity,
  toggleCartDrawer,
} = cartSlice.actions;
export default cartSlice.reducer;
