import { Link } from 'react-router-dom';

export const MoviesResult = ({ movies }) => {
  const item = movies.map(movie => (
    <Link to={`/movies/${movie.id}`} key={movie.id}>
      <li className="movies-item">
        <span>{movie.title || movie.name}</span>
        <img src={movie.backdrop_path} alt="" />
      </li>
    </Link>
  ));
  return <ul>{item}</ul>;
};
