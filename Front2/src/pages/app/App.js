import React, {useState} from 'react';
import Main from "./Main";
import Image from 'next/image'
import CookieConsent from "react-cookie-consent"
import ParticleBackground from "../../components/App/BackgroundView/ParticleBackground"
import ScrollButton from '../../components/App/BackgroundView/ScrollButton';
import { Content, Heading } from '../../components/App/BackgroundView/Styles';

import Home from '../../components/App/Home/home'
import Playlist from "../../components/App/Playlist/playlist";

const App = () => {
        return (
            <div className={"particlesheader"}>
                <ParticleBackground/>
                <div >
                    <a href={"/"}>
                        <Image src="/assets/images/logo.png" alt="logo Muzik" width={345} height={239}></Image>
                    </a>
                    {/*<Main/>*/}
                    {/*<ScrollButton/>*/}
                </div>

            </div>);
}
export default App;