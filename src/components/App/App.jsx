import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import { lazy, Suspense } from 'react';

const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const PhoneBook = lazy(() => import('../PhoneBook/PhoneBook'));

const App = () => {
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
