import SquareStationeryThumb from "./stationery-shop/stationery-shop-square.png";
import StationeryImage from "./stationery-shop/stationery-shop.png";
import StationeryLogo from "./stationery-shop/stationery-shop.svg";
import icrowdTaskThumb from "./icrowdTask/icrowdtask-square.png";
import icrowdtaskImage from "./icrowdTask/icrowdtask.png";
import icrowdTaskLogo from "./icrowdTask/icrowdtask.svg";
import orderManagementThumb from "./order-managment/order-management-square.png";
import orderManagementImage from "./order-managment/order-management.png";
import orderManagementLogo from "./order-managment/package.svg";
import ecosystemThumb from "./ecosystem-simulation/ecosystem-thumb.png";
import ecosystemImage from "./ecosystem-simulation/ecosystem.png";
import ecosystemLogo from "./ecosystem-simulation/ecosystem.svg";
import imageProcessingThumb from "./image-processing-parallel/image-processing-thumb.png";
import imageProcessingImage from "./image-processing-parallel/image-processing.png";
import imageProcessingLogo from "./image-processing-parallel/image-processing-logo.svg";

const projects = {
  projects: [
    {
      link: "projects/ecosystem-simulation",
      params: "ecosystem-simulation",
      title: "Simple Ecosystem Simulation",
      description:
        "The project Ecosystem Stimulation inspired by some game developers on Youtube give a small view of my own simple forest 🌳",
      thumbnail: ecosystemThumb,
      date: "2020",
      collab: "Only Me",
      programmingLanguage: "Javascript",
      technologies: "three.js, Blender, Webpack",
      tags: ["#modelling", "simulation", "#web"],
      repoLink: "https://github.com/nnfunny/ecosystem-simulation",
      liveDemo: "https://nnfunny.github.io/ecosystem-simulation/",
      mediaType: "image",
      image: ecosystemImage,
      logo: ecosystemLogo,
    },
    {
      link: "projects/icrowdtask",
      params: "icrowdtask",
      title: "iCrowdTask",
      description:
        "iCrowdTask web application which is a crowdsourcing platform toprovide convenience for requesters/customers (i.e., individual or business) by allowing them to outsource their tasks to crowd who can perform theirs tasks anytime and everywhere",
      thumbnail: icrowdTaskThumb,
      date: "2020",
      collab: "Only Me",
      programmingLanguage: "Javascript",
      technologies: "React.js, Express.js, MongoDB, JWT, faceapi.js",
      tags: ["#full-stack", "#web"],
      repoLink: "https://github.com/nnfunny/iCrowdTask",
      liveDemo: "https://face-3b3c7.firebaseapp.com",
      mediaType: "image",
      image: icrowdtaskImage,
      logo: icrowdTaskLogo,
    },
    {
      link: "projects/image-processing-parallel",
      params: "image-processing-parallel",
      title: "Image Processing",
      description: "The simple program processes images (or video) in parallel",
      thumbnail: imageProcessingThumb,
      date: "2020",
      collab: "Only Me",
      programmingLanguage: "C++",
      technologies: "OpenCV, OpenMP, MPI",
      tags: ["#computer-graphics", "#distributing-computing", "#parallel"],
      repoLink: "https://github.com/nnfunny/image-manipulation",
      liveDemo: null,
      mediaType: "image",
      image: imageProcessingImage,
      logo: imageProcessingLogo,
    },
    {
      link: "projects/stationery-shop",
      params: "stationery-shop",
      title: "Stationery Shop",
      description:
        "A website represents an online stationery shop to satisfy “back-to-school” feelings and sell beautiful notebooks, fresh pens, delightful erasers, pencil cases, etc.",
      thumbnail: SquareStationeryThumb,
      date: "2020",
      collab: "Only Me",
      programmingLanguage: "Typescript, C#",
      technologies: ".NET, React.js, Redux, MySQL, Figma",
      tags: ["#full-stack", "#web"],
      repoLink: "https://github.com/nnfunny/stationery-online-shop",
      liveDemo: "https://online-stationery-shop.web.app",
      mediaType: "image",
      image: StationeryImage,
      logo: StationeryLogo,
    },
    {
      link: "projects/order-management",
      params: "order-management",
      title: "Order Management",
      description: "A website manages clients' orders",
      thumbnail: orderManagementThumb,
      date: "2020",
      collab: "Only Me",
      programmingLanguage: "Typescript",
      technologies: "Express.js, React.js, MongoDB",
      tags: ["#full-stack", "#web"],
      repoLink: "https://github.com/nnfunny/order-mangement",
      liveDemo: "https://order-mag.firebaseapp.com",
      mediaType: "image",
      image: orderManagementImage,
      logo: orderManagementLogo,
    },
  ],
};

export default projects;
