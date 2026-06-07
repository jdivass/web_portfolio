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
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      borderBottom: "1px solid rgba(59,130,246,0.15)",
      background: "rgba(4,4,15,0.95)",
      backdropFilter: "blur(12px)",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexShrink: 0,
    }}>
      {/* Left: brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 16, height: 16 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%", background: "#10b981",
              boxShadow: "0 0 8px rgba(16,185,129,0.8)",
            }} />
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              border: "1px solid rgba(16,185,129,0.4)",
              animation: "pulse-ring 2s ease-out infinite",
            }} />
          </div>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: "#10b981", letterSpacing: 2 }}>ONLINE</span>
        </div>
        <span style={{
          fontFamily: "'Orbitron', monospace", fontSize: 14, fontWeight: 700,
          color: "#3b82f6", letterSpacing: 3,
          textShadow: "0 0 15px rgba(59,130,246,0.5)",
        }}>
          PORTGOLIO
        </span>
      </div>

      {/* Center: active module */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeModuleId}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          style={{
            fontFamily: "'Orbitron', monospace", fontSize: 11,
            letterSpacing: 3, textTransform: "uppercase",
            color: activeModule?.color,
          }}
        >
          {activeModule?.label}
        </motion.div>
      </AnimatePresence>

      {/* Right: clock */}
      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 11, color: "#64748b", letterSpacing: 2 }}>
        {time.toLocaleTimeString("en-US", { hour12: false })}
      </div>
    </header>
  );
}
