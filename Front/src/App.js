import React from 'react';
import Main from "./Main";
import  './App.css';
import { Link } from "react-router-dom";
import image from './Muzik.jpeg'

    const App = () => (
        <html>
        <head>
        <title>Muzik</title>
        </head>
        <body>
      <div  >
        <Link to="/">
        <img src={image} alt="image" width="100" height={"60"}></img>
        </Link>
        <Main />
      </div>
        </body>
</html>
    );

    export default App;