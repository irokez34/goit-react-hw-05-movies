const { Link, useLocation } = require('react-router-dom');

const MovieAdditionInfo = () => {
  const { state } = useLocation();

  return (
    <div className="addition-info">
      <ul>
        <Link to="cast" state={state}>
          <li>
            <h2>Cast</h2>
          </li>
        </Link>
        <Link to="reviews" state={state}>
          <li>
            <h2>Reviews</h2>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default MovieAdditionInfo;
