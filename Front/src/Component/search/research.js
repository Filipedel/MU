import React, { useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {searchsong,handleSearch,submitTrackbackrs} from "../../Services/SpotifyApi";

const research = () =>{
    // not working until data are fetched
    const [open,setopen]=useState(false);
     // not working until data are fetched
     const [valid,setvalid]=useState(false);
    //Get playlist matching emotion
    const [Playlist,setPlaylist]= useState({});

    const [song, setSong] = useState("");


    const GetPlaylist = ()=>{
        handleSearch().then(MusicSearch => setPlaylist(MusicSearch))
            .catch(err=>console.log(err));
    };
    const AddPlaylist = (id)=>{
        if(sessionStorage.getItem("TracksToPlaylist") != null){
            submitTrackbackrs([sessionStorage.getItem("TracksToPlaylist"),id]).catch(
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
                            <FormControl placeholder={"enter a song name"} type={'input'}
                                         onChange={event => {
                                             setSong(event.target.value)
                                         }}
                                         onKeyPress={   (event) => {
                                             if (event.key === "Enter") {
                                                searchsong(song).catch(err=>console.log(err));setopen(true);
                                             }
                                         }}/>
                            <Button onClick={() => {searchsong(song).catch(err=>console.log(err));setopen(true);}}>Search</Button>
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

export default research;