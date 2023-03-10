import React, {useState} from "react";
import {Container, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Image.css"
import "../Playlist/playlist.css"
import {handlePlaylist, submitidback,submitTrackback} from "../../Services/SpotifyApi";




const playlist = () => {

   //see playlist (cookie)
    const [open,setopen]=useState(false);
    //Get playlistUsers
    const [Playlist,setPlaylist]= useState({});

    // récupère la liste des cookies
    const cookieList = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

    const GetPlaylist = ()=>{
        handlePlaylist().then(getData=>setPlaylist(getData))
            .catch(err=>console.log(err));
    };

    // vérifie qu'il y ait un track stocké en session puis l'envoi vers le back
    const AddPlaylist = (id)=>{
        if(sessionStorage.getItem("TracksToPlaylist") != null){
            submitTrackback([sessionStorage.getItem("TracksToPlaylist"),id]).catch(
                err=>console.log(err));
        }
        sessionStorage.removeItem("TracksToPlaylist");
        
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
                                    {/* vérifie l'url et affiche le bouton si on est sur l'url d'ajout de track */}
                                    {window.location.href == "http://localhost:8888/playlistsAdd" ?
                                    <button type="button" id="buttonAddPlaylist" class={Playlist.owner.id == cookieList.Owner ? "btn btn-primary" : "btn btn-primary Disabled"} onClick={()=>{AddPlaylist(Playlist.id);} }>
                                        Add to playlist
                                    </button> : null}
                                </Card>)

                        }) : null }

                    </Row>:null}

            </Container>

        );

}



export default playlist;
