import Particles from "react-tsparticles";
import particleConfig from "./Config/particle-config";
import React from 'react';

const ParticleBackground=() =>{
    return(
        <Particles params={particleConfig}>
        </Particles>
    )
}
export default ParticleBackground;