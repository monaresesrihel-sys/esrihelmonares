export default function SectionTitle({ title, intro }) {
  return (
    <div className="mb-8 border-l-4 border-sun pl-4">
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      {intro && <p className="mt-2 max-w-xl text-ink/70 dark:text-mist/80">{intro}</p>}
    </div>
  )
}
