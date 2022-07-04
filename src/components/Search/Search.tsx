import React, { ChangeEvent, useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { mainPageSlice } from '../../store/reducers/mainPageSlice';

import './Search.scss';

const Search = () => {
  const dispatch = useAppDispatch();
  const { setSearchValue } = mainPageSlice.actions;

  const [inputData, setInputData] = useState<string>('');

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchData', inputData);
    dispatch(setSearchValue(inputData));
  };

  const componentCleanup = () => {
    localStorage.setItem('searchData', inputData);
  };

  useEffect(() => {
    const localStorageInputValue = localStorage.getItem('searchData') || '';
    if (localStorage.getItem('searchData')) {
      dispatch(setSearchValue(localStorageInputValue));
      setInputData(localStorageInputValue);
    }
  }, []);

  useEffect(() => {
    componentCleanup();
    window.removeEventListener('beforeunload', componentCleanup);
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div className="search-bar">
      <form className="input-form" onSubmit={handleSubmit}>
        <input type="text" value={inputData} placeholder="Search" onChange={handleInput} />
      </form>
    </div>
  );
};

export default Search;
