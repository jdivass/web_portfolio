"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeyboardNav } from "../../hooks/useKeyboardNav";
import BootSequence from "./BootSequence";
import Header from "./Header";
import NavSelector from "./NavSelector";
import IdentityProtocol from "../modules/IdentityProtocol";
import ProjectMissions from "../modules/ProjectMissions";
import SkillMatrix from "../modules/SkillMatrix";
import SecuritySystems from "../modules/SecuritySystems";
import Achievements from "../modules/Achievements";
import type { ModuleId } from "../../types";

const MODULE_MAP: Record<ModuleId, React.ComponentType> = {
  identity:     IdentityProtocol,
  projects:     ProjectMissions,
  skills:       SkillMatrix,
  security:     SecuritySystems,
  achievements: Achievements,
};

function DataTicker() {
  const items = [
    "SYSTEM ONLINE","ALL MODULES ACTIVE","SECURITY STATUS: NOMINAL",
    "UPTIME: 100%","DATA INTEGRITY: VERIFIED","THREAT LEVEL: NONE",
    "BACKEND SYSTEMS: OPERATIONAL","DATABASE CONNECTIONS: STABLE",
    "AUTH SERVICE: ACTIVE","ENCRYPTION: ENABLED",
  ];
  const repeated = [...items, ...items];
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-blue-400/20 bg-[#04040f]/90 h-7 flex items-center overflow-hidden">
      <div className="flex gap-0 whitespace-nowrap animate-ticker">
        {repeated.map((item, i) => (
          <span key={i} className="font-mono text-[10px] text-blue-400/50 px-6">◆ {item}</span>
        ))}
      </div>
    </div>
  );
}

export default function CyberHub() {
  const [booted, setBooted] = useState(false);
  const [activeModule, setActiveModule] = useState<ModuleId>("identity");
  const handleModuleChange = useCallback((id: ModuleId) => setActiveModule(id), []);
  useKeyboardNav({ activeModule, onModuleChange: handleModuleChange });

  const ActiveModule = MODULE_MAP[activeModule];

  return (
    <div className="min-h-screen bg-[#04040f] text-slate-200 relative">
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />

      <AnimatePresence>
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="flex flex-col min-h-screen relative z-10"
        >
          <Header activeModuleId={activeModule} />
          <div className="flex flex-1 pb-7">
            <NavSelector active={activeModule} onChange={handleModuleChange} />
            <main className="flex-1 overflow-y-auto overflow-x-hidden" style={{ maxHeight: "calc(100vh - 57px)" }}>
              <AnimatePresence mode="wait">
                <ActiveModule key={activeModule} />
              </AnimatePresence>
            </main>
          </div>
          <DataTicker />
        </motion.div>
      )}
    </div>
  );
}