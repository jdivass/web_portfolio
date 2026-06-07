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
    "SYSTEM ONLINE", "ALL MODULES ACTIVE", "SECURITY STATUS: NOMINAL",
    "UPTIME: 100%", "DATA INTEGRITY: VERIFIED", "THREAT LEVEL: NONE",
    "BACKEND SYSTEMS: OPERATIONAL", "DATABASE CONNECTIONS: STABLE",
    "AUTH SERVICE: ACTIVE", "ENCRYPTION: ENABLED",
  ];
  const repeated = [...items, ...items];
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
      borderTop: "1px solid rgba(59,130,246,0.2)",
      background: "rgba(4,4,15,0.9)",
      height: 28,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    }}>
      <div style={{
        display: "flex",
        whiteSpace: "nowrap",
        animation: "ticker 30s linear infinite",
      }}>
        {repeated.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 10,
            color: "rgba(59,130,246,0.5)",
            padding: "0 24px",
          }}>◆ {item}</span>
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
    <div style={{
      minHeight: "100vh",
      width: "100%",
      background: "#04040f",
      color: "#e2e8f0",
      position: "relative",
      fontFamily: "'Rajdhani', sans-serif",
    }}>

      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        animation: "grid-move 8s linear infinite",
      }} />
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, height: "40%",
        pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(139,92,246,0.05) 0%, transparent 70%)",
      }} />
      {/* Scanlines */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,130,246,0.015) 2px, rgba(59,130,246,0.015) 4px)",
      }} />

      <AnimatePresence>
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Header */}
          <Header activeModuleId={activeModule} />

          {/* Body: nav + main */}
          <div style={{
            display: "flex",
            flex: 1,
            paddingBottom: 28,
            overflow: "hidden",
          }}>
            <NavSelector active={activeModule} onChange={handleModuleChange} />
            <main style={{
              flex: 1,
              minWidth: 0,
              overflowY: "auto",
              overflowX: "hidden",
              height: "calc(100vh - 57px)",
            }}>
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
