import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home/home';
import Playlist from './Component/Playlist/playlist';
import Tracks from "./Component/Playlist/Tracks/Tracks";
import Emotion from "./Component/emotion/emotion";
import Jour from "./Component/SonJour/SonJour";

const Main = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/playlist' element={<Playlist/>} />
        <Route path={"/playlist/Tracks"} element={<Tracks/>}/>
        <Route path='/emotion' element={<Emotion/>}/>
        <Route path='/sonjour' element={<Jour/>}/>
    </Routes>
  );
}

export default Main;