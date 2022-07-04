import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '../../services/types';

interface formPageState {
  formCardData: Array<ICard>;
}

const initialState: formPageState = {
  formCardData: [],
};

export const formPageSlice = createSlice({
  name: 'formPage',
  initialState,
  reducers: {
    setFormCardData: (state, action: PayloadAction<ICard>) => {
      state.formCardData = [...state.formCardData, action.payload];
    },
  },
});

export const { setFormCardData } = formPageSlice.actions;
export default formPageSlice.reducer;
