import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';

function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const Client_Id = '9f0488cb2b5948e09954ff6bbfaa3c54';
const secret = "381942fa91ea4627b34baa34c486800c";
const redirect = "http://localhost.8888/first";
const state = generateRandomString(16)
const stateKey = 'spotify_auth_state';
localStorage.setItem(stateKey, state);
var scope = ['user-read-private user-read-email'];

function  App(){
    const handleClick = async() => {

        const data = await fetch('first');
        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(Client_Id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect);
        url += '&state=' + encodeURIComponent(state);

    }

    return (
        <div className="container">
            <button onClick={handleClick}>login to spotify</button>
            <p>{url}</p>
            <button >Get play</button>
        </div>
    );
}



export default App;
