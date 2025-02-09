import { Project } from "./projectInfo";

const featuredProjects: Project[] = [
  {
    link: "/projects/ecosystem-simulation",
    params: "ecosystem-simulation",
    title: "Simple Ecosystem",
    description:
      "The project Ecosystem Stimulation inspired by some game developers on Youtube gives a small view of my own simple forest 🌳",
    shortDesc:
      "A small, simple 3D project inspired by some game developers places you in a simple forsest... 🌳",
    thumbnail: "/images/projects/ecosystem-simulation/ecosystem-thumb.webp",
    date: "2020",
    collab: "Only Me",
    programmingLanguage: "Javascript",
    technologies: "three.js, Blender, Webpack",
    tags: ["#modelling", "simulation", "#web"],
    repoLink: "https://github.com/nnfunny/ecosystem-simulation",
    liveDemo: "https://nnfunny.github.io/ecosystem-simulation/",
    mediaType: "image",
    image: "/images/projects/ecosystem-simulation/ecosystem.webp",
    logo: "/images/projects/ecosystem-simulation/ecosystem.svg",
  },
  {
    link: "/projects/stationery-shop",
    params: "stationery-shop",
    title: "Stationery Shop",
    description:
      "A website represents an online stationery shop to satisfy “back-to-school” feelings and sell beautiful notebooks, fresh pens, delightful erasers, pencil cases, etc.",
    shortDesc:
      "A website represents an online stationery shop to satisfy “back-to-school” feelings and sell...",
    thumbnail: "/images/projects/stationery-shop/stationery-shop-square.webp",
    date: "2020",
    collab: "Only Me",
    programmingLanguage: "Typescript, C#",
    technologies: ".NET, React.js, Redux, MySQL, Figma",
    tags: ["#full-stack", "#web"],
    repoLink: "https://github.com/nnfunny/stationery-online-shop",
    liveDemo: "https://online-stationery-shop.web.app",
    mediaType: "image",
    image: "/images/projects/stationery-shop/stationery-shop.webp",
    logo: "/images/projects/stationery-shop/stationery-shop.svg",
  },
];

export default featuredProjects
