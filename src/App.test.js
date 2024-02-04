import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with link without crashing', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () => {
  render(<App />);

  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement.href).toContain('https://www.deque.com/');
});
