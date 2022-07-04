import React from 'react';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { ICardProps } from '../../services/types';
import { mainPageSlice } from '../../store/reducers/mainPageSlice';

import './Card.scss';

const Card = (props: ICardProps) => {
  const { setCardId } = mainPageSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <Link to="/about">
      <div
        className="card"
        onClick={() => {
          dispatch(setCardId(props.title));
        }}
      >
        <img
          src={props.urlToImage ? props.urlToImage : require(`./../../assets/img/no-image.png`)}
          alt="card-img"
        />
        <p className="card-title">{props.title}</p>
      </div>
    </Link>
  );
};

export default Card;
