import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Image.css";
import {handleSonJour} from "../../Services/SpotifyApi";

const SonJour = () => {


    //Get playlist matching emotion
    const [Playlist,setPlaylist]= useState({});
     // not working until data are fetched
     const [valid,setvalid]=useState(false);


    const GetPlaylist = ()=>{
        handleSonJour().then(function(MusicSearch){console.log(MusicSearch);setPlaylist(MusicSearch);console.log(Playlist);}  )
            .catch(err=>console.log(err));
    };

   

    return(
        
        <Container>
{valid === true ?
    <Row className={"mx-2 row row-cols-4" } >

        

                <Card >
                    <Card.Img src={(typeof Playlist.album.images[0] !== 'undefined') ? Playlist.album.images[0].url :
                        null
                    } />
                    <Card.Title>{Playlist.album.name} </Card.Title>
                    <Card.Text>ArtistName:{Playlist.artists[0].name}, Popularity:{Playlist.popularity}</Card.Text>
                </Card>

       

    </Row>:<Button id="buttonplaylist" onClick={()=>{
                                if(!valid){
                                    setvalid(true)
                                document.getElementById("buttonplaylist").style.display="none";
                                    GetPlaylist();}
                                }}>See your playlists</Button>}
</Container>
    );

}

export default SonJour;