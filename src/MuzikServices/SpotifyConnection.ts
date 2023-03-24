import {provide} from "inversify-binding-decorators";
import SpotifyWebApi from "spotify-web-api-node";
import * as dotenv from 'dotenv'
dotenv.config();

export const SpotifyConnectionkey = Symbol.for("spotifyConnectionKey");
export interface ISpotifyConnection{
    getConnection():Promise<SpotifyWebApi>;
}

@provide(SpotifyConnectionkey)
export class SpotifyConnection implements ISpotifyConnection{
    private  ClientId?: string = process.env.ClientID;
    private  SecretClient?: string = process.env.SecretID;
    constructor() {}
    async getConnection(): Promise<SpotifyWebApi> {
        const client = new SpotifyWebApi({clientId:this.ClientId, clientSecret: this.SecretClient})
        const initializeClient = await client.clientCredentialsGrant();
        const token = initializeClient.body.access_token;
        client.setAccessToken(token);
        return client;
    }

}