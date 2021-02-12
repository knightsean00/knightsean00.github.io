const projects = [
    {
        "name": "Melodiq",
        "year": 2021,
        "url": "https://melodiq.herokuapp.com/",
        "description": `An online multiplayer music guessing game powered by Spotify that I built with the 
        same friend that worked on sunsets_locale. As someone who has spent a significant portion of time working
        on and playing this game, it's honestly a lot of fun to play, especially if you have a lot of friends to
        play with.`,
        "photo": null,
        "tech": "Bootstrap, ExpressJS, FeathersJS, NodeJS, socket.io, Spotify API, ReactJS"
    },
    {
        "name": "sunsets_locale",
        "year": 2020,
        "url": "https://github.com/knightsean00/sunsets_locale",
        "description": `This was a Discord music bot that was created by me and my friend over the summer. Frankly speaking,
        the code is absolutely atrocious, but it was our very first project together and so it still has a special place
        in my heart.`,
        "photo": process.env.PUBLIC_URL + "/imgs/sunsets.png",
        "tech": "Discord.js, NodeJS, YouTube API"
    },
    {
        "name": "AP Calculus BC Review",
        "year": 2018,
        "url": "https://calculusbc.github.io/",
        "description": `This calculus review website was a final project submission for my junior year calculus class.
        My friends and I spent a lot of time working on explanation and practice problems, so we were more than elated
        when we found out that it was never used in the subsequent calculus classes. Hopefully you might be able to use it 
        to brush off those long-forgotten calculus skills.`,
        "photo": null,
        "tech": "AsciiMath, Materialize"
    }
]

export default projects;