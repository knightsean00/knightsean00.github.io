const music = [
    {
        "name": "Florence by Kevin Penkin",
        "album": "Florence",
        "year": 2020,
        "url": "https://store.steampowered.com/app/1206330/Florence__Original_Soundtrack/",
        "description": `The opening song for to a great game (that I have never played) and an even better album. 
        Kevin Penkin is an amazing composer and has made many other great soundtracks for shows such as Made in Abyss and 
        The Rising of the Shield Hero. The album contains some amazing cello melodies, so I'll eventually 
        transcribe the rest of this album and composing a sort of medley.`,
        "photo": process.env.PUBLIC_URL + "/imgs/florence.jpg",
        "links": {
            "musescore": "https://musescore.com/user/35722062/scores/6304812",
            "download": process.env.PUBLIC_URL + "/pdfs/florence.pdf"
        }
    },
    {
        "name": "The RiverLands by Yasunori Nishiki",
        "album": "Octopath Traveler",
        "year": 2020,
        "url": "https://music.apple.com/us/album/octopath-traveler-original-soundtrack/1406665639",
        "description": `Probably the most covered song from the Octopath Traveler soundtrack. It's a very simple melody 
        that's just very relaxing to listen to. I highly recommend listening to the album in its entirety because despite the 
        large number of melodies Yasunori Nishiki had to create, they all had a distinct sound. The fact that I have never 
        played the game, yet can still imagine what is going on in the moment of the songs speaks volumes about his creativity 
        as a composer.`,
        "photo": process.env.PUBLIC_URL + "/imgs/octopath.jpg",
        "links": {
            "musescore": "https://musescore.com/user/35722062/scores/6300541",
            "download": process.env.PUBLIC_URL + "/pdfs/the-riverlands.pdf"
        }
    }
]

export default music;