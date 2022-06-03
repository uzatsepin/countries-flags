import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<HomePage countries={countries} setCountries={setCountries} />}
          />
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
