import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import mainPageSlice from './reducers/mainPageSlice';
import formPageSlice from './reducers/formPageSlice';

const rootReducer = combineReducers({
  mainPageSlice,
  formPageSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
