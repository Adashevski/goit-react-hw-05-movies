import { ListItem } from 'components/ListItem/ListItem';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <>
      <ul className={styles.list}>
        {movies.map(el => {
          return <ListItem key={el.id} id={el.id} title={el.title} />;
        })}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
