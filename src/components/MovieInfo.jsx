export const MovieInfo = ({ movie }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      {movie && (
        <div className="container-movie-info">
          <div className="movie-info">
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`
                  : defaultImg
              }
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
