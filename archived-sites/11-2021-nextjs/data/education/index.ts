export interface Education {
  title: string;
  school: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}
const education: Education[] = [
  {
    title: "Bachelor of Computer Science",
    school: "Deakin University",
    startDate: "July 2019",
    endDate: "June 2021",
    location: "Burwood, Melbourne",
    description: [
      "Awarded Deakin STEM Scholarship (20% of total course tuition fees)",
      "Achieved 85 out of 100",
    ],
  },
  {
    title: "Diploma of Information Technology",
    school: "Deakin College",
    startDate: "October 2019",
    endDate: "January 2020",
    location: "Burwood, Melbourne",
    description: ["Achieved 87 out of 100"],
  },
];

export default education;
