import { IPlaylist, ITracks } from "src/Model/Model";
import { provide } from 'inversify-binding-decorators';

export const Deezermockkey = Symbol.for("Deezermockkey");

export interface Deez{
    getPlaylist(ConsumerID:string):Promise<IPlaylist[]>;
    getTracks(emotionkey:string):Promise<ITracks[]>;
}
@provide(Deezermockkey)
export class DeezerMock implements Deez{
    constructor(){}
    async getTracks(emotionkey: string): Promise<ITracks[]> {
        const Iplaylist:ITracks [] = []
        const i: ITracks={
            name: "Mock",
            albums:" undefined",
            artists: undefined,
            id: "djsoij",
            popularity: 0
        }
        Iplaylist.push(i);
        return Iplaylist;
    }
    async getPlaylist(ConsumerID: string): Promise<IPlaylist[]> {
        const Iplaylist:IPlaylist [] = []
        const i: IPlaylist={
            id: undefined,
            namePlaylist: null,
            description: null,
            tracks: []
        }
        Iplaylist.push(i);
        return Iplaylist;
    }

}