import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row,Card} from 'react-bootstrap'
import spotify from 'spotify-web-api-node'
import "bootstrap/dist/css/bootstrap.min.css"
import { useCookies, CookiesProvider } from "react-cookie";





const playlist = () => {

   const [token, settoken] = useState("");
   const [Data, setData] = useState( {});
   var [user, setuserid] = useState("");
   const [cookies, setCookie] = useCookies(["userID"]);

   //get token from the server
    useEffect(async ()=> {
        const APIServer = await fetch("/authentification")
        const APiserverjson = await APIServer.json()
        settoken(APiserverjson.token)
    },[])

   function handleCookie() {
    
    setCookie("userID", user, {
      path: "/",
      expires: "36000"
    });

  }


  //Get playlist from spotify user
    const spotifyweb = new spotify();
   const handleGetPlaylists = () => {
       spotifyweb.setAccessToken(token);
       
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
                
                <Container>
                    <InputGroup className={"mb-3"} size={"lg"}>
                        <FormControl placeholder={"Put your Spotify ID here"} type={'input'}
                                     onChange={event => {setuserid(event.target.value)}}
                                     onKeyPress={event => {
                                         if (event.key == "Enter") {
                                             handleGetPlaylists();
                                             handleCookie();
                                         }
                                     }}
                        />
                        <Button onClick={() => {
                            handleGetPlaylists();
                            handleCookie();
                        }}>Search</Button>
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
                            <Card.Text></Card.Text>
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
