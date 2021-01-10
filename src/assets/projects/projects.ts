import GamesCenterImg from "../images/gamesCenter.png";
import LibraryImg from "../images/library.png";
import WeatherAppImg from "../images/WeatherApp.png";
import ExpensTrackerImg from "../images/expenseTracker.png";
import EcommerceImg from "../images/ecommerce.png";
import libraryImages from "../images/libraryImages";
import gamesCenterImages from "../images/gamesCenterImages";
import weatherAppImages from "../images/weatherAppImages";
import expenseTrackerImages from "../images/expenseTrackerImages";
import ecommerceImages from "../images/ecommerce";

interface Project {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  image: string;
  detailsImages: Array<string>;
}

export const projectsList: Array<Project> = [
  {
    title: "Ecommerce",
    description:
      "My latest and probably the biggest project, created with React, firebase authentication, redux, mongodb and a little bit of nodeJs.",
    link: "https://ds-ecommerce.netlify.app",
    githubLink: "https://github.com/StasinskiPL/e-commerce",
    image: EcommerceImg,
    detailsImages: ecommerceImages,
  },
  {
    title: "GamesCenter",
    description:
      "A few two players online mini games with real time chat. Created with React and socket.io ",
    link: "https://gamescenter-ds.herokuapp.com",
    githubLink: "https://github.com/StasinskiPL/GamesCenter",
    image: GamesCenterImg,
    detailsImages: gamesCenterImages,
  },
  {
    title: "Library",
    description:
      "Online Library. Created with React , firebase and firebase Authentication.",
    link: "https://miejska-biblioteka.netlify.app",
    githubLink: "https://github.com/StasinskiPL/Biblioteka",
    image: LibraryImg,
    detailsImages: libraryImages,
  },
  {
    title: "WeatherApp",
    description: "WeatherApp with search hints(free Api doesn`t work well).",
    link: "https://weatherapp-ds.netlify.app",
    githubLink: "https://github.com/StasinskiPL/WeatherApp",
    image: WeatherAppImg,
    detailsImages: weatherAppImages,
  },
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker, my first React App, actually renovated with bootstap. ",
    link: "https://expensetracker-ds.netlify.app",
    githubLink: "https://github.com/StasinskiPL/ExpenseTracker-react",
    image: ExpensTrackerImg,
    detailsImages: expenseTrackerImages,
  },
];
