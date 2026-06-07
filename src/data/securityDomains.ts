import type { SecurityDomain } from "../types";

export const securityDomains: SecurityDomain[] = [
  {
    id: "s1", icon: "◈", color: "#3b82f6",
    title: "Secure Software Development",
    description: "Learning to write code with security in mind from the start, not as an afterthought.",
    concepts: ["OWASP Top 10", "Input Validation", "Least Privilege", "Secure SDLC"],
  },
  {
    id: "s2", icon: "◉", color: "#8b5cf6",
    title: "Authentication & Authorization",
    description: "Exploring how robust identity systems protect access and sensitive data.",
    concepts: ["OAuth 2.0", "JWT", "RBAC", "Multi-Factor Auth"],
  },
  {
    id: "s3", icon: "◬", color: "#10b981",
    title: "Data Protection",
    description: "Understanding encryption, integrity and privacy of data in transit and at rest.",
    concepts: ["Encryption at Rest", "TLS/HTTPS", "Key Management", "Data Masking"],
  },
  {
    id: "s4", icon: "◆", color: "#f59e0b",
    title: "System Architecture Security",
    description: "Studying how to design systems that resist attacks structurally, not just on the surface.",
    concepts: ["Defense in Depth", "Zero Trust", "Network Segmentation", "Threat Modeling"],
  },
];