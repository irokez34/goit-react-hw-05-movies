import { getSingleMovie } from 'fetch/trendingMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/stylePages/movieDetails.css';
export const Movie = ({}) => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await getSingleMovie(movieId);
        setMovie(data);
      } catch (error) {
        alert('фільм не знайдено');
      }
    };
    movieId && getMovie();
  }, [movieId]);

  return (
    <div className='movie-container'>
      <button>Go back</button>
      {movie && (
        <div className="container-movie-info">
          <img
                src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
                alt={movie.title || movie.name}
                className='movie-img'
              />
          <ul className="movie-list">
            <li>
              <h2>{movie.title || movie.name}</h2>
            </li>
            <li>
              <h3>Overview</h3>
              <span>{movie.overview}</span>
            </li>
            <li>
              <h3>Genres</h3>
              <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
