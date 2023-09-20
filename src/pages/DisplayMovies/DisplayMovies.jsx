import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import styles from './DisplayMovies.module.css';
import { Loader } from 'components/Loader/Loader';

const DisplayMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');

  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    e.target.reset();
  };

  const handleDisplayMovies = async query => {
    setIsLoading(true);
    const movieList = await searchMovie(query);
    setMovies(movieList.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!query) return;
    handleDisplayMovies(query);
  }, [query]);

  return (
    <>
      <form className={styles.form} onSubmit={handleSearch}>
        <input type="text" name="Search"></input>
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </>
  );
};

export default DisplayMovies;
