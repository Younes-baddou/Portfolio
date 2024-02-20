import {mobile, backend, creator, web, 
  javascript, rc2k, typescript, exakisnelite, 
  html, css, reactjs, redux, tailwind, nodejs,
  mongodb, git, figma, docker, carrent, jobit,
  tripguide, threejs,
  terraform,microsoftazure} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "terraform",
    icon: terraform,
  },
  {
    name: "microsoftazure",
    icon: microsoftazure,
  },
];

const experiences = [
  {
    title: "Full Stack Developer (InternShip)",
    company_name: "RC2K",
    icon: rc2k,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
    "Project: Development of a restaurant reservation website using Laravel.",
    "Initiated and configured the Laravel project setup, laying the groundwork for a robust development environment.",
    "Designed the front-end user interface, including layout, routing, and dynamic display of categories and menus, ensuring a seamless and intuitive user experience.",
    "Completed and updated booking features, implementing functional and user-friendly reservation capabilities for the website."
    ],
  },
  {
    title: "DevOps",
    company_name: "Exakis-Nelite",
    icon: exakisnelite,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Migrating cloud infrastructure from AWS to Microsoft Azure using Terraform, ensuring a seamless transition and efficient deployment.",
      "Collaborating with cross-functional teams, including cloud architects and system engineers, to design and implement scalable cloud solutions on Microsoft Azure.",
      "Utilizing Terraform for infrastructure as code (IaC) to automate and manage cloud services, enhancing deployment speed and consistency.",
      "Participating in strategy meetings and code reviews to ensure best practices in cloud migration, security, and cost optimization are followed."
    ],
  },
];

const projects = [
  {
    name: "Resto App",
    description:
      "Web-based platform that allows users to search, book, and manage reservation for a restaurant, providing a convenient and efficient solution for restauration needs.",
    tags: [
      {
        name: "PHP/Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Younes-baddou/Systeme-reservation-restaurant",
  },
  {
    name: "Ibay",
    description:
      "This project involves developing a RESTful API with C# and .NET Core for iBay Ltd to facilitate online store experiences, enabling users to access product information and sellers to list their products, backed by SQL Server with Entity Framework Core.",
    tags: [
      {
        name: "Aspt.Net",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Entity Framework",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Younes-baddou/Ibay",
  },
  {
    name: "SGBD",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "PLSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Oracle-Apex",
        color: "green-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/Younes-baddou/Projet-SGBD-",
  },
];

export { services, technologies, experiences, projects };