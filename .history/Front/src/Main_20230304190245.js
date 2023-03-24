import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home/home';
import Playlist from './Component/Playlist/playlist';
import Tracks from "./Component/Playlist/Tracks/Tracks";
import Emotion from "./Component/emotion/emotion";
import Jour from "./Component/SonJour/SonJour";
import Rel from "./Component/Releases/release";
import Rech from "./Component/search/research";

const Main = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/playlists' element={<Playlist/>} />
      <Route path='/playlistsAdd' element={<Playlist/>} />
        <Route path={"/playlist/Tracks"} element={<Tracks/>}/>
        <Route path='/emotions' element={<Emotion/>}/>
        <Route path='/sonjour' element={<Jour/>}/>
        <Route path='/releases' element={<Rel/>}/>
        <Route path='/searchTrack' element={<Rech/>}/>
    </Routes>
  );
}

export default Main;