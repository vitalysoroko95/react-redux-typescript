/* import { render, screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event'; */

describe('Search', () => {
  const fakeLocalStorage = (function () {
    let store = {};

    return {
      getItem: function (key) {
        return store[key] || null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      removeItem: function (key) {
        delete store[key];
      },
      clear: function () {
        store = {};
      },
    };
  })();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('saves the key to the storage', () => {
    localStorage.setItem('the-key', 'fake-value');
    expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
  });

  /* it('search with mock', () => {
    render(<Search />);
    userEvent.type(screen.getByRole('textbox'), 'react');
    expect(screen.getByRole('textbox')).toHaveValue('react');
    expect(window.localStorage.setItem('the-key')).toEqual(screen.getByRole('textbox'));
    render(<Search />);
    expect(window.localStorage.getItem('the-key'));
    expect(screen.getByRole('textbox')).toHaveValue('react');
  }); */
});
