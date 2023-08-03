import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchData } from 'components/FetchData/FetchData';
import { Data_URL } from 'components/utils';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('query') || '';

  useEffect(() => {
    fetchData(
      `${Data_URL}/search/movie?query=${query}`,
      setMovies,
      setIsLoading,
      'results'
    );
  }, [query]);

  const handleSubmit = async e => {
    e.preventDefault();

    setSearchParams({ query: e.target.elements.query.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}
