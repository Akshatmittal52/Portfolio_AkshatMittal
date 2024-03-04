import Netflix from "../assets/images/portfolio/Screenshot 2023-09-22 113037.png";
import Intern from "../assets/images/portfolio/Screenshot 2023-09-22 113411.png";
import youtube from "../assets/images/portfolio/youtube.png";

const projectsData = [
  {
    id: "Internship Website",
    img: Intern,
    name: "Internship Website",
    stack: ["< React.js/>", "< CSS3 />", "< Node.js />", "< MongoDB />"],
    src: "https://github.com/Akshatmittal52/Internship-website",
    source: "https://github.com/Akshatmittal52/Internship-website",
    description:
      "Developed a system with anytime and anywhere accessibility with a user-friendly interface to help students access the internship opportunities and to engage with the companies which are recruiting interns.",

  },
  {
    id: "Home Netflix",
    img: Netflix,
    name: "Home Netflix",
    stack: ["< HTML5 />", "< CSS />"],
    src: "https://github.com/Akshatmittal52/Netflix_Home_page",
    source: "https://github.com/Akshatmittal52/Netflix_Home_page",
    description:
      "In this project, I designed a home page of Netflix. The major challenges in designing this project was to add animations and the styles to the icons and images.",
  },
  {
    id: "YouTube Clone",
    img: youtube,
    name: "YouTube Clone",
    stack: ["< ReactJS />", "<Rapid API />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/catherineisonline/bankist",
    description:
      "The project aims to design a youTube clone, where the user can search and watch any video. This project is designed with the help of Rapid API.",
  }
];

export { projectsData };
