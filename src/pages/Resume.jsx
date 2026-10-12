import SectionTitle from '../components/SectionTitle'
import { education, experience, profile, skills } from '../data'

function Timeline({ title, items }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ol className="mt-4 space-y-5 border-l-2 border-deep/30 pl-5 dark:border-sun/40">
        {items.map((it) => (
          <li key={it.title} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-sun" aria-hidden="true" />
            <p className="font-display text-lg font-semibold">{it.title}</p>
            <p>{it.place}</p>
            <p className="text-sm text-ink/60 dark:text-mist/60">{it.period}</p>
            {it.note && <p className="mt-1">{it.note}</p>}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function Resume() {
  return (
    <div>
      <SectionTitle title="Resume" intro={`${profile.name}, ${profile.course}`} />
      <div className="flex flex-wrap items-end gap-5">
        <img
          src="/profile.jpg"
          alt={`Group photo including ${profile.name}`}
          className="h-auto w-56 border-4 border-sun"
        />
        <a
          href={profile.cvFile}
          download
          className="inline-block bg-deep px-5 py-2.5 font-medium text-paper hover:bg-ink dark:bg-sun dark:text-ink dark:hover:bg-sun/80"
        >
          Download CV
        </a>
      </div>

      <Timeline title="Education" items={education} />
      <Timeline title="Experience" items={experience} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s.name} className="bg-mist px-3 py-1.5 text-deep dark:bg-nightcard dark:text-mist">
              {s.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
