import React, { useState} from "react";
import {Container, InputGroup, Button, Row, Card} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {submitEmotion,handleEmotion,submitTrackbackem} from "../../Services/SpotifyApi";

const emotion = () =>{
    // not working until data are fetched
    const [open,setopen]=useState(false);
     // not working until data are fetched
     const [valid,setvalid]=useState(false);
    //Get playlist matching emotion
    const [Playlist,setPlaylist]= useState({});


    const GetPlaylist = ()=>{
        handleEmotion().then(MusicSearch => setPlaylist(MusicSearch))
            .catch(err=>console.log(err));
    };
    const AddPlaylist = (id)=>{
        if(sessionStorage.getItem("TracksToPlaylist") != null){
            submitTrackbackem([sessionStorage.getItem("TracksToPlaylist"),id]).catch(
                err=>console.log(err));
        }
        sessionStorage.removeItem("TracksToPlaylist");
        
    }

    return(
        
        <Container>
            {open === true ?
                            //if cookie exist
                            <Button id="buttonplaylist" onClick={()=>{
                                if(!valid){
                                    setvalid(true)
                                document.getElementById("buttonplaylist").style.display="none";
                                    GetPlaylist();}
                                }}>Watch</Button>
                            :
    <InputGroup className={"mb-3"} size={"lg"}>
    <Button onClick={() => {submitEmotion("sad").catch(err=>console.log(err));setopen(true);}}>Triste</Button>
    <Button onClick={() => {submitEmotion("happy").catch(err=>console.log(err));setopen(true);}}>Heureux</Button>
    <Button onClick={() => {submitEmotion("depressed").catch(err=>console.log(err));setopen(true);}}>Deprimé(e)</Button>
    <Button onClick={() => {submitEmotion("angry").catch(err=>console.log(err));setopen(true);}}>Enervé</Button>
    </InputGroup>
}
{valid === true ?
    <Row className={"mx-2 row row-cols-4" } >

        {Playlist.items  ? Playlist.items.map( (Playlist) => {



            return(

                <Card >
                    <Card.Img src={(typeof Playlist.album.images[0] !== 'undefined') ? Playlist.album.images[0].url :
                        null
                    } />
                    <Card.Title>{Playlist.album.name} </Card.Title>
                    <Card.Text>ArtistName:{Playlist.artists[0].name}, Popularity:{Playlist.popularity}</Card.Text>
                    {window.location.href == "http://localhost:8888/playlistsAdd" ?
                                    <button type="button" id="buttonAddPlaylist" class={Playlist.owner.id == cookieList.Owner ? "btn btn-primary" : "btn btn-primary Disabled"} onClick={()=>{AddPlaylist(Playlist.id);} }>
                                        Add to playlist
                                    </button> : null}
                </Card>)

        }) : null}

    </Row>:null}
</Container>
    );
}

export default emotion;