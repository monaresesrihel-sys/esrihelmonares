import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <article className="overflow-hidden border border-mist bg-white dark:border-nightcard dark:bg-nightcard">
      {project.image ? (
        <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
      ) : (
        <div className="grid h-40 place-items-center bg-deep font-display text-5xl font-bold text-sun">
          {initials}
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <span className="shrink-0 rounded bg-mist px-2 py-0.5 text-xs font-medium text-deep dark:bg-night dark:text-sun">
            {project.tag}
          </span>
        </div>
        <p className="mt-2 text-ink/80 dark:text-mist/80">{project.summary}</p>

        {expanded && (
          <div className="mt-4 animate-rise border-t border-mist pt-4 motion-reduce:animate-none dark:border-night">
            <p>{project.details}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-deep px-3 py-0.5 text-sm text-deep dark:border-sun dark:text-sun">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-4 text-sm font-semibold text-deep underline underline-offset-4 dark:text-sun"
        >
          {expanded ? 'Show less' : 'View more'}
        </button>
      </div>
    </article>
  )
}
