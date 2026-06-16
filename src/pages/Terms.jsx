import { motion } from 'framer-motion'
import { FileText, Scale, AlertTriangle, Ban, RefreshCcw, Gavel, Mail } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import BackgroundFX from '../components/BackgroundFX.jsx'
import { SITE, SOCIAL, DEVELOPER } from '../data/site.js'

const Section = ({ icon: Icon, title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    className="card space-y-3"
  >
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl gradient-bg-purple">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">{children}</div>
  </motion.section>
)

export default function Terms() {
  return (
    <PageWrapper>
      <BackgroundFX />

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 space-y-3"
          >
            <FileText className="w-12 h-12 text-brand-purple mx-auto" />
            <h1 className="text-5xl font-bold">Terms of <span className="gradient-text">Service</span></h1>
            <p className="text-gray-600 dark:text-gray-400">Last Updated: {SITE.lastUpdated}</p>
          </motion.div>

          <div className="space-y-6">
            <Section icon={Scale} title="1. Acceptance of Terms">
              <p>
                By downloading, installing, or using the Megit application ("App"), you agree to be bound by these
                Terms of Service ("Terms"). If you do not agree, do not use the App. Megit is developed and operated
                by <strong>{DEVELOPER.name}</strong> ({DEVELOPER.handle}) from <strong>{DEVELOPER.location}</strong>.
              </p>
            </Section>

            <Section icon={FileText} title="2. License & Use">
              <p>
                Megit is open-source software released under the <strong>MIT License</strong>. You are granted a
                personal, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes
                in accordance with these Terms.
              </p>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reverse-engineer or tamper with the App in violation of the MIT License terms.</li>
                <li>Use the App for any unlawful or unauthorized purpose.</li>
                <li>Circumvent any security or authentication measures.</li>
                <li>Use the App to violate YouTube's Terms of Service or Google's policies.</li>
              </ul>
            </Section>

            <Section icon={AlertTriangle} title="3. Google Account & YouTube Content">
              <p>
                Megit accesses YouTube and YouTube Music data on your behalf through Google's authorized APIs. By
                signing in with Google, you also agree to comply with:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="underline text-brand-purple-dark dark:text-brand-purple-light">YouTube Terms of Service</a></li>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-brand-purple-dark dark:text-brand-purple-light">Google Privacy Policy</a></li>
              </ul>
              <p>
                Megit is an independent third-party client and is not affiliated with, endorsed by, or sponsored by
                YouTube, Google, or Alphabet Inc.
              </p>
            </Section>

            <Section icon={Ban} title="4. Prohibited Conduct">
              <p>You may not use Megit to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Download, redistribute, or commercially exploit copyrighted music content.</li>
                <li>Interfere with the App's normal operation or other users' enjoyment.</li>
                <li>Use automated means (bots, scrapers) to interact with the App or its servers.</li>
                <li>Impersonate any person or misrepresent your affiliation.</li>
              </ul>
            </Section>

            <Section icon={AlertTriangle} title="5. Disclaimers & Limitation of Liability">
              <p>
                Megit is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> without warranties of any
                kind, express or implied. We do not guarantee that the App will be uninterrupted, error-free, or
                completely secure.
              </p>
              <p>
                To the maximum extent permitted by Indian law, in no event shall {DEVELOPER.name} be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your use of Megit.
              </p>
            </Section>

            <Section icon={RefreshCcw} title="6. Updates & Termination">
              <p>
                We may update the App and these Terms at any time. Continued use after changes constitutes acceptance
                of the updated Terms. We reserve the right to terminate or suspend your access to the App if you
                violate these Terms.
              </p>
            </Section>

            <Section icon={Gavel} title="7. Governing Law & Jurisdiction">
              <p>
                These Terms are governed by the laws of <strong>India</strong>. Any disputes arising out of or in
                connection with these Terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </Section>

            <Section icon={Mail} title="8. Contact">
              <p>For questions about these Terms, contact:</p>
              <p>
                <strong>{DEVELOPER.name}</strong><br />
                <a href={`mailto:${SOCIAL.email}`} className="underline text-brand-purple-dark dark:text-brand-purple-light">{SOCIAL.email}</a>
              </p>
            </Section>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
