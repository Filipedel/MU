import { provide } from "inversify-binding-decorators";
import { IPlaylist } from "src/Model/Model";
import { ISpotifyEmotionTracks, ISpotifyPlaylist, SpotifyEmotionkey, SpotifyPlaylistkey } from './SpotifyPlaylist';
import { inject } from "inversify";
import { Repo, ITracks } from '../Model/Model';
import { Deezermockkey, Deez } from './Deezermock';

export const AdaptkeyRepo = Symbol.for("adaptkeyrepo");

export interface IAdaptRepo{
    getPlaylist(ConsumerId:string,typeRepo:string):Promise <IPlaylist[]>;
    getTracksbyEmotion(emotionkey:string,typeRepo:string):Promise<ITracks[]>;
}

@provide(AdaptkeyRepo)
export class AdaptRepo implements  IAdaptRepo{
    constructor(@inject(SpotifyPlaylistkey) private readonly spotifyplaylist: ISpotifyPlaylist,@inject(Deezermockkey) private readonly deezmock:Deez,@inject(SpotifyEmotionkey) private emotiontracks:ISpotifyEmotionTracks){}
    async getTracksbyEmotion(emotionkey: string, typeRepo: string): Promise<ITracks[]> {
        let result: ITracks[] = [];
        if(typeRepo===Repo.Spotify){
            result = await this.emotiontracks.getTracksbyEmotion(emotionkey);
        }
        if(typeRepo===Repo.Deezer){
            result =  await this.deezmock.getTracks(emotionkey);
        }
        return result;
    }
    async getPlaylist(ConsumerId: string,typeRepo:string): Promise<IPlaylist[]> {
        let result: IPlaylist[] = [];
        if(typeRepo===Repo.Spotify){
            result = await this.spotifyplaylist.getPlaylist(ConsumerId);
        }
        if(typeRepo===Repo.Deezer){
            result =  await this.deezmock.getPlaylist(ConsumerId);
        }
        return result;
    }
    
}