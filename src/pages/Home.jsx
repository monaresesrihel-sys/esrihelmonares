import { nav, profile, projects, skills } from '../data'

export default function Home({ go }) {
  const tiles = nav.filter((n) => n.id !== 'home')

  return (
    <div>
      <p className="font-medium text-deep dark:text-sun">Welcome to my portfolio</p>
      <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] sm:text-7xl">
        Hi, I'm {profile.firstName}.
      </h1>
      <p className="mt-6 max-w-xl text-lg">
        I'm a BSIT student from General Trias City, Cavite. This site collects my projects, my
        resume, and the best way to reach me.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button onClick={() => go('projects')} className="bg-deep px-5 py-2.5 font-medium text-paper hover:bg-ink dark:bg-sun dark:text-ink dark:hover:bg-sun/80">
          View projects
        </button>
        <a href={profile.cvFile} download className="border border-deep px-5 py-2.5 font-medium text-deep hover:bg-mist dark:border-sun dark:text-sun dark:hover:bg-nightcard">
          Download CV
        </a>
      </div>

      <dl className="mt-12 grid max-w-md grid-cols-2 gap-6 border-t border-mist pt-6 dark:border-nightcard">
        <div>
          <dt className="text-sm text-ink/60 dark:text-mist/60">Projects shown</dt>
          <dd className="font-display text-4xl font-bold">{projects.length}</dd>
        </div>
        <div>
          <dt className="text-sm text-ink/60 dark:text-mist/60">Skills listed</dt>
          <dd className="font-display text-4xl font-bold">{skills.length}</dd>
        </div>
      </dl>

      <h2 className="mt-12 text-xl font-semibold">Where to next</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {tiles.map((t) => (
          <li key={t.id}>
            <button
              onClick={() => go(t.id)}
              className="w-full border border-mist bg-white px-4 py-3 text-left font-medium hover:border-deep dark:border-nightcard dark:bg-nightcard dark:hover:border-sun"
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
