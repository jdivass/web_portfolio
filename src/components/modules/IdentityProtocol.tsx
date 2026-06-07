import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

const F = { hud: "'Orbitron', monospace", ui: "'Rajdhani', sans-serif", mono: "'Share Tech Mono', monospace" };

function StatBadge({ label, value, color, pulse }: { label: string; value: string; color: string; pulse?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 4,
      background: `${color}14`, border: `1px solid ${color}25` }}>
      {pulse && <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, boxShadow: `0 0 5px ${color}` }} />}
      <span style={{ fontFamily: F.mono, fontSize: 8, color: "#64748b", letterSpacing: 2 }}>{label}</span>
      <span style={{ fontFamily: F.mono, fontSize: 9, color, letterSpacing: 1 }}>{value}</span>
    </div>
  );
}

function DataCard({ label, value, icon, color, sub }: { label: string; value: string; icon: string; color: string; sub: string }) {
  return (
    <div style={{ background: "rgba(10,12,30,0.7)", border: "1px solid rgba(59,130,246,0.12)", borderRadius: 12, padding: 20 }}>
      <div style={{ fontFamily: F.mono, fontSize: 9, color: "#475569", letterSpacing: 3, marginBottom: 12 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color, fontSize: 18 }}>{icon}</span>
        <span style={{ fontFamily: F.hud, fontSize: 14, color: "#e2e8f0", letterSpacing: 1 }}>{value}</span>
      </div>
      <div style={{ fontFamily: F.ui, fontSize: 11, color: "#475569", marginTop: 6 }}>{sub}</div>
    </div>
  );
}

export default function IdentityProtocol() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      style={{ padding: 32, width: "100%" }}
    >
      <SectionHeader icon="◈" color="#3b82f6" title="IDENTITY PROTOCOL" sub="PLAYER CARD — ACTIVE" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>

        <div style={{ gridColumn: "1 / -1", background: "rgba(10,12,30,0.8)",
          border: "1px solid rgba(59,130,246,0.2)", borderRadius: 12, padding: 28,
          position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: 192, height: 192,
            background: "radial-gradient(ellipse at top right, rgba(59,130,246,0.08), transparent 70%)" }} />

          <div style={{ display: "flex", gap: 28 }}>

            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ width: 140, height: 160, borderRadius: 12, overflow: "hidden",
                border: "1px solid rgba(59,130,246,0.4)",
                boxShadow: "0 0 30px rgba(59,130,246,0.2), 0 0 60px rgba(139,92,246,0.1)",
                position: "relative", flexShrink: 0 }}>
                <img
                  src="/web_portfolio/image.png"
                  alt={profile.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", objectPosition: "top" }}
                />
                <div style={{ position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40,
                  background: "linear-gradient(to top, rgba(59,130,246,0.2), transparent)" }} />
              </div>
              <div style={{ padding: "4px 12px", borderRadius: 4,
                background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)",
                display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", flexShrink: 0,
                  background: "#10b981", boxShadow: "0 0 5px rgba(16,185,129,0.8)" }} />
                <span style={{ fontFamily: F.mono, fontSize: 8, color: "#10b981", letterSpacing: 1 }}>ONLINE</span>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: F.mono, fontSize: 10, color: "#64748b", letterSpacing: 3, marginBottom: 4 }}>
                PLAYER IDENTIFIED
              </div>
              <div style={{ fontFamily: F.hud, fontSize: 36, fontWeight: 900, color: "#e2e8f0",
                letterSpacing: 2, lineHeight: 1, textShadow: "0 0 20px rgba(59,130,246,0.3)" }}>
                {profile.name}
              </div>
              <div style={{ fontFamily: F.hud, fontSize: 12, color: "#3b82f6", letterSpacing: 3, marginTop: 6 }}>
                {profile.role}
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" as const }}>
                <StatBadge label="LOCATION" value={profile.location} color="#06b6d4" />
                <StatBadge label="STATUS" value={profile.status} color="#10b981" />
              </div>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(59,130,246,0.1)" }}>
                <p style={{ fontFamily: F.ui, fontSize: 15, color: "#94a3b8", lineHeight: 1.7 }}>
                  {profile.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        <DataCard label="CLASS" value={profile.role} icon="⚙" color="#3b82f6" sub="Primary designation" />

        <DataCard label="SPECIALIZATION" value={profile.specialization} icon="◬" color="#8b5cf6" sub="Focus area" />

        <div style={{ gridColumn: "1 / -1", background: "rgba(10,12,30,0.6)",
          border: "1px solid rgba(59,130,246,0.15)", borderRadius: 10, padding: 20 }}>
          <div style={{ fontFamily: F.mono, fontSize: 9, color: "#64748b", letterSpacing: 3, marginBottom: 10 }}>
            ACTIVE MISSION
          </div>
          <div style={{ fontFamily: F.hud, fontSize: 16, color: "#e2e8f0", letterSpacing: 1 }}>
            {profile.mission}
          </div>
        </div>

        <div style={{ gridColumn: "1 / -1", background: "rgba(10,12,30,0.7)",
          border: "1px solid rgba(59,130,246,0.15)", borderRadius: 12, padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6",
              boxShadow: "0 0 6px rgba(59,130,246,0.8)" }} />
            <div style={{ fontFamily: F.mono, fontSize: 9, color: "#64748b", letterSpacing: 3 }}>
              ABOUT THE OPERATOR
            </div>
          </div>
          <p style={{ fontFamily: F.ui, fontSize: 15, color: "#94a3b8", lineHeight: 1.8, maxWidth: 720 }}>
            {profile.about}
          </p>
        </div>

        <div style={{ gridColumn: "1 / -1", background: "rgba(10,12,30,0.7)",
          border: "1px solid rgba(139,92,246,0.2)", borderRadius: 12, padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6",
              boxShadow: "0 0 6px rgba(139,92,246,0.8)" }} />
            <div style={{ fontFamily: F.mono, fontSize: 9, color: "#64748b", letterSpacing: 3 }}>
              CORE ATTRIBUTES
            </div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(139,92,246,0.3), transparent)" }} />
            <span style={{ fontFamily: F.mono, fontSize: 9, color: "#475569", letterSpacing: 2 }}>
              INTERPERSONAL STATS
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 32px" }}>
            {profile.coreAttributes.map((attr, i) => (
              <motion.div key={attr.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#8b5cf6",
                      boxShadow: "0 0 4px rgba(139,92,246,0.8)" }} />
                    <span style={{ fontFamily: F.ui, fontSize: 13, color: "#94a3b8" }}>{attr.name}</span>
                  </div>
                  <span style={{ fontFamily: F.mono, fontSize: 10, color: "#8b5cf6" }}>{attr.value}</span>
                </div>
                {/* Barra de progreso */}
                <div style={{ height: 6, borderRadius: 3, background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.15)", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${attr.value}%` }}
                    transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                    style={{ height: "100%", borderRadius: 3,
                      background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                      boxShadow: "0 0 8px rgba(139,92,246,0.6)",
                      position: "relative" }}
                  >
                    <div style={{ position: "absolute", inset: 0,
                      background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                      animation: "ticker 2s linear infinite" }} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10, flexWrap: "wrap" as const }}>
          {profile.links.map((link, i) => (
            <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px",
                borderRadius: 6, background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.25)", color: "#94a3b8", textDecoration: "none" }}>
              <span style={{ fontFamily: F.hud, fontSize: 10, color: "#3b82f6" }}>{link.icon}</span>
              <span style={{ fontFamily: F.hud, fontSize: 10, letterSpacing: 2 }}>{link.label}</span>
            </motion.a>
          ))}
        </div>

      </div>
    </motion.div>
  );
}