import './App.css';
import React, {useEffect, useState, Component} from "react";
import axios from 'axios';
import spotify from 'spotify-web-api-node'


const App = () => {

   const [token, settoken] = useState("");
   const [Data, setData] = useState( {});
   var spotifyweb = new spotify();


   const Login = async () => {
       const data = await fetch('/first');
       const body = await data.json();
       settoken(body.token);
       console.log(token);
   }

   const handleGetPlaylists = () => {
       spotifyweb.setAccessToken(token)
       spotifyweb.getUserPlaylists('vtx8rhcjlja1z7weecokwzm71')
           .then(function(data) {
               console.log('Retrieved playlists', data.body);
               setData(data.body)
           },function(err) {
               console.log('Something went wrong!', err);
           });
   }



    return (
        <div className="App">
            <body>
            <button onClick={Login} type="submit">COmmencons</button>

            <button onClick={handleGetPlaylists}>Getplaylists</button>
            <p>{Data.items ? Data.items.map((item) => <p>{item.name}</p>): null}</p>
            </body>
        </div>
    );
}



export default App;
