import { useEffect, useState } from "react";
import './App.css';
import MovieCard from './Components/MovieCard'
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=a4a35b01'

const App= () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setsearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);


  return (
    <div className="app">
      <h1>MovieTown</h1>

      <div className="search">
        <input 
        placeholder="search for movies"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)} />
        <img 
        src={SearchIcon} 
        alt="search"
        onClick={() => searchMovies(searchTerm)} />
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
