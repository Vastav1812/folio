// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Vastav Bishnoi",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
];

export const EMAIL = "vastav1812@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/vastav-bishnoi-8b6071223/",
  github: "https://github.com/Vastav1812",
  instagram: "https://www.instagram.com/vastav_11/",
  LeetCode: "https://leetcode.com/u/vastav1812/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Daliy-Expense-Sharing-Application (Backend Development)",
    image: "/projects/user_registration.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "This backend application allows users to manage and share their daily expenses by splitting them based on three methods: equal, exact amounts, and percentages.",
    gradient: ["#103783", "#9bafd9"],
    url: "https://github.com/Vastav1812/Daliy-Expense-Sharing-Application",
    tech: ["python", "sql", "postman"],
  },
  {
    name: "Rule Engine Application With AST",
    image: "/projects/rule_engine.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "This application allows users to create, evaluate, and combine rules in real-time.",
    gradient: ["#5cb270", "#96d4ca"],
    url: "https://github.com/Vastav1812/Rule-Enigne-with-AST--",
    tech: ["python", "docker", "sql"],
  },
  {
    name: "Weather API (FullStack Development)",
    image: "/projects/Delhi.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "This project implements a weather monitoring system using the OpenWeatherMap API to collect weather data for major cities in India.",
    gradient: ["#696eff", "#f8acff"],
    url: "https://github.com/Vastav1812/Weather-API",
    tech: ["python", "docker", "sql"],
  },
  {
    name: "NFT APP (App Development)",
    image: "/projects/NFT.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "This is a simple version of ChatGPT in Flutter, using your own API key.",
    gradient: ["#fb8500", "#ffb703"],
    url: "https://github.com/Vastav1812/NFT-app",
    tech: ["flutter", "dart"],
  },
  // Other projects...
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}
export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  organization?: string;
  date?: string;
  description?: string[];  // Add this line
  size: ItemSize;
  shouldDrawLine: boolean;
  alignment: Branch;
  icon?: string;  // Property for logo icons
}


export const TIMELINE: Array<TimelineNodeV2> = [
  {
    title: "Software Engineer Intern",
    organization: "Reliance Industries Pvt. Ltd.",
    date: "August 2024 - October 2024",
    type: NodeTypes.CHECKPOINT,
    subtitle: "Mumbai, Maharashtra",
    description: [
      "Spearheaded the design and implementation of Azure-based CI/CD pipelines, achieving a 96% increase in process efficiency.",
      "Developed a web application using Flask and Azure Functions to predict 3-year import data, supporting better decision-making."
    ],
    icon: "/reliance-industries-ltd.svg",  // Path to logo
    shouldDrawLine: true,
    size: ItemSize.LARGE,  // Add size property
    alignment: Branch.LEFT,  // Add alignment property
  },
  {
    title: "Data Analyst",
    organization: "TexENIGMA",
    date: "July 2023 - November 2023",
    type: NodeTypes.CHECKPOINT,
    subtitle: "Remote",
    description: [
      "Worked on data analysis projects involving data structures and analytics.",
      "Enhanced interpersonal and technical skills during the internship."
    ],
    icon: "./icons/1683823402331.svg",  // TexENIGMA logo
    shouldDrawLine: true,
    size: ItemSize.LARGE,  // Add size property
    alignment: Branch.LEFT,  // Add alignment property
  },
  {
    title: "Internship Trainee",
    organization: "Indian Institute of Technology, Kanpur",
    date: "June 2023 - August 2023",
    type: NodeTypes.CHECKPOINT,
    subtitle: "Kanpur, Uttar Pradesh, India",
    description: [
      "Gained experience in data analysis and database management.",
      "Utilized tools such as Anaconda and Oracle Database to enhance project outcomes."
    ],
    icon: "/Users/vastav/folio/icons/IITK.svg",  // IIT Kanpur logo
    shouldDrawLine: true,
    size: ItemSize.LARGE,  // Add size property
    alignment: Branch.LEFT,  // Add alignment property
  },
  // Additional entries as needed...
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  shouldDrawLine: boolean;
  alignment: Branch;
  icon?: string; // Added icon property for logos
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
