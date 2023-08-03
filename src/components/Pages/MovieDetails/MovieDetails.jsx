import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data_URL, IMG_URL } from 'components/utils';
import { fetchData } from 'components/FetchData/FetchData';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { title, overview, genres, vote_average, release_date, poster_path } =
    movie;

  useEffect(() => {
    fetchData(`${Data_URL}/movie/${id}`, setMovie, setIsLoading);
  }, [id]);

  return (
    <div className="container">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <div className={css.movie}>
            <picture>
              <img width={200} src={`${IMG_URL}${poster_path}`} alt="" />
            </picture>

            <div className={css.movie__details}>
              <h2>
                {title} ({new Date(release_date).getFullYear()})
              </h2>
              <p>User Score: {(vote_average * 10).toFixed()}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              <ul className={css.movie__genres}>
                {genres?.map(genre => (
                  <li key={genre.name}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.movie__additional}>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
}
