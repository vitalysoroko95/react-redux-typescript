import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import About from '../Pages/About/About';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import MainPage from '../Pages/MainPage/MainPage';

import './App.scss';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
