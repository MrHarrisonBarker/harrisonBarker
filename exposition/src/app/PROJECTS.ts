import {
  Project
} from "./project";

export const projects: Project[] = [{
    ProjectId: 1,
    Name: "The Bugle",
    LogLine: "News RSS reader for aggregated news",
    Description: "A news web app using rss feeds. Angular front-end with Js Express back-end",
    Repo: "https://github.com/MrHarrisonBarker/TheBugle",
    Image: "../assets/bugle.png",
    Technologies: ["Node.js","Bootstrap","HTML","CSS","JavaScript","TypeScript","Express JS","Angular"],
    URL: "http://www.harrisonbarker.co.uk/news"
  },
  {
    ProjectId: 2,
    Name: "NotReddit",
    LogLine: "Reddit clone",
    Description: "Reddit clone",
    Repo: "https://github.com/MrHarrisonBarker/NotReddit",
    Image: "assets/reddit.jpg"
  },
  {
    ProjectId: 3,
    Name: "The River",
    LogLine: "Poker info site",
    Description: "Poker info site",
    Repo: "https://github.com/MrHarrisonBarker/TheRiver",
    Image: "somthing",
  },
  {
    ProjectId: 4,
    Name: "MoreTwitterKnowledge",
    LogLine: "Tweet collection with sentiment analysis",
    Description: "A-Level project, collects tweets based on search and performing sentiment analysis with data visualisations.",
    Repo: "https://github.com/MrHarrisonBarker/aLevel",
    Technologies: [
        "ASP.NET","Bootstrap","C#"
    ],
    Image: "../../assets/more.png",
  }
];
