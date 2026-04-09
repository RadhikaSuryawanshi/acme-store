import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AddToCartPayload = Omit<CartItems, "quantity">;

export interface CartItems {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface CartState {
  items: CartItems[];
  totalPrice: number;
  totalQuantity: number;
  isCartOpen: boolean;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemtoCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    toggleCart: (state, action) => {
      state.isCartOpen = action.payload;
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      item.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= item.price;

      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      if (state.items.length === 0) {
        state.isCartOpen = false;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;

      state.items = state.items.filter((i) => i.id !== action.payload);
      if (state.items.length === 0) {
        state.isCartOpen = false;
      }
    },
  },
});
export const {
  addItemtoCart,
  toggleCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
