import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import { SearchForm } from 'components/searchForm';

import { getSearchProducts } from 'fetch/trendingMovies';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

 const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

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

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    getMovieWithSearch(searchQuery);
  }, [searchParams, getMovieWithSearch]);

  return (
    <>
      {isLoading && <Loader />}
      <SearchForm />
      {!movies.length ? <h2>not found</h2> : <MovieList movies={movies} />}
    </>
  );
};
export default Movies;