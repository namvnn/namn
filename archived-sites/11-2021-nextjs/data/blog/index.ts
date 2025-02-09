export interface IBlog {
  day: string;
  month: string;
  year: string;
  title: string;
  shortDescription: string;
  link: string;
}

const blogItems: IBlog[] = [
  {
    day: "10th",
    month: "Sept",
    year: "2020",
    title: "How To Solve Algorithm And Data Structure Problems [Tips]",
    shortDescription:
      "Are you struggling to solve coding problems? I’d like to share my own method to approach the solution...",
    link:
      "https://dev.to/namvnngu/how-to-solve-algorithm-and-data-structure-problems-tips-loi",
  },
  {
    day: "14th",
    month: "May",
    year: "2020",
    title: "Inheritance, Composition and Aggregation in C#",
    shortDescription:
      "In this post, I briefly introduce three main object-oriented programming terms for beginners in simple words...",
    link:
      "https://dev.to/namvnngu/inheritance-composition-and-aggregation-in-c-3dj8",
  },
  {
    day: "10th",
    month: "May",
    year: "2020",
    title: "Introduction To Method Overloading and Method Overriding in C#",
    shortDescription:
      "In this post, I would introduce definition of method overloading and method overriding in C# (be similar in...",
    link:
      "https://dev.to/namvnngu/introduction-to-method-overloading-and-method-overriding-in-c-388b",
  },
];
export default blogItems;
