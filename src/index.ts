import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import  "./MuzikController/PostController";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import { Container } from 'inversify';
const c = dotenv.config();
const container=new Container();


//IOC

import {ISpotifyConnection, SpotifyConnection, SpotifyConnectionkey} from "src/MuzikServices/SpotifyConnection";
import { ISpotifyPlaylist, SpotifyPlaylist, SpotifyPlaylistkey, ISpotifyEmotionTracks, SpotifyEmotionkey, SpotifGetEmotion } from './MuzikRepository/SpotifyPlaylist';
import { IServicePlaylist, PlaylistServicekey, ServicesPlaylist, IServiceEmotion, EmotionServiceKey, ServiceEmotion } from './MuzikServices/PlaylistUserService';
import { IPlaylist, ITracks } from './Model/Model';
import { IPage } from "./Model/pagination";
import { IAdaptRepo, AdaptkeyRepo, AdaptRepo } from './MuzikRepository/AdapteurRepo';
import { Deez, Deezermockkey, DeezerMock } from './MuzikRepository/Deezermock';





//Repo
container.bind<ISpotifyPlaylist>(SpotifyPlaylistkey).to(SpotifyPlaylist).inSingletonScope();
container.bind<ISpotifyEmotionTracks>(SpotifyEmotionkey).to(SpotifGetEmotion).inSingletonScope();
container.bind<IAdaptRepo>(AdaptkeyRepo).to(AdaptRepo).inSingletonScope();
container.bind<Deez>(Deezermockkey).to(DeezerMock).inSingletonScope();
//Services
container.bind<ISpotifyConnection>(SpotifyConnectionkey).to(SpotifyConnection).inSingletonScope();
container.bind<IServicePlaylist<IPage<IPlaylist>>>(PlaylistServicekey).to(ServicesPlaylist).inSingletonScope();
container.bind<IServiceEmotion<IPage<ITracks>>>(EmotionServiceKey).to(ServiceEmotion).inSingletonScope();

//SERVER
//END IOC

let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(c.parsed?.PORT,()=> console.log("ENV Settings",c));




