import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props { onComplete: () => void; }

const LINES = [
  "INITIALIZING CYBER OPERATIONS HUB...",
  "LOADING IDENTITY PROTOCOL...",
  "ESTABLISHING SECURE CONNECTION...",
  "MOUNTING PROJECT DATABASE...",
  "SKILL MATRIX CALIBRATED...",
  "SECURITY SYSTEMS ONLINE...",
  "ALL MODULES OPERATIONAL.",
  "WELCOME, OPERATOR.",
];

export default function BootSequence({ onComplete }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase < LINES.length) {
      const t = setTimeout(() => setPhase(p => p + 1), phase === LINES.length - 1 ? 600 : 280);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(onComplete, 600);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "#04040f",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}
    >
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px" }} />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
        style={{ fontFamily: "'Orbitron', monospace", fontSize: 28, fontWeight: 800,
          color: "#3b82f6", letterSpacing: 6, marginBottom: 32,
          textShadow: "0 0 30px rgba(59,130,246,0.8)", position: "relative" }}
      >
        PORTGOLIO
      </motion.div>

      <div style={{ width: 480, maxWidth: "90vw", display: "flex", flexDirection: "column", gap: 4, position: "relative" }}>
        {LINES.slice(0, phase).map((line, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            style={{ display: "flex", gap: 8, fontFamily: "'Share Tech Mono', monospace", fontSize: 12,
              color: i === phase - 1 ? "#3b82f6" : "rgba(100,116,139,0.7)" }}
          >
            <span style={{ color: "#10b981" }}>{">"}</span>
            <span>{line}</span>
            {i === phase - 1 && (
              <span style={{ color: "#3b82f6", animation: "blink 1s step-end infinite" }}>█</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ width: 480, maxWidth: "90vw", marginTop: 24, height: 2,
        background: "rgba(59,130,246,0.15)", borderRadius: 1, position: "relative" }}>
        <motion.div
          animate={{ width: `${(phase / LINES.length) * 100}%` }}
          transition={{ duration: 0.25 }}
          style={{ height: "100%", background: "#3b82f6", borderRadius: 1,
            boxShadow: "0 0 8px rgba(59,130,246,0.8)" }}
        />
      </div>
    </motion.div>
  );
}
