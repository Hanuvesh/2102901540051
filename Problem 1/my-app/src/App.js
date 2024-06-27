import React, { useState } from 'react';
import axios from 'axios';

const windowSize = 10;

const fetchNumber = async (type) => {
  let url;
  switch(type) {
    case 'p':
      url = 'http://20.244.56.144/test/primes';
      break;
    case 'f':
      url = 'http://20.244.56.144/test/fibo';
      break;
    case 'e':
      url = 'http://20.244.56.144/test/even';
      break;
    case 'r':
      url = 'http://20.244.56.144/test/rand';
      break;
    default:
      throw new Error('Invalid number type');
  }

  try {
    const response = await axios.get(url, { timeout: 500 });
    return response.data.number;
  } catch (error) {
    console.error('Error fetching number:', error);
    return null;
  }
};

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return (sum / numbers.length).toFixed(2);
};

const App = () => {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [avg, setAvg] = useState(0);

  const handleFetchNumber = async (type) => {
    const newNumber = await fetchNumber(type);
    if (newNumber !== null && !windowCurrState.includes(newNumber)) {
      const newState = [...windowCurrState, newNumber];
      if (newState.length > windowSize) {
        newState.shift();
      }

      setWindowPrevState(windowCurrState);
      setWindowCurrState(newState);
      setAvg(calculateAverage(newState));
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <div>
        <button onClick={() => handleFetchNumber('p')}>Fetch Prime</button>
        <button onClick={() => handleFetchNumber('f')}>Fetch Fibonacci</button>
        <button onClick={() => handleFetchNumber('e')}>Fetch Even</button>
        <button onClick={() => handleFetchNumber('r')}>Fetch Random</button>
      </div>
      <div>
        <h2>Previous Window State:</h2>
        <p>{JSON.stringify(windowPrevState)}</p>
        <h2>Current Window State:</h2>
        <p>{JSON.stringify(windowCurrState)}</p>
        <h2>Average:</h2>
        <p>{avg}</p>
      </div>
    </div>
  );
};

export default App;
