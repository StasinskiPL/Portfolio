import htmlImg from "./html.svg";
import cssimg from "./css.svg";
import javascriptImg from "./javascript.svg";
import typescriptImg from "./typescript.svg";
import bootstrap5Img from "./bootstrap5.svg";
import githubImg from "./github.svg";
import nodejsImg from "./nodejs.svg";
import reactImg from "./react.svg";
import reduxImg from "./redux.svg";
import sassImg from "./sass.svg";

interface skill {
  name: string;
  img: string;
}

export const skills: Array<skill> = [
  {
    name: "Html",
    img: htmlImg,
  },
  {
    name: "Css",
    img: cssimg,
  },
  {
    name: "Sass",
    img: sassImg,
  },
  {
    name: "JavaScript",
    img: javascriptImg,
  },
  {
    name: "TypeScript",
    img: typescriptImg,
  },
  {
    name: "React",
    img: reactImg,
  },
  {
    name: "Redux",
    img: reduxImg,
  },
  {
    name: "NodeJs",
    img: nodejsImg,
  },
  {
    name: "Github",
    img: githubImg,
  },
  {
    name: "Bootstrap",
    img: bootstrap5Img,
  },
];
