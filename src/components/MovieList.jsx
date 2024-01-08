import { Link, useLocation } from 'react-router-dom';
import './styleComponents/MovieList.css';
const MovieList = ({ movies }) => {
  const location = useLocation();
  if (movies.length <= 0) {
    return <p>No avaible films</p>;
  }
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <ul className="movies-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id} state={location}>
          <li className="movies-item">
            <span>{movie.title || movie.name}</span>
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
                  : defaultImg
              }
              alt={movie.title || movie.name}
              className="movie-img"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
