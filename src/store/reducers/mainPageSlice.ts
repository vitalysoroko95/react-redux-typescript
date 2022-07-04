import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticles } from '../../services/types';

interface mainPageState {
  currentPage: number;
  sortType: string;
  dataArray: IArticles[];
  isLoading: boolean;
  error: string;
  searchValue: string;
  cardId: string;
}

const initialState: mainPageState = {
  currentPage: 1,
  sortType: 'publishedAt',
  dataArray: [],
  isLoading: false,
  error: '',
  searchValue: '',
  cardId: '',
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    dataFetching(state) {
      state.isLoading = true;
    },
    dataFetchingSucces(state, action: PayloadAction<IArticles[]>) {
      state.isLoading = false;
      state.error = '';
      state.dataArray = action.payload;
    },
    dataFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCardId: (state, action: PayloadAction<string>) => {
      state.cardId = action.payload;
    },
  },
});

export const { setCurrentPage, setSortType, setSearchValue, setCardId } = mainPageSlice.actions;
export default mainPageSlice.reducer;
