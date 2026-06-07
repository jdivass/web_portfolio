import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function IdentityProtocol() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
      className="p-8 max-w-4xl"
    >
      <SectionHeader icon="◈" color="#3b82f6" title="IDENTITY PROTOCOL" sub="PLAYER CARD — ACTIVE" />

      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Main card */}
        <div className="col-span-2 bg-[#0a0c1e]/80 border border-blue-400/20 rounded-xl p-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48"
            style={{ background: "radial-gradient(ellipse at top right, rgba(59,130,246,0.08), transparent 70%)" }} />
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))",
                border: "1px solid rgba(59,130,246,0.4)",
                boxShadow: "0 0 20px rgba(59,130,246,0.2)",
              }}>◈</div>
            <div className="flex-1">
              <div className="font-mono text-[10px] text-slate-500 tracking-[3px] mb-1">PLAYER IDENTIFIED</div>
              <div className="font-hud text-4xl font-black text-slate-100 tracking-[2px]"
                style={{ textShadow: "0 0 20px rgba(59,130,246,0.3)" }}>
                {profile.name}
              </div>
              <div className="font-hud text-xs text-blue-400 tracking-[3px] mt-1">{profile.role}</div>
              <div className="flex gap-2 mt-3 flex-wrap">
                <StatBadge label="LOCATION" value={profile.location} color="#06b6d4" />
                <StatBadge label="STATUS" value={profile.status} color="#10b981" pulse />
              </div>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-blue-400/10">
            <p className="font-ui text-sm text-slate-400 leading-relaxed max-w-xl">{profile.bio}</p>
          </div>
        </div>

        {/* Class */}
        <DataCard label="CLASS" value={profile.role} icon="⚙" color="#3b82f6" sub="Primary designation" />
        {/* Specialization */}
        <DataCard label="SPECIALIZATION" value={profile.specialization} icon="◬" color="#8b5cf6" sub="Focus area" />

        {/* Mission */}
        <div className="col-span-2 bg-[#0a0c1e]/60 border border-blue-400/15 rounded-xl p-5">
          <div className="font-mono text-[9px] text-slate-500 tracking-[3px] mb-2">ACTIVE MISSION</div>
          <div className="font-hud text-base text-slate-100 tracking-[1px]">{profile.mission}</div>
        </div>

        {/* Links */}
        <div className="col-span-2 flex gap-2 flex-wrap">
          {profile.links.map((link, i) => (
            <motion.a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-md no-underline transition-colors"
              style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", color: "#94a3b8" }}>
              <span className="font-hud text-[10px] text-blue-400">{link.icon}</span>
              <span className="font-hud text-[10px] tracking-[2px]">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StatBadge({ label, value, color, pulse }: { label: string; value: string; color: string; pulse?: boolean }) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded"
      style={{ background: `${color}14`, border: `1px solid ${color}25` }}>
      {pulse && <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 5px ${color}` }} />}
      <span className="font-mono text-[8px] text-slate-500 tracking-[2px]">{label}</span>
      <span className="font-mono text-[9px] tracking-[1px]" style={{ color }}>{value}</span>
    </div>
  );
}

function DataCard({ label, value, icon, color, sub }: { label: string; value: string; icon: string; color: string; sub: string }) {
  return (
    <div className="bg-[#0a0c1e]/70 border border-blue-400/12 rounded-xl p-5">
      <div className="font-mono text-[9px] text-slate-500 tracking-[3px] mb-3">{label}</div>
      <div className="flex items-center gap-2">
        <span style={{ color, fontSize: 18 }}>{icon}</span>
        <span className="font-hud text-sm text-slate-100 tracking-[1px]">{value}</span>
      </div>
      <div className="font-ui text-[11px] text-slate-600 mt-1.5">{sub}</div>
    </div>
  );
}