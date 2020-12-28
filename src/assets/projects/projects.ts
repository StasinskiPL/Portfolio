import GamesCenterImg from "../images/gamesCenter.png";
import LibraryImg from "../images/library.png";
import WeatherAppImg from "../images/WeatherApp.png";
import ExpensTrackerImg from "../images/expenseTracker.png";


interface Project {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  image: string
}

export const projectsList: Array<Project> = [
  {
    title: "GamesCenter",
    description: "this is games Center",
    link: "https://gamescenter-ds.herokuapp.com/",
    githubLink: "https://github.com/StasinskiPL/GamesCenter",
    image: GamesCenterImg,
  },
  {
    title: "Library",
    description: "Library",
    link: "https://miejska-biblioteka.netlify.app/",
    githubLink: "https://github.com/StasinskiPL/Biblioteka",
    image: LibraryImg,

  },
  {
    title: "WeatherApp",
    description: "this is games Center",
    link: "https://weatherapp-ds.netlify.app/",
    githubLink: "https://github.com/StasinskiPL/WeatherApp",
    image: WeatherAppImg,

  },
  {
    title: "Expense Tracker",
    description: "this is games Center",
    link: "https://github.com/StasinskiPL/GamesCenter",
    githubLink: "https://github.com/StasinskiPL/ExpenseTracker-react",
    image: ExpensTrackerImg,

  },
];
