import React, { useEffect, useState } from 'react';
import { getActors } from 'fetch/trendingMovies';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const MovieCast = () => {
  const [allCast, setAllCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const data = await getActors(movieId);
        setAllCast(data);
      } catch (error) {
        alert('Виникла помилка');
      } finally {
        setIsLoading(false);
      }
    };

    if (!allCast) {
      getCast();
    }
  }, [allCast, movieId]);
  console.log(allCast && allCast.cast.poster_path);
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  const actors =
    allCast &&
    allCast.cast &&
    allCast.cast.map(actor => (
      <li key={actor.id}>
        <img
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
              : defaultImg
          }
          width={150}
          alt="poster"
        />
        <span>{actor.name}</span>
        <span>{actor.character}</span>
      </li>
    ));

  return (
    <div className="movie-cast">
      {isLoading && <Loader />}
      <ul>{actors}</ul>
    </div>
  );
};

export default MovieCast;
