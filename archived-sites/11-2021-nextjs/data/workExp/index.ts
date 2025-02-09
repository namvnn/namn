export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}
const experiences = [
  {
    title: "Junior Front-End Developer",
    company: "PointsBet",
    startDate: "August 2021",
    endDate: "Current",
    location: "Melbourne, VIC, Australia",
    description: [
      "Engage in technical planning, development and testing activities",
      "Implement efficient, intuitive, modular and testable code across the front-end codebase",
      "Identify and present the technical trade-offs and risks of different development approaches in a meaningful way",
      "Be an advocate for UX amongst the development team, and an advocate for development amongst the UX team",
    ],
  },
  {
    title: "Web Development Intern",
    company: "CoXplore",
    startDate: "November 2020",
    endDate: "December 2020",
    location: "Remote from Melbourne",
    description: [
      "Assisted in the launch and development of new website LMS (Learning Management System) for products and services of the company by WordPress, focused on remote learning solution by providing e-courses",
      "Supported in website content development for the Vietnam and APAC market",
      "Involved A/B testing, bug fixing, speed optimization, UX improvement",
      "Built a separate backup payment website to solving issues from WordPress LMS by Express.js and Bootstrap",
    ],
  },
];
export default experiences;
