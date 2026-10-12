import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { about, skills } from '../data'

const groups = ['All', ...new Set(skills.map((s) => s.group))]

export default function About() {
  const [group, setGroup] = useState('All')
  const visible = group === 'All' ? skills : skills.filter((s) => s.group === group)

  return (
    <div>
      <SectionTitle title="About Me" intro="Who I am, what I'm learning, and what I enjoy." />

      <section className="max-w-2xl space-y-4 text-lg leading-relaxed">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter skills">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              aria-pressed={group === g}
              className={`rounded-full border px-4 py-1 text-sm font-medium transition-colors ${
                group === g
                  ? 'border-deep bg-deep text-paper dark:border-sun dark:bg-sun dark:text-ink'
                  : 'border-deep/40 hover:border-deep dark:border-mist/40 dark:hover:border-sun'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {visible.map((s) => (
            <li key={s.name} className="bg-mist px-3 py-1.5 font-medium text-deep dark:bg-nightcard dark:text-mist">
              {s.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Interests</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {about.interests.map((i) => (
            <li key={i} className="border-l-4 border-sun pl-3">{i}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
