import { links } from '../../data/site'

export function ContactPage() {
  const email = links.find((l) => l.href.startsWith('mailto:'))?.href ?? 'mailto:jashwanth@example.com'
  return (
    <section>
      <h1>Contact</h1>
      <p>Reach out at <a href={email}>{email.replace('mailto:', '')}</a>.</p>
    </section>
  )
}


