import React, { useEffect, useState } from 'react';
import { Data_URL } from 'components/utils';
import { Loader } from 'components/Loader/Loader';
import { fetchData } from 'components/FetchData/FetchData';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(
      `${Data_URL}/trending/movie/day`,
      setMovies,
      setIsLoading,
      'results'
    );
  }, []);

  return (
    <div className="container">
      <h1>Trending Today!</h1>
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
