import { Container } from "inversify";
import {ISpotifyConnection, SpotifyConnection, SpotifyConnectionkey} from "src/MuzikServices/SpotifyConnection";
import { ISpotifyPlaylist, SpotifyPlaylist, SpotifyPlaylistkey } from './MuzikRepository/SpotifyPlaylist';
import { IServicePlaylist, PlaylistServicekey, ServicesPlaylist } from './MuzikServices/PlaylistUserService';
import { IPlaylist } from './Model/Model';
import { IPage } from "./Model/pagination";



container.bind<ISpotifyConnection>(SpotifyConnectionkey).to(SpotifyConnection).inSingletonScope();


container.bind<ISpotifyPlaylist>(SpotifyPlaylistkey).to(SpotifyPlaylist).inSingletonScope();


container.bind<IServicePlaylist<IPage<IPlaylist>>>(PlaylistServicekey).to(ServicesPlaylist).inSingletonScope();

