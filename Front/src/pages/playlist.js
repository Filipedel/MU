import React, {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row,Card} from 'react-bootstrap'
import spotify from 'spotify-web-api-node'
import "bootstrap/dist/css/bootstrap.min.css"


const playlist = () => {

   const [Data, setData] = useState( {});
   var [user, setuserid] = useState("");
   var [token, settoken] = useState('');
   var [cookie,setcookie] = useState("");


   //get token from the server
    useEffect(async ()=> {
        const APIServer = await fetch("/token");
        const APiserverjson = await APIServer.json();
        settoken(APiserverjson.token);
    },[])

//Get playlist from spotify user
    const spotifyweb = new spotify();
    spotifyweb.setAccessToken(token);
   const handleGetPlaylists = () => {
       spotifyweb.getUserPlaylists(user)
           .then(function(data) {
               console.log('Retrieved playlists', data.body);
               setData(data.body)
           },function(err) {
               console.log('Something went wrong!', err);
           });
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
        });

    }

    const getCookie = () => {
        const name = "USERID=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        setcookie(res);
    }

    //Clear cookie to put other user
    const deleteCookie = async () => {
       await fetch("clearcookie");
    }

        return (
            <div className="App">


                        {document.cookie === "USERID="+cookie ?
                            <Container>
                    <InputGroup className={"mb-3"} size={"lg"} >
                        <FormControl placeholder={cookie} type={'input'}
                                     onKeyPress={event => {
                                         if (event.key == "Enter") {
                                             setuserid(cookie);
                                             handleGetPlaylists();
                                         }
                                     }}/>
                        <Button onClick={() => {
                            setuserid(cookie);
                            handleGetPlaylists();
                        }}>Search</Button>
                    </InputGroup>
                            <Button onClick={() => {deleteCookie()}}>Delete Cookie</Button>
                            </Container>:
                            <Container>
                            <InputGroup className={"mb-3"} size={"lg"}>
                            <FormControl placeholder={"Put your Spotify ID here"} type={'input'}
                                         onChange={event => {
                                             setuserid(event.target.value)
                                         }}
                                         onKeyPress={event => {
                                             if (event.key == "Enter") {
                                                 handleGetPlaylists();
                                                 submituserback();
                                                 getCookie()
                                             }
                                         }}/>
                            <Button onClick={() => {
                                handleGetPlaylists();
                                submituserback();
                                getCookie();
                            }}>Search</Button>
                        </InputGroup>
                            </Container>}





                <Container>
                    <Row className={"mx-2 row row-cols-4"}>
                        {Data.items ? Data.items.map((item) => {
                            return (
                                <Card>

                                    <Card.Body>
                                        <Card.Img src={(typeof item.images[0] != 'undefined') ? item.images[0].url :
                                            null
                                        }/>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text></Card.Text>
                                    </Card.Body>
                                </Card>
                            )
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
