import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWEyNDBlY2ViMTYwMjliMjllMjg0YzBkYWM4MjI3MyIsInN1YiI6IjY1ODFiZDAwMGU2NGFmMDgxZWE5M2NiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.br7v22TADLaN-7tnnXi4kVpaMSdjHVZ5RWzC8GlEWNU'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });