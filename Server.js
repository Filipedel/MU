const express = require("express");
const server = express();
const path = require('path');
const spotify = require("spotify-web-api-node")
const cookieParser = require('cookie-parser');
 require("dotenv").config();


server.use(express.json());
server.use(cookieParser("USER"));
server.use(express.static('Front/build'));





//GEt the token and send to the front

const Secret = process.env.Secret
const Client = process.env.ClientID
const spotifytoken = new  spotify({
  clientId: Client,
  clientSecret: Secret
})

spotifytoken.clientCredentialsGrant().then(
    function (data) {
        console.log("The access token is " + data.body["access_token"])
        spotifytoken.setAccessToken(data.body["access_token"])
    },
    function (error) {
        console.log('Something went wrong!',error);
    }
    );

//sending request playlist
server.get("/token", (req, res)=>{
//sending the response to the front
res.send({
    token: spotifytoken.getAccessToken()
})
})




//recieved user from front to put into cookie

server.post("/user",(req,res) => {
    const { user } = req.body;
    if (! user){
        return res.status(400).send({status:'failed'});
    }
    res.cookie("USERID", user.toString(),{
        sameSite:"none",
        secure: true
    }).send("cookie set");
})



server.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './Front/build/index.html'))
})
  
const PORT = process.env.PORT || 8888;
  
server.listen(PORT, console.log(`Server started on port ${PORT}`));