export enum Repo{
    Spotify='Spotify',
    Deezer='Deezer',
}


export interface IPlaylist{
    id:string|undefined,
    namePlaylist:string|null,
    description:string|null,
    tracks: ITracks[]
}

export interface ITracks{
    name:string|undefined,
    albums:string|undefined,
    artists:string[]|undefined,
    id:string|undefined,
    popularity:number|undefined,
}