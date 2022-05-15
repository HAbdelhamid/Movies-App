import { useEffect, useState } from "react";
import './App.css';
import MovieCard from './Components/MovieCard'
import SearchIcon from './search.svg';


const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const API_URL = 'http://www.omdbapi.com?apikey=f136a832'

const App= () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);


  return (
    <div className="app">
      <h1>MovieTown</h1>

      <div className="search">
        <input 
        placeholder="search for movies"
        value="batman"
        onChange={() => {}} />
        <img 
        src={SearchIcon} 
        alt="search"
        onClick={() => {}} />
      </div>

      {
        movies?.length > 0 
        ? ( 
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie = {movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
