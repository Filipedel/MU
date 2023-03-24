import React, {useState} from "react";

import {Image} from "react-bootstrap";
import {handleitemsplaylists} from "../../../../../public/assets/services/SpotifyApi";


const Tracks = () => {

    const [Tracks, setTracks] = useState({});

    const GetTracks = () => {
        handleitemsplaylists().then(tracks => {
            setTracks(tracks)
        }).catch(err => console.log(err));
    }
    const showtracks = () => {
        ///!!!Tracks

        return (
            (Tracks.items) ? Tracks.items.map((tracks) => {
                return (
                    <table class={"table "}>
                        {tracks.track.artists.map(artist => {
                            return (

                                <tbody>
                                <tr><td scope={"row"}><Image
                                    src={(typeof tracks.track.album.images[0] !== "undefined") ? tracks.track.album.images[0].url : null}
                                    className={"image"}/></td> <td scope={"row"}> <strong>{artist.name}</strong></td> <td scope={"row"}> {tracks.track.name}</td>
                                </tr>
                                </tbody>)
                        })}
                    </table>)
            }) : null)
    }

    return (
        <div  onLoad={GetTracks()}>
                {showtracks()}
        </div>
    );
};

export default Tracks;