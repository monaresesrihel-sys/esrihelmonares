import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const tags = ['All', ...new Set(projects.map((p) => p.tag))]

export default function Projects() {
  const [tag, setTag] = useState('All')
  const visible = tag === 'All' ? projects : projects.filter((p) => p.tag === tag)

  return (
    <div>
      <SectionTitle title="Projects" intro="Things I've built. Select View more to read the details." />

      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            aria-pressed={tag === t}
            className={`rounded-full border px-4 py-1 text-sm font-medium transition-colors ${
              tag === t
                ? 'border-deep bg-deep text-paper dark:border-sun dark:bg-sun dark:text-ink'
                : 'border-deep/40 hover:border-deep dark:border-mist/40 dark:hover:border-sun'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p>No projects in this category yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  )
}
