import { useEffect, useState } from 'react'
import { LazyMotion, domAnimation, m as motion, MotionConfig } from 'motion/react'
import { profile, news, research, publications, experience } from './data.js'

const ease = [0.22, 0.61, 0.36, 1]

// Sections fade up a few pixels the first time they scroll into view.
function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, ease }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  )
}

function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const ids = ['research', 'publications', 'experience']
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  const item = (id, label) => (
    <a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
  )

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-name" href="#top">{profile.name}</a>
        <nav aria-label="Sections">
          {item('research', 'Research')}
          {item('publications', 'Publications')}
          {item('experience', 'Experience')}
          <a href="/assets/cv.pdf" target="_blank" rel="noopener">CV</a>
        </nav>
      </div>
    </header>
  )
}

function Authors({ list }) {
  return list.map((a, i) => (
    <span key={a}>
      {a === 'F. Ahmed' ? <b>{a}</b> : a}
      {i < list.length - 1 ? ', ' : ''}
    </span>
  ))
}

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict><MotionConfig reducedMotion="user">
      <Nav />
      <main id="top">
        <motion.section
          className="intro"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="intro-photo">
            <img src="/assets/faisal.jpg" alt="Portrait of Faisal Ahmed" width="800" height="800" />
          </div>
          <div className="intro-text">
            <h1>{profile.name}</h1>
            <p className="tagline">{profile.tagline}</p>
            {profile.bio.map((p, i) => <p key={i} className="bio">{p}</p>)}
            <ul className="links">
              {profile.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target={l.href.startsWith('http') || l.href.endsWith('.pdf') ? '_blank' : undefined} rel="noopener">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <Section id="news" title="News">
          <ul className="news">
            {news.map((n, i) => (
              <li key={i}><span className="date">{n.date}</span><span>{n.text}</span></li>
            ))}
          </ul>
        </Section>

        <Section id="research" title="Research">
          <div className="research">
            {research.map((r) => (
              <article key={r.title} className="project">
                <div className="project-head">
                  <h3>{r.title}</h3>
                  <p className="project-meta">{r.meta}</p>
                </div>
                <div className="project-body">
                  <p>{r.text}</p>
                  {r.link && (
                    <a className="more" href={r.link.href} target="_blank" rel="noopener">{r.link.label} <span aria-hidden="true">&rsaquo;</span></a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="publications" title="Publications">
          {publications.map((g) => (
            <div key={g.group} className="pub-group">
              <h3 className="group">{g.group}</h3>
              <ol className="pubs">
                {g.items.map((p) => (
                  <li key={p.title}>
                    <p className="pub-title">{p.title}</p>
                    <p className="pub-authors"><Authors list={p.authors} /></p>
                    {(p.venue || p.doi) && (
                      <p className="pub-venue">
                        {p.venue && <i>{p.venue}</i>}
                        {p.doi && <a className="pill" href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener">DOI</a>}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.role}>
                <div className="tl-head"><h3>{e.role}</h3><span className="date">{e.date}</span></div>
                <p className="tl-org">{e.org}</p>
                <p>{e.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact">The best way to reach me is by email at <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p>
        </Section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 {profile.name} &middot; Dhaka, Bangladesh</p>
      </footer>
    </MotionConfig></LazyMotion>
  )
}
