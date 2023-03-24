import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Image.css"
import {handlePlaylist, submituserback, submitidback} from "../../Services/SpotifyApi";




const playlist = () => {

   //data user
    const [user, setuserid] = useState("");
   //see playlist (cookie)
    const [open,setopen]=useState(false);
    //Get playlistUsers
    const [Playlist,setPlaylist]= useState({});



    const GetPlaylist = ()=>{
        handlePlaylist().then(getData=>setPlaylist(getData))
            .catch(err=>console.log(err));
    };

    return (

            <Container>

                        {document.cookie.indexOf("USERID=") !== -1?
                            //if cookie exist
                            <Button id="buttonplaylist" onClick={()=>{
                                if(!open){
                                    setopen(true)
                                document.getElementById("buttonplaylist").style.display="none";
                                    GetPlaylist();}
                                }}>See your playlists</Button>
                            :
                            // no cookie

                                <InputGroup className={"mb-3"} size={"lg"}>
                                    <FormControl placeholder={"Put your Spotify ID here"} type={'input'}
                                                 onChange={event => {
                                                     setuserid(event.target.value)
                                                 }}
                                                 onKeyPress={   (event) => {
                                                     if (event.key === "Enter") {
                                                          submituserback(user).catch(err=>console.log(err));
                                                          GetPlaylist();
                                                     }
                                                 }}/>
                                    <Button onClick={  () => {
                                         submituserback(user).catch(err=>console.log(err));
                                         GetPlaylist();
                                    }}>Search</Button>
                                </InputGroup>

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
                                </Card>)

                        }) : null }

                    </Row>:null}

            </Container>

        );

}



export default playlist;
