import { stats } from "@/data/stats";

export default function StatisticsBar() {
  return (
    <section className="bg-brand py-8">
      <div className="container">
        <div className="flex overflow-x-auto no-scrollbar sm:grid sm:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-3 px-5 py-2 flex-shrink-0 ${i === 0 ? "pl-0" : ""}`}
            >
              <span className={`flex items-center justify-center w-11 h-11 rounded-full ${stat.bg} flex-shrink-0`}>
                <stat.icon className="w-5 h-5 text-white" aria-hidden="true" />
              </span>
              <div>
                <p className="text-lg sm:text-xl font-extrabold text-white leading-none whitespace-nowrap">
                  {stat.value}
                </p>
                <p className="text-xs text-white/70 mt-1 whitespace-nowrap">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
