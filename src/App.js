import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return(
    <div className="App">
      <h1>Netflix Clone React App</h1>
      <p>Let's build Netflix Clone Front-end Today!</p>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
