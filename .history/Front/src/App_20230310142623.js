import React from 'react';
import Main from "./Main";
import image from './Muzik.jpeg'
import "./App.css"
import Navbar from "./Component/BackgroundView/Navbar";
import ParticleBackground from "./Component/BackgroundView/ParticleBackground";
import ScrollButton from './Component/BackgroundView/ScrollButton';
    const App = () => {

        return (
           <div>
                 <Navbar/>
            <div className={"particlesheader"}>
                <ParticleBackground/>
                <div>
                    <a href={"/"}><img src={image} width="100" height={"60"} ></img></a>
                    <Main/>
                    <ScrollButton/>
                </div>

            </div>
           </div>);
    }

    export default App;