import Work2 from "../../assets/projects/wordle.png";
import Work3 from "../../assets/projects/parkme.png";
import Work4 from "../../assets/projects/calculator.png";
import Work5 from "../../assets/projects/sketch.png";

export const projectsData = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/EWE_8sm45_s",
    title: "Spotify to YouTube Playlist Converter",
    link: "https://spotify-youtube-convert-89a98418f1e9.herokuapp.com",
    stack: [
      "React",
      "Spotify API",
      "YouTube API",
      "Node.js",
      "Express.js",
      "Heroku",
      "Passport.js",
    ],
    description: "Convert your Spotify playlists to YouTube playlists.",
    github: "https://github.com/justinc0251/spotify-youtube-converter",
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/_q2OEhN2obo",
    title: "Discord Music Bot",
    stack: [
      "JavaScript",
      "Node.js",
      "Discord.js",
      "FFmpeg",
      "YTDL-Core",
      "Heroku",
    ],
    description: "A Discord bot that plays music from YouTube. ",
    github: "https://github.com/justinc0251/discord-music-bot",
  },
  {
    id: 3,
    image: Work2,
    title: "Wordle Clone",
    link: "https://justinc0251.github.io/wordle-clone/",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    description: "A clone of the popular game Wordle.",
    github: "https://github.com/justinc0251/wordle-clone",
  },
  {
    id: 4,
    image: Work3,
    title: "ParkMe",
    stack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Express.js",
      "Express",
      "Postman",
      "Mapbox",
      "Inrix API",
    ],
    description:
      "An interactive parking web app that allows users to find parking spots in real time.",
    github: "https://github.com/danielkazarian/inrix-hack-2022",
  },
  {
    id: 5,
    image: Work4,
    title: "Calculator",
    link: "https://justinc0251.github.io/calculator/",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "A simple calculator.",
    github: "https://github.com/justinc0251/calculator",
  },
  {
    id: 6,
    image: Work5,
    title: "Etch-A-Sketch",
    link: "https://justinc0251.github.io/etch-a-sketch/",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "A simple Etch-A-Sketch.",
    github: "https://github.com/justinc0251/etch-a-sketch",
  },
];
