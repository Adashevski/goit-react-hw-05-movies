import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: block;
  padding: 4px 15px;
  border-radius: 5px;
  font-size: 13px;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: rgb(23, 156, 68);

  &.active,
  &:hover,
  &:focus {
    background-color: rgb(95, 145, 199);
  }
`;

export const MovieDetails = ({
  title,
  poster,
  year,
  score,
  overview,
  genres,
  movieId,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <img className={styles.poster} src={poster} alt={`${title} poster`} />
        <div className={styles.info}>
          <h1>
            {title} {year && `(${year})`}
          </h1>
          <p>User score: {Math.round(score * 10)}%</p>
          <h2>Overview:</h2>
          <p>{overview}</p>
          <h2>Genres:</h2>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <h3>Additional information:</h3>
        <ul className={styles.subNav}>
          <li>
            <StyledLink className={styles.subNavLink} to={`cast`}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink className={styles.subNavLink} to={`reviews`}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
};
