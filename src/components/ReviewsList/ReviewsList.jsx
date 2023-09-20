import styles from './ReviewsList.module.css';
import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews, movieId }) => {
  return (
    <ul className={styles.list}>
      {reviews.map((review, index) => (
        <li className={styles.item} key={`${movieId}r${index + 1}`}>
          <h5 className={styles.author}>{review.author}</h5>
          <p className={styles.review}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  movieId: PropTypes.string.isRequired,
};
