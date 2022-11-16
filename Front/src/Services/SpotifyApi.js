
import React from "react";



const handlePlaylist =async () => {
    const PromiseUserPlaylists = (await fetch("/playlist"))
    const UserPlaylistsResponse = await PromiseUserPlaylists.json();
    const GetUserPlaylist = UserPlaylistsResponse.Dataplaylist;
    return GetUserPlaylist;
}


const handleitemsplaylists = async () =>  {
    const PromisePlaylistTracks= await fetch("/playlistitems");
    const PlaylistTracksResponse = await  PromisePlaylistTracks.json();
    const GetTracks = PlaylistTracksResponse.Playlistitems;
    return GetTracks;

}

const handleEmotion = async () => {
    const PromiseUserEmotion = await fetch("/emotion");
    const UserEmotionResponse = await PromiseUserEmotion.json();
    const GetUserEmotion = UserEmotionResponse.DataEmotion;
    return GetUserEmotion;
}

//send userid to back to put into cookies
const submituserback = async (user) => {
    await fetch("/playlist",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: user
        })
    }).catch(err => {console.log(err)});
}
//send itemid to back to return playlist items
const submitidback = async (id) => {
    fetch("/playlist/id",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id
        })
    }).catch(err => {console.log(err)});
}
// send Emotion choice to server
const submitEmotion = async (emo) => {
    await fetch("/search",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emo: emo
        })
    }).catch(err => {console.log(err)});
}


export {
    handlePlaylist,
    handleEmotion,
    submituserback,
    submitidback,
    submitEmotion,
    handleitemsplaylists
}
