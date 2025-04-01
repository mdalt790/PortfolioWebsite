import project1 from "../assets/projects/AIBook.jpg";
import project2 from "../assets/projects/vrProjectPic.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/MassLottery.webp";

export const HERO_CONTENT = `I am a passionate data scientist with a knack for transforming complex datasets into actionable insights. With hands-on experience in Python, SQL, and advanced machine learning libraries like Scikit-Learn and PyTorch, I have developed robust models and innovative solutions through projects such as an AI Book Recommendation System and a comprehensive Massachusetts Lottery Visualization. As an Undergraduate Research Fellow since February 2024, I am continuously exploring new methodologies to drive data-driven decision-making. My goal is to leverage my technical expertise and analytical mindset to solve challenging problems and create impactful, scalable solutions in the world of data science.`;

export const ABOUT_TEXT = ``;

export const EXPERIENCES = [
  {
    year: "2024 - 2024",
    role: "COE Procurement Intern",
    company: "Alkermes",
    description: `Identified and resolved data visualization issue within procurement software, leading to the accurate recategorization of over $150 million in spending data.`,
    technologies: ["Power Query", "Excel", "Simfoni Dashboards"],
  },
  {
    year: "Undergraduate Researcher",
    company: "UMass Boston AI lab",
    description: `Developed a virtual reality study with built in data collection for over 30+ participants. Earned IRB approval, $1000 in grants, and a pending application to The Symposium on Applied Perception.`,
    technologies: ["Unity","C#","R"],
  },
];

export const PROJECTS = [
  {
    title: "Massachusetts Lottery Visualization",
    image: project4,
    description:
      "Choropleth map data visualization of Massachusetts lottery data allowing for analyzing trends in lottery winnings.",
    technologies: ["HTML", "CSS", "Python", "Numpy", "Javascript", "Vega-Lite", "QGIS"],
  },
  {
    title: "Virtual Boundaries: Exploring Social Distancing Behaviors in Virtual Reality",
    image: project2,
    description:
      "A project developed during my undergraduate research allowing for data collection on percieved social distance in virtual space.",
    technologies: ["C#", "R", "Unity"],
  },
  {
    title: "AI Book Recommendation System",
    image: project1,
    description:
      "A responsive collection of book recommendation systems built from Kaggle data based on Collaborative filtering, Context based filtering, and a Hybrid filtering system. ",
    technologies: ["python","Scikit-Learn", "Numpy", "Pandas","OpenAI API"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer Motion"],
  },
  
];

export const CONTACT = {
  phoneNo: "+1 561 990 6201 ",
  email: "mdalt790@gmail.com",
};
