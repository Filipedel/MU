import React, { useState} from "react";
import {Container, InputGroup, FormControl, Button, Row,Card} from 'react-bootstrap'
import spotify from 'spotify-web-api-node'
import "bootstrap/dist/css/bootstrap.min.css"
import { useCookies } from "react-cookie";

const playlist = () => {

   const [token, settoken] = useState("");
   const [Data, setData] = useState( {});
   const [user, setuserid] = useState("");
   var spotifyweb = new spotify();
   const [cookies, setCookie] = useCookies(["userID"]);

   function handleCookie() {
    setCookie("userID", user, {
      path: "/"
    });
  }

   const handleGetPlaylists = async() => {
       const data = await fetch('/authentification');
       const body =  await data.json();
       settoken(body.token);
       spotifyweb.setAccessToken(token)
       spotifyweb.getUserPlaylists(user)
           .then(function(data) {
               console.log('Retrieved playlists', data.body);
               setData(data.body)
           },function(err) {
               console.log('Something went wrong!', err);
           });
           handleCookie();
   }



    return (
        <div className="App">
            <Container >
                <InputGroup className={"mb-3"} size={"lg"}>
                    <FormControl placeholder={"Put your Spotify ID"} type={'input'}
                                 onChange={event => setuserid(event.target.value)}
                                 onKeyPress={event => {
                                     if (event.key == "Enter") {
                                         handleGetPlaylists();
                                     }
                                 }}
                                 />
                    <Button onClick={() => {handleGetPlaylists()}}>Search</Button>
                </InputGroup>

            </Container>
            <Container>
                <Row className={"mx-2 row row-cols-4"}>
                    {Data.items ? Data.items.map((item) =>{
                        return (
                    <Card>

                        <Card.Body>
                            <Card.Img src={ (typeof item.images[0] != 'undefined') ? item.images[0].url :
                               null
                            }/>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                    ) }): <Card>
                    <Card.Body>
                        <Card.Text>We not found playlists</Card.Text>
                    </Card.Body>
                </Card>}
                </Row>

            </Container>
        </div>
    );
}



export default playlist;
