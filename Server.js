
import express from "express";

import path from "path";
const __dirname = path.resolve()

import spotify from "spotify-web-api-node";
import cookieParser from "cookie-parser";
import _ from 'lodash';
import alert from "alert";
import * as dotenv from 'dotenv'

 dotenv.config()


const server = express();

server.use(express.json());
server.use(cookieParser("USER"));
server.use(express.static('Front/build'));

///PLAYLIST and Home PAGE

// form who cames from front
let User ;
let Emotion;
let itemid;


//time refresh token variable

const Secret = process.env.Secret
const Client = process.env.ClientID


const spotifytoken = new  spotify({
  clientId: Client,
  clientSecret: Secret,
})

const  TokenRefresh = ()=>{
    spotifytoken.clientCredentialsGrant().then(
    function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifytoken.setAccessToken(data.body['access_token']);
    },
    function(err) {
        console.log('Something went wrong when retrieving an access token', err);
    }
)};



//Beginning
setTimeout(()=>{TokenRefresh()},0);
//loop infinitely
setInterval(()=>{TokenRefresh();
    alert("Rafraichir")},3.61e+6);

// receive emotion from front
server.post("/search",(req,res)=>{
    const { emo } = req.body;
    if (! emo){
        return res.status(400).send({status:'failed'});
    }
  Emotion = emo;   
    })

//sending Tracks matching emotion
server.get("/emotion", (req, res)=>{
    spotifytoken.searchTracks(Emotion)
         .then(function(data) {
             console.log('Search by '+Emotion, data.body);
             res.send({
                DataEmotion: data.body
             });
         }, function(err) {
             console.error(err);
         });
})

//recieved user from front to put into cookie

server.post("/playlist",(req,res) => {
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


//sending request playlist and user
server.get("/playlist", (req, res)=>{
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

server.get("/home",(req,res)=>{
    spotifytoken.getUser(User)
        .then(function(data) {
            console.log('Retrieved UserStory', data.body);
            res.send({
                DataUser: data.body
            });
        },function(err) {
            console.log('Something went wrong!', err);
        });
})
//recieved id from front to get playlist items

server.post("/playlist/id",(req,res) => {
    const { id } = req.body;
    if (! id){
        return res.status(400).send({status:'failed'});
    }
    itemid = id;
    console.log(itemid)

})
//sending request playlistitems
server.get("/playlistitems", (req, res)=>{
    spotifytoken.getPlaylistTracks(itemid).then(function (data){
        console.log('Retrieved items', data.body);
        res.send({
            Playlistitems: data.body
        })
    },function (err){
        console.log('Something went wrong!', err);
    })

})





server.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, './Front/build/index.html'))

})


const PORT = process.env.PORT || 8888;
  
server.listen(PORT, console.log(`Server started on port ${PORT}`));




export  default server;