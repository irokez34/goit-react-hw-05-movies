import React, { useEffect, useState } from 'react';
import { getReviews } from 'fetch/trendingMovies';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import './styleComponents/MovieReviews.css';
const MovieReviews = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getAllReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getReviews(movieId);
        setReview(data);
      } catch (error) {
        alert('Виникла помилка');
      } finally {
        setIsLoading(false);
      }
    };

    if (!review) {
      getAllReviews();
    }
  }, [review, movieId]);
  const reviews =
    review &&
    review.map(author => (
      <li key={author.id}>
        <h2>{author.author}</h2>
        <p>{author.content}</p>
      </li>
    ));

  return (
    <div className="movie-reviews">
      {isLoading && <Loader />}
      {review && review.length ? <ul className="reviews-list">{reviews}</ul> : <h2>No Reviews</h2>}
    </div>
  );
};

export default MovieReviews;
