const express = require("express");
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.static('Front/build'))

function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const Client_ID = '9f0488cb2b5948e09954ff6bbfaa3c54';
const redirect = "http://localhost.8888/first";
const state = generateRandomString(16)
const stateKey = 'spotify_auth_state';
const scope = 'user-read-private user-read-email';

app.get("/first", (req,res)=>{
  let url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(Client_ID);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(redirect);
  url += '&state=' + encodeURIComponent(state);
  console.log(url)
  res.send({
    msg: url
  })
})

app.get('/*', (_, res)=>{
  res.sendFile(path.join(__dirname, './Front/build/index.html'))
})
  
const PORT = process.env.PORT || 8888;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));