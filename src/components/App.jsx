import { Routes, Route } from 'react-router-dom';
import './styleComponents/App.css';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Error } from 'pages/Error';
import '../fetch/trendingMovies';
import { Movie } from 'pages/MovieDetails';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />} />
        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
  );
};
