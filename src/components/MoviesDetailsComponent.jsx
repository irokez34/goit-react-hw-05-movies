import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MovieInfo } from './MovieInfo';
import MovieAdditionInfo from './MovieAdditionInfo';

export const MoviesDetailsComponent = ({ movie }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(state ?? '/', { state: 'go back' });
  };

  return (
    <>
      <button onClick={handleBack}>Go back</button>
      <MovieInfo movie={movie} />
      <MovieAdditionInfo />
      <Outlet />
    </>
  );
};
