import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('rednering snapshot', () => {
  const snapshot = renderer.create(<App />).toJSON()
  expect(snapshot).toMatchSnapshot()
  // console.log(snapshot);
})
