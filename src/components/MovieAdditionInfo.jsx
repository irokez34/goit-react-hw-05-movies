const { Link } = require('react-router-dom');

const MovieAdditionInfo = () => {
  return (
    <div className="addition-info">
      <ul>
        <Link to="cast">
          <li>
            <h2>Cast</h2>
          </li>
        </Link>
        <Link to="reviews">
          <li>
            <h2>Reviews</h2>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default MovieAdditionInfo;
