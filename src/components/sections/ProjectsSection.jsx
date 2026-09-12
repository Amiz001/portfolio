import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      data-surface="primary"
      className="surface-primary relative w-full px-4 sm:px-8 md:px-16 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-label mb-4">&lt;Projects&gt;</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-12 md:mb-16">
          SELECTED WORK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col border rounded-xl overflow-hidden"
              style={{ borderColor: "var(--primary-border)" }}
            >
              <div
                className="aspect-video overflow-hidden border-b"
                style={{ borderColor: "var(--primary-border)" }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold">
                    {project.name}
                  </h3>
                  <p className="text-sm opacity-60 mt-1">{project.subtitle}</p>
                </div>

                <p className="text-sm opacity-70 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs border rounded"
                      style={{ borderColor: "var(--primary-border)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div
                  className="flex gap-3 pt-3 border-t"
                  style={{ borderColor: "var(--primary-border)" }}
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:opacity-70 transition-opacity flex-1 justify-center"
                    style={{ borderColor: "var(--primary-border)" }}
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:opacity-70 transition-opacity flex-1 justify-center"
                    style={{
                      borderColor: "var(--primary-fg)",
                      backgroundColor: "var(--primary-fg)",
                      color: "var(--primary-bg)",
                    }}
                  >
                    <FaExternalLinkAlt size={14} />
                    View
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
