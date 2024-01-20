import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import placeHolderOne from "@/public/placeholder1.png";
import placeHolderTwo from "@/public/placeholder2.png";
import placeHolderThree from "@/public/placeholder3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Journey",
    hash: "#journey",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const journeyData = [
  {
    title: "Graduated University",
    location: "Bangor, UK",
    description: "Joint Honors in Philosophy & English Literature",
    icon: React.createElement(LuGraduationCap),
    date: "2014-2018",
  },
  {
    title: "English Teacher",
    location: "Hong Kong",
    description:
      "I worked as an English teacher abroad (and later remotely from the UK during the pandemic)",
    icon: React.createElement(BiWorld),
    date: "2018 - 2021",
  },
  {
    title: "Working a 9-5",
    location: "Chester, UK",
    description:
      "I shifted my focus to learn computer science whilst working a full-time job, learning languages such as C, Python and later Javascript.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Graduated bootcamp",
    location: "London, UK",
    description:
      "I graduated after 3 months of a full-time immersive bootcamp.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Shopping Comparison Site",
    description:
      "A full-stack shopping comparison web application built with 8 developers. My role was predominantly in the backend, creating the scraping comparison tool and its storage within the SQL database. After completion, I have went back to re-envision the front-end to match with my design aesthetic.",
    tags: [
      "React",
      "Redux",
      "Javascript",
      "SASS",
      "Node",
      "Express",
      "MySQL",
      "Puppeteer",
    ],
    imageUrl: placeHolderOne,
  },
  {
    title: "Stream Zone",
    description:
      "A full-stack application that focuses on streaming games and interacting with streamers. Users can watch, stream and chat similar to how it works over at Twitch or Youtube.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "Websockets",
    ],
    imageUrl: placeHolderTwo,
  },
  {
    title: "Stashed",
    description:
      "A full-stack application that deals with file storage. Logged-in users can store, update, delete and edit their files.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Firebase"],
    imageUrl: placeHolderThree,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Zustand",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind",
  "SASS",
  "Material UI",
  "Git",
  "MySQL",
  "Prisma",
  "MongoDB",
  "Firebase",
  "Redis",
  "GraphQL",
  "Puppeteer",
  "Cypress",
  "GSAP",
  "Three.js",
  "Framer Motion",
  "Docker",
  "Kubernetes",
] as const;
