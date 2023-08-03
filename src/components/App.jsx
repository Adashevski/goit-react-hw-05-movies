import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('components/Pages/Home/Home'));
const Movies = lazy(() => import('components/Pages/Movies/Movies'));
const NotFound = lazy(() => import('components/Pages/NotFound/NotFound'));
const MovieDetails = lazy(() =>
  import('components/Pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
