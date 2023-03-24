import React, { useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Image} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {searchsong,handleSearch} from "../../Services/SpotifyApi";
import axios from 'axios';

import { getLyrics } from "genius-lyrics-api";

function MusicSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const [artistName, setArtistName] = useState("");
    const [lyrics, setLyrics] = useState("");

    const handleSearch = async () => {
        try {
            const options = {
                apiKey: "YSQZeJFZ70fq8sS7JoZ1w-4IfmNaVPYs_0F5B1mNDZ4G3mpQDuDI3kVFpNRgFSNG",
                title: searchTerm,
                artist: artistName,
                optimizeQuery: true,
                headers: {
                    "Content-Type": "application/json"
                }
            };

            const lyricsResult = await getLyrics(options);

            if (lyricsResult.lyrics) {
                setLyrics(lyricsResult.lyrics);
            } else {
                setLyrics("Paroles introuvables");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Titre du son"

            />
            <input
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                placeholder="Nom de l'artiste"
            />
            <button onClick={handleSearch}>Rechercher</button>
            <div>{lyrics}</div>

            <div><p>Front (rattachement au back non fonctionnel pour le moment) : </p></div>

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
        </div>


    );
}

export default MusicSearch;