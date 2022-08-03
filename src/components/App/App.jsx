import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import routesPath from 'routesPath';
import { authOperations, authSelectors } from 'redux/auth';
import Header from 'components/Header';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Spinner from 'components/Spinner';
import { Box } from 'components/Box';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const PhoneBook = lazy(() => import('../PhoneBook'));
const UnknownRoute = lazy(() => import('components/UnknownRoute'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Suspense
        fallback={
          <Box display="flex" justifyContent="center" mt="150px">
            {Spinner.customSpinner}
          </Box>
        }
      >
        <Routes>
          <Route path={routesPath.home} element={<Header />}>
            <Route
              index
              element={
                <PublicRoute
                  redirectPath={routesPath.contacts}
                  isLoggedIn={isLoggedIn}
                >
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              element={
                <PublicRoute
                  redirectPath={routesPath.contacts}
                  isLoggedIn={isLoggedIn}
                  restricted
                />
              }
            >
              <Route path={routesPath.login} element={<LoginPage />} />
              <Route path={routesPath.register} element={<RegisterPage />} />
            </Route>

            <Route
              path={routesPath.contacts}
              element={
                <PrivateRoute
                  isLoggedIn={isLoggedIn}
                  redirectPath={routesPath.login}
                >
                  <PhoneBook />
                </PrivateRoute>
              }
            />
            <Route path={routesPath.unknown} element={<UnknownRoute />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
