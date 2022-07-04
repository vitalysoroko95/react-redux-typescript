import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Card from './Card';

describe('Card', () => {
  const obj = {
    source: {
      id: '123',
      name: 'obj-name',
    },
    author: 'author name',
    title: 'title',
    description: 'description',
    url: 'urlToImage1',
    urlToImage: 'urlToImage-2',
    publishedAt: ' publishedAt;',
    content: 'content',
    setModalActive: () => void {},
  };

  it('render Card component', () => {
    render(
      <BrowserRouter>
        <Card {...obj} />
      </BrowserRouter>
    );
    expect(screen.getByText(obj.author)).toBeInTheDocument();
    expect(screen.getByText(obj.title)).toBeInTheDocument();
    expect(screen.getByText(obj.content)).toBeInTheDocument();
  });
});
