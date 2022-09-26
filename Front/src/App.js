import './App.css';
import React, {useEffect, useState, Component} from "react";
import axios from 'axios';
const spotifyApi = require("spotify-web-api-node")


const App = () => {

   const [token, settoken] = useState("");




   const Login = async () => {
       const data = await fetch('/first');
       const body = await data.json();
       settoken(body.token);
   }


    return (
        <div className="App">
            <body>
            <button onClick={Login} type="submit">COmmencons</button>
            <p>{token}</p>
            </body>
        </div>
    );
}



export default App;
