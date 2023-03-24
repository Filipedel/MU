

const genre = ["pop",
    "dance pop",
    "rap",
    "rock",
    "hip hop",
    "trap latino",
    "pop rap",
    "reggaeton",
    "edm",
    "latin pop",
    "trap",
    "modern rock",
    "pop dance",
    "musica mexicana",
    "classic rock",
    "r&b",
    "post-teen pop",
    "permanent wave",
    "tropical house",
    "mellow gold",
    "canadian pop",
    "soft rock",
    "alternative metal",
    "pop rock",
    "k-pop",
    "nueva musica mexicana",
    "electropop",
    "album rock",
    "country",
    "desi pop",
    "contemporary country",
    "southern hip hop",
    "filmi",
    "urban contemporary",
    "melodic rap",
    "hard rock",
    "electro house",
    "nu metal",
    "indie pop",
    "uk pop",
    "alternative rock",
    "rock en espanol",
    "latin hip hop",
    "modern bollywood",
    "ranchera",
    "tropical",
    "atl hip hop",
    "alt z",
    "gangster rap",
    "art pop",
    "country road"]


    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
module.exports = {
    RandGenre : function() {
        return genre[randomNumberInRange(0,genre.length)];
    
    }
}
