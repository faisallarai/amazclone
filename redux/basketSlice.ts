import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../typings';
import { RootState } from './store';

export interface BasketState {
  items: IProduct[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<IProduct>) => {
      // modify items to include the new product
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state: BasketState, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      let newBasket = [...state.items];

      if (index >= 0) {
        // item exist in the basket ... remove it.
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove item (id: ${action.payload}) since is not in the basket`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action Creators
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors, Pull information from Global State slice
export const selectItems = (state: RootState) => state.basket.items;
export const selectTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
