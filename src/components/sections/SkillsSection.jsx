import { skillCategories } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      data-surface="alt"
      className="surface-alt relative w-full px-4 sm:px-8 md:px-16 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-label mb-12">&lt;Stack&gt;</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="border rounded-2xl p-6 md:p-8"
              style={{ borderColor: "var(--alt-border)" }}
            >
              <h3 className="font-display text-xl font-bold mb-6">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm border rounded-full"
                    style={{ borderColor: "var(--alt-border)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
