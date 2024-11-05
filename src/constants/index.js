import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";


export const HERO_CONTENT = `I am a passionate full-stack developer with a Master’s degree in Computer and Information Science, specializing in building robust, scalable web applications. With expertise in front-end technologies like React and back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB, I am dedicated to creating innovative, user-focused solutions that drive business growth and enhance user experience. My goal is to continually refine my skills and contribute to projects that make a real impact.`;

export const ABOUT_TEXT = `After years of working as a CPA, I began noticing a recurring pattern in my daily tasks: many were repetitive, manual, and often outsourced to contractors. This led me to realize that these processes could be streamlined and automated, reducing errors and freeing up time for more strategic work. This insight sparked a passion for technology and drove me to pursue a Master of Science in Computer and Information Science at Marquette University. Over the past two years, I have immersed myself in the world of software development, learning to leverage code to solve complex problems and create efficient, scalable solutions. Now, with a strong foundation in both accounting and software development, I’m thrilled to begin a new chapter as a software developer, where I can merge my unique background to innovate and drive meaningful change.`;

export const EXPERIENCES = [
  {
    year: "JAN 2024 - MAY 2024",
    role: "Backend Developer",
    company: "Anton Technology LLC.",
    description: [`Built a robust SQL-based product database encompassing over 100 products from various suppliers. Optimized for efficient queries through indexed primary keys, foreign keys, and data validation with check constraints.`,
                  `Implemented a consulting service request system, streamlining communication between interested OEMs and Anton Technology. Utilized AWS Simple Email Service (SES) to notify intermediaries, improved the consulting process by ~50%.`,
                  `Developed a project coordination system using Java Spring Boot that enhanced collaboration between suppliers and OEMs. Reduced project initiation timelines by ~40% and improved communication efficiency across international teams.`,
                  `Designed an advanced search engine using Spring Boot controllers and Hibernate ORM for supplier and OEM selection. The search engine allowed users to query products by multiple criteria, leveraging Hibernate’s dynamic query generation and caching capabilities. Optimized to reduce the average search time by 2-3 seconds per query, leading to faster procurement cycles.`,
                  `Utilized JSON Web Tokens (JWT) for secure authorization and authentication.`,
                  `Automated the CI/CD pipeline using AWS CloudFormation, enabling seamless deployment by automatically testing and deploying changes made in GitHub. Improved deployment efficiency by ~50% and significantly reduced the time from development to production.`],
    technologies: ["Java", "SpringBoot", "Hibernate", "PostgresSQL", "JWT", "AWS"],
  },
  {
    year: "AUG 2020 - NOV 2021",
    role: "Tax Associate",
    company: "Grant Thornton LLP",
    description: [`Conducted research and analysis on tax regulations and compliance issues to provide timely and accurate tax advice and to improve customer success rates.`,],
    technologies: [],
  },
  {
    year: "JAN 2019 - FEB 2020",
    role: "Staff Accountant",
    company: "Yukon Accounting & Consulting LLC",
    description: [`Worked on supporting Tax Systems implementation and data management.`,],
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Event Management App",
    image: project1,
    description:
      "Eventify is a full-stack web application designed to help friends gather, organize events, and manage group activities. The application allows users to create, update, delete, and view events, providing a seamless event management experience.",
    technologies: ["React", "Vite", "Node.js", "HTML", "CSS", "MongoDB", "Express"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwinds", "Motion"],
  },
];

export const CONTACT = {
  address: "Canton, MI 48187 ",
  phoneNo: "+1 907 251 5169 ",
  email: "ziweih1993@gmail.com",
};
