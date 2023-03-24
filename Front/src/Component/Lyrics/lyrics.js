import React, { useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {searchsong,handleSearch} from "../../Services/SpotifyApi";

function Lyrics() {


    return (

        <div className="frame">
            <header className="frame-header">
                <div className="image">
                    <img className="album-artwork"
                         src="https://static.fnac-static.com/multimedia/Images/FR/NR/c0/3b/1d/1915840/1540-1/tsp20200924170355/Les-sardines.jpg"
                         alt="album artwork"/>
                </div>
                <div className="info">
                    <div className="title">Les Sardines</div>
                    <div className="subtitle">Patrick Sébastien</div>
                </div>
            </header>

            <div className="frame-lyrics">
                <div>Pour faire une chanson facile, facile</div>
                <div>Faut d'abord des paroles débiles, débiles</div>
                <div>Une petite mélodie qui te prend bien la tête</div>
                <div>Et une chorégraphie pour bien faire la fête</div>
                <div>Dans celle là, on se rassemble, à 5, ou 6, ou 7</div>
                <div>Et on se colle tous ensemble, en chantant à tue-tête</div>
                <div>Ah ! qu'est-ce qu'on est serré, au fond de cette boîte</div>
                <div>Chantent les sardines, chantent les sardines</div>
                <div>Ah ! qu'est-ce qu'on est serré, au fond de cette boîte</div>
                <div>Chantent les sardines entre l'huile et les aromates</div>
                <div>Ah ! qu'est-ce qu'on est serré, au fond de cette boîte</div>
                <div>...</div>
            </div>

            <div className="frame-bg">
                <img className="bg-color album-artwork"
                     src="https://static.fnac-static.com/multimedia/Images/FR/NR/c0/3b/1d/1915840/1540-1/tsp20200924170355/Les-sardines.jpg"
                     alt="album artwork"/>
                <img className="bg-black album-artwork"
                     src="https://static.fnac-static.com/multimedia/Images/FR/NR/c0/3b/1d/1915840/1540-1/tsp20200924170355/Les-sardines.jpg"
                     alt="album artwork"/>
            </div>
        </div>


    );


}

export default Lyrics;