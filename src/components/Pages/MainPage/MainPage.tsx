import React, { useEffect } from 'react';

import Card from '../../Card/Card';
import PaginationBar from '../../PaginationBar/PaginationBar';
import SortBar from '../../SortBar/SortBar';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchArticles } from '../../../store/reducers/apiReducer';

import './MainPage.scss';

const MainPage = () => {
  const currentPage = useAppSelector((state) => state.mainPageSlice.currentPage);
  const sortType = useAppSelector((state) => state.mainPageSlice.sortType);
  const serchValue = useAppSelector((state) => state.mainPageSlice.searchValue);
  const dispatch = useAppDispatch();

  const dataArray = useAppSelector((state) => state.mainPageSlice.dataArray);

  useEffect(() => {
    if (serchValue) dispatch(fetchArticles(serchValue, sortType, currentPage));
  }, [serchValue, sortType, currentPage]);

  return (
    <div className="main-page">
      <SortBar />
      <div className="cards-container">
        {dataArray.map((item) => (
          <Card key={dataArray.indexOf(item)} {...item} />
        ))}
      </div>
      {dataArray.length > 0 && <PaginationBar />}
    </div>
  );
};

export default MainPage;
