const music = [
    {
        "name": "Solstice by Sean Knight",
        "album": "21M.065",
        "year": 2023,
        "url": "https://www.youtube.com/watch?v=uCl9pxwJbuY",
        "description": `As a final project for 21M.065, we were required to make a longer song. Solstice is the first song that I've ever composed for 
        that had more than one musician. Composing this song gave me a large amount of respect for people that are able to compose for massive ensembles 
        because I often felt stuck trying to simply put four instruments together. For this song, I really wanted to produce something similar to The Ocean 
        Waves by Shigeru Nagata, so I tried to emphasize rubato and sixth chords in the piece. Although the piece did not necessarily turn out how I wanted, 
        I was still happy to have learned a lot through the process.`,
        "photo": process.env.PUBLIC_URL + "/imgs/solstice.png",
        "links": {
            "musescore": "https://musescore.com/user/35722062/scores/10930849",
            "download": process.env.PUBLIC_URL + "/pdfs/solstice.pdf"
        }
    },
    {
        "name": "Afternoon Nap by Sean Knight",
        "album": "21M.065",
        "year": 2023,
        "url": "https://musescore.com/user/35722062/scores/10102792",
        "description": `Afternoon Nap was the first original piece I've ever composed. This song was composed for 21M.065 at MIT. I am 
        immensely grateful to Evan Ziporyn for guiding me through the process. As someone who has always been interested in the world 
        of music composition, but was always too uncertain on how to begin, this song served as a really important first step for me.`,
        "photo": process.env.PUBLIC_URL + "/imgs/afternoon-nap.png",
        "links": {
            "musescore": "https://musescore.com/user/35722062/scores/10102792",
            "download": process.env.PUBLIC_URL + "/pdfs/afternoon-nap.pdf"
        }
    },
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