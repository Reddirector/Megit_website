import { motion } from 'framer-motion'
import { Shield, Lock, Database, Eye, UserCheck, Server, AlertCircle, Mail } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import BackgroundFX from '../components/BackgroundFX.jsx'
import { SITE, SOCIAL, DEVELOPER } from '../data/site.js'

const Section = ({ icon: Icon, title, children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    className="card space-y-3 scroll-mt-28"
  >
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl gradient-bg-purple">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
      {children}
    </div>
  </motion.section>
)

const toc = [
  { id: 'intro', label: 'Introduction' },
  { id: 'info', label: 'Information We Collect' },
  { id: 'google', label: 'Google OAuth & YouTube Data' },
  { id: 'use', label: 'How We Use Information' },
  { id: 'storage', label: 'Storage & Security' },
  { id: 'sharing', label: 'Data Sharing' },
  { id: 'rights', label: 'Your Rights' },
  { id: 'children', label: 'Children\'s Privacy' },
  { id: 'changes', label: 'Changes to Policy' },
  { id: 'contact', label: 'Contact' }
]

export default function Privacy() {
  return (
    <PageWrapper>
      <BackgroundFX />

      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 space-y-3"
          >
            <Shield className="w-12 h-12 text-brand-purple mx-auto" />
            <h1 className="text-5xl font-bold">Privacy <span className="gradient-text">Policy</span></h1>
            <p className="text-gray-600 dark:text-gray-400">
              Effective Date: {SITE.lastUpdated} · Last Updated: {SITE.lastUpdated}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8">
            {/* TOC */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="card">
                <h3 className="text-sm uppercase tracking-widest font-semibold mb-3 text-brand-purple">Contents</h3>
                <nav className="space-y-1">
                  {toc.map(item => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-3 py-1.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-brand-purple/10 hover:text-brand-purple transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-6">
              <Section id="intro" icon={Eye} title="1. Introduction">
                <p>
                  Welcome to <strong>Megit</strong> ("we", "us", "our", or the "App"), a music player application developed
                  by <strong>{DEVELOPER.name}</strong> ({DEVELOPER.handle}) based in <strong>{DEVELOPER.location}</strong>.
                  This Privacy Policy explains how we collect, use, store, share, and protect your information when you use
                  the Megit Android application.
                </p>
                <p>
                  By downloading, installing, or using Megit, you agree to the practices described in this Privacy Policy.
                  If you do not agree with this policy, please do not use the App.
                </p>
                <p>
                  This policy is governed by the laws of <strong>India</strong>, including the
                  Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000.
                </p>
              </Section>

              <Section id="info" icon={Database} title="2. Information We Collect">
                <p>We collect the following categories of information when you use Megit:</p>
                <h4 className="font-bold mt-4">a) Information You Provide</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Google Account Information</strong> via Google Sign-In: your name, email address, profile picture, and Google account ID.</li>
                  <li><strong>YouTube / YouTube Music Data</strong> (with your explicit consent): your music library, liked songs, playlists, and listening preferences.</li>
                  <li><strong>User-generated content</strong>: playlists you create, favorites, and in-app preferences.</li>
                </ul>
                <h4 className="font-bold mt-4">b) Information Collected Automatically</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Device information (model, OS version, language).</li>
                  <li>App usage data (listening time, feature interactions) for the Listening Dashboard.</li>
                  <li>Crash logs and basic diagnostics to fix bugs.</li>
                </ul>
                <h4 className="font-bold mt-4">c) Information We Do NOT Collect</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do <strong>not</strong> collect your contacts, SMS, call logs, or location data.</li>
                  <li>We do <strong>not</strong> sell your data to third parties.</li>
                  <li>We do <strong>not</strong> use your data for advertising.</li>
                </ul>
              </Section>

              <Section id="google" icon={UserCheck} title="3. Google OAuth & YouTube Data Usage">
                <p>
                  Megit uses Google OAuth 2.0 to provide Google Sign-In and access YouTube / YouTube Music data
                  on your behalf. We request the following <strong>OAuth scopes</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code className="px-1.5 py-0.5 rounded bg-brand-purple/10 text-brand-purple text-xs">profile</code> — to display your name and profile picture in the app.</li>
                  <li><code className="px-1.5 py-0.5 rounded bg-brand-purple/10 text-brand-purple text-xs">email</code> — to identify your account and contact you for support.</li>
                  <li><code className="px-1.5 py-0.5 rounded bg-brand-purple/10 text-brand-purple text-xs">https://www.googleapis.com/auth/youtube.readonly</code> — to read your YouTube library, playlists, and likes.</li>
                  <li><code className="px-1.5 py-0.5 rounded bg-brand-purple/10 text-brand-purple text-xs">https://www.googleapis.com/auth/youtube</code> — to manage your YouTube Music playlists and library at your request.</li>
                </ul>
                <div className="my-4 p-4 rounded-xl border-2 border-brand-purple/30 bg-brand-purple/5">
                  <p className="font-bold flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-brand-purple" />
                    Google API Services User Data Policy — Limited Use Disclosure
                  </p>
                  <p>
                    Megit's use and transfer of information received from Google APIs to any other app
                    will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="underline text-brand-purple-dark dark:text-brand-purple-light">Google API Services User Data Policy</a>,
                    including the Limited Use requirements. See our full <a href="/google-disclosure" className="underline text-brand-purple-dark dark:text-brand-purple-light">Google API Services Disclosure</a>.
                  </p>
                </div>
                <p>
                  You can revoke Megit's access to your Google account at any time by visiting
                  <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="underline text-brand-purple-dark dark:text-brand-purple-light"> Google Account Permissions</a>.
                </p>
              </Section>

              <Section id="use" icon={Eye} title="4. How We Use Your Information">
                <p>We use the information we collect strictly to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Authenticate you and personalize your experience (display name, profile picture).</li>
                  <li>Stream music and display your YouTube Music library, playlists, and likes inside the app.</li>
                  <li>Power user-facing features: Listening Dashboard, recommendations, downloads.</li>
                  <li>Sync your preferences across reinstalls (using Firebase, see Section 5).</li>
                  <li>Improve app performance and fix crashes.</li>
                  <li>Respond to your support requests sent to <a href={`mailto:${SOCIAL.email}`} className="underline text-brand-purple-dark dark:text-brand-purple-light">{SOCIAL.email}</a>.</li>
                </ul>
                <p>
                  We do <strong>not</strong> use Google user data for advertising, profiling, training generalized
                  AI/ML models, or any purpose not explicitly listed above.
                </p>
              </Section>

              <Section id="storage" icon={Server} title="5. Storage & Security">
                <p>
                  <strong>Backend:</strong> Megit uses <strong>Google Firebase</strong> (Authentication and Firestore) to
                  securely store certain user data such as your account profile, app preferences, and synced library
                  state. Firebase data is hosted on Google Cloud infrastructure with industry-standard encryption.
                </p>
                <p>
                  <strong>On-device data:</strong> Downloaded songs, cached artwork, and your listening history are stored
                  locally on your device. This data is removed when you uninstall the App or sign out.
                </p>
                <p>
                  <strong>Security:</strong> All data in transit between Megit, Firebase, and Google APIs is encrypted using
                  HTTPS/TLS. Data at rest in Firebase is encrypted using Google's encryption standards.
                </p>
                <p>
                  <strong>Retention:</strong> We retain your account data for as long as your account is active. If you
                  delete your account, we will delete your data from our Firebase backend within 30 days, except where
                  retention is required by law.
                </p>
              </Section>

              <Section id="sharing" icon={Lock} title="6. Data Sharing & Third Parties">
                <p>We do not sell, rent, or trade your personal data. We share data only with:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Google LLC</strong> — for authentication (Google Sign-In) and YouTube/YouTube Music API access. Governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-brand-purple-dark dark:text-brand-purple-light">Google's Privacy Policy</a>.</li>
                  <li><strong>Firebase (Google Cloud)</strong> — for secure cloud storage of your preferences and account profile.</li>
                  <li><strong>Legal authorities</strong> — only if required by valid Indian court order or law.</li>
                </ul>
                <p>No advertising networks, data brokers, or analytics resellers are involved.</p>
              </Section>

              <Section id="rights" icon={UserCheck} title="7. Your Rights">
                <p>Under the Indian DPDP Act, 2023 and other applicable laws, you have the right to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Access</strong> the personal data we hold about you.</li>
                  <li><strong>Correct</strong> any inaccurate or incomplete information.</li>
                  <li><strong>Delete</strong> your account and all associated data.</li>
                  <li><strong>Withdraw consent</strong> at any time via Google Account Permissions or by contacting us.</li>
                  <li><strong>Port your data</strong> in a machine-readable format.</li>
                  <li><strong>File a grievance</strong> with our Grievance Officer (see Section 10).</li>
                </ul>
                <p>
                  To exercise any of these rights, email us at
                  <a href={`mailto:${SOCIAL.email}`} className="underline text-brand-purple-dark dark:text-brand-purple-light"> {SOCIAL.email}</a>.
                  We will respond within 30 days.
                </p>
              </Section>

              <Section id="children" icon={Shield} title="8. Children's Privacy">
                <p>
                  Megit is not directed to children under 13 (or under 18 in jurisdictions where this is required). We do
                  not knowingly collect personal information from children. If you are a parent or guardian and believe
                  your child has provided personal information, please contact us and we will delete it promptly.
                </p>
              </Section>

              <Section id="changes" icon={AlertCircle} title="9. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. Material changes will be notified through the App
                  and on this page with a revised "Last Updated" date. Continued use of Megit after changes constitutes
                  acceptance of the updated policy.
                </p>
              </Section>

              <Section id="contact" icon={Mail} title="10. Contact & Grievance Officer">
                <p>For any questions, concerns, or grievances regarding this Privacy Policy:</p>
                <div className="my-4 p-4 rounded-xl bg-brand-purple/10">
                  <p><strong>Grievance Officer:</strong> {DEVELOPER.name}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${SOCIAL.email}`} className="underline text-brand-purple-dark dark:text-brand-purple-light">{SOCIAL.email}</a></p>
                  <p><strong>Location:</strong> {DEVELOPER.location}</p>
                  <p><strong>Response Time:</strong> Within 30 days as per DPDP Act, 2023</p>
                </div>
                <p>
                  This Privacy Policy is hosted at <code className="px-1.5 py-0.5 rounded bg-brand-purple/10 text-brand-purple text-xs">https://{SITE.domain}/privacy</code> and
                  linked from our homepage as required by Google OAuth verification policies.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
