import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, ShieldCheck, FileSearch, Lock, ExternalLink } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import BackgroundFX from '../components/BackgroundFX.jsx'
import { SOCIAL } from '../data/site.js'

const allowed = [
  'Display your name and profile picture inside Megit',
  'Show your YouTube Music library, liked songs, and playlists',
  'Sync your in-app preferences via Firebase',
  'Provide the Listening Dashboard (your stats, for your eyes only)',
  'Provide customer support when you contact us'
]
const forbidden = [
  'Transferring your Google user data to advertising platforms',
  'Selling, renting, or sharing data with data brokers',
  'Using data to determine credit-worthiness or for lending',
  'Training generalized AI/ML models on your data',
  'Allowing humans to read your data (except for security/legal/support with consent)'
]

export default function GoogleDisclosure() {
  return (
    <PageWrapper>
      <BackgroundFX />

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 space-y-3"
          >
            <ShieldCheck className="w-12 h-12 text-brand-purple mx-auto" />
            <h1 className="text-4xl sm:text-5xl font-bold">
              Google API Services<br /><span className="gradient-text">User Data Disclosure</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Megit's commitment to the Google API Services User Data Policy — Limited Use requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-6"
          >
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-brand-purple" />
              Limited Use Statement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Megit's use and transfer of information received from Google APIs to any other app will adhere to
              <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="underline text-brand-purple-dark dark:text-brand-purple-light"> Google API Services User Data Policy</a>,
              including the <strong>Limited Use requirements</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-6"
          >
            <h2 className="text-2xl font-bold mb-4">OAuth Scopes Requested</h2>
            <div className="space-y-3">
              {[
                { scope: 'profile', use: 'Display your name and profile picture inside Megit.' },
                { scope: 'email', use: 'Identify your account and contact you for support.' },
                { scope: '.../auth/youtube.readonly', use: 'Read your YouTube library, playlists, and likes.' },
                { scope: '.../auth/youtube', use: 'Manage YouTube Music playlists and library at your request.' }
              ].map(s => (
                <div key={s.scope} className="grid sm:grid-cols-[280px_1fr] gap-3 p-3 rounded-xl bg-brand-purple/5">
                  <code className="text-xs sm:text-sm font-mono text-brand-purple-dark dark:text-brand-purple-light break-all">{s.scope}</code>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{s.use}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-green-500/30 dark:border-green-500/40"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                We DO use your data to
              </h3>
              <ul className="space-y-2">
                {allowed.map(a => (
                  <li key={a} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-red-500/30 dark:border-red-500/40"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600 dark:text-red-400">
                <XCircle className="w-5 h-5" />
                We will NEVER
              </h3>
              <ul className="space-y-2">
                {forbidden.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-6 h-6 text-brand-purple" />
              Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All data transmitted between Megit, Google APIs, and our Firebase backend is encrypted using HTTPS/TLS.
              Firebase data is encrypted at rest using Google Cloud's encryption standards. You can revoke Megit's
              access at any time via your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="underline text-brand-purple-dark dark:text-brand-purple-light">Google Account Permissions <ExternalLink className="inline w-3 h-3" /></a>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10 text-sm text-gray-500"
          >
            Questions? Email <a href={`mailto:${SOCIAL.email}`} className="underline text-brand-purple">{SOCIAL.email}</a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
