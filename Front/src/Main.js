import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Playlist from './pages/playlist';


const Main = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/playlist' element={<Playlist/>} />

    </Routes>
  );
}

export default Main;