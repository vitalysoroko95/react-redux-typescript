import React, { useState } from 'react';

import { mainPageSlice } from '../../store/reducers/mainPageSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import './PaginationBar.scss';

const PaginationBar = () => {
  const pages = [];

  const dispatch = useAppDispatch();
  const { setCurrentPage } = mainPageSlice.actions;
  const currentPage = useAppSelector((state) => state.mainPageSlice.currentPage);
  const dataSize = useAppSelector((state) => state.mainPageSlice.dataArray.length);
  const pagesCount = dataSize / 20;

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = pagesCount;
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionCount + 1;
  const rightPortionPageNumber = portionNumber * portionCount;

  return (
    <div className="pagination-bar">
      {portionNumber && (
        <button
          className="pagination-button"
          onClick={() => {
            dispatch(setCurrentPage(currentPage - 1));
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              className={currentPage === p ? 'selectedPage' : 'pageNumber'}
              key={p}
              onClick={() => {
                dispatch(setCurrentPage(p));
              }}
            >
              {p}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        <button
          className="pagination-button"
          onClick={() => {
            if (currentPage < pagesCount) dispatch(setCurrentPage(currentPage + 1));
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default PaginationBar;
