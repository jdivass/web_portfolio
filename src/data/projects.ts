import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "001",
    missionNumber: "MISSION-001",
    name: "Proffesor Recomendations",
    objective: "Help students choose professors using data analysis and graph-based approaches.",
    problem: "Students lacked structured information to compare professors.",
    technicalChallenges: "Modeling relationships using Neo4j graphs and implementing efficient recommendation algorithms.",
    technologies: ["Python", "Neo4j", "Graph Algorithms", "Data Analysis"],
    status: "COMPLETED",
    repoURL: "https://github.com/MarceloDetlefsen/Back-Professor-Recommendation-System.git",
  },
  {
    id: "002",
    missionNumber: "MISSION-002",
    name: "Full Stack Web App",
    objective: "Help people keep track of the series they have watched.",
    problem: "People often forget which episode or season of a series they were watching.",
    technicalChallenges: "Implementing a Full Stack web application without using any kind of framework.",
    technologies: ["JavaScript", "CSS", "Go", "APIs"],
    status: "COMPLETED",
    repoURL: "https://github.com/jdivass/Proyecto1-Web_Frontend.git"
  },
  {
    id: "003",
    missionNumber: "MISSION-003",
    name: "Online Store",
    objective: "Support the digitalization process of a liquor store.",
    problem: "The store had no digital presence, causing a loss of potential customers.",
    technicalChallenges: "Implementing a formal full stack web application for daily use.",
    technologies: ["Vue", "Clerk", "TypeScript", "APIs", "Docker", "Github Actions", "PostgreSQL"],
    status: "IN_PROGRESS",
    repoURL: "https://github.com/eldmark/bodegas-backend.git"
  },
  {
    id: "004",
    missionNumber: "MISSION-004",
    name: "Store management system",
    objective: "Develop a web platform for managing store operations.",
    problem: "The store did not have a custom-built technology solution to handle its business logic.",
    technicalChallenges: "Designing and using a robust database system.",
    technologies: ["Bootstrap", "PostgreSQL", "FastAPI", "Docker"],
    status: "COMPLETED",
    repoURL: "https://github.com/jdivass/DB_proy2.git"
  },
  {
    id: "005",
    missionNumber: "MISSION-005",
    name: "Lisp Interpreter",
    objective: "Develop a Lisp interpreter capable of handling recursion and other programming features.",
    problem: "Understanding programming languages requires a deeper understanding of how they work internally.",
    technicalChallenges: "Robust parsing, recursive evaluation, and error handling.",
    technologies: ["Java"],
    status: "COMPLETED",
    repoURL: "https://github.com/angcoder-c/LispInterpreter.git"
  },
  {
    id: "006",
    missionNumber: "MISSION-006",
    name: "Galaga",
    objective: "Develop the Galaga video game in a terminal environment.",
    problem: "Developing real-time video games in a terminal requires managing multiple parallel processes such as input handling, game logic, rendering, and more.",
    technicalChallenges: "Multithreading, thread synchronization, mutex locks, condition variables.",
    technologies: ["C++"],
    status: "COMPLETED",
    repoURL: "https://github.com/alemanuel18/Galaga_PMP.git"
  },
  {
    id: "007",
    missionNumber: "MISSION-007",
    name: "DragonStats",
    objective: "Develop an informative app for the university football competition.",
    problem: "Students rarely found out about Dragons League results despite being the most recognized sports competition within the university.",
    technicalChallenges: "First experience with mobile application development.",
    technologies: ["Kotlin"],
    status: "COMPLETED",
    repoURL: "https://github.com/jdivass/MP_Project.git"
  },
  {
    id: "008",
    missionNumber: "MISSION-008",
    name: "CanSat Telemetry System",
    objective: "Develop software components for a CanSat system, including onboard module programming, the communication layer between the satellite prototype and the ground station, as well as the generation of a stereoscopic image. Participation in World CanSat 2026.",
    problem: "Optimize telemetry and image transmission using radio frequency communication.",
    technicalChallenges: "Real-time communication, limited hardware resources, data transmission reliability, and system integration.",
    technologies: ["Embedded Systems (C++)", "Serial Communication", "Telemetry Systems", "Microcontroller Programming"],
    status: "COMPLETED",
    repoURL: "https://github.com/24750Montenegro/IK-SAT.git"
  },

];