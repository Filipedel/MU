import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";
import {
  Container,
  Button,
  Row, Image,
} from "react-bootstrap";
import Link from "next/link";



//Open url spotify
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


const home = () => {
  const  [dataUser, setDataUser] = useState({});
  const handleGetUser = ()=> {
      useEffect(()=> {
                fetch("/home")
              .then(response => response.json())
              .then(d => setDataUser(d.DataUser))
              .catch(err => console.log(err));
      },[])
  }

  return (
    <div>

        {document.cookie.indexOf("USERID=") !== -1 ?
            <Container>
        <div onLoad={handleGetUser()}>
            <Image src={(typeof dataUser.images !== "undefined") ? dataUser["images"].map((item) => {
                let image = item.url;
                return image;
            }):null}/>
            <br></br>
            Bienvenue à toi {dataUser.display_name}
        </div>
            <Link href="/playlist">
                <Button >Playlist</Button>
            </Link>
            <Link href="/emotion">
          <Button>Emotion</Button>
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
          <Row  className={"mx-2 row row-cols-5"}>
          <Button onClick={() => openInNewTab('https://www.spotify.com/fr/account/overview/')}>
          Spotify
          </Button>
          <Link href="/playlist">
          <Button >Playlist</Button>
          </Link>
          <Link href="/emotion">
          <Button>Emotion</Button>
          </Link>
          <Link href="/sonjour">
          <Button>Musique du Jour</Button>
          </Link>
          <Link href="/releases">
          <Button>Sorties récentes FR</Button>
          </Link>
          </Row>
            </Container>
        }

    </div>
  );
};

export default home;
