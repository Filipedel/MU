import "bootstrap/dist/css/bootstrap.min.css";
import "./Image.css"
import React, {useEffect, useState} from "react";
import {
  Container,
  Button,
  Row, Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";



//Open url spotify
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };



const home = () => {
  const  [dataUser, setDataUser] = useState({});
  const handleGetUser = ()=> {
      useEffect(()=> {
                fetch("/getUser")
              .then(response => response.json())
              .then(d => setDataUser(d.DataUser))
              .catch(err => console.log(err));
      },[])
  }

  return (


    <div>

        {document.cookie.startsWith("USERID=") ?
            <Container>
        <div onLoad={handleGetUser()}>
            <Image src={(typeof dataUser.images !== "undefined") ? dataUser["images"].map((item) => {
                let image = item.url;
                return image;
            }):null}/>
            <br></br>
            Bienvenue à toi {dataUser.display_name}
        </div>
            <Link to="/playlist">
                <Button >Playlist</Button>
            </Link>
            </Container>:
            <Container>
            <Row className={"mx-2 row row-cols-12"}>
              <h1>Récuperer votre nom d'utilisateur</h1>
            </Row>
          <p>
          Afin de pouvoir utiliser les services de notre application, il est
          nécessaire que nous ayons accés à votre nom d'utilisateur afin
          d'accéder aux données de votre compte spotify{" "}
          </p>
          <p>
          Vous devez tous d'abord cliquez sur le bouton ci-dessous, qui vous
          renverra sur votre profil, vous devrez ensuite copiez le nom
          d'utilisateur puis le rentrer sur la page disponible via le 2ème
          bouton.
          </p>
          <Row className={"mx-2 row row-cols-4"}>
          <Button onClick={() => openInNewTab('https://www.spotify.com/fr/account/overview/')}>
          Spotify
          </Button>
          <Link to="/playlist">
          <Button >Playlist</Button>
          </Link>
          </Row>
            </Container>
        }

    </div>
  );
};

export default home;
