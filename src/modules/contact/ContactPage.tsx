import { links } from '../../data/site'

export function ContactPage() {
  const email = links.find((l) => l.href.startsWith('mailto:'))?.href ?? 'mailto:jashwanth@example.com'
  return (
    <section className="contact-wrap">
      <h1>Projects</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input className="input" type="text" placeholder="Name" aria-label="Name" />
        <input className="input" type="email" placeholder="Email" aria-label="Email" />
        <textarea className="textarea" placeholder="Message" aria-label="Message" />
        <div className="send-row">
          <button className="btn btn-primary" type="submit">Send</button>
        </div>
      </form>
      <p style={{ marginTop: 16 }}>Or reach me at <a href={email}>{email.replace('mailto:', '')}</a>.</p>
    </section>
  )
}


