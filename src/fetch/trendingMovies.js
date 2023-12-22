import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWEyNDBlY2ViMTYwMjliMjllMjg0YzBkYWM4MjI3MyIsInN1YiI6IjY1ODFiZDAwMGU2NGFmMDgxZWE5M2NiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.br7v22TADLaN-7tnnXi4kVpaMSdjHVZ5RWzC8GlEWNU'; // Замените этот токен на свой

export const getSingleMovie = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    alert('фільм не знайдено')
  }
};
