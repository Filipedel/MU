import React, {useState} from 'react';
import Main from "./Main";
import image from './Muzik.jpeg'
import CookieConsent from "react-cookie-consent"
import "./App.css"
import ParticleBackground from "./Component/BackgroundView/ParticleBackground";
import ScrollButton from './Component/BackgroundView/ScrollButton';
import { Content, Heading } from './Component/BackgroundView/Styles';
    const App = () => {

        return (
            <div className={"particlesheader"}>
                <ParticleBackground/>
                <div >
                    <a href={"/"}><img src={image} alt="image" width="100" height={"60"}></img></a>
                    <Main/>
                    <ScrollButton/>
                </div>

            </div>);
    }

    export default App;