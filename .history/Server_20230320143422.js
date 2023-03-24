import express from "express";

import path from "path";
const __dirname = path.resolve();
import axios from "axios";
import querystring from "query-string";
import spotify from "spotify-web-api-node";
import cookieParser from "cookie-parser";
import _ from "lodash";
import alert from "alert";
import * as dotenv from "dotenv";
import { RandGenre } from "./Front/src/Component/genre/genre.js";
import SpotifyWebApi from "spotify-web-api-node";
import { wait } from "@testing-library/user-event/dist/utils/index.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cookieParser("USER"));
server.use(express.static("Front/build"));

///PLAYLIST and Home PAGE

// form who cames from front
let User;
let Emotion;
let itemid;
let searchresult;
let access_token, token_type;
const generateRandomString = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

//time refresh token variable

const Secret = process.env.Secret;
const Client = process.env.ClientID;
const REDIRECT_URI = "http://localhost:8888/home";
const stateKey = "spotify_auth_state";

const spotifytoken = new spotify({
  clientId: Client,
  clientSecret: Secret,
});

var credentials = {
  clientId: Client,
  clientSecret: Secret,
  redirectUri: REDIRECT_URI,
};

var SpotifyUserToken = new SpotifyWebApi(credentials);

server.get("/login", (req, res) => {
  const scope =
    "user-read-private user-read-email user-top-read playlist-modify-public playlist-read-private playlist-modify-private user-library-modify user-library-read";
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const queryParams = querystring.stringify({
    client_id: Client,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope,
  });
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

server.get("/home", (req, res) => {
  const code = req.query.code || null;
  SpotifyUserToken.authorizationCodeGrant(code).then(
    function (data) {
      console.log("The token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      console.log("The refresh token is " + data.body["refresh_token"]);

      // Set the access token on the API object to use it in later calls
      SpotifyUserToken.setAccessToken(data.body["access_token"]);
      SpotifyUserToken.setRefreshToken(data.body["refresh_token"]);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
  res
    .cookie("Connected", "True", {
      sameSite: "none",
      secure: true,
    })
    .redirect("/");
});

const TokenRefresh = () => {
  spotifytoken.clientCredentialsGrant().then(
    function (data) {
      console.log("The access token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);

      // Save the access token so that it's used in future calls
      spotifytoken.setAccessToken(data.body["access_token"]);
    },
    function (err) {
      console.log("Something went wrong when retrieving an access token", err);
    }
  );
};

const UserTokenRefresh = () => {
  SpotifyUserToken.refreshAccessToken().then(
    function (data) {
      console.log("The access token has been refreshed!");

      // Save the access token so that it's used in future calls
      SpotifyUserToken.setAccessToken(data.body["access_token"]);
    },
    function (err) {
      console.log("Could not refresh access token", err);
    }
  );
};

//Beginning
setTimeout(() => {
  TokenRefresh();
}, 0);
//loop infinitely
setInterval(() => {
  TokenRefresh();
  alert("Rafraichir");
}, 3.61e6);

setInterval(() => {
  UserTokenRefresh();
  alert("Rafraichir");
}, 3.61e6);

// receive emotion from front
server.post("/search", (req, res) => {
  const { emo } = req.body;
  if (!emo) {
    return res.status(400).send({ status: "failed" });
  }
  Emotion = emo;
});

// add album to library
server.post("/album/id", (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({ status: "failed" });
  }
  SpotifyUserToken.containsMySavedAlbums([id]).then(
    function (data) {
      // An array is returned, where the first element corresponds to the first album ID in the query
      var albumIsInYourMusic = data.body[0];

      if (albumIsInYourMusic) {
        console.log("Album was found in the user's Your Music library");
      } else {
        console.log("Album was not found.");
        SpotifyUserToken.addToMySavedAlbums([id]).then(
          function (data) {
            console.log("Added album!");
          },
          function (err) {
            console.log("Something went wrong!", err);
          }
        );
      }
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

//sending Tracks matching emotion
server.get("/emotion", (req, res) => {
  spotifytoken.searchTracks("track:" + Emotion + " year:2020-2022").then(
    function (data) {
      console.log("Search by " + Emotion, data.body);
      res.send({
        DataEmotion: data.body,
      });
    },
    function (err) {
      console.error(err);
    }
  );
});

//sending Top Tracks and Artist of User
server.get("/getTop", (req, res) => {
  let result = [];
  SpotifyUserToken.getMyTopArtists()
  .then(function(data) {
     result.push(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  }).then(SpotifyUserToken.getMyTopTracks()
  .then(function(data) {
    result.push(data.body);
    if(result.length == 2){
    res.send({
      DataUser: result,
    });
  }
  }, function(err) {
    console.log('Something went wrong!', err);
  }))
});

// get new releases
server.get("/release", (req, res) => {
  spotifytoken.getNewReleases({ limit: 20, offset: 0, country: "FR" }).then(
    function (data) {
      res.send({
        DataRelease: data.body,
      });
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

//sending request tracks by genre
server.get("/jour", (req, res) => {
  var genre = RandGenre();
  var tab = [];
  var result;
  var usable = 0;
  var popMax = 0;
  spotifytoken.getAvailableGenreSeeds()
  .then(function(data) {
    let genreSeeds = data.body;
    console.log(genreSeeds);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  // fait 50 requetes pour avoir 1000 musique diffèrentes
  for (let i = 0; i < 50; i++) {
    spotifytoken.searchTracks("genre:" + genre, { offset: i * 20 }).then(
      function (data) {
        result = data.body.tracks;
        // vérifie que chaque element de la requete satisfait un minimum de popularité
        for (const [key, value] of Object.entries(result.items)) {
          if (value?.popularity > popMax && value?.popularity > 30) {
            tab.push(value);
            // modifie la popularité maximum en accordance avec les derniers titres ajouté
            if (value?.popularity > popMax) {
              popMax = value.popularity;
            }
          }
        }
        if (i == 49) {
          // filtre les titres n'ayant pas la popularité maximal
          for (let y = 0; y < tab.length; y++) {
            if (tab[y].popularity < popMax) {
              tab.splice(y, 1);
            }
          }
          // si plusieurs titre possède la meme popularité, on en garde juste 1
          if (tab.length > 1) {
            tab.splice(0, tab.length - 1);
          }
          console.log(tab);
          res.send({
            DataJour: tab[0],
          });
        }
      },
      function (err) {
        console.error(err);
      }
    );
  }
});

//sending request playlist and user
server.get("/playlist", (req, res) => {
  SpotifyUserToken.getMe().then(
    function (data) {
      res.cookie("Owner", data.body.id, {
        sameSite: "none",
        secure: true,
      });
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
  SpotifyUserToken.getUserPlaylists().then(
    function (data) {
      console.log("Retrieved playlists", data.body);
      res.send({
        Dataplaylist: data.body,
      });
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

//recieved id from front to get playlist items
server.post("/playlist/id", (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({ status: "failed" });
  }
  itemid = id;
  console.log(itemid);
});

// add track to playlist
server.post("/playlist/add", (req, res) => {
  console.log(req.body.result[1]);
  SpotifyUserToken.addTracksToPlaylist(req.body.result[1], [req.body.result[0]]).then(
    function (data) {
      console.log("added items", data.body);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});


//sending request playlistitems
server.get("/playlistitems", (req, res) => {
  spotifytoken.getPlaylistTracks(itemid).then(
    function (data) {
      console.log("Retrieved items", data.body);
      res.send({
        Playlistitems: data.body,
      });
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

server.post("/research", (req, res) => {
  const { names } = req.body;
  console.log(names);
  if (!names) {
    return res.status(400).send({ status: "failed" });
  }
  searchresult = names;
});

server.get("/research2", (req, res) => {
  spotifytoken.searchTracks("track:" + searchresult).then(
    function (data) {
      console.log("Search by " + data.body.tracks);
      res.send({
        DataSearch: data.body,
      });
    },
    function (err) {
      console.error(err);
    }
  );
});

server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./Front/build/index.html"));
});

const PORT = process.env.PORT || 8888;

server.listen(PORT, console.log(`Server started on port ${PORT}`));

export default server;
