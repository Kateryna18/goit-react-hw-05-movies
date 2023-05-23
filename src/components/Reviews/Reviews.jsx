import React, { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'api/api';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getFetchReviewsMovie = async () => {
      const reviewsMovie = await fetchMovieReviews(movieId);
      setReviews(reviewsMovie);
    };

    getFetchReviewsMovie();
  }, [movieId]);

  return (
    <section>
      <h2>Reviews</h2>
      {reviews.length ? <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul> : <p>No Reviews</p>}
    </section>
  );
}
