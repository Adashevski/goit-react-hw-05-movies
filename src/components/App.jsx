import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout';
import NotFound from 'pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const DisplayMovies = lazy(() =>
  import('../pages/DisplayMovies/DisplayMovies')
);
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage.jsx'));
const MovieCast = lazy(() => import('../pages/CastPage/CastPage.jsx'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<DisplayMovies />} />
          <Route path="/movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
