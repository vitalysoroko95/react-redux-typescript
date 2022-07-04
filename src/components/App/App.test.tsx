import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('render App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/search/i));
    expect(screen.getByLabelText(/search/i)).toBeChecked();
  });
});
