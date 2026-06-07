import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";

const F = { hud: "'Orbitron', monospace", ui: "'Rajdhani', sans-serif", mono: "'Share Tech Mono', monospace" };

const LEVELS = ["NOVICE", "BASIC", "INTERMEDIATE", "ADVANCED", "EXPERT"];

export default function SkillMatrix() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      style={{ padding: 32, width: "100%"}}
    >
      <SectionHeader icon="◫" color="#06b6d4" title="SKILL MATRIX" sub="CAPABILITY ASSESSMENT MAP" />

      <div style={{ marginTop: 24, display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 2fr))", gap: 12 }}>
        {skills.map((branch, bi) => (
          <motion.div key={branch.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: bi * 0.1 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ borderRadius: 12, padding: 16, cursor: "pointer",
              position: "relative", overflow: "hidden",
              background: "rgba(10,12,30,0.8)",
              border: `1px solid ${activeSkill === branch.id ? branch.color : "rgba(59,130,246,0.12)"}`,
              transition: "border-color 0.3s" }}
            onClick={() => setActiveSkill(activeSkill === branch.id ? null : branch.id)}
          >
            {/* Branch header */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ color: branch.color, fontSize: 16 }}>{branch.icon}</span>
              <span style={{ fontFamily: F.hud, fontSize: 11, color: branch.color, letterSpacing: 1 }}>{branch.label}</span>
            </div>

            {/* Vertical connector line */}
            <div style={{ position: "absolute", left: 26, top: 44, bottom: 18, width: 1,
              background: `linear-gradient(${branch.color}66, transparent)` }} />

            {/* Nodes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 12 }}>
              {branch.nodes.map((node, ni) => (
                <motion.div key={node.name}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: bi * 0.1 + ni * 0.05 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                      background: branch.color, boxShadow: `0 0 4px ${branch.color}` }} />
                    <span style={{ fontFamily: F.ui, fontSize: 12, color: "#94a3b8" }}>{node.name}</span>
                  </div>
                  {/* Level bars */}
                  <div style={{ marginLeft: 12, display: "flex", gap: 3 }}>
                    {Array.from({ length: 5 }).map((_, li) => (
                      <motion.div key={li}
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                        transition={{ delay: bi * 0.1 + ni * 0.05 + li * 0.04 }}
                        style={{ height: 3, flex: 1, borderRadius: 1, transformOrigin: "left",
                          background: li < node.level ? branch.color : "rgba(59,130,246,0.1)",
                          boxShadow: li < node.level ? `0 0 4px ${branch.color}88` : "none" }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ marginTop: 20, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" as const }}>
        <span style={{ fontFamily: F.mono, fontSize: 19, color: "#475569", letterSpacing: 2 }}>PROFICIENCY:</span>
        {LEVELS.map((label, l) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontFamily: F.mono, fontSize: 12, color: "#475569" }}>{label}</span>
            <div style={{ display: "flex", gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} style={{ width: 20, height: 6, borderRadius: 1,
                  background: i <= l ? "#3b82f6" : "rgba(59,130,246,0.15)" }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
