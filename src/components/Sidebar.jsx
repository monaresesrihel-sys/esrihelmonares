import { nav, profile } from '../data'

export default function Sidebar({ page, go, open, setOpen, dark, toggleDark }) {
  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-mist bg-paper/95 px-5 py-3 backdrop-blur dark:border-nightcard dark:bg-night/95 lg:hidden">
        <span className="font-display text-lg font-semibold">{profile.firstName} Monares</span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="rounded-md border border-deep px-3 py-1.5 text-sm font-medium text-deep dark:border-sun dark:text-sun"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-ink/50 lg:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 transform flex-col bg-deep text-paper transition-transform duration-300 motion-reduce:transition-none lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-6 pb-6 pt-8">
          <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-sun font-display text-xl font-bold text-ink">
            ESM
          </div>
          <p className="font-display text-xl font-semibold leading-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-mist">{profile.course}</p>
        </div>

        <nav className="flex-1 px-3" aria-label="Main">
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = page === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    aria-current={active ? 'page' : undefined}
                    className={`w-full rounded-md px-3 py-2.5 text-left font-medium transition-colors ${
                      active ? 'bg-sun text-ink' : 'text-paper hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="space-y-3 px-6 py-6 text-sm">
          <button
            onClick={toggleDark}
            aria-pressed={dark}
            className="w-full rounded-md border border-white/30 px-3 py-2 font-medium hover:bg-white/10"
          >
            {dark ? 'Switch to light mode' : 'Switch to dark mode'}
          </button>
          <p className="text-mist">{profile.location}</p>
        </div>
      </aside>
    </>
  )
}
