import { Routes, Route } from 'react-router-dom';
import PhoneBook from 'components/PhoneBook';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route />
        <Route />
      </Routes>
    </>
  );
};

export default App;
