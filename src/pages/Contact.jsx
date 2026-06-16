import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Instagram, Twitter, Send, MapPin, MessageSquare, User, FileText } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import BackgroundFX from '../components/BackgroundFX.jsx'
import { SOCIAL, DEVELOPER } from '../data/site.js'

const socials = [
  { icon: Mail, label: 'Email', value: SOCIAL.email, href: `mailto:${SOCIAL.email}`, color: 'from-red-500 to-orange-500' },
  { icon: Github, label: 'GitHub', value: '@Reddirector', href: SOCIAL.github, color: 'from-gray-700 to-gray-900' },
  { icon: Instagram, label: 'Instagram', value: '@ours.truly.aditya', href: SOCIAL.instagram, color: 'from-pink-500 to-purple-600' },
  { icon: Twitter, label: 'X / Twitter', value: '@KumarAditya6430', href: SOCIAL.twitter, color: 'from-sky-500 to-blue-600' }
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Megit — Contact from website')
    const body = encodeURIComponent(`Hi Aditya,\n\nMy name is ${form.name || '[Your name]'}.\n\n${form.message}\n\n— Sent via megit website`)
    window.location.href = `mailto:${SOCIAL.email}?subject=${subject}&body=${body}`
  }

  return (
    <PageWrapper>
      <BackgroundFX />

      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 space-y-3"
          >
            <span className="text-sm uppercase tracking-widest text-brand-purple font-semibold">Get in touch</span>
            <h1 className="text-5xl sm:text-6xl font-bold">Let's <span className="gradient-text">talk.</span></h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Found a bug? Have a feature idea? Just want to say hi? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-brand-purple" />
                Send a message
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                This form opens your default email app pre-filled — no backend, no tracking.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-purple/20 bg-white/50 dark:bg-brand-black-soft/50 focus:border-brand-purple focus:outline-none focus:ring-4 focus:ring-brand-purple/20 transition-all"
                    placeholder="Aditya Kumar"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" /> Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-purple/20 bg-white/50 dark:bg-brand-black-soft/50 focus:border-brand-purple focus:outline-none focus:ring-4 focus:ring-brand-purple/20 transition-all"
                    placeholder="Bug report / Feature request / Hello"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" /> Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-purple/20 bg-white/50 dark:bg-brand-black-soft/50 focus:border-brand-purple focus:outline-none focus:ring-4 focus:ring-brand-purple/20 transition-all resize-none"
                    placeholder="Tell me what's on your mind…"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send className="w-4 h-4" />
                  Open in Email App
                </button>
              </form>
            </motion.div>

            {/* Social Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="card">
                <h2 className="text-2xl font-bold mb-1">Or find me here</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                  All my channels are listed below. Click any to open.
                </p>
                <div className="space-y-3">
                  {socials.map((s, i) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.label === 'Email' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4 p-4 rounded-2xl border-2 border-brand-purple/15 hover:border-brand-purple hover:bg-brand-purple/5 transition-all group"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${s.color} text-white group-hover:scale-110 transition-transform`}>
                        <s.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold">{s.label}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{s.value}</div>
                      </div>
                      <Send className="w-4 h-4 text-gray-400 group-hover:text-brand-purple group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="card text-center">
                <MapPin className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                <div className="font-bold">{DEVELOPER.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{DEVELOPER.location} 🇮🇳</div>
                <div className="text-xs text-gray-400 mt-2">Usually responds within 48 hours</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
