import {
  Project
} from "./project";

export const projects: Project[] = [{
  ProjectId: 1,
  Name: "The Bugle",
  LogLine: "News RSS reader for aggregated news",
  Description: "A news web app using rss feeds. Angular front-end with Js Express back-end",
  Repo: "https://github.com/MrHarrisonBarker/TheBugle",
  URL: "http://www.harrisonbarker.co.uk/news",
  Image: "../assets/bugle.png",
  ImagePreview: "assets/buglePrev.png",
  Technologies: ["Node.js", "Bootstrap", "HTML", "CSS", "JavaScript", "TypeScript", "Express JS", "Angular"],
  IsFinished: false,
},
  {
    ProjectId: 2,
    Name: "NotReddit",
    LogLine: "Reddit clone",
    Description: "Reddit clone",
    Repo: "https://github.com/MrHarrisonBarker/NotReddit",
    Image: "assets/reddit.jpg",
    ImagePreview: "assets/redditPrev.png",
    Technologies: ["HTML", "CSS", "JavaScript", "Express JS", "Node.js", "Mongo Db", "Angular", "Bootstrap"],
    IsFinished: false,
  },
  {
    ProjectId: 3,
    Name: "The River",
    LogLine: "Poker info site",
    Description: "Poker info site made for computer science web development class",
    Repo: "https://github.com/MrHarrisonBarker/TheRiver",
    Image: "../assets/river.png",
    ImagePreview: "assets/riverPrev.png",
    URL: "http://www.harrisonbarker.co.uk/river",
    Technologies: ["JavaScript", "Handbrake", "Bootstrap", "HTML", "CSS"],
    IsFinished: true,
    CompletionDate: new Date(2019, 0, 14),
  },
  {
    ProjectId: 4,
    Name: "MoreTwitterKnowledge",
    LogLine: "Tweet collection with sentiment analysis",
    Description: "A-Level project, collects tweets based on search and performing sentiment analysis with data visualisations.",
    Repo: "https://github.com/MrHarrisonBarker/aLevel",
    Technologies: [
      "ASP.NET", "Bootstrap", "C#"
    ],
    Image: "../../assets/more.png",
    ImagePreview: "assets/twitterPrev.png",
    IsFinished: false,
  }
];
