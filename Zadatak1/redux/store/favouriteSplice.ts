import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

interface FavouritedState {
  favouritedArray: number[];
}

const initialState: FavouritedState = {
  favouritedArray: [],
};

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<number>) => {
      state.favouritedArray.push(action.payload);
      console.log(state.favouritedArray);
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      state.favouritedArray.splice(action.payload, action.payload);
      console.log(state.favouritedArray);
    },
  },
});

export const {addFavourite, removeFavourite} = favouriteSlice.actions;
export const selectCount = (state: RootState) => state.favourite;
export default favouriteSlice.reducer;
