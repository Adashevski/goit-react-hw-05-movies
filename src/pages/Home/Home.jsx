import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrending } from 'services/api';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingList, setTrendingList] = useState([]);

  const getTrendingList = async () => {
    setIsLoading(true);
    const movies = await getTrending();
    setTrendingList(movies.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getTrendingList();
  }, []);

  return (
    <>
      <h2 className={styles.heading}>Today's trending:</h2>
      <MoviesList movies={trendingList} />
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
