const express = require("express");
const server = express();
const path = require('path');
const spotify = require("spotify-web-api-node")


server.use(express.json());
server.use(express.static('Front/build'))


// Authentification Spotify API
const Client_ID = "f0ce212eee7f43a8a4ad290dea54919b";

const Secret = "6f42cdb3f7334b66955f1d5f6823b558";


//GEt the token and send to the front
const spotifyApi = new  spotify({
  clientId: Client_ID,
  clientSecret: Secret
})

spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log("The access token is " + data.body["access_token"])
        spotifyApi.setAccessToken(data.body["access_token"])
    },
    function (err) {
        console.log('Something went wrong!', err);
    }
    );

//sending request
server.get("/authentification", (req, res)=>{
//sending the response to the front
res.send({
    token: spotifyApi.getAccessToken()
})
})

server.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './Front/build/index.html'))
})
  
const PORT = process.env.PORT || 8888;
  
server.listen(PORT, console.log(`Server started on port ${PORT}`));