import { inject, injectable } from 'inversify';
import SpotifyWebApi from 'spotify-web-api-node';
import { SpotifyConnectionkey, ISpotifyConnection } from 'src/MuzikServices/SpotifyConnection';
import { provide } from 'inversify-binding-decorators';
import { IPlaylist } from 'src/Model/Model';
import { ITracks } from '../Model/Model';



export const SpotifyPlaylistkey = Symbol.for("spotifyplaylist");
export const SpotifyEmotionkey = Symbol.for("spotifyemotionkey");


export interface ISpotifyPlaylist{
    getPlaylist(ConsumerId:string):Promise <IPlaylist[]>;
}
interface ISpotifyTracks{
    getTracks(playlistId:string,client:SpotifyWebApi):Promise<ITracks[]>;
}


export interface ISpotifyEmotionTracks{
    getTracksbyEmotion(emotionkey:string):Promise<ITracks[]>;
}


@injectable()
class SpotifyRepo{
    constructor(@inject(SpotifyConnectionkey) private Spotifyconnection: ISpotifyConnection){}
    async getClient():Promise<SpotifyWebApi>{
        return await this.Spotifyconnection.getConnection();
    }
}


@provide(SpotifyPlaylistkey)
export class SpotifyPlaylist extends SpotifyRepo implements ISpotifyPlaylist, ISpotifyTracks{
    constructor(@inject(SpotifyConnectionkey) private spotifyconnection: ISpotifyConnection){
        super(spotifyconnection);
    }
    async getTracks(playlistId: string,client:SpotifyWebApi):Promise<ITracks[]> {
        const Mapping = await client.getPlaylistTracks(playlistId);
        let tracks:ITracks[]=[]
        Mapping.body.items.forEach(mapping=>{
            let tracksdummy:ITracks={name:"",albums:"",artists:[],popularity:0,id:""};
            tracksdummy.id=mapping.track?.id;
            tracksdummy.albums=mapping.track?.album.name;
            mapping.track?.artists.map(artists=>tracksdummy.artists?.push(artists?.name));
            tracksdummy.name=mapping.track?.name;
            tracksdummy.popularity=mapping.track?.popularity;
            tracks.push(tracksdummy);
        });
        return tracks;
    }

    async getPlaylist(ConsumerId: string): Promise<IPlaylist[]> {
        const client = await this.getClient();
        let result:IPlaylist[]=[];
        const promises = (await client.getUserPlaylists(ConsumerId)).body.items.map( async(mapping)=>{
            let playlistdummy:IPlaylist ={id:"",namePlaylist: "",description: "",tracks:[]};
            playlistdummy.id=mapping.id;
            playlistdummy.description=mapping.description;
            playlistdummy.namePlaylist=mapping.name;
            playlistdummy.tracks =  await this.getTracks(playlistdummy.id,client);
            result.push(playlistdummy);
        })
        await Promise.all(promises);
        return result;
    }
}


@provide(SpotifyEmotionkey)
export class SpotifGetEmotion extends SpotifyRepo implements ISpotifyEmotionTracks{
    constructor(@inject(SpotifyConnectionkey) private spotifyconnection: ISpotifyConnection){
        super(spotifyconnection);
    }
    async getTracksbyEmotion(emotionkey: string): Promise<ITracks[]> {
        const client = await this.getClient();
        let result:ITracks[]=[];
        (await client.searchTracks("track:"+emotionkey)).body.tracks?.items.map((mapping)=>{
            let tracksdummy:ITracks={name:"",albums:"",artists:[],popularity:0,id:""};
            tracksdummy.id=mapping.id
            tracksdummy.albums=mapping.album.name;
            mapping.artists.map(artists=>tracksdummy.artists?.push(artists?.name));
            tracksdummy.name=mapping.name;
            tracksdummy.popularity=mapping.popularity;
            result.push(tracksdummy);
        })
        return result;
    }
    
}