import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PopularesPage from './pages/PopularesPage';
import CarteleraPage from './pages/CarteleraPage';
import NavBarApp from './components/NavBarApp';


export const App = () => {
  return (
    <>
      <NavBarApp />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/populares' element={<PopularesPage />} />
        <Route path='/cartelera' element={<CarteleraPage />} />
      </Routes>
    </>
  );
};
