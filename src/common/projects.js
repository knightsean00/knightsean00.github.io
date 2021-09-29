const projects = [
    {
        "name": "Motion Object Illusion",
        "year": 2021,
        "url": "http://web.mit.edu/9.35/www/2021/vision/gallery/knight/index2.html",
        "description": `This was another illusion that I developed for the class 9.35: Perception. The ultimate goal of this illusion
        was to better understand what mode of concealment had the most perceivable effect on object recognition ability. The brain
        has the incredibly ability to construct an object, even when important details may be separated in time and space. Although 
        this seems like a trivial task, I think it well represents the extraordinary processing abilities of our brains.`,
        "photo": process.env.PUBLIC_URL + "/imgs/obscure.png",
        "tech": "ReactJS"
    },
    {
        "name": "Stochastic Frequency Modulation Illusion",
        "year": 2021,
        "url": "http://web.mit.edu/9.35/www/2021/auditory/gallery/sean_knight_illusion/index.html",
        "description": `In our daily lives, our brain performs the incredible feat of filling in lost information. However, this 
        ability of the brain is best put on display when tones are interrupted by loud, yet brief noise bursts. During the noise burst,
        the tone actually stops, but the brain will perceive continuity through the interruption. In this illusion
        I sought to understand the limits to which this "filling-in" effect would continue.`,
        "photo": process.env.PUBLIC_URL + "/imgs/filled.png",
        "tech": "MATLAB"
    },
    {
        "name": "sunsets_locale",
        "year": 2021,
        "url": "https://github.com/knightsean00/new_sun",
        "description": `Originally, sunsets_locale was a Discord bot that was created by me and my friend over the summer of 2020. 
        However, after a few updates to the foundational npm packages, the bot was rendered useless and was ultimately discarded.
        I recently completed an extensive overhaul of the bot to make the code far more modularizable and readable, as well as adding Soundcloud,
        multi-server, and audio clipping (still working on this feature) functionality. This bot is highly customizable, so feel free to reuse
        this bot for your own server!`,
        "photo": process.env.PUBLIC_URL + "/imgs/sunsets.png",
        "tech": "Discord.js, NodeJS, YouTube API, Soundcloud API, Scipy, Numpy"
    },
    {
        "name": "Melodiq",
        "year": 2021,
        "url": "https://melodiq.herokuapp.com/",
        "description": `An online multiplayer music guessing game powered by Spotify that I built with one of my good friends. 
        This project has likely been one of my most rewarding because I was able to create something that my friends were
        able to use and enjoy. It was due to games such as these that my friends and I were able to retain our sanity during quarantine.`,
        "photo": process.env.PUBLIC_URL + "/imgs/melodiq.png",
        "tech": "Bootstrap, ExpressJS, FeathersJS, NodeJS, socket.io, Spotify API, ReactJS"
    },
    {
        "name": "AP Calculus BC Review",
        "year": 2018,
        "url": "https://calculusbc.github.io/",
        "description": `This calculus review website was a final project submission for my junior year calculus class.
        My friends and I spent a lot of time working on explanation and practice problems, so we were more than elated
        when we found out that it was never used in any subsequent calculus classes. Hopefully you might be able to use it 
        to brush off those long-forgotten calculus skills.`,
        "photo": process.env.PUBLIC_URL + "/imgs/calculus.png",
        "tech": "AsciiMath"
    }
]

export default projects;