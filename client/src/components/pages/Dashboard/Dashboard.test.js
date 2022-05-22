import { render, screen } from '@testing-library/react'
import App from '../../../App'

describe('App component', () => {
  test('it displays a list of users', async () => {
    render(<App />)
    const userList = await screen.findByTestId('user-list')
    expect(userList).toBeInTheDocument()
  })
})
