import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import GitCard from './components/gitCard';

beforeEach(() => {
  // sets everything back to initial state before each test
  fetch.resetMocks();
})

test('rednering snapshot', () => {
  const snapshot = renderer.create(<App />).toJSON()
  expect(snapshot).toMatchSnapshot()
  // console.log(snapshot);
})

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
  fetch.mockResponseOnce(JSON.stringify({ name: 'Aaron Lu' }))
  render(<GitCard />)
  const gitHubName = await screen.findByRole('heading', { level: 2 })
  expect(gitHubName).toHaveTextContent('Aaron Lu')
})