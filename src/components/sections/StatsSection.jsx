import { stats } from "../../data/stats";

export default function StatsSection() {
  return (
    <section
      id="stats"
      data-surface="alt"
      className="surface-alt relative w-full px-4 sm:px-8 md:px-16 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-label mb-12">&lt;Success &amp; Achievements&gt;</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-2">
              <span className="font-display text-5xl md:text-6xl font-bold tracking-tighter">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="text-sm md:text-base opacity-60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
