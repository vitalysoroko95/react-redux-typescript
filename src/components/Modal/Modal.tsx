import React from 'react';

import { IArticles } from '../../services/types';

import './Modal.scss';

interface ModalProps {
  isModalActive: boolean;
  setModalActive: (value: boolean, content?: IArticles) => void;
  content?: IArticles;
}

const LEARN_MORE = 'Learn more';

const Modal = (props: ModalProps) => {
  return (
    <div
      className={props.isModalActive ? 'modal active' : 'modal'}
      onClick={() => {
        props.setModalActive(false);
      }}
    >
      <div
        className={props.isModalActive ? 'modal__content active' : 'modal__content'}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props && (
          <div className="modal__content-container">
            <img
              src={
                props.content?.urlToImage
                  ? props.content?.urlToImage
                  : require(`./../../assets/img/no-image.png`)
              }
              alt="modal-img"
            />
            <p>
              {props.content?.content}
              <a href={props.content?.url} target="_blank" rel="noopener noreferrer">
                {LEARN_MORE}
              </a>
            </p>
            <p>
              Source: <b>{props.content?.source.name}</b>
            </p>
            <p>
              Author: <b>{props.content?.author}</b>
            </p>
            <p>
              Date: <b>{props.content?.publishedAt}</b>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
