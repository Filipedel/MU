import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Image.css";
import {handleSonJour,AddTo} from "../../Services/SpotifyApi";

const SonJour = () => {


    //Get playlist matching emotion
    const [Playlist,setPlaylist]= useState({});
     // not working until data are fetched
     const [valid,setvalid]=useState(false);


    const GetTracks = ()=>{
        handleSonJour().then(function(MusicSearch){setPlaylist(MusicSearch);setvalid(true);}  )
            .catch(err=>console.log(err));
    };

    const AddToPlaylist = (data) =>{
        AddTo("Playlist",data).catch(err=>console.log(err));
    }

   

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
                    <button type="submit" onClick={() => { console.log(Playlist.album.id);AddToPlaylist(Playlist.album.id) }}>Add to Playlist</button>
                    <Button onClick={  () => {AddToPlaylist(Playlist.album.id)
                                    }}>Search</Button>
                </Card>

       

    </Row>:<Button id="buttonplaylist" onClick={()=>{
                                if(!valid){
                                document.getElementById("buttonplaylist").style.display="none";
                                    GetTracks();}
                                }}>See your playlists</Button>}
</Container>
    );

}

export default SonJour;