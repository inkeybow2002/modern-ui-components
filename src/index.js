import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>Welcome to Modern UI Components</h1>
      <Button variant='primary'>Click Me!</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
