import { Link } from 'react-router-dom';
import './styleComponents/MovieList.css'
const MovieList = ({ movies }) => {

  if (!movies) {
    return <p>No avaible films</p>;
  }

  return (
    <ul className='movies-list'>
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <li className='movies-item'>
            <span>{movie.title || movie.name}</span>
            <img src={movie.backdrop_path} alt="" />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
