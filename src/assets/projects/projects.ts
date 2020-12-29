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
    description: "A few two players online mini games with real time chat. Created with React and socket.io ",
    link: "https://gamescenter-ds.herokuapp.com/",
    githubLink: "https://github.com/StasinskiPL/GamesCenter",
    image: GamesCenterImg,
  },
  {
    title: "Library",
    description: "Online Library. Created with React , firebase and firebase Authentication.",
    link: "https://miejska-biblioteka.netlify.app/",
    githubLink: "https://github.com/StasinskiPL/Biblioteka",
    image: LibraryImg,

  },
  {
    title: "WeatherApp",
    description: "WeatherApp with search hints(free Api doesn`t work well).",
    link: "https://weatherapp-ds.netlify.app/",
    githubLink: "https://github.com/StasinskiPL/WeatherApp",
    image: WeatherAppImg,

  },
  {
    title: "Expense Tracker",
    description: "Expense Tracker, my first React App, actually renovated with bootstap. ",
    link: "https://github.com/StasinskiPL/GamesCenter",
    githubLink: "https://github.com/StasinskiPL/ExpenseTracker-react",
    image: ExpensTrackerImg,

  },
];
