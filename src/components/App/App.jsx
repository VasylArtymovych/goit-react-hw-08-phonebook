import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/Header';
import { authOperations, authSelectors } from 'redux/auth';
import routesPath from 'routesPath';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const PhoneBook = lazy(() => import('../PhoneBook'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
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
            <Route
              path={routesPath.unknown}
              element={<h1>404 unknown path</h1>}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
