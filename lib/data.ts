import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import {
  FaCss3Alt,
  FaDocker,
  FaFolder,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import placeHolderOne from "@/public/placeholder1.png";
import placeHolderTwo from "@/public/placeholder2.png";
import placeHolderThree from "@/public/placeholder3.png";
import { SiJavascript } from "react-icons/si";
import {
  SiCypress,
  SiExpress,
  SiGreensock,
  SiKubernetes,
  SiMui,
  SiPrisma,
  SiPuppeteer,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandThreejs,
} from "react-icons/tb";
import { DiMongodb, DiRedis } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { GrGraphQl, GrMysql } from "react-icons/gr";

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
    description: "Joint Honors in Philosophy & English Literature.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "English Teacher",
    location: "Hong Kong, Asia",
    description:
      "I worked as an English teacher abroad and later, remotely during the pandemic.",
    icon: React.createElement(BiWorld),
    date: "2018 - 2021",
  },
  {
    title: "Full Time job + upskilling",
    location: "Chester, UK",
    description:
      "Nearing the end of the pandemic I shifted my focus to learn the fundamentals of programming whilst working a full-time job as a warehouse associate.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Graduated bootcamp",
    location: "London, UK",
    description:
      "I graduated after 3 months of a full-time immersive bootcamp at The Jump Digital School.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Shopping Comparison",
    string: "shop",
    description:
      "A full-stack shopping comparison web application built with 8 developers. My role was predominantly in the backend - implementing the web-scraping, the comparison algortithm and its storage within the MySQL database. After completion, I have went back to re-envision the front-end.",
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
    string: "stream",
    description:
      "A full-stack application that focuses on streaming games and interacting with the streamer. Users can watch, stream and chat similar to how it works over at Twitch or Youtube.",
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
    string: "stash",
    description:
      "A full-stack application that deals with file storage. Logged-in users can store, update, delete and edit their files.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Firebase"],
    imageUrl: placeHolderThree,
  },
] as const;

export const microAppData = [
  {
    title: "Hackathon App",
    description: "Educational children's app created as a hackathon project.",
    tags: ["React", "Javascript", "CSS"],
    icon: React.createElement(FaFolder),
    link: "https://what-three-letters.netlify.app/",
    github: "https://github.com/aqibshabir/hackathon-app",
  },
  {
    title: "Simpsons App",
    description: "A quote generator app using The Simpsons API.",
    tags: ["React", "Javascript", "CSS"],
    icon: React.createElement(FaFolder),
    link: "https://simpsons-app-aqib.netlify.app/",
    github: "https://github.com/aqibshabir/react-simpsons-app",
  },
  {
    title: "Pokedex App",
    description:
      "Using the PokeAPI to create a fun app to search & sort through different Pokemon",
    tags: ["React", "Javascript", "CSS"],
    icon: React.createElement(FaFolder),
    link: "https://github.com/aqibshabir/pokedex",
    github: "https://github.com/aqibshabir/pokedex",
  },
  {
    title: "Calculator App",
    description: "Basic functioning calculator app in React.",
    tags: ["React", "Javascript", "CSS"],
    icon: React.createElement(FaFolder),
    link: "https://calculator-app-aqib.netlify.app/",
    github: "https://github.com/aqibshabir/react-calculator",
  },
  {
    title: "Weather App",
    description:
      "Using Open Weather Map's API to make an interactive weather app quiz.",
    tags: ["Javascript", "HTML", "CSS"],
    icon: React.createElement(FaFolder),
    link: "https://i-gust-correctly.netlify.app/",
    github: "https://github.com/aqibshabir/ft4-weather-app",
  },
  {
    title: "Apple Homage Piece",
    description: "Paying homage to Apple by replicating their homepage.",
    tags: ["HTML", "CSS"],
    icon: React.createElement(FaFolder),
    link: "https://apple-homage-piece-aqib.netlify.app/",
    github: "https://github.com/aqibshabir/apple-homage-piece",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: React.createElement(FaHtml5), color: "#E34C26" },
  { name: "CSS", icon: React.createElement(FaCss3Alt), color: "#264de4" },
  {
    name: "Javascript",
    icon: React.createElement(SiJavascript),
    color: "#F0DB4F",
  },
  {
    name: "Typescript",
    icon: React.createElement(SiTypescript),
    color: "#3178C6",
  },
  { name: "React", icon: React.createElement(FaReact), color: "#61dafb" },
  { name: "Redux", icon: React.createElement(SiRedux), color: "#764abc" },
  { name: "Nextjs", icon: React.createElement(TbBrandNextjs), color: "#000" },
  { name: "Node", icon: React.createElement(FaNodeJs), color: "#90c53f" },
  { name: "Express", icon: React.createElement(SiExpress), color: "#353535" },
  {
    name: "Tailwind",
    icon: React.createElement(SiTailwindcss),
    color: "#18b8b8",
  },
  { name: "Sass", icon: React.createElement(FaSass), color: "#cd6799" },
  { name: "Material UI", icon: React.createElement(SiMui), color: "#007fff" },
  { name: "Git", icon: React.createElement(FaGitAlt), color: "#f05133" },
  { name: "MySQL", icon: React.createElement(GrMysql), color: "#00618a" },
  { name: "Prisma", icon: React.createElement(SiPrisma), color: "#123b51" },
  { name: "MongoDB", icon: React.createElement(DiMongodb), color: "#50aa4c" },
  {
    name: "Firebase",
    icon: React.createElement(IoLogoFirebase),
    color: "#fcca3f",
  },
  { name: "Redis", icon: React.createElement(DiRedis), color: "#d82c20" },
  { name: "GraphQL", icon: React.createElement(GrGraphQl), color: "#e10098" },
  {
    name: "Puppeteer",
    icon: React.createElement(SiPuppeteer),
    color: "#01d7a1",
  },
  { name: "Cypress", icon: React.createElement(SiCypress), color: "#49494c" },
  { name: "GSAP", icon: React.createElement(SiGreensock), color: "#89cf00" },
  { name: "Threejs", icon: React.createElement(TbBrandThreejs), color: "#000" },
  {
    name: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion),
    color: "#7a1df4",
  },
  { name: "Docker", icon: React.createElement(FaDocker), color: "#0092e6" },
  {
    name: "Kubernetes",
    icon: React.createElement(SiKubernetes),
    color: "#336ee4",
  },
] as const;
