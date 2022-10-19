import React from 'react';
import Main from "./Main";
import image from './Muzik.jpeg'
import CookieConsent from "react-cookie-consent"
import "./App.css"
import ParticleBackground from "./Component/ParticleBackground";

    const App = () => {
        return (
            <div className={"particlesheader"}>
                <ParticleBackground/>
                <div>
                    <a href={"/"}><img src={image} alt="image" width="100" height={"60"}></img></a>
                    <Main/>
                    <CookieConsent debug={true}
                                   location="bottom"
                                   style={{background: "#003", textAlign: "left"}}
                                   buttonStyle={{color: "#000", background: "#fff", fontStyle: "14px"}}
                                   buttonText={"OK great!"}
                                   expires={365} hideOnAccept={true} >
                        This site uses cookies. See our <a href={"/privacy"}>privacy policy</a> for more
                        information</CookieConsent>
                </div>

            </div>);
    }

    export default App;