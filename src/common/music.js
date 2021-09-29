const music = [
    {
        "name": "Florence by Kevin Penkin",
        "album": "Florence",
        "year": 2020,
        "url": "https://store.steampowered.com/app/1206330/Florence__Original_Soundtrack/",
        "description": `The opening song to a great game and a similarly amazing album. As someone who plays 
        both the cello and piano, this entire album is just a goldmine for me. Someday I hope to transcribe the 
        entire album and create a "Florence Suite".`,
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
        large number of melodies Yasunori Nishiki had to create, they all have a distinct, yet cohesive sound.`,
        "photo": process.env.PUBLIC_URL + "/imgs/octopath.jpg",
        "links": {
            "musescore": "https://musescore.com/user/35722062/scores/6300541",
            "download": process.env.PUBLIC_URL + "/pdfs/the-riverlands.pdf"
        }
    }
]

export default music;