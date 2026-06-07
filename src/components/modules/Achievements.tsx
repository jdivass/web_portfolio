import { motion } from "framer-motion";
import { achievements } from "../../data/achievements";
import SectionHeader from "../ui/SectionHeader";
import type { AchievementRarity } from "../../types";

const F = { hud: "'Orbitron', monospace", ui: "'Rajdhani', sans-serif", mono: "'Share Tech Mono', monospace" };

const RARITY: Record<AchievementRarity, { color: string; glow: string }> = {
  COMMON:    { color: "#9ca3af", glow: "rgba(156,163,175,0.3)" },
  UNCOMMON:  { color: "#3b82f6", glow: "rgba(59,130,246,0.3)"  },
  RARE:      { color: "#8b5cf6", glow: "rgba(139,92,246,0.4)"  },
  LEGENDARY: { color: "#f59e0b", glow: "rgba(245,158,11,0.5)"  },
};

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "59,130,246";
}

export default function Achievements() {
  const unlocked = achievements.filter(a => a.unlocked).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      style={{ padding: 32, width: "100%"}}
    >
      <SectionHeader icon="◆" color="#f59e0b" title="ACHIEVEMENTS" sub={`${unlocked}/${achievements.length} UNLOCKED`} />

      <div style={{ marginTop: 24, display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 14 }}>
        {achievements.map((ach, i) => {
          const rarity = RARITY[ach.rarity];
          return (
            <motion.div key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={ach.unlocked ? { scale: 1.03, y: -3 } : {}}
              style={{ borderRadius: 12, padding: 20, position: "relative", overflow: "hidden",
                background: ach.unlocked ? "rgba(10,12,30,0.9)" : "rgba(8,8,18,0.6)",
                border: `1px solid ${ach.unlocked ? rarity.color + "40" : "rgba(59,130,246,0.06)"}`,
                filter: ach.unlocked ? "none" : "grayscale(0.8)",
                boxShadow: ach.unlocked ? `0 0 20px ${rarity.glow}` : "none",
                transition: "box-shadow 0.3s" }}
            >
              {/* Top glow line */}
              {ach.unlocked && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, transparent, ${rarity.color}, transparent)` }} />
              )}

              {/* Icon */}
              <div style={{ width: 44, height: 44, borderRadius: 10, marginBottom: 14,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                background: ach.unlocked
                  ? `radial-gradient(ellipse, rgba(${hexToRgb(rarity.color)},0.2), transparent)`
                  : "rgba(20,20,40,0.5)",
                border: `1px solid ${ach.unlocked ? rarity.color + "40" : "rgba(59,130,246,0.06)"}`,
                color: ach.unlocked ? rarity.color : "#1e293b" }}>
                {ach.unlocked ? ach.icon : "?"}
              </div>

              {/* Rarity badge */}
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontFamily: F.mono, fontSize: 8, letterSpacing: 2,
                  padding: "2px 6px", borderRadius: 3,
                  color: ach.unlocked ? rarity.color : "#1e293b",
                  background: ach.unlocked ? `${rarity.color}15` : "rgba(20,20,40,0.5)",
                  border: `1px solid ${ach.unlocked ? rarity.color + "30" : "transparent"}` }}>
                  {ach.rarity}
                </span>
              </div>

              <div style={{ fontFamily: F.hud, fontSize: 12, letterSpacing: 1, marginBottom: 6,
                color: ach.unlocked ? "#e2e8f0" : "#1e293b" }}>
                {ach.unlocked ? ach.title : "???"}
              </div>
              <div style={{ fontFamily: F.ui, fontSize: 11, lineHeight: 1.5,
                color: ach.unlocked ? "#64748b" : "#1e293b" }}>
                {ach.unlocked ? ach.description : "Achievement locked"}
              </div>
              {ach.unlocked && ach.date && (
                <div style={{ marginTop: 12, fontFamily: F.mono, fontSize: 9, color: "#334155", letterSpacing: 2 }}>
                  UNLOCKED: {ach.date}
                </div>
              )}

              {/* Locked overlay */}
              {!ach.unlocked && (
                <div style={{ position: "absolute", inset: 0, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  background: "rgba(4,4,15,0.4)", borderRadius: 12 }}>
                  <span style={{ fontSize: 20, opacity: 0.2 }}>🔒</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
