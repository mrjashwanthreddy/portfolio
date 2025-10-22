import {useState} from 'react'
import emailjs from '@emailjs/browser'
import {links} from '../../data/site'
import './contact.css'

export function ContactPage() {
    const [formData, setFormData] = useState({name: '', email: '', message: ''})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const email = links.find((l) => l.href.startsWith('mailto:'))?.href ?? 'mailto:jashwanth@example.com'

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // EmailJS configuration - you'll need to replace these with your actual values
            const serviceId = 'service_ez7z5gt' // Replace with your EmailJS service ID
            const templateId = 'template_g864rbd' // Replace with your EmailJS template ID
            const publicKey = 'h-w7zOw4QZ4zMY7K7' // Replace with your EmailJS public key

            await emailjs.send(serviceId, templateId, {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'mr.jashwanthreddy@gmail.com'
            }, publicKey)

            setSubmitStatus('success')
            setFormData({name: '', email: '', message: ''})
        } catch (error) {
            console.error('EmailJS error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section className="contact-wrap">
            <h1>Contact</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    aria-label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    aria-label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="textarea"
                    name="message"
                    placeholder="Your Message"
                    aria-label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <div className="send-row">
                    <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>

                {submitStatus === 'success' && (
                    <p style={{color: 'green', marginTop: '12px'}}>
                        ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                )}

                {submitStatus === 'error' && (
                    <p style={{color: 'red', marginTop: '12px'}}>
                        ❌ Failed to send message. Please try again or email me directly.
                    </p>
                )}
            </form>

            <p style={{marginTop: 16}}>Or reach me directly at <a href={email}>{email.replace('mailto:', '')}</a>.</p>
        </section>
    )
}


