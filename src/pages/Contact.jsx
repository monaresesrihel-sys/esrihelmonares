import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { profile } from '../data'

export default function Contact() {
  return (
    <div>
      <SectionTitle title="Contact" intro="Send me a message or find me online." />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">Reach me</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={`mailto:${profile.email}`} className="font-medium text-deep underline underline-offset-4 dark:text-sun">
                {profile.email}
              </a>
            </li>
            {profile.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer" className="font-medium text-deep underline underline-offset-4 dark:text-sun">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-ink/70 dark:text-mist/70">{profile.location}</p>
        </div>

        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
