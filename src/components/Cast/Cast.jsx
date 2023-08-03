import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from 'components/FetchData/FetchData';
import { Loader } from 'components/Loader/Loader';
import { IMG_PLACEHOLDER, IMG_URL, Data_URL } from 'components/utils';

export default function Cast() {
  const { id } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(`${Data_URL}/movie/${id}/credits`, setCast, setIsLoading, 'cast');
  }, [id]);

  const handleImageError = e => {
    e.target.src = IMG_PLACEHOLDER;
  };

  return (
    <div>
      <ul>
        {isLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          cast.map(person => (
            <li key={person.id}>
              <img
                width={100}
                src={`${IMG_URL}${person.profile_path}`}
                alt={person.name}
                onError={handleImageError}
              />
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
