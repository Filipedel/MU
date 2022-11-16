import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Image.css"
import {submitEmotion,handleEmotion} from "../../Services/SpotifyApi";

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

    return(
        
        <Container>
            {open === true ?
                            //if cookie exist
                            <Button id="buttonplaylist" onClick={()=>{
                                if(!valid){
                                    setvalid(true)
                                document.getElementById("buttonplaylist").style.display="none";
                                    GetPlaylist();}
                                }}>See your playlists</Button>
                            :
    <InputGroup className={"mb-3"} size={"lg"}>
    <Button onClick={() => {submitEmotion("sad").catch(err=>console.log(err));setopen(true);}}>Triste</Button>
    <Button onClick={() => {submitEmotion("happy").catch(err=>console.log(err));setopen(true);}}>Heureux</Button>
    <Button onClick={() => {submitEmotion("depressed").catch(err=>console.log(err));setopen(true);}}>Deprimé</Button>
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
                </Card>)

        }) : null}

    </Row>:null}
</Container>
    );
}

export default emotion;