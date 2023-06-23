const projects = [
    {
        "name": "Redimark",
        "year": 2023,
        "url": "https://github.com/knightsean00/redimark",
        "description": `As someone who has never been a big fan of the bookmark bar, I've always navigated to websites by typing and clicking through sites as fast 
        as I possibly could. Once I reached MIT, I had my first experience with Go links with HackMIT. I later built a similar short-link system for MIT Student 
        Events Board. I realized that I became so dependent on this system that I wanted one for my own personal use.`,
        "photo": process.env.PUBLIC_URL + "/imgs/redimark.png",
        "tech": "HTML, CSS, JavaScript"
    },
    {
        "name": "Aurora",
        "year": 2022,
        "url": "https://aurora-d6aaa.web.app/",
        "description": `For our final project for CMS.611, our team was required to create a video game full-fledged video game 
        with story, custom-made graphics, sounds, music, and game logic. Our team continued to develop our previous BEAM concept and 
        we evolved to Aurora, which we believe was a good step in the evolution of our project over the semester.`,
        "photo": process.env.PUBLIC_URL + "/imgs/aurora.png",
        "tech": "Unity"
    },
    {
        "name": "BEAM",
        "year": 2022,
        "url": "https://beam-925b9.web.app/",
        "description": `As one of our intermediate projects of CMS.611, we were required to prototype a video game concept. Our team decided
        to explore the concept of limiting vision for our game. Players were only able to see their surroundings in a echolocation-ish manner that
        we thought lended well to an unique aesthetic.`,
        "photo": process.env.PUBLIC_URL + "/imgs/beam.png",
        "tech": "Unity"
    },
    {
        "name": "Nutrition Hero",
        "year": 2022,
        "url": "https://github.com/knightsean00/hippo",
        "description": `As a final project for CMS.590 (Game for Learning) we were required to create a video game that taught
        a concept of our choosing. Our group chose to try and teach about the complexities of nutrition and a balanced diet.
        Oftentimes, in school, nutrition is taught as a very simplistic binary (good vs. bad food), but in reality, nutrition
        is far more complex. As a rough demo of our game, we wanted to demonstrate the difficulties of balancing different macronutrients
        and the happiness of the ficticious protagnoist. This game was made during a all-nighter in the basement of 
        Maseeh and, as one of my first video games, was extremely fun and informative to make. `,
        "photo": process.env.PUBLIC_URL + "/imgs/nutrition-hero.png",
        "tech": "Godot, Python"
    },
    {
        "name": "sunsets_locale",
        "year": 2022,
        "url": "https://github.com/knightsean00/sunsets_locale",
        "description": `Originally, sunsets_locale was a Discord bot that was created by me and my friend over the summer of 2020. 
        However, after a few updates to the foundational npm packages, the bot was rendered useless and was ultimately discarded.
        We recently completed an additional extensive overhaul of the bot (making this v3) to make the code far more modularizable and readable, as well as adding Soundcloud,
        multi-server, and audio clipping (still working on this feature) functionality. This bot is highly customizable, so feel free to reuse
        this bot for your own server!`,
        "photo": process.env.PUBLIC_URL + "/imgs/sunsets.png",
        "tech": "TypeScript, Discord.js, YouTube API, Soundcloud API, Scipy, Numpy"
    },
    {
        "name": "Motion Object Illusion",
        "year": 2021,
        "url": process.env.PUBLIC_URL + "/saved-projects/visual-illusion/index.html",
        "description": `This was another illusion that I developed for the class 9.35: Perception. The ultimate goal of this illusion
        was to better understand what mode of concealment had the most perceivable effect on object recognition ability. The brain
        has the incredibly ability to reconstruct and perceive an object, even when important details may be separated in time and space. Although 
        this seems like a trivial task, I think it well represents the extraordinary processing abilities of our brains.`,
        "photo": process.env.PUBLIC_URL + "/imgs/obscure.png",
        "tech": "ReactJS"
    },
    {
        "name": "Stochastic Frequency Modulation Illusion",
        "year": 2021,
        "url": process.env.PUBLIC_URL + "/saved-projects/auditory-illusion/index.html",
        "description": `In our daily lives, our brain performs the incredible feat of filling in lost information. However, this 
        ability of the brain is best put on display when tones are interrupted by loud, yet brief noise bursts. During the noise burst,
        the tone actually stops, but the brain will perceive continuity through the interruption. In this illusion
        I sought to understand the limits to which this "filling-in" effect would continue.`,
        "photo": process.env.PUBLIC_URL + "/imgs/filled.png",
        "tech": "MATLAB"
    },
    {
        "name": "Melodiq",
        "year": 2021,
        "url": "https://melodiq.onrender.com/",
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