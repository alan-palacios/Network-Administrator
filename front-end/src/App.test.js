import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn tailwindcss link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn TailwindCSS/i);
  expect(linkElement).toBeInTheDocument();
});