import { motion } from "framer-motion";
import { securityDomains } from "../../data/securityDomains";
import SectionHeader from "../ui/SectionHeader";

const F = { hud: "'Orbitron', monospace", ui: "'Rajdhani', sans-serif", mono: "'Share Tech Mono', monospace" };

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "59,130,246";
}

export default function SecuritySystems() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      style={{ padding: 32, width: "100%"}}
    >
      <SectionHeader icon="◬" color="#10b981" title="SECURITY SYSTEMS" sub="LEARNING ROADMAP" />

      {/* Philosophy banner */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{ marginTop: 24, marginBottom: 20, padding: 20, borderRadius: 12,
          background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.05))",
          border: "1px solid rgba(16,185,129,0.25)", borderLeft: "3px solid #10b981" }}
      >
        <div style={{ fontFamily: F.mono, fontSize: 9, color: "#10b981", letterSpacing: 3, marginBottom: 8 }}>
          LEARNING ROADMAP
        </div>
        <p style={{ fontFamily: F.ui, fontSize: 15, color: "#94a3b8", lineHeight: 1.7 }}>
          Security is a field I want to grow into from a solid software engineering base.
          These are the areas I'm actively{" "}
          <span style={{ color: "#10b981" }}>studying and exploring</span>{" "}
          to become a developer who builds systems that are secure by design.
        </p>
      </motion.div>

      {/* Domain cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {securityDomains.map((domain, i) => (
          <motion.div key={domain.id}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            style={{ borderRadius: 12, padding: 20, position: "relative", overflow: "hidden",
              background: "rgba(10,12,30,0.8)", border: "1px solid rgba(59,130,246,0.12)",
              transition: "border-color 0.3s" }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80,
              background: `radial-gradient(ellipse at top right, ${domain.color}11, transparent)` }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `rgba(${hexToRgb(domain.color)},0.12)`,
                border: `1px solid ${domain.color}33`, color: domain.color, fontSize: 16 }}>
                {domain.icon}
              </div>
              <span style={{ fontFamily: F.hud, fontSize: 11, color: "#e2e8f0", letterSpacing: 1 }}>{domain.title}</span>
            </div>
            <p style={{ fontFamily: F.ui, fontSize: 12, color: "#64748b", marginBottom: 14, lineHeight: 1.6 }}>{domain.description}</p>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" as const }}>
              {domain.concepts.map(c => (
                <span key={c} style={{ fontFamily: F.mono, fontSize: 9, letterSpacing: 1,
                  color: domain.color,
                  background: `rgba(${hexToRgb(domain.color)},0.08)`,
                  border: `1px solid ${domain.color}22`,
                  borderRadius: 3, padding: "2px 7px" }}>{c}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Growth indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        style={{ marginTop: 20, padding: "14px 20px", borderRadius: 8,
          background: "rgba(10,12,30,0.6)", border: "1px solid rgba(59,130,246,0.1)",
          display: "flex", alignItems: "center", gap: 12 }}
      >
        <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
          background: "#f59e0b", boxShadow: "0 0 8px rgba(245,158,11,0.6)" }} />
        <span style={{ fontFamily: F.mono, fontSize: 10, color: "#64748b", letterSpacing: 2 }}>
          LEARNING VECTOR: SECURITY ENGINEERING
        </span>
        <div style={{ flex: 1, height: 1, background: "rgba(59,130,246,0.1)" }} />
        <span style={{ fontFamily: F.hud, fontSize: 10, color: "#f59e0b" }}>IN PROGRESS</span>
      </motion.div>
    </motion.div>
  );
}
