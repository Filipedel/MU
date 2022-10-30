
import express from "express";

import path from "path";
import spotify from "spotify-web-api-node";
import cookieParser from "cookie-parser";
import _ from 'lodash';
import alert from "alert";
import * as dotenv from 'dotenv'

import {wait} from "@testing-library/user-event/dist/utils/index.js";
 dotenv.config()


const server = express();

server.use(express.json());
server.use(cookieParser("USER"));
server.use(express.static('Front/build'));

///PLAYLIST and Home PAGE

// form who cames from front
let User ;
let itemid;


//time refresh token variable

const Secret = process.env.Secret
const Client = process.env.ClientID


const spotifytoken = new  spotify({
  clientId: Client,
  clientSecret: Secret,
})

//scrapping

//arriere plan un site  web  et on recupere le code qui est dans l'url



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
setTimeout(()=>{TokenRefresh();
    alert("Rafraichir")},3.61e+6);


server.get("/search",(req,res)=>{
    spotifytoken.searchTracks('Love')
        .then(function(data) {
            console.log('Search by "Love"', data.body);
            res.send(data.body);
        }, function(err) {
            console.error(err);
        });})

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


//sending request playlist and user
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

server.get("/getUser",(req,res)=>{
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





server.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, './Front/build/index.html'))

})


const PORT = process.env.PORT || 8888;
  
server.listen(PORT, console.log(`Server started on port ${PORT}`));




export  default server;