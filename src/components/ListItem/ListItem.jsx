import { Link, useLocation } from 'react-router-dom';
import styles from './ListItem.module.css';
import PropTypes from 'prop-types';

export const ListItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <li>
      <Link
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
