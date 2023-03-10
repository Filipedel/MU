import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Image.css"
import "../Playlist/playlist.css"
import {handleGetTOp} from "../../Services/SpotifyApi";




const playlist = () => {

   //see playlist (cookie)
    const [open,setopen]=useState(false);
    //Get TopTrackUsers
    const [Tracks,setTracks]= useState({});
    //Get TopArtistUsers
    const [Artist,setArtist]= useState({});

    const GetTop = ()=>{
        handleGetTOp().then(function(getData){setArtist(getData[0]);setTracks(getData[1]);})
            .catch(err=>console.log(err));
    };

    return (

            <Container>

                        {document.cookie.indexOf("Connected=") !== -1?
                            //if cookie exist
                            <Button id="buttonplaylist" onClick={()=>{
                                if(!open){
                                    setopen(true)
                                document.getElementById("buttonplaylist").style.display="none";
                                GetTop();}
                                }}>See your Top Artist and Tracks</Button>
                            :
                            // no cookie

                            <Row className={"mx-2 row row-cols-12"}>
                            <h1>Veuillez vous identifier en cliquant sur Connexion</h1>
                          </Row>

                            }

                {open === true ?
                <Container>
                    <h1>Vos Top Tracks</h1>
                    <Row className={"mx-2 row row-cols-4" } >
                        
                        {Tracks.items  ? Tracks.items.map( (Tracks) => {
                            return(

                                <Card >
                                    <Card.Img src={(typeof Tracks.album.images[0] !== 'undefined') ? Tracks.album.images[0].url :
                                        null
                                    } />
                                    <Card.Title>{Tracks.name}</Card.Title>
                                    <Card.Title>{Tracks.artists[0].name}</Card.Title>
                                </Card>)

                        }) : null }

                    </Row>
                    <h1>Vos Top Artiste</h1>
                    <Row className={"mx-2 row row-cols-4" } >
                        
                        {Artist.items  ? Artist.items.map( (Artist) => {
                            return(

                                <Card >
                                    <Card.Img src={(typeof Artist.images[0] !== 'undefined') ? Artist.images[0].url :
                                        null
                                    } />
                                    <Card.Title>{Artist.name}</Card.Title>
                                    <Card.Title>{Artist.genre[0]}</Card.Title>
                                </Card>)

                        }) : null }

                    </Row>
                    </Container>
                    :null}

            </Container>

        );

}



export default playlist;
