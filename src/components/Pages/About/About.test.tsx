import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../About/About';

describe('About page', () => {
  it('render About page component', async () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
