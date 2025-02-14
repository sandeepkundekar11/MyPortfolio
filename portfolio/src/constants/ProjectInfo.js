import blogImg from "../assets/Blogging.png";
import cssImg from "../assets/Css.webp";
import EcomImg from "../assets/E-com.jpg";
import htmlImg from "../assets/Html.png";
import javsScriptImg from "../assets/JS.png";
import Javaimg from "../assets/Java.png";
import NodejsImg from "../assets/Nodejs.webp";
import QuizImg from "../assets/QuizApp.png";
import TailwindImg from "../assets/TailwindCss.png";
import JiraImg from "../assets/TaskManager.jpg";
import ReactImg from "../assets/apps.ico";
import bootstrapImg from "../assets/bootstrapIcon.png";
import dockerImg from "../assets/docker.webp";
import ExpressImg from "../assets/express.webp";
import figmaImg from "../assets/figma.png";
import gitImg from "../assets/git.png";
import kafkaImg from "../assets/kafka.png";
import mongodbImg from "../assets/mongodb.png";
import NextjsImg from "../assets/nextjs.png";
import playwrightImg from "../assets/playwright.png";
import redisImg from "../assets/redis.webp";
import mySqlImg from "../assets/sql.png";
const ProjectInfo = [
  {
    title: "E-Commerce Site",
    Heading:
      "🎉 Introducing my new e-commerce site, built with the MERN stack!",
    description:
      "A feature-rich e-commerce platform with secure authentication, product filtering, seamless checkout, and Stripe payment integration.",
    skills: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "JWT",
      "Bcrypt",
    ],
    imgScr: EcomImg,
    gitLink: "https://github.com/sandeepkundekar11/E-commerce",
    videoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7181997958589022208/",
  },
  {
    title: "Blogging Application",
    Heading:
      "🎉 Introducing my advanced blogging application, built with a powerful tech stack!",
    description:
      "A blogging platform with secure authentication, CRUD functionality for blogs, user interactions (likes, comments, follow/unfollow), and profile management.",
    skills: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bcrypt",
    ],
    imgScr: blogImg,
    gitLink: "https://github.com/sandeepkundekar11/webBlog",
    videoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7228445036818915328/",
  },
  {
    title: "Quiz App",
    Heading: "📌 I’ve built a Quiz App using modern web technologies!",
    description:
      "An interactive quiz platform with secure authentication, quiz creation, preview, and restrictions on reattempts.",
    skills: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    imgScr: QuizImg,
    gitLink: "https://github.com/sandeepkundekar11/MernQuize",
    videoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7263852511994753024/",
  },
  {
    title: "Task Manager App",
    Heading: "🚀 Most Advanced Task Manager App | Jira-like | MERN Stack",
    description:
      "A Jira-like task manager with company, project, and user management, featuring task and sprint creation, drag-and-drop functionality, and performance optimizations.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Bcrypt", "JWT"],
    imgScr: JiraImg,
    gitLink: "https://github.com/sandeepkundekar11/TaskFlow",
    videoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7293893728379801600/",
  },
];

const FrontendSkills = [
  {
    name: "React js",
    src: ReactImg,
  },
  {
    name: "Next js",
    src: NextjsImg,
  },
  {
    name: "Html",
    src: htmlImg,
  },
  {
    name: "Css",
    src: cssImg,
  },
  {
    name: "Tailwind Css",
    src: TailwindImg,
  },
  {
    name: "Bootstrap",
    src: bootstrapImg,
  },
];

const BackendSkills = [
  {
    name: "Node Js",
    src: NodejsImg,
  },
  {
    name: "Express Js",
    src: ExpressImg,
  },
  {
    name: "Redis",
    src: redisImg,
  },
  {
    name: "Kafka",
    src: kafkaImg,
  },
];

const DatabasesSkills = [
  {
    name: "Mongodb",
    src: mongodbImg,
  },
  {
    name: "Mysql",
    src: mySqlImg,
  },
];

const TestingTool = [
  {
    name: "PlayWright",
    src: playwrightImg,
  },
];

const Tools = [
  {
    name: "Git & GitHub",
    src: gitImg,
  },
  {
    name: "Docker",
    src: dockerImg,
  },
  {
    name: "Figma",
    src: figmaImg,
  },
];

const ProgramingLanguages = [
  {
    name: "Javascript",
    src: javsScriptImg,
  },
  {
    name: "Java",
    src: Javaimg,
  },
];

export {
  BackendSkills,
  DatabasesSkills,
  FrontendSkills,
  ProgramingLanguages,
  ProjectInfo,
  TestingTool,
  Tools,
};
