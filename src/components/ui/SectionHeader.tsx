interface Props { icon: string; color: string; title: string; sub: string; }

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "59,130,246";
}

export default function SectionHeader({ icon, color, title, sub }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 8, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 18,
        background: `rgba(${hexToRgb(color)},0.12)`,
        border: `1px solid ${color}40`,
        color,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: 18, fontWeight: 900,
          color: "#e2e8f0", letterSpacing: 3,
        }}>{title}</div>
        <div style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 9, color: "#64748b",
          letterSpacing: 3, marginTop: 2,
        }}>{sub}</div>
      </div>
      <div style={{
        flex: 1, height: 1, marginTop: 20,
        background: `linear-gradient(90deg, ${color}30, transparent)`,
      }} />
    </div>
  );
}
