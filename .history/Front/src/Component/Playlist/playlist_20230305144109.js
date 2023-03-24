import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Image.css"
import "../Playlist/playlist.css"
import {handlePlaylist, submitidback,submitTrackback} from "../../Services/SpotifyApi";
import {getCookie} from "../../Services/CookieManipulation";




const playlist = () => {

   //data user
    const [user, setuserid] = useState("");
   //see playlist (cookie)
    const [open,setopen]=useState(false);
    //Get playlistUsers
    const [Playlist,setPlaylist]= useState({});

    var cookie;


    const GetPlaylist = ()=>{
        handlePlaylist().then(getData=>setPlaylist(getData))
            .catch(err=>console.log(err));
    };

    const AddPlaylist = ()=>{
        if(sessionStorage.getItem("TracksToPlaylist") != null){
            console.log(getCookie());
            getCookie().then(function(result){
                cookie = result.Owner;
            });
            console.log(cookie);
         //   submitTrackback(sessionStorage.getItem("TracksToPlaylist"),)
        }
      //  sessionStorage.removeItem("TracksToPlaylist");
        
    }

    return (

            <Container>

                        {document.cookie.indexOf("Connected=") !== -1?
                            //if cookie exist
                            <Button id="buttonplaylist" onClick={()=>{
                                if(!open){
                                    setopen(true)
                                document.getElementById("buttonplaylist").style.display="none";
                                    GetPlaylist();}
                                }}>See your playlists</Button>
                            :
                            // no cookie

                            <Row className={"mx-2 row row-cols-12"}>
                            <h1>Veuillez vous identifier en cliquant sur Connexion</h1>
                          </Row>

                            }

                {open === true ?
                    <Row className={"mx-2 row row-cols-4" } >

                        {Playlist.items  ? Playlist.items.map( (Playlist) => {
                            return(

                                <Card >
                                    <Card.Img src={(typeof Playlist.images[0] !== 'undefined') ? Playlist.images[0].url :
                                        null
                                    } />
                                    <Card.Title>{Playlist.name}</Card.Title>
                                    <a href={"/playlist/Tracks"}>
                                    <button type="button" class="btn btn-primary" onClick={()=>{submitidback(Playlist.id);} }>
                                        See tracks
                                    </button>
                                    </a>
                                    {window.location.href == "http://localhost:8888/playlistsAdd" ?
                                    <button type="button" id="buttonAddPlaylist" class="btn btn-primary" value={Playlist.id} onClick={()=>{AddPlaylist();} }>
                                        Add to playlist
                                    </button> : null}
                                </Card>)

                        }) : null }

                    </Row>:null}

            </Container>

        );

}



export default playlist;
