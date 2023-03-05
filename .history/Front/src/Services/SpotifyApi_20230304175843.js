
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

const handleSearch = async () => {
    const PromiseUserEmotion = await fetch("/research2");
    const UserEmotionResponse = await PromiseUserEmotion.json();
    const GetUserEmotion = UserEmotionResponse.DataSearch.tracks;
    console.log(GetUserEmotion);
    return GetUserEmotion;
}

const handleEmotion = async () => {
    const PromiseUserEmotion = await fetch("/emotion");
    const UserEmotionResponse = await PromiseUserEmotion.json();
    const GetUserEmotion = UserEmotionResponse.DataEmotion.tracks;
    console.log(GetUserEmotion);
    return GetUserEmotion;
}

const handleSonJour = async () => {
    const PromiseUserSon = await fetch("/jour");
    const UserSonResponse = await PromiseUserSon.json();
    const GetUserSon = UserSonResponse.DataJour;
    console.log(GetUserSon);
    return GetUserSon;
}

const handleRelease = async () => {
    const PromiseUserRel = await fetch("/release");
    const UserRelResponse = await PromiseUserRel.json();
    const GetUserRel = UserRelResponse.DataRelease.albums;
    return GetUserRel;
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
//send itemid to back to return playlist items
const AddTo = async (type,id) => {
    fetch("/add",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,type:type
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

const searchsong = async (names) => {
    await fetch("/research",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            names: names
        })
    }).catch(err => {console.log(err)});
}


export {
    handlePlaylist,
    handleEmotion,
    handleSonJour,
    submitidback,
    submitEmotion,
    handleRelease,
    handleitemsplaylists,
    searchsong,
    handleSearch,
    AddTo
}
