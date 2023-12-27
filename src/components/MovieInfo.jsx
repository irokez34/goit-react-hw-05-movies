export const MovieInfo = ({ movie }) => {
  return (
    <>
      {movie && (
        <div className="container-movie-info">
          <div className="movie-info">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
              alt={movie.title || movie.name}
              className="movie-img"
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
        </div>
      )}
    </>
  );
};
