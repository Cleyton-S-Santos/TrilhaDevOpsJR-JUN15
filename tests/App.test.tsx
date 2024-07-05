import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('App Component', () => {
  it('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    expect(viteLogo).not.toBeNull();
    expect(reactLogo).not.toBeNull();
  });

  it('renders heading', () => {
    render(<App />);
    const heading = screen.getByText(/Vite \+ React/i);
    expect(heading).not.toBeNull();
  });

  it('increments count on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).not.toBeNull();
    fireEvent.click(button);
    expect(button).not.toBeNull();
  });
});
