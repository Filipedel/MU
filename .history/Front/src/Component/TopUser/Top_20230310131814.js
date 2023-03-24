import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Image.css"
import "../Playlist/playlist.css"
import {handlePlaylist, submitidback,submitTrackback,handleTrackAdd} from "../../Services/SpotifyApi";




const playlist = () => {

   //see playlist (cookie)
    const [open,setopen]=useState(false);
    //Get playlistUsers
    const [Playlist,setPlaylist]= useState({});


    const GetTop = ()=>{
        handleGetTOp().then(getData=>console.log(getData))
            .catch(err=>console.log(err));
    };

    return (

            <Container>

                        {document.cookie.indexOf("Connected=") !== -1?
                            //if cookie exist
                            <Button id="buttonplaylist" onClick={()=>{
                                if(!open){
                                  //  setopen(true)
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
                    <Row className={"mx-2 row row-cols-4" } >

                        {Playlist.items  ? Playlist.items.map( (Playlist) => {
                            return(

                                <Card >
                                    <Card.Img src={(typeof Playlist.images[0] !== 'undefined') ? Playlist.images[0].url :
                                        null
                                    } />
                                    <Card.Title>{Playlist.name}</Card.Title>
                                    <Card.Title>{Playlist.id}</Card.Title>
                                </Card>)

                        }) : null }

                    </Row>:null}

            </Container>

        );

}



export default playlist;
