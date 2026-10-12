import { useState } from 'react'
import { profile } from '../data'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!emailPattern.test(values.email)) errors.email = 'Enter a valid email, like name@example.com.'
  if (values.message.trim().length < 10) errors.message = 'Write at least 10 characters.'
  return errors
}

const field = 'mt-1 w-full border bg-white px-3 py-2 text-ink dark:bg-night dark:text-mist'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  const errors = validate(values)

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(errors).length === 0) setSent(true)
  }

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    'Portfolio message from ' + values.name
  )}&body=${encodeURIComponent(values.message + '\n\nReply to: ' + values.email)}`

  if (sent) {
    return (
      <div role="status" className="border-l-4 border-deep bg-mist p-5 dark:border-sun dark:bg-nightcard">
        <p className="font-display text-xl font-semibold">Message ready, {values.name}.</p>
        <p className="mt-2">Open your email app to send it to {profile.email}.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={mailto} className="bg-deep px-4 py-2 font-medium text-paper hover:bg-ink">
            Open email app
          </a>
          <button
            onClick={() => {
              setSent(false)
              setValues({ name: '', email: '', message: '' })
              setTouched({})
            }}
            className="border border-deep px-4 py-2 font-medium text-deep dark:border-sun dark:text-sun"
          >
            Write another
          </button>
        </div>
      </div>
    )
  }

  const shown = (n) => touched[n] && errors[n]
  const border = (n) => (shown(n) ? 'border-red-600' : 'border-deep/40 dark:border-mist/40')

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="font-medium">Name</label>
        <input id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}
          aria-invalid={!!shown('name')} className={`${field} ${border('name')}`} />
        {shown('name') && <p className="mt-1 text-sm text-red-700 dark:text-red-400">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="font-medium">Email</label>
        <input id="email" name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
          aria-invalid={!!shown('email')} className={`${field} ${border('email')}`} />
        {shown('email') && <p className="mt-1 text-sm text-red-700 dark:text-red-400">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="font-medium">Message</label>
        <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} onBlur={handleBlur}
          aria-invalid={!!shown('message')} className={`${field} ${border('message')}`} />
        <div className="mt-1 flex justify-between text-sm">
          <span className="text-red-700 dark:text-red-400">{shown('message') ? errors.message : ''}</span>
          <span className="text-ink/60 dark:text-mist/60">{values.message.length} characters</span>
        </div>
      </div>
      <button type="submit" className="bg-deep px-5 py-2.5 font-medium text-paper transition-colors hover:bg-ink dark:bg-sun dark:text-ink dark:hover:bg-sun/80">
        Send message
      </button>
    </form>
  )
}
