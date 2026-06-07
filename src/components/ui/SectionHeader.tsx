interface Props {
  icon: string;
  color: string;
  title: string;
  sub: string;
}

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : "59,130,246";
}

export default function SectionHeader({ icon, color, title, sub }: Props) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
        style={{
          background: `rgba(${hexToRgb(color)},0.12)`,
          border: `1px solid ${color}40`,
          color,
        }}>
        {icon}
      </div>
      <div>
        <div className="font-hud text-lg font-black text-slate-100 tracking-[3px]">{title}</div>
        <div className="font-mono text-[9px] text-slate-500 tracking-[3px] mt-0.5">{sub}</div>
      </div>
      <div className="flex-1 h-px mt-5" style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }} />
    </div>
  );
}