import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row,Card} from 'react-bootstrap'
import spotify from 'spotify-web-api-node'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import popup from "./Pop/popup";



const playlist = () => {

   const [Data, setData] = useState( {});
   var [user, setuserid] = useState("");
   var [token, settoken] = useState('');
   var [Datatracks,setdataitems]= useState( {});



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
    const handleitemsplaylists = (e) =>  {
        spotifyweb.getPlaylistTracks(e).then(function (data){
            console.log('Retrieved items', data.body);
            setdataitems(data.body);
        },function (err){
            console.log('Something went wrong!', err);
        })
    }
    function showtracks(){
       ///!!!popup
       return(
           <Card.Text>
               {Datatracks.items ? Datatracks.items.map((tracks)=>{
                return(
                <Card.Text>{tracks.track.name}</Card.Text>)

           }):null}</Card.Text>)
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
       let name = "USERID";
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
        })
       return cookie[name];
    }




        return (

            <div >
                        {document.cookie === "USERID=" +getCookie() ?
                            //if cookie exist
                            <Container onLoad={ ()=>{ handleGetPlaylists(getCookie())}}>
                            </Container>:
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
                            </Container>}
                < Container >

                    <Row className={"mx-2 row row-cols-4"}>
                        {Data.items ? Data.items.map( (item) => {
                            return(

                                <Card>

                                    <Card.Body  >
                                        <Card.Img src={(typeof item.images[0] != 'undefined') ? item.images[0].url :
                                            null
                                        } />
                                        <Card.Title>{ item.name}</Card.Title>

                                        <Button  onClick={ ()=>{
                                            handleitemsplaylists(item.id);
                                            }
                                        }> see tracks</Button>
                                        <popup trigger={true}>{showtracks()}</popup>

                                    </Card.Body>
                                </Card>)

                        }) : <Card>
                            <Card.Body>
                                <Card.Text>It's here than you can see your playlists</Card.Text>
                            </Card.Body>
                        </Card>}
                    </Row>
                </Container>
            </div>
        );

}



export default playlist;
