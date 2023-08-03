const { Link } = require('react-router-dom');

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {!movies.length
        ? 'Movie with that name not found! Please try again.'
        : movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
    </ul>
  );
};
