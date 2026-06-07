import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "001",
    missionNumber: "MISSION-001",
    name: "Proffesor Recomendations",
    objective: "Ayudar a estudiantes a elegir profesores usando análisis de datos y grafos.",
    problem: "Los estudiantes carecían de información estructurada para comparar profesores.",
    technicalChallenges: "Modelar relaciones en grafos con Neo4j e implementar algoritmos de recomendación eficientes.",
    technologies: ["Python", "Neo4j", "Graph Algorithms", "Data Analysis"],
    status: "COMPLETED",
    repoURL: "https://github.com/MarceloDetlefsen/Back-Professor-Recommendation-System.git",
  },
  {
    id: "002",
    missionNumber: "MISSION-002",
    name: "Full Stack Web App",
    objective: "Ayudar a las personas a mantener un registro de las series que han visualizado",
    problem: "Las personas frecuentemente olvidan en que capítulo o temporada de la serie que estaban viendo se quedaron",
    technicalChallenges: "Implementar una aplicación web Full Stack sin hacer uso de ningún tipo de framework",
    technologies: ["JavaScript", "CSS", "Go", "APIs"],
    status: "COMPLETED",
    repoURL: "https://github.com/jdivass/Proyecto1-Web_Frontend.git"
  },
  {
    id: "003",
    missionNumber: "MISSION-003",
    name: "Online Store",
    objective: "Apoyar el proceso de digitalización de una tienda de licores",
    problem: "La tienda poseía nula presencia digital lo que causaba una perdida de potenciales clientes",
    technicalChallenges: "Implementar una aplicación web full stack formal para uso cotidiano",
    technologies: ["Vue", "Clerk", "TypeScript", "APIs", "Docker", "Github Actions", "PostgreSQL"],
    status: "IN_PROGRESS",
    repoURL: "https://github.com/eldmark/bodegas-backend.git"
  },
  {
    id: "004",
    missionNumber: "MISSION-004",
    name: "Store management system",
    objective: "Desarrollar una plataforma web para el manejo de operaciones de la tienda",
    problem: "La tienda no poseia una tecnología hecha a la medida para manejar su lógica de negocio",
    technicalChallenges: "Diseñar y hacer uso de una base de datos robusta",
    technologies: ["Bootstrap", "PostgreSQL", "FastAPI", "Docker"],
    status: "COMPLETED",
    repoURL: "https://github.com/jdivass/DB_proy2.git"
  },
  {
    id: "005",
    missionNumber: "MISSION-005",
    name: "Lisp Interpreter",
    objective: "Desarrollar un interprete de Lisp capaz de manejar recursividad y demás funciones",
    problem: "Es necesario comprender el funcionamiento de los lenguajes de programación de manera profunda",
    technicalChallenges: "Parseo robusto, evaluación recursiva, manejo de errores",
    technologies: ["Java"],
    status: "COMPLETED",
    repoURL: "https://github.com/angcoder-c/LispInterpreter.git"
  },
  {
    id: "006",
    missionNumber: "MISSION-006",
    name: "Galaga",
    objective: "Desarrollar el videojuego Galaga en terminal",
    problem: "El desarrollo de videojuegos en tiempo real dentro de una terminal requiere manejar múltiples procesos paralelos como inputs, lógica de juegos, renderización, etc",
    technicalChallenges: "Multithreading, Sincronización de threads, Bloqueos de Mutex, Variables de condición,",
    technologies: ["C++"],
    status: "COMPLETED",
    repoURL: "https://github.com/alemanuel18/Galaga_PMP.git"
  },
  {
    id: "007",
    missionNumber: "MISSION-007",
    name: "DragonStats",
    objective: "Desarrollar una app informativa para la competición de fútbol de la universidad",
    problem: "Los estudiantes rara vez se enteraban de los resultados de la Dragons League a pesar de ser la competición deportiva más conocida dentro de la universidad",
    technicalChallenges: "Primera interacción con desarrollo de aplicaciones móviles",
    technologies: ["Kotlin"],
    status: "COMPLETED",
    repoURL: "https://github.com/jdivass/MP_Project.git"
  },
  {
    id: "008",
    missionNumber: "MISSION-008",
    name: "Cansat Telemtry System",
    objective: "Desarrollar componentes de software para un sistema CanSat, incluyendo la programación de los módulos a bordo y la capa de comunicación entre el prototipo del satélite y la estación terrestre, así como la generación de una imagen estereoscópica. Participación en Mundial Cansat 2026",
    problem: "Optimizar el envío de telemetría e imágenes haciendo uso de radiofrecuencia",
    technicalChallenges: "Comunicación en tiempo real, hardware limitado, fiabilidad de transmisión de datos, integración de sistemas",
    technologies: ["Sistemas embebidos (C++)", "Comunicación serial", "Sistemas de telemetría", "Programación de microcontroladores"],
    status: "COMPLETED",
    repoURL: "https://github.com/24750Montenegro/IK-SAT.git"
  },

];