import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import { authOperations } from 'redux/auth';

const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const PhoneBook = lazy(() => import('../PhoneBook/PhoneBook'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('app use');
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="contacts" element={<PhoneBook />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
