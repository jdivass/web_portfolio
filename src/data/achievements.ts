import type { Achievement } from "../types";

export const achievements: Achievement[] = [
  {
    id: "a1", icon: "⚙", rarity: "UNCOMMON", unlocked: true,
    title: "First Backend System",
    description: "Built and deployed my first complete backend system.",
    date: "2025",
  },
  {
    id: "a2", icon: "◈", rarity: "RARE", unlocked: true,
    title: "Graph Architect",
    description: "Designed a full graph database architecture with Neo4j.",
    date: "2025",
  },
  {
    id: "a3", icon: "◉", rarity: "RARE", unlocked: true,
    title: "Recommendation Engine",
    description: "Developed an algorithm-based recommendation system from scratch.",
    date: "2025",
  },

  {
  id: "a4", icon: "▣", rarity: "COMMON", unlocked: true,
  title: "Mobile Developer",
  description: "Built your first mobile application and unlocked mobile development skills.",
  date: "2025",
  },
  {
  id: "a10", icon: "⚙", rarity: "RARE", unlocked: true,
  title: "Systems Programmer",
  description: "Developed a real-time terminal game using multithreading, synchronization mechanisms, and shared state management.",
  date: "2025",
  },

  {
    id: "a5", icon: "◬", rarity: "UNCOMMON", unlocked: true,
    title: "Security Initiate",
    description: "Started the journey into secure software development practices.",
    date: "2026",
  },
  {
    id: "a6", icon: "✦", rarity: "LEGENDARY", unlocked: true,
    title: "Satellite launcher",
    description: "Deploy a CanSat mission and establish communication between the satellite and its ground station.",
    date: "2026",
  },

  {
  id: "a7", icon: "✦", rarity: "UNCOMMON", unlocked: true,
  title: "Academic Excellence",
  description: "Maintained strong academic performance while developing software engineering skills.",
  date: "2026",
 },
 {
  id: "a9", icon: "λ", rarity: "RARE", unlocked: true,
  title: "Language Architect",
  description: "Built a custom Lisp interpreter and explored how programming languages parse, evaluate, and execute instructions.",
  date: "2026",
 },
 {
  id: "a10", icon: "🛡", rarity: "RARE", unlocked: false,
  title: "Defense Layer",
  description: "Learn advanced authentication, authorization, and access control mechanisms.",
  date: "???",
},

{
  id: "al1", icon: "◉", rarity: "RARE", unlocked: false,
  title: "Network Guardian",
  description: "Understand network security, communication protocols, and secure data transmission.",
  date: "???",
},
];