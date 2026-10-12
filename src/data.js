// ============================================================
// EDIT THIS FILE to make the portfolio yours.
// Everything shown on the site comes from here.
// ============================================================

export const profile = {
  name: 'Esrihel S. Monares',
  firstName: 'Esrihel',
  course: 'BS Information Technology',
  school: 'Cavite State University, Tanza Campus',
  location: 'General Trias City, Cavite, Philippines',
  age: 25,
  email: 'your.email@example.com', // TODO: put your real email
  links: [
    { label: 'GitHub', href: 'https://github.com/your-username' }, // TODO
    { label: 'Facebook', href: 'https://facebook.com/your-profile' }, // TODO
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' }, // TODO
  ],
  cvFile: '/Monares-CV.pdf', // put your PDF in the /public folder with this name
}

export const roles = ['a BSIT student', 'learning React', 'building for the web']

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    "I'm Esrihel, a 25-year-old BSIT student from General Trias City, Cavite. I study at Cavite State University, Tanza Campus, where I'm learning how to design, build and ship software.",
    'I like turning an idea into something people can actually open and use. This portfolio is my midterm project for DCIT 26 and it is built with React and Tailwind CSS.',
  ],
  interests: ['Web development', 'UI design', 'Problem solving', 'Learning new tools'],
}

export const skills = [
  { name: 'HTML', group: 'Frontend' },
  { name: 'CSS', group: 'Frontend' },
  { name: 'JavaScript', group: 'Frontend' },
  { name: 'React', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' },
  { name: 'Git & GitHub', group: 'Tools' },
  { name: 'VS Code', group: 'Tools' },
  { name: 'Vercel', group: 'Tools' },
  { name: 'Teamwork', group: 'Soft skills' },
  { name: 'Time management', group: 'Soft skills' },
  { name: 'Communication', group: 'Soft skills' },
]

// Add an image by putting a file in /public and setting image: '/my-image.png'
export const projects = [
  {
    id: 1,
    title: 'Calculator Project',
    tag: 'Web',
    image: null,
    summary: 'A simple calculator that handles everyday arithmetic.',
    details:
      'A calculator app with number buttons, basic operations (add, subtract, multiply, divide), clear and delete, and a live display. It shows how buttons, events, and state work together.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'To Do List',
    tag: 'Web',
    image: null,
    summary: 'A task list where you can add, finish, and remove tasks.',
    details:
      'A to-do app to add new tasks, mark them as done, and delete them. It keeps the list organized and shows how to render lists and update them dynamically.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const education = [
  {
    title: 'BS Information Technology',
    place: 'Cavite State University, Tanza Campus',
    period: 'Ongoing',
    note: 'Department of Information Technology',
  },
  // TODO: add your senior high school here
]

export const experience = [
  {
    title: 'DCIT 26 Midterm Laboratory: E-Portfolio',
    place: 'Cavite State University, Tanza Campus',
    period: 'SY 2026-2027',
    note: 'Built and deployed a React and Tailwind CSS portfolio.',
  },
  // TODO: add internships, part-time work, or other projects here
]
