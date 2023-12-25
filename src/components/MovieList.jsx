import { Link, useLocation } from 'react-router-dom';
import './styleComponents/MovieList.css'
const MovieList = ({ movies }) => {
  const location = useLocation();
  if (!movies) {
    return <p>No avaible films</p>;
  }
  

  return (
    <ul className='movies-list'>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id} state={location}>
          <li className='movies-item'>
            <span>{movie.title || movie.name}</span>
            <img src={movie.backdrop_path} alt="" />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default MovieList;
