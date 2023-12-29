import { Routes, Route } from 'react-router-dom';
import './styleComponents/App.css';
import { Layout } from './Layout';

import { Error } from 'pages/Error';
import '../fetch/trendingMovies';

import { Suspense, lazy } from 'react';
import Loader from './Loader';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Movie = lazy(() => import('../pages/MovieDetails'));
const MovieCast = lazy(() => import('../components/MovieCast'));
const MovieReviews = lazy(() => import('../components/MovieReviews'));
export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<Movie />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
