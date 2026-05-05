export default function HeroStats() {
  return (
    <div className="aspect-[4/3] rounded-2xl bg-[#0d1c30] border border-zinc-800 p-8 flex flex-col justify-between">
      <div>
        <span className="text-[#d4a088] text-xs font-medium tracking-widest uppercase">
          The data is clear
        </span>
        <h3 className="text-white text-lg font-semibold mt-2 leading-snug">
          South Asian metabolic risk<br />
          <span className="text-zinc-400 font-normal text-base">is not the same as everyone else&apos;s</span>
        </h3>
      </div>

      <div className="space-y-7">
        <div className="flex items-start gap-5">
          <div className="text-5xl font-bold text-[#d4a088] leading-none tabular-nums min-w-[3.5rem]">3×</div>
          <div>
            <div className="text-white font-medium leading-snug">
              higher prediabetes risk
            </div>
            <div className="text-zinc-500 text-sm mt-1">
              South Asian men vs. White peers<sup className="text-[10px]">1</sup>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="text-5xl font-bold text-[#d4a088] leading-none tabular-nums min-w-[3.5rem]">2.5×</div>
          <div>
            <div className="text-white font-medium leading-snug">
              higher prediabetes risk
            </div>
            <div className="text-zinc-500 text-sm mt-1">
              South Asian women vs. White peers<sup className="text-[10px]">1</sup>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="text-5xl font-bold text-[#d4a088] leading-none tabular-nums min-w-[3.5rem]">6 yrs</div>
          <div>
            <div className="text-white font-medium leading-snug">
              earlier first heart attack
            </div>
            <div className="text-zinc-500 text-sm mt-1">
              South Asians vs. global average (53 vs. 58.8)<sup className="text-[10px]">2</sup>
            </div>
          </div>
        </div>
      </div>

      <div className="text-zinc-600 text-[11px] space-y-1 border-t border-zinc-800 pt-4 leading-relaxed">
        <p><sup>1</sup> MASALA Study Investigators. <em>J Am Heart Assoc.</em> 2026. doi:10.1161/JAHA.124.041221</p>
        <p><sup>2</sup> Joshi P, et al. <em>JAMA.</em> 2007;297(3):286–294. PMID: 17227980</p>
      </div>
    </div>
  );
}
