import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";

const F = { hud: "'Orbitron', monospace", ui: "'Rajdhani', sans-serif", mono: "'Share Tech Mono', monospace" };

const STATUS_COLOR = {
  COMPLETED:   { label: "COMPLETED",   color: "#10b981", bg: "rgba(16,185,129,0.1)"  },
  IN_PROGRESS: { label: "IN PROGRESS", color: "#f59e0b", bg: "rgba(245,158,11,0.1)"  },
  CLASSIFIED:  { label: "CLASSIFIED",  color: "#ef4444", bg: "rgba(239,68,68,0.1)"   },
};

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div style={{ fontFamily: F.mono, fontSize: 9, color: "#64748b", letterSpacing: 3, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: F.ui, fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{text}</div>
    </div>
  );
}

export default function ProjectMissions() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      style={{ padding: 32, width: "100%"}}
    >
      <SectionHeader icon="◉" color="#8b5cf6" title="PROJECT MISSIONS" sub={`${projects.length} MISSIONS ON RECORD`} />

      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
        {projects.map((proj, i) => {
          const isOpen = selected === proj.id;
          const status = STATUS_COLOR[proj.status];
          return (
            <motion.div key={proj.id}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{ borderRadius: 10, overflow: "hidden", cursor: "pointer",
                background: "rgba(10,12,30,0.8)",
                border: `1px solid ${isOpen ? "#3b82f6" : "rgba(59,130,246,0.12)"}`,
                transition: "border-color 0.3s" }}
              onClick={() => setSelected(isOpen ? null : proj.id)}
            >
              {/* Header row */}
              <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontFamily: F.mono, fontSize: 10, color: "#3b82f6", minWidth: 90 }}>{proj.missionNumber}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: F.hud, fontSize: 14, color: "#e2e8f0", letterSpacing: 1 }}>{proj.name}</div>
                  <div style={{ fontFamily: F.ui, fontSize: 12, color: "#64748b", marginTop: 2 }}>{proj.objective}</div>
                </div>
                <div style={{ padding: "3px 10px", borderRadius: 4, background: status.bg, border: `1px solid ${status.color}22` }}>
                  <span style={{ fontFamily: F.mono, fontSize: 9, color: status.color, letterSpacing: 2 }}>{status.label}</span>
                </div>
                <motion.span animate={{ rotate: isOpen ? 90 : 0 }}
                  style={{ fontFamily: F.mono, color: "#475569", fontSize: 12 }}>▶</motion.span>
              </div>

              {/* Expanded detail */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                    style={{ borderTop: "1px solid #3b82f6", overflow: "hidden" }}
                  >
                    <div style={{ padding: "20px 20px 20px 126px",
                      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <DetailBlock label="PROBLEM" text={proj.problem} />
                      <DetailBlock label="TECHNICAL CHALLENGES" text={proj.technicalChallenges} />
                      <div style={{ gridColumn: "1 / -1" }}>
                        <div style={{ fontFamily: F.mono, fontSize: 9, color: "#64748b", letterSpacing: 3, marginBottom: 8 }}>
                          TECHNOLOGIES DEPLOYED
                        </div>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                          {proj.technologies.map(tech => (
                            <span key={tech} style={{ fontFamily: F.mono, fontSize: 10, color: "#8b5cf6",
                              background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)",
                              borderRadius: 4, padding: "3px 8px" }}>{tech}</span>
                          ))}
                        </div>
                      </div>
                      {proj.repoURL && (
                        <div style={{ gridColumn: "1 / -1", paddingTop: 8, borderTop: "1px solid rgba(139,92,246,0.1)" }}>
                          <a href={proj.repoURL} target="_blank" rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            style={{ display: "inline-flex", alignItems: "center", gap: 8,
                              padding: "8px 16px", borderRadius: 8,
                              fontFamily: F.mono, fontSize: 10, letterSpacing: 2,
                              background: "rgba(245,158,11,0.1)", border: "1px solid #f59e0b",
                              color: "#f59e0b", textDecoration: "none" }}>
                            <span>{"</>"}</span>
                            VIEW REPOSITORY
                            <span style={{ fontSize: 8, opacity: 0.6 }}>↗</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
