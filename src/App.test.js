import { render, screen } from '@testing-library/react';
import ClkCount from './ClickCount';

test('renders learn react link', () => {
  render(<ClkCount/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
