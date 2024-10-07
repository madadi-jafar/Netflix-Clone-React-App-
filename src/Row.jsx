import React, { useState, useEffect } from 'react';
import axios from './axios'; // Ensure this path is correct
import './App.css'; // Assuming you have some CSS for styling

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Define the async function inside useEffect
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]); // Added fetchUrl as a dependency

    console.log(fetchUrl);


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* {Several row poster(s)} */}

                {movies.map((movie) =>{
                    <img src={movie.poster_path} alt={movie.name} />
                })}
            </div>

        </div>
    );
}

export default Row;
