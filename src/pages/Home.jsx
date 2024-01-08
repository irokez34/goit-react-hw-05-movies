import React, { useEffect, useState } from 'react';
import { getMovies } from 'fetch/trendingMovies';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import './stylePages/Home.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMovies();

        {
          data && setMovies(data.results);
        }
      } catch (error) {
        alert('Виникла помилка');
      } finally {
        setIsLoading(false);
      }
    };
    getAllMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <h2 className="title">Trending today</h2>
        {movies && movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </>
  );
};
export default Home;
