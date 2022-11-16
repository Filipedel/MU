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
        handleEmotion().then(getData=>setPlaylist(getData))
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
                    <Card.Img src={(typeof Playlist.images[0] !== 'undefined') ? Playlist.images[0].url :
                        null
                    } />
                    <Card.Title>{Playlist.name}</Card.Title>
                </Card>)

        }) : console.log(Playlist) }

    </Row>:null}
</Container>
    );
}

export default emotion;