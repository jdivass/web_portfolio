import type { SkillBranch } from "../types";

export const skills: SkillBranch[] = [
  {
    id: "backend", label: "Backend", color: "#3b82f6", icon: "⚙",
    nodes: [
      { name: "Java", level: 3 },
      { name: "Go", level: 3 },
      { name: "REST APIs", level: 3 },
      { name: "Python", level: 4 },
    ],
  },
  {
    id: "data", label: "Data & DB", color: "#8b5cf6", icon: "◈",
    nodes: [
      { name: "PostgreSQL", level: 4 },
      { name: "Neo4j", level: 3 },
      { name: "SQL", level: 4 },
      { name: "Graph DBs", level: 3 },
    ],
  },
  {
    id: "frontend", label: "Frontend", color: "#06b6d4", icon: "◻",
    nodes: [
      { name: "React", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "JavaScript", level: 4 },
      { name: "HTML/CSS", level: 4 },
    ],
  },
  {
    id: "security", label: "Security", color: "#10b981", icon: "◬",
    nodes: [
      { name: "Auth & AuthZ",  level: 3 },
      { name: "Secure Design", level: 2 },
      { name: "Cryptography",  level: 2 },
    ],
  },
  {
    id: "arch", label: "Architecture", color: "#f59e0b", icon: "◆",
    nodes: [
      { name: "System Design", level: 3 },
      { name: "Clean Code", level: 3 },
    ],
  },
  {
    id: "DevOps", label: "DevOps", color: "#d11111", icon: "∞",
    nodes: [
      { name: "Docker", level: 2 },
      { name: "Git", level: 4 },
      { name: "Deployment", level: 2 },
    ],
  },
];