import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modules } from "../../data/modules";
import type { ModuleId } from "../../types";

interface Props {
  activeModuleId: ModuleId;
}

export default function Header({ activeModuleId }: Props) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const activeModule = modules.find((m) => m.id === activeModuleId);

  return (
    <header className="sticky top-0 z-40 border-b border-blue-400/15 bg-[#04040f]/95 backdrop-blur-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 8px rgba(16,185,129,0.8)" }} />
          </div>
          <span className="font-mono text-[10px] text-emerald-400 tracking-[2px]">ONLINE</span>
        </div>
        <span className="font-hud text-sm font-bold text-blue-400 tracking-[3px]"
          style={{ textShadow: "0 0 15px rgba(59,130,246,0.5)" }}>
          CYBER PORTFOLIO
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeModuleId}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className="font-hud text-[11px] tracking-[3px] uppercase"
          style={{ color: activeModule?.color }}
        >
          {activeModule?.label}
        </motion.div>
      </AnimatePresence>

      <div className="font-mono text-[11px] text-slate-500 tracking-[2px]">
        {time.toLocaleTimeString("en-US", { hour12: false })}
      </div>
    </header>
  );
}