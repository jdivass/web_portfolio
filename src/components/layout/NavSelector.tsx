import { motion } from "framer-motion";
import { modules } from "../../data/modules";
import type { ModuleId } from "../../types";

interface Props {
  active: ModuleId;
  onChange: (id: ModuleId) => void;
}

export default function NavSelector({ active, onChange }: Props) {
  return (
    <nav className="w-56 flex-shrink-0 p-4 border-r border-blue-400/10 flex flex-col gap-1.5">
      <div className="font-mono text-[9px] text-slate-500 tracking-[3px] mb-3 pl-2">
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
            className="w-full text-left rounded-md px-3 py-2.5 relative overflow-hidden transition-all duration-200 cursor-pointer"
            style={{
              background: isActive ? `rgba(${hexToRgb(m.color)},0.12)` : "transparent",
              border: `1px solid ${isActive ? m.color : "rgba(59,130,246,0.08)"}`,
            }}
          >
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-[1px] transition-all duration-300"
              style={{
                height: isActive ? "60%" : "0%",
                background: m.color,
                boxShadow: `0 0 6px ${m.color}`,
              }}
            />
            <div className="pl-2">
              <div className="flex items-center gap-2">
                <span style={{ color: isActive ? m.color : "#64748b" }}>{m.icon}</span>
                <span className="font-hud text-[10px] tracking-[1px]"
                  style={{ color: isActive ? m.color : "#94a3b8", fontWeight: isActive ? 700 : 500 }}>
                  {m.label}
                </span>
              </div>
              <div className="text-[10px] text-slate-600 mt-0.5 pl-5 font-ui">{m.sublabel}</div>
            </div>
          </motion.button>
        );
      })}
      <div className="mt-auto pt-6 font-mono text-[9px] text-slate-800 leading-relaxed tracking-[1px]">
        ↑↓ NAVIGATE<br />CLICK TO SELECT
      </div>
    </nav>
  );
}

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "59,130,246";
}