import { experience } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      data-surface="primary"
      className="surface-primary relative w-full px-4 sm:px-8 md:px-16 py-20 md:py-28"
    >
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-12">// Experience</p>

        <div className="flex flex-col">
          {experience.map((item) => (
            <article
              key={item.id}
              className="py-8 md:py-10 border-t"
              style={{ borderColor: "var(--primary-border)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  {item.role}
                </h3>
                <span className="text-sm shrink-0 opacity-60">{item.period}</span>
              </div>
              <p className="text-lg mb-2 opacity-80">{item.company}</p>
              <p className="text-sm max-w-2xl opacity-60">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
