import React from 'react';
import Main from "./Main";
import './App.css';
import { Link } from "react-router-dom";

    const App = () => (
      <div className='app'>
        <Link to="/">
        <h1>Muzik</h1>
        </Link>
        <Main />
      </div>
    );

    export default App;