import { render, screen } from '@testing-library/react';
import App from './App';
import Renderer from 'react-test-renderer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('rednering snapshot', () => {
  const testRenderer = Renderer.create(<App />).toJSON
  expect(testRenderer).toMatchSnapshot()
})