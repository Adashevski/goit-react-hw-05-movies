import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'components/FetchData/FetchData';
import { Data_URL } from 'components/utils';

export default function Reviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([1]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(
      `${Data_URL}/movie/${id}/reviews`,
      setReviews,
      setIsLoading,
      'results'
    );
  }, [id]);

  return (
    <div>
      <ul>
        {isLoading ? (
          <div>
            <Loader />
          </div>
        ) : !reviews.length ? (
          'No reviews found for that movie!'
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <h5>
                <em>{review.author}</em>
              </h5>
              <p>{review.content}</p>
            </li>
          ))
        )}
        {}
      </ul>
    </div>
  );
}
