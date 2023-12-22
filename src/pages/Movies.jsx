import Loader from 'components/Loader';
import MovieList from 'components/MovieList';

import { getSearchProducts } from 'fetch/trendingMovies';
import { useState } from 'react';
import { useCallback } from 'react';

export const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const getMovieWithSearch = useCallback(async query => {
    try {
      setIsLoading(true);
      const resp = await getSearchProducts(query);
      setMovies(resp);
    } catch (error) {
      alert('Помилка');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };
  const handleSubmit = e => {
    setMovies(null);
    e.preventDefault();
    getMovieWithSearch(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="search"
          className="movies-search"
          id="moviesInputSeatch"
          onChange={handleChange}
        />
        <button>Search</button>
        {isLoading && <Loader />}
        {movies && <MovieList movies={movies} /> }
        {!movies && <h2>not found</h2>}
      </div>
    </form>
  );
};
