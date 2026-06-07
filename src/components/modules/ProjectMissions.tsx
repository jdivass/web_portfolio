import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";

const STATUS_COLOR = {
  COMPLETED: { label: "COMPLETED", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
  IN_PROGRESS: { label: "IN PROGRESS", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  CLASSIFIED: { label: "CLASSIFIED", color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
};

export default function ProjectMissions() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      className="p-8 max-w-4xl"
    >
      <SectionHeader icon="◉" color="#8b5cf6" title="PROJECT MISSIONS" sub={`${projects.length} MISSIONS ON RECORD`} />

      <div className="mt-6 flex flex-col gap-3">
        {projects.map((proj, i) => {
          const isOpen = selected === proj.id;
          const status = STATUS_COLOR[proj.status];
          return (
            <motion.div key={proj.id}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: "rgba(10,12,30,0.8)",
                border: `1px solid ${isOpen ? "rgba(139,92,246,0.4)" : "rgba(59,130,246,0.12)"}`,
              }}
              onClick={() => setSelected(isOpen ? null : proj.id)}
            >
              <div className="px-5 py-4 flex items-center gap-4">
                <div className="font-mono text-[10px] text-slate-600 min-w-[90px]">{proj.missionNumber}</div>
                <div className="flex-1">
                  <div className="font-hud text-sm text-slate-100 tracking-[1px]">{proj.name}</div>
                  <div className="font-ui text-xs text-slate-500 mt-0.5">{proj.objective}</div>
                </div>
                <div className="px-2.5 py-1 rounded"
                  style={{ background: status.bg, border: `1px solid ${status.color}22` }}>
                  <span className="font-mono text-[9px] tracking-[2px]" style={{ color: status.color }}>
                    {status.label}
                  </span>
                </div>
                <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-slate-600 text-xs">▶</motion.span>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                    style={{ borderTop: "1px solid rgba(139,92,246,0.15)", overflow: "hidden" }}
                  >
                    <div className="px-5 pb-5 pt-4 grid grid-cols-2 gap-4 pl-[calc(20px+90px+16px)]">
                      <DetailBlock label="PROBLEM" text={proj.problem} />
                      <DetailBlock label="TECHNICAL CHALLENGES" text={proj.technicalChallenges} />
                      <div className="col-span-2">
                        <div className="font-mono text-[9px] text-slate-500 tracking-[3px] mb-2">TECHNOLOGIES DEPLOYED</div>
                        <div className="flex gap-1.5 flex-wrap">
                          {proj.technologies.map((tech) => (
                            <span key={tech} className="font-mono text-[10px] px-2 py-0.5 rounded"
                              style={{ color: "#8b5cf6", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)" }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
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

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] text-slate-500 tracking-[3px] mb-1.5">{label}</div>
      <div className="font-ui text-xs text-slate-400 leading-relaxed">{text}</div>
    </div>
  );
}