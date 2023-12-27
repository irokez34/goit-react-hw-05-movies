import { getSingleMovie } from 'fetch/trendingMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/stylePages/movieDetails.css';
import Loader from 'components/Loader';
import { MoviesDetailsComponent } from 'components/MoviesDetailsComponent';
 const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getSingleMovie(movieId);
        setMovie(data);
      } catch (error) {
        alert('Виникла помилка');
      } finally {
        setIsLoading(false);
      }
    };
    movieId && getMovie();
  }, [movieId]);

  return (
    <div className="movie-container">
      {isLoading && <Loader />}
      {movie ? <MoviesDetailsComponent movie={movie} /> : <h2>No info</h2>}
    </div>
  );
};
export default Movie;