import * as express from 'express';
import {
    controller,
    httpGet,
    httpPost,
    request,
    response,
    BaseHttpController
} from "inversify-express-utils";
import {inject} from "inversify";
import { IServicePlaylist, PlaylistServicekey, EmotionServiceKey, IServiceEmotion } from '../MuzikServices/PlaylistUserService';
import { IPlaylist, ITracks } from 'src/Model/Model';


@controller("/api/muzik")
export class PostController extends BaseHttpController {
    constructor(@inject(PlaylistServicekey) private serviceplaylist: IServicePlaylist<IPlaylist[]>,@inject(EmotionServiceKey) private emotiontracks:IServiceEmotion<ITracks[]>) {
        super();
    }

    @httpGet("/getPlaylists/:userid")
    async getPlaylists (@request() req: express.Request, @response() res: express.Response) {
        const Type = req.query.type as string;
        const result = await this.serviceplaylist.getPlaylist(req.params.userid,Type);
        res.status(200).send(result);
    }
    @httpGet("/Emotion/:emotionkey")
    async getEmotionTracks (@request() req: express.Request, @response() res: express.Response) {
        const Type = req.query.type as string;
        const result = await this.emotiontracks.getTracksbyEmotion(req.params.emotionkey,Type);
        res.status(200).send(result);
    }
}