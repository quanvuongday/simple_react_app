import React, { useState } from 'react';
import './App.css';

function App() {
  // Define a state variable to track whether the message is shown
  const [showMessage, setShowMessage] = useState(false);

  // Function to toggle the message on button click
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React App</h1>
        <button onClick={toggleMessage}>
          {showMessage ? 'Hide' : 'Show'} Message
        </button>
        {showMessage && <p data-testid="message">This is a simple message!</p>}
      </header>
    </div>
  );
}

export default App;
