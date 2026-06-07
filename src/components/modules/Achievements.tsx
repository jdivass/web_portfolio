import { motion } from "framer-motion";
import { achievements } from "../../data/achievements";
import SectionHeader from "../ui/SectionHeader";
import type { AchievementRarity } from "../../types";

const RARITY: Record<AchievementRarity, { color: string; glow: string }> = {
  COMMON: { color: "#9ca3af", glow: "rgba(156,163,175,0.3)" },
  UNCOMMON: { color: "#3b82f6", glow: "rgba(59,130,246,0.3)" },
  RARE: { color: "#8b5cf6", glow: "rgba(139,92,246,0.4)" },
  LEGENDARY: { color: "#f59e0b", glow: "rgba(245,158,11,0.5)" },
};

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "59,130,246";
}

export default function Achievements() {
  const unlocked = achievements.filter((a) => a.unlocked).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      className="p-8 max-w-4xl"
    >
      <SectionHeader icon="◆" color="#f59e0b" title="ACHIEVEMENTS" sub={`${unlocked}/${achievements.length} UNLOCKED`} />

      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-3">
        {achievements.map((ach, i) => {
          const rarity = RARITY[ach.rarity];
          return (
            <motion.div key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={ach.unlocked ? { scale: 1.03, y: -3 } : {}}
              className="rounded-xl p-5 relative overflow-hidden transition-all duration-300"
              style={{
                background: ach.unlocked ? "rgba(10,12,30,0.9)" : "rgba(8,8,18,0.6)",
                border: `1px solid ${ach.unlocked ? rarity.color + "40" : "rgba(59,130,246,0.06)"}`,
                filter: ach.unlocked ? "none" : "grayscale(0.8)",
                boxShadow: ach.unlocked ? `0 0 20px ${rarity.glow}` : "none",
              }}
            >
              {ach.unlocked && (
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${rarity.color}, transparent)` }} />
              )}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 text-xl"
                style={{
                  background: ach.unlocked ? `radial-gradient(ellipse, rgba(${hexToRgb(rarity.color)},0.2), transparent)` : "rgba(20,20,40,0.5)",
                  border: `1px solid ${ach.unlocked ? rarity.color + "40" : "rgba(59,130,246,0.06)"}`,
                  color: ach.unlocked ? rarity.color : "#1e293b",
                }}>
                {ach.unlocked ? ach.icon : "?"}
              </div>
              <div className="mb-2">
                <span className="font-mono text-[8px] tracking-[2px] px-1.5 py-0.5 rounded"
                  style={{
                    color: ach.unlocked ? rarity.color : "#1e293b",
                    background: ach.unlocked ? `${rarity.color}15` : "rgba(20,20,40,0.5)",
                    border: `1px solid ${ach.unlocked ? rarity.color + "30" : "transparent"}`,
                  }}>
                  {ach.rarity}
                </span>
              </div>
              <div className="font-hud text-xs tracking-[1px] mb-1.5"
                style={{ color: ach.unlocked ? "#e2e8f0" : "#1e293b" }}>
                {ach.unlocked ? ach.title : "???"}
              </div>
              <div className="font-ui text-[11px] leading-relaxed"
                style={{ color: ach.unlocked ? "#64748b" : "#1e293b" }}>
                {ach.unlocked ? ach.description : "Achievement locked"}
              </div>
              {ach.unlocked && ach.date && (
                <div className="mt-3 font-mono text-[9px] text-slate-700 tracking-[2px]">UNLOCKED: {ach.date}</div>
              )}
              {!ach.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#04040f]/40 rounded-xl">
                  <span className="text-xl opacity-20">🔒</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}