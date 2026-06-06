export type ModuleId =
  | "identity"
  | "projects"
  | "skills"
  | "security"
  | "achievements";

export interface Module {
  id: ModuleId;
  label: string;
  sublabel: string;
  icon: string;
  color: string;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  specialization: string;
  mission: string;
  bio: string;
  location: string;
  status: string;
  links: { label: string; url: string; icon: string }[];
}

export type ProjectStatus = "COMPLETED" | "IN_PROGRESS" | "CLASSIFIED";

export interface Project {
  id: string;
  missionNumber: string;
  name: string;
  objective: string;
  problem: string;
  technicalChallenges: string;
  technologies: string[];
  status: ProjectStatus;
  repoURL?: string;
}

export interface SkillNode {
  name: string;
  level: number;
  children?: SkillNode[];
}

export interface SkillBranch {
  id: string;
  label: string;
  color: string;
  icon: string;
  nodes: SkillNode[];
}

export interface SecurityDomain {
  id: string;
  title: string;
  description: string;
  concepts: string[];
  icon: string;
  color: string;
}

export type AchievementRarity = "COMMON" | "UNCOMMON" | "RARE" | "LEGENDARY";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  rarity: AchievementRarity;
  unlocked: boolean;
  date?: string;
  icon: string;
}