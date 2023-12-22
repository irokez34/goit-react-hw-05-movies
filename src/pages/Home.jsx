import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/all/day', {
        params: { language: 'en-US' },
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWEyNDBlY2ViMTYwMjliMjllMjg0YzBkYWM4MjI3MyIsInN1YiI6IjY1ODFiZDAwMGU2NGFmMDgxZWE5M2NiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.br7v22TADLaN-7tnnXi4kVpaMSdjHVZ5RWzC8GlEWNU',
        },
      })
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        alert('Нажаль сталась якась помилка');
      });
  }, []);

  const movieList = movies.map(movie => (
    <Link to={`/movies/${movie.id}`} key={movie.id}>
      <li>
        <span>{movie.title || movie.name}</span>
        <img src={movie.backdrop_path} alt="" />
      </li>
    </Link>
  ));

  return (
    <div>
      <h2>Trending today</h2>
      <ul>{movieList}</ul>
    </div>
  );
};
