export interface Project {
  link: string;
  params: string;
  title: string;
  description: string;
  shortDesc: string;
  thumbnail: string;
  date: string;
  collab: string;
  programmingLanguage: string;
  technologies: string;
  tags: string[];
  repoLink: string;
  liveDemo: string | null;
  mediaType: string;
  image: string;
  logo: string;
}
export type Projects = { projects: Project[] };

const projects: Projects = {
  projects: [
    {
      link: "/projects/portfolio",
      params: "portfolio",
      title: "Nam Nguyen Porfolio",
      description:
        "The web-based portfolio consists of my personal projects. Also, it introduces my personality, interests, hobbies as well as basic information. In the future, I could write several tech blogs about the web, life, computer science, and even game. 🌸",
      shortDesc:
        "The web-based portfolio consists of my personal projects. Also, it introduces my personality,... 🌸",
      thumbnail: "/images/projects/porfolio/portfolio-thumb.webp",
      date: "2021",
      collab: "Only Me",
      programmingLanguage: "Typescript",
      technologies: "Next.js, React.js, SCSS",
      tags: ["#porfolio", "#web"],
      repoLink: "https://github.com/nnfunny/nam-nguyen-portfolio",
      liveDemo: "https://namnguyen.in/",
      mediaType: "image",
      image: "/images/projects/porfolio/portfolio-image.webp",
      logo: "/images/projects/porfolio/portfolio.svg",
    },
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
      link: "/projects/icrowdtask",
      params: "icrowdtask",
      title: "iCrowdTask",
      description:
        "iCrowdTask web application which is a crowdsourcing platform to provide convenience for requesters/customers (i.e., individual or business) by allowing them to outsource their tasks to crowd who can perform theirs tasks anytime and everywhere",
      shortDesc:
        "iCrowdTask web application which is a crowdsourcing platform to provide convenience...",
      thumbnail: "/images/projects/icrowdTask/icrowdtask-square.webp",
      date: "2020",
      collab: "Only Me",
      programmingLanguage: "Javascript",
      technologies: "React.js, Express.js, MongoDB, JWT, faceapi.js",
      tags: ["#full-stack", "#web"],
      repoLink: "https://github.com/nnfunny/iCrowdTask",
      liveDemo: "https://face-3b3c7.firebaseapp.com",
      mediaType: "image",
      image: "/images/projects/icrowdTask/icrowdtask.webp",
      logo: "/images/projects/icrowdTask/icrowdtask.svg",
    },
    {
      link: "/projects/image-processing-parallel",
      params: "image-processing-parallel",
      title: "Image Processing",
      description:
        "The simple C++ program processes images (or video) in parallel with 2 main filters namely blur, sharpen",
      shortDesc:
        "The simple C++ program processes images (or video) in parallel with 2 main filters namely blur...",
      thumbnail:
        "/images/projects/image-processing-parallel/image-processing-thumb.webp",
      date: "2020",
      collab: "Only Me",
      programmingLanguage: "C++ (CPP)",
      technologies: "OpenCV, OpenMP, MPI",
      tags: ["#computer-graphics", "#distributing-computing", "#parallel"],
      repoLink: "https://github.com/nnfunny/image-manipulation",
      liveDemo: null,
      mediaType: "image",
      image: "/images/projects/image-processing-parallel/image-processing.webp",
      logo:
        "/images/projects/image-processing-parallel/image-processing-logo.svg",
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
    {
      link: "/projects/order-management",
      params: "order-management",
      title: "Order Management",
      description:
        "A website manages clients' orders. This is a take away assignment when I applied for web developer internship",
      shortDesc:
        "rrrebsite manages clients' orders. This is a take away assignment when I applied for web...",
      thumbnail: "/images/projects/order-managment/order-management-square.webp",
      date: "2020",
      collab: "Only Me",
      programmingLanguage: "Typescript",
      technologies: "Express.js, React.js, MongoDB",
      tags: ["#full-stack", "#web"],
      repoLink: "https://github.com/nnfunny/order-mangement",
      liveDemo: "https://order-mag.firebaseapp.com",
      mediaType: "image",
      image: "/images/projects/order-managment/order-management.webp",
      logo: "/images/projects/order-managment/package.svg",
    },
  ],
};

export default projects.projects;
