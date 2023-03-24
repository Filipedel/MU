import { provide } from 'inversify-binding-decorators';
import { inject } from 'inversify';
import { SpotifyPlaylistkey, ISpotifyPlaylist, SpotifyEmotionkey, ISpotifyEmotionTracks } from '../MuzikRepository/SpotifyPlaylist';
import { IPage } from '../Model/pagination';
import { IPlaylist, ITracks} from '../Model/Model';
import { AdaptkeyRepo, IAdaptRepo } from '../MuzikRepository/AdapteurRepo';

export const PlaylistServicekey = Symbol.for("playlistServiceKey");
export const EmotionServiceKey =Symbol.for("emotionservicekey");

export interface IServicePlaylist<U>{
    getPlaylist(consumerId:string,typeRepo:string):Promise<U>;
}
export interface IServiceEmotion<T>{
    getTracksbyEmotion(emotionkey:string,typeRepo:string):Promise<T>;
}


@provide(PlaylistServicekey)
export class ServicesPlaylist implements IServicePlaylist<IPage<IPlaylist>>{
    constructor(@inject(AdaptkeyRepo) private playlist:IAdaptRepo){}

    
    async getPlaylist(consumerId: string,typeRepo:string): Promise<IPage<IPlaylist>> {
        const playlist = await this.playlist.getPlaylist(consumerId,typeRepo);
        const result:IPage<IPlaylist>={
            Items: playlist,
            countitem: playlist.length,
        }
        return result;
    }
    
}
@provide(EmotionServiceKey)
export class ServiceEmotion implements  IServiceEmotion<IPage<ITracks>>{

    constructor(@inject(AdaptkeyRepo) private playlist:IAdaptRepo){}
    async getTracksbyEmotion(emotionkey: string,typeRepo:string): Promise<IPage<ITracks>> {
        const emotiontracks = await this.playlist.getTracksbyEmotion(emotionkey,typeRepo);
        const result:IPage<ITracks>={
            Items: emotiontracks,
            countitem: emotiontracks.length,
        }
        return result;
    }
    

}