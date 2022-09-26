const express = require("express");
const app = express();
const path = require('path');
const spotify = require("spotify-web-api-node")


app.use(express.json());
app.use(express.static('Front/build'))




// Authentification Spotify API
const Client_ID = "9f0488cb2b5948e09954ff6bbfaa3c54";
const redirect = "http://localhost:8888";
const Secret = "381942fa91ea4627b34baa34c486800c";

// The code that's returned as a query parameter to the redirect URI
var code = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';

var spotifyweb = new spotify();

spotifyweb.setCredentials({clientId:Client_ID,clientSecret: Secret, redirectUri: redirect});

spotify(spotifyweb.getCredentials()).authorizationCodeGrant(code).then(
    function(data) {
        console.log('The token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        console.log('The refresh token is ' + data.body['refresh_token']);

        // Set the access token on the API object to use it in later calls
        spotifyweb.setAccessToken(data.body['access_token']);
        spotifyweb.setRefreshToken(data.body['refresh_token']);
    },
    function(err) {
        console.log('Something went wrong!', err);
    }
);
app.get("/first", (req,res)=>{
//sending the response to the front
res.send({
  token: spotifyweb.getAccessToken()
})
})

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './Front/build/index.html'))
})
  
const PORT = process.env.PORT || 8888;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));