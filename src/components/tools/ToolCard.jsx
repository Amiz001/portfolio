import { FaGithub, FaDownload } from "react-icons/fa";

export default function ToolCard({ tool }) {
  return (
    <article
      className="group border rounded-2xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1"
      style={{ borderColor: "var(--primary-border)" }}
    >
      {tool.image && (
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-40 object-cover rounded-lg mb-6 grayscale"
          loading="lazy"
        />
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full border opacity-60"
            style={{ borderColor: "var(--primary-border)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-display text-2xl font-bold mb-1">{tool.name}</h3>
      <p className="text-sm mb-2 opacity-60">{tool.tagline}</p>
      <p className="text-sm mb-6 opacity-50">{tool.description}</p>

      <div className="flex gap-3">
        {tool.githubUrl && (
          <a
            href={tool.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:opacity-70 transition-opacity"
            style={{ borderColor: "var(--primary-border)" }}
          >
            <FaGithub size={16} />
            GitHub
          </a>
        )}
        {tool.downloadUrl && (
          <a
            href={tool.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "var(--primary-fg)",
              color: "var(--primary-bg)",
            }}
          >
            <FaDownload size={16} />
            Download
          </a>
        )}
      </div>
    </article>
  );
}
