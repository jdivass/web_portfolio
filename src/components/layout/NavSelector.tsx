import { motion } from "framer-motion";
import { modules } from "../../data/modules";
import type { ModuleId } from "../../types";

interface Props {
  active: ModuleId;
  onChange: (id: ModuleId) => void;
}

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}` : "59,130,246";
}

export default function NavSelector({ active, onChange }: Props) {
  return (
    <nav style={{
      width: 224,
      flexShrink: 0,
      padding: 16,
      borderRight: "1px solid rgba(59,130,246,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      overflowY: "auto",
    }}>
      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 9, color: "#64748b", letterSpacing: 3,
        marginBottom: 12, paddingLeft: 8,
      }}>
        SELECT MODULE
      </div>

      {modules.map((m) => {
        const isActive = m.id === active;
        return (
          <motion.button
            key={m.id}
            onClick={() => onChange(m.id)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%", textAlign: "left",
              background: isActive ? `rgba(${hexToRgb(m.color)},0.12)` : "transparent",
              border: `1px solid ${isActive ? m.color : "rgba(59,130,246,0.08)"}`,
              borderRadius: 6,
              padding: "10px 12px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.2s",
            }}
          >
            {/* Left accent bar */}
            <div style={{
              position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
              width: 2, borderRadius: 1,
              height: isActive ? "60%" : "0%",
              background: m.color,
              boxShadow: `0 0 6px ${m.color}`,
              transition: "height 0.3s",
            }} />
            <div style={{ paddingLeft: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: isActive ? m.color : "#64748b", fontSize: 14 }}>{m.icon}</span>
                <span style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: 10, letterSpacing: 1,
                  color: isActive ? m.color : "#94a3b8",
                  fontWeight: isActive ? 700 : 500,
                }}>
                  {m.label}
                </span>
              </div>
              <div style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: 10, color: "#475569",
                marginTop: 2, paddingLeft: 22,
              }}>
                {m.sublabel}
              </div>
            </div>
          </motion.button>
        );
      })}

      <div style={{
        marginTop: "auto", paddingTop: 24,
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 9, color: "#1e293b",
        lineHeight: 1.8, letterSpacing: 1,
      }}>
        ↑↓ NAVIGATE<br />CLICK TO SELECT
      </div>
    </nav>
  );
}
