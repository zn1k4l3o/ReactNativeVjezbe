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
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      const index = state.favouritedArray.indexOf(action.payload);
      state.favouritedArray.splice(index, 1);
    },
  },
  selectors: {
    selectIsFavouritedArray: state => {
      return state.favouritedArray;
    },
  },
});

export const {addFavourite, removeFavourite} = favouriteSlice.actions;
export const selectCount = (state: RootState) => state.favourite;
export default favouriteSlice.reducer;
export const {selectIsFavouritedArray} = favouriteSlice.selectors;
