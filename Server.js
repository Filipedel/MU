const express = require("express");
const server = express();
const path = require('path');
const spotify = require("spotify-web-api-node")
const cookieParser = require('cookie-parser');
 require("dotenv").config();


server.use(express.json());
server.use(cookieParser("USER"));
server.use(express.static('Front/build'));

///PLAYLIST PAGE

// form who cames from front
let User ;
let itemid;


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
    function (errormachine2) {
        console.log('Something went wrong!',errormachine2);
    }
    );

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
    User = user;

})

//sending request playlist
server.get("/getplaylist", (req, res)=>{
    spotifytoken.getUserPlaylists(User)
        .then(function(data) {
            console.log('Retrieved playlists', data.body);
            res.send({
                Dataplaylist: data.body
            });
        },function(err) {
            console.log('Something went wrong!', err);
        });

})
//recieved id from front to get playlist items

server.post("/id",(req,res) => {
    const { id } = req.body;
    if (! id){
        return res.status(400).send({status:'failed'});
    }
    itemid = id;
    console.log(itemid)

})
//sending request playlistitems
server.get("/getplaylistitems", (req, res)=>{
    spotifytoken.getPlaylistTracks(itemid).then(function (data){
        console.log('Retrieved items', data.body);
        res.send({
            body: data.body
        })
    },function (err){
        console.log('Something went wrong!', err);
    })

})






server.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, './Front/build/index.html'))
})
  
const PORT = process.env.PORT || 8888;
  
server.listen(PORT, console.log(`Server started on port ${PORT}`));