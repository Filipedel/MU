"use strict";
exports.__esModule = true;
exports.RegisterSpotifyConnection = void 0;
var SpotifyConnection_1 = require("src/MuzikServices/SpotifyConnection");
function RegisterSpotifyConnection(container) {
    container.bind(SpotifyConnection_1.SpotifyConnectionkey).to(SpotifyConnection_1.SpotifyConnection).inSingletonScope();
}
exports.RegisterSpotifyConnection = RegisterSpotifyConnection;
