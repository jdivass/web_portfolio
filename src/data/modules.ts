import type { Module } from "../types";

export const modules: Module[] = [
  { id: "identity", label: "Identity Protocol", sublabel: "Profile & trajectory", icon: "◈", color: "#3b82f6" },
  { id: "projects", label: "Project Missions",  sublabel: "Completed missions", icon: "◉", color: "#8b5cf6" },
  { id: "skills", label: "Skill Matrix", sublabel: "Technology map", icon: "◫", color: "#06b6d4" },
  { id: "security", label: "Security Systems", sublabel: "Secure dev focus", icon: "◬", color: "#10b981" },
  { id: "achievements", label: "Achievements", sublabel: "Unlocked milestones", icon: "◆", color: "#f59e0b" },
];