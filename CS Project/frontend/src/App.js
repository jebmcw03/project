import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

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
      <p>{backendData}</p>
    </div>
  );
}

export default App;

