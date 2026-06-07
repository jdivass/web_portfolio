import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const LINES = [
  "INITIALIZING CYBER PORTFOLIO...",
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
      const t = setTimeout(() => setPhase((p) => p + 1), phase === LINES.length - 1 ? 600 : 280);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(onComplete, 600);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#04040f] flex flex-col items-center justify-center gap-2"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-hud text-2xl font-black text-blue-400 tracking-[6px] mb-8"
        style={{ textShadow: "0 0 30px rgba(59,130,246,0.8)" }}
      >
        CYBER OPS HUB
      </motion.div>

      <div className="w-[480px] max-w-[90vw] font-mono text-xs flex flex-col gap-1">
        {LINES.slice(0, phase).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2"
            style={{ color: i === phase - 1 ? "#3b82f6" : "rgba(100,116,139,0.7)" }}
          >
            <span className="text-emerald-400">{">"}</span>
            <span>{line}</span>
            {i === phase - 1 && <span className="animate-blink text-blue-400">█</span>}
          </motion.div>
        ))}
      </div>

      <div className="w-[480px] max-w-[90vw] mt-6 h-[2px] bg-blue-400/10 rounded">
        <motion.div
          className="h-full bg-blue-400 rounded"
          style={{ boxShadow: "0 0 8px rgba(59,130,246,0.8)" }}
          animate={{ width: `${(phase / LINES.length) * 100}%` }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </motion.div>
  );
}