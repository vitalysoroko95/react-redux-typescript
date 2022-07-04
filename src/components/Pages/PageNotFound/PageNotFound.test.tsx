import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PageNotFound from './PageNotFound';

describe('Page not found', () => {
  it('render Page not found component', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );
    expect(
      screen.getByText('This page does not exist. ...or does it? Try the homepage.')
    ).toBeInTheDocument();
  });
});
