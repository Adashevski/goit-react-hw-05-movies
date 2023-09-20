import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getReview = async id => {
    setIsLoading(true);
    const answer = await getMovieReviews(id);
    setReviews(answer.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getReview(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>There is no review for this movie</p>
      ) : (
        <ReviewsList reviews={reviews} movieId={movieId} />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;
