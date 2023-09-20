import { Cast } from 'components/Cast/Cast';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const getCast = async id => {
    setIsLoading(true);
    const answer = await getMovieCast(id);
    setCast(answer.data.cast);
    setIsLoading(false);
  };

  useEffect(() => {
    getCast(movieId);
  }, [movieId]);
  return (
    <>
      {cast.length === 0 ? (
        <p>There is no cast for this movie</p>
      ) : (
        <Cast cast={cast} movieId={movieId} />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default MovieCast;
