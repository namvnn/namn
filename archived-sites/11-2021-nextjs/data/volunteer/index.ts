export interface Volunteer {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}
const volunteer = [
  {
    title: "Terry Fox Run Volunteer",
    company: "Terry Fox",
    startDate: "November 2017",
    endDate: "November 2017",
    location: "District 7, Ho Chi Minh, Vietnam",
    description: [
      "Managed runners in line to come and donate for non-profit organization",
      "Took responsibility of giving runners certificates and bottle of water",
      "Introduced about Vietnamese culture and cuisines as well as referencing to Vietnamese tourist attraction",
    ],
  },
];

export default volunteer;
