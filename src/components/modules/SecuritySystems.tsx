import { motion } from "framer-motion";
import { securityDomains } from "../../data/securityDomains";
import SectionHeader from "../ui/SectionHeader";

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "59,130,246";
}

export default function SecuritySystems() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      className="p-8 max-w-4xl"
    >
      <SectionHeader icon="◬" color="#10b981" title="SECURITY SYSTEMS" sub="SECURE DEVELOPMENT FOCUS" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="mt-6 p-5 rounded-xl mb-5"
        style={{
          background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.05))",
          border: "1px solid rgba(16,185,129,0.25)",
          borderLeft: "3px solid #10b981",
        }}
      >
        <div className="font-mono text-[9px] text-emerald-400 tracking-[3px] mb-2">
        LEARNING ROADMAP
        </div>
        <p className="font-ui text-sm text-slate-400 leading-relaxed">
        Security is a field I want to grow into from a solid software engineering base.
        These are the areas I'm actively{" "}
        <span className="text-emerald-400">studying and exploring</span>{" "}
        to become a developer who builds systems that are secure by design.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {securityDomains.map((domain, i) => (
          <motion.div key={domain.id}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl p-5 relative overflow-hidden transition-all duration-300 cursor-default"
            style={{ background: "rgba(10,12,30,0.8)", border: "1px solid rgba(59,130,246,0.12)" }}
          >
            <div className="absolute top-0 right-0 w-20 h-20"
              style={{ background: `radial-gradient(ellipse at top right, ${domain.color}11, transparent)` }} />
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: `rgba(${hexToRgb(domain.color)},0.12)`,
                  border: `1px solid ${domain.color}33`,
                  color: domain.color,
                }}>
                {domain.icon}
              </div>
              <span className="font-hud text-[11px] text-slate-100 tracking-[1px]">{domain.title}</span>
            </div>
            <p className="font-ui text-xs text-slate-500 mb-3 leading-relaxed">{domain.description}</p>
            <div className="flex gap-1.5 flex-wrap">
              {domain.concepts.map((c) => (
                <span key={c} className="font-mono text-[9px] rounded px-1.5 py-0.5 tracking-[1px]"
                  style={{
                    color: domain.color,
                    background: `rgba(${hexToRgb(domain.color)},0.08)`,
                    border: `1px solid ${domain.color}22`,
                  }}>
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="mt-5 px-5 py-3.5 rounded-lg flex items-center gap-3"
        style={{ background: "rgba(10,12,30,0.6)", border: "1px solid rgba(59,130,246,0.1)" }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" style={{ boxShadow: "0 0 8px rgba(245,158,11,0.6)" }} />
        <span className="font-mono text-[10px] text-slate-500 tracking-[2px]">
        LEARNING VECTOR: SECURITY ENGINEERING
        </span>
        <div className="flex-1 h-px bg-blue-400/10" />
        <span className="font-hud text-[10px] text-amber-400">IN PROGRESS</span>
      </motion.div>
    </motion.div>
  );
}