import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";

export default function SkillMatrix() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      className="p-8 max-w-4xl"
    >
      <SectionHeader icon="◫" color="#06b6d4" title="SKILL MATRIX" sub="CAPABILITY ASSESSMENT MAP" />

      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3">
        {skills.map((branch, bi) => (
          <motion.div key={branch.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: bi * 0.1 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="rounded-xl p-4 cursor-pointer relative overflow-hidden transition-all duration-300"
            style={{
              background: "rgba(10,12,30,0.8)",
              border: `1px solid ${activeSkill === branch.id ? branch.color : "rgba(59,130,246,0.12)"}`,
            }}
            onClick={() => setActiveSkill(activeSkill === branch.id ? null : branch.id)}
          >
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: branch.color }}>{branch.icon}</span>
              <span className="font-hud text-[11px] tracking-[1px]" style={{ color: branch.color }}>{branch.label}</span>
            </div>

            {/* Connector */}
            <div className="absolute left-[26px] top-[44px] bottom-4 w-px"
              style={{ background: `linear-gradient(${branch.color}66, transparent)` }} />

            <div className="flex flex-col gap-2.5 pl-3">
              {branch.nodes.map((node, ni) => (
                <motion.div key={node.name}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: bi * 0.1 + ni * 0.05 }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: branch.color, boxShadow: `0 0 4px ${branch.color}` }} />
                    <span className="font-ui text-xs text-slate-400">{node.name}</span>
                  </div>
                  <div className="flex gap-0.5 ml-3">
                    {Array.from({ length: 5 }).map((_, li) => (
                      <motion.div key={li}
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                        transition={{ delay: bi * 0.1 + ni * 0.05 + li * 0.04 }}
                        className="h-[3px] flex-1 rounded-[1px]"
                        style={{
                          background: li < node.level ? branch.color : "rgba(59,130,246,0.1)",
                          boxShadow: li < node.level ? `0 0 4px ${branch.color}88` : "none",
                          transformOrigin: "left",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex gap-4 items-center flex-wrap">
        <span className="font-mono text-[9px] text-slate-600 tracking-[2px]">PROFICIENCY:</span>
        {["NOVICE","BASIC","INTERMEDIATE","ADVANCED","EXPERT"].map((label, l) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {Array.from({length:5}).map((_,i)=>(
                <div key={i} className="w-2.5 h-[3px] rounded-[1px]"
                  style={{ background: i <= l ? "#3b82f6" : "rgba(59,130,246,0.15)" }} />
              ))}
            </div>
            <span className="font-mono text-[9px] text-slate-600">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}