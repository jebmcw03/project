import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data') // Requesting from the `/data` endpoint
      .then(response => {
        console.log('Fetched Data:', response.data); // Log the data to the console
        setBackendData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from the backend:', error);
        setBackendData([{ name: 'Error fetching data from the backend' }]);
      });
  }, []);

  return (
    <div className="App">
      {backendData.length > 0 ? (
        backendData.map((user, index) => (
          <div key={index}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
