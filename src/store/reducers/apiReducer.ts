import axios, { AxiosError } from 'axios';
import { API_KEY } from '../../services/api';
import { IResponse } from '../../services/types';
import { AppDispatch } from '../store';
import { mainPageSlice } from './mainPageSlice';

export const fetchArticles =
  (searchValue: string, sortBy = 'publishedAt', page = 1) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(mainPageSlice.actions.dataFetching());
      const response = await axios.get<IResponse>(
        `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sortBy}&page=${page}&apiKey=${API_KEY}`
      );
      dispatch(mainPageSlice.actions.dataFetchingSucces(response.data.articles));
    } catch (e) {
      const err = e as AxiosError;
      dispatch(mainPageSlice.actions.dataFetchingError(err.message));
    }
  };
