import React from 'react';

import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';

import '../../Modal/Modal';

const LEARN_MORE = 'LEARN MORE';

const About = () => {
  const cardTitle = useAppSelector((state) => state.mainPageSlice.cardId);
  const data = useAppSelector((state) =>
    state.mainPageSlice.dataArray.filter((item) => item.title === cardTitle)
  );

  return (
    <div className="modal__content-container">
      {
        <img
          src={
            data[0].urlToImage ? data[0].urlToImage : require(`./../../../assets/img/no-image.png`)
          }
          alt="modal-img"
        />
      }
      <p>
        {data[0].content}
        <a href={data[0].url} target="_blank" rel="noopener noreferrer">
          {LEARN_MORE}
        </a>
      </p>
      <p>
        Source: <b>{data[0].source.name}</b>
      </p>
      <p>
        Author: <b>{data[0].author}</b>
      </p>
      <p>
        Date: <b>{data[0].publishedAt}</b>
      </p>
      <Link to="/">
        <button className="back">Назад</button>
      </Link>
    </div>
  );
};

export default About;
