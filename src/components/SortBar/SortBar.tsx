import React, { useContext } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/redux';
import { ISortFormInput } from '../../services/types';
import { mainPageSlice } from '../../store/reducers/mainPageSlice';

import './SortBar.scss';

const SortBar = () => {
  const dispatch = useAppDispatch();
  const { setSortType } = mainPageSlice.actions;
  const { register, handleSubmit } = useForm<ISortFormInput>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<ISortFormInput> = (data) => {
    if (data.sort) {
      dispatch(setSortType(data.sort));
    }
  };

  return (
    <div className="sort-bar">
      <form className="sort-form" onChange={handleSubmit(onSubmit)}>
        <label htmlFor="sorting-type">
          Sort by:
          <select className="sort-by-select" {...register('sort')}>
            <option value="publishedAt" selected>
              Published at
            </option>
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SortBar;
