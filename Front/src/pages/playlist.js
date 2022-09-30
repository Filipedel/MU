import React, { useState} from "react";
import {Container, InputGroup, FormControl, Button, Row,Card} from 'react-bootstrap'
import spotify from 'spotify-web-api-node'
import "bootstrap/dist/css/bootstrap.min.css"


const playlist = () => {

   const [token, settoken] = useState("");
   const [Data, setData] = useState( {});
   const [user, setuserid] = useState("");
   var spotifyweb = new spotify();

   const Logintoken = async () => {
       const data = await fetch('/authentification');
       const body = await data.json();
       settoken(body.token);
       console.log(token);
   }
    spotifyweb.setAccessToken(token)

   const handleGetPlaylists = () => {
       spotifyweb.getUserPlaylists(user)
           .then(function(data) {
               console.log('Retrieved playlists', data.body);
               setData(data.body)
           },function(err) {
               console.log('Something went wrong!', err);
           });
   }



    return (
        <div className="App">
            <Container >
            <Button onClick={Logintoken} type="submit">Let's Go</Button>
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
                    {Data.items ? Data.items.map((item,i) =>{
                        console.log(item)
                        return (
                    <Card>
                        <Card.Img src ={item.images[0].url}/>
                        <Card.Body>
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
