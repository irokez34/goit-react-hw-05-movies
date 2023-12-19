import { NavLink, Routes, Route } from 'react-router-dom';
import './styleComponents/App.css';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import '../fetch/trendingMovies'
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Route>
    </Routes>
  );
};
