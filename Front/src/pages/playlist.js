import React, {useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "../popup/popup";
import "./Image.css"






const playlist = () => {

   var [Data, setData] = useState( {});
   var [user, setuserid] = useState("");
   var [Datatracks,setdataitems]= useState( {});
   //popup
   const[isOpen, setisOpen]=useState(false);
   //see playlist (cookie)
    const [open,setopen]=useState(false)


    const handleplaylist = () => {
        fetch("getplaylist").then(response => response.json()).then(d => {setData(d.Dataplaylist)})
                .catch(err => console.log(err));
    }

   //DISPLAY all Items from a playlist
    const handleitemsplaylists = () =>  {
       fetch("getplaylistitems").then(response => response.json()).then(d=> {setdataitems(d.body)})
           .catch(err => console.log(err));
    }


    function showtracks(){
       ///!!!Popup
        return(
            (Datatracks.items) ? Datatracks.items.map((tracks)=> {return(
                <div>
                    {tracks.track.artists.map(artist=>{return (

                        <Row><Image src={(typeof tracks.track.album.images[0] !== "undefined")? tracks.track.album.images[0].url: null} className={"image"}/> <strong>{artist.name}</strong>  Title: {tracks.track.name} </Row>)})}
                  </div>)
            }):null)
    }


   //send userid to back to put into cookies
    const submituserback = () => {
         fetch("/user",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: user
            })
        }).catch(err => {console.log(err)});
    }
    //send itemid to back to return playlist items
    const submitidback = (id) => {
        fetch("/id",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        }).catch(err => {console.log(err)});
    }


        return (

            <Container>

                        {document.cookie.startsWith("USERID")?
                            //if cookie exist
                            <Button id="buttonplaylist" onClick={()=>{
                                if(!open){
                                    setopen(true)
                                document.getElementById("buttonplaylist").style.display="none"}
                                handleplaylist();}}>See your playlists</Button>
                            :
                            // no cookie

                                <InputGroup className={"mb-3"} size={"lg"}>
                                    <FormControl placeholder={"Put your Spotify ID here"} type={'input'}
                                                 onChange={event => {
                                                     setuserid(event.target.value)
                                                 }}
                                                 onKeyPress={   (event) => {
                                                     if (event.key === "Enter") {
                                                          submituserback();
                                                          handleplaylist()
                                                     }
                                                 }}/>
                                    <Button onClick={  () => {
                                         submituserback();
                                         handleplaylist();
                                    }}>Search</Button>
                                </InputGroup>

                            }
                {open === true?
                    <Row className={"mx-2 row row-cols-4" } >

                        {Data.items  ? Data.items.map( (item) => {
                            return(

                            <Card >
                            <Card.Img src={(typeof item.images[0] !== 'undefined') ? item.images[0].url :
                            null
                        } />
                            <Card.Title>{item.name}</Card.Title>

                            <Button  onClick={ ()=>{
                            setisOpen(true);
                            submitidback(item.id);
                            handleitemsplaylists()
                        }
                        }> See tracks</Button>

                            </Card>)

                        }) : null }

                    </Row>:null}
                    {isOpen && <Popup handleClose={()=>{
                        setisOpen(false)
                    }} content={ showtracks()} />}

            </Container>

        );

}



export default playlist;
