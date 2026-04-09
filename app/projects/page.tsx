export default function Projects() {
  const projects = [
    {
      title: "Project Alpha",
      stack: "Next.js · TypeScript · Tailwind",
      description:
        "A full-stack web app built with the App Router. Focused on performance and clean UI patterns.",
    },
    {
      title: "Project Beta",
      stack: "React · Node.js · PostgreSQL",
      description:
        "An internal tool that streamlined a repetitive workflow, cutting manual effort by 80%.",
    },
    {
      title: "Project Gamma",
      stack: "Python · FastAPI · SQLite",
      description:
        "A lightweight REST API for managing structured data, built for simplicity and speed.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-stone-100">Projects</h1>
        <p className="text-sm text-stone-400 mt-1">Things I&apos;ve built.</p>
      </div>

      <hr className="border-stone-800" />

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-2 p-5 rounded-xl border border-stone-800 hover:border-stone-700 hover:bg-stone-900/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-base font-medium text-stone-100">{project.title}</h2>
              <span className="text-xs text-stone-500 whitespace-nowrap mt-0.5">
                {project.stack}
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
