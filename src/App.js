import React from 'react';
import './Row.css';
import Row from './Row';
import requests from './requests';

function App() {
    return (
        <div className="App">
            <h1>Netflix Clone React App</h1>
            <p>Let's build Netflix Clone Front-end Today!</p>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

        </div>
    );
}

export default App;
