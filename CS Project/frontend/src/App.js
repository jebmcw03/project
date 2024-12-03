import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [backendData, setBackendData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => {
        setBackendData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from the backend:', error);
        setBackendData('Error fetching data from the backend');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{backendData}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
