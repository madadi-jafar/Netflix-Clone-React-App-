import React, {useState, useEffect} from 'react';
import axios from './axios'; // Ensure this path is correct
import './App.css';
import './Row.css'; // Assuming you have some CSS for styling

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true; // To prevent setting state on unmounted component

        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                if (isMounted) {
                    setMovies(request.data.results);
                }
            } catch (err) {
                console.error('Failed to fetch movies:', err);
                if (isMounted) {
                    setError(err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        // Cleanup function to set isMounted to false if the component unmounts
        return () => {
            isMounted = false;
        };
    }, [fetchUrl]); // Dependency array includes fetchUrl

    if (loading) {
        return (
            <div className="row">
                <h2>{title}</h2>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="row">
                <h2>{title}</h2>
                <p>Error fetching movies. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* Render movie posters */}
                {movies.map((movie) => (
                    <img
                        key={movie.id} // Unique key for each movie
                        className="row__poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.title || movie.name || "Movie Poster"} // Fallback alt text
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
