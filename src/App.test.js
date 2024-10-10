import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the button and toggles the message', () => {
  // Render the App component
  render(<App />);
  
  // Check that the button exists and contains the correct text
  const button = screen.getByText(/Show Message/i);
  expect(button).toBeInTheDocument();
  
  // The message should not be visible initially
  expect(screen.queryByTestId('message')).toBeNull();

  // Click the button to show the message
  fireEvent.click(button);
  expect(screen.getByTestId('message')).toBeInTheDocument();

  // The button text should now be 'Hide Message'
  expect(screen.getByText(/Hide Message/i)).toBeInTheDocument();

  // Click the button again to hide the message
  fireEvent.click(screen.getByText(/Hide Message/i));
  expect(screen.queryByTestId('message')).toBeNull();
});
