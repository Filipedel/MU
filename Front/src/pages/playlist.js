import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image, CardImg} from 'react-bootstrap'
import spotify from 'spotify-web-api-node'
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "../popup/popup";
import "./Image.css"






const playlist = () => {

   var [Data, setData] = useState( {});
   var [user, setuserid] = useState("");
   var [token, settoken] = useState('');
   var [Datatracks,setdataitems]= useState( {});
   //popup
   const[isOpen, setisOpen]=useState(false);
   //see playlist (cookie)
    const [open,setopen]=useState(false)



   //get token from the server
    useEffect(async ()=> {
        const APIServer = await fetch("/token");
        const APiserverjson = await APIServer.json();
        settoken(APiserverjson.token);
    },[])

//Get playlist from spotify user
    const spotifyweb = new spotify();
    spotifyweb.setAccessToken(token);

   const handleGetPlaylists =  (name) => {
          spotifyweb.getUserPlaylists(name)
           .then(function(data) {
               console.log('Retrieved playlists', data.body);
               setData(data.body)
           },function(err) {
               console.log('Something went wrong!', err);
           });
   }

   //DISPLAY all Items from a playlist
    const handleitemsplaylists = (id) =>  {
        spotifyweb.getPlaylistTracks(id).then(function (data){
            console.log('Retrieved items', data.body);
            setdataitems(data.body);
        },function (err){
            console.log('Something went wrong!', err);
        })
    }
    function showtracks(){
       ///!!!Popup
        return(
            (Datatracks.items) ? Datatracks.items.map((tracks)=> {return(
                <div>
                    {tracks.track.artists.map(artist=>{return (

                        <Row><Image src={(typeof tracks.track.album.images[0] !== "undefined")? tracks.track.album.images[0].url: null} className={"image"}/> <strong>{artist.name}</strong>  Title: {tracks.track.name} </Row>)})}
                  </div>)
            }):<div>Nothing!</div>)
    }


   //send userid to back to put into cookies
    const submituserback = async() => {
        await fetch("/user",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: user
            })
        }).catch(err => {console.log(err)});
    }
    function getCookie() {
        const name = "USERID=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res;
    }


        return (

            <Container>

                        {document.cookie.startsWith("USERID") ?
                            //if cookie exist
                            <Button id="buttonplaylist" onClick={()=>{
                                if(!open){
                                    setopen(true)
                                document.getElementById("buttonplaylist").style.display="none"}
                                handleGetPlaylists(getCookie())}}>See your playlists</Button>
                            :
                            // no cookie
                                <Container>
                                <InputGroup className={"mb-3"} size={"lg"}>
                                    <FormControl placeholder={"Put your Spotify ID here"} type={'input'}
                                                 onChange={event => {
                                                     setuserid(event.target.value)
                                                 }}
                                                 onKeyPress={  event => {
                                                     if (event.key == "Enter") {
                                                          handleGetPlaylists(user);
                                                          submituserback();
                                                     }
                                                 }}/>
                                    <Button onClick={ () => {
                                         handleGetPlaylists(user);
                                         submituserback();
                                    }}>Search</Button>
                                </InputGroup>
                                </Container>
                            }

                    <Row className={"mx-2 row row-cols-4" }>

                        {Data.items  ? Data.items.map( (item) => {
                            return(

                            <Card>
                            <Card.Img src={(typeof item.images[0] !== 'undefined') ? item.images[0].url :
                            null
                        } />
                            <Card.Title>{item.name}</Card.Title>

                            <Button  onClick={()=>{
                            setisOpen(true);
                            handleitemsplaylists(item.id);
                        }
                        }> See tracks</Button>

                            </Card>)

                        }) : null }

                    </Row>
                    {isOpen && <Popup handleClose={()=>{
                        setisOpen(false)
                    }} content={showtracks()}/>}


            </Container>
        );

}



export default playlist;
