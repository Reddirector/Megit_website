import { motion } from 'framer-motion'
import { Download as DownloadIcon, Smartphone, ShieldCheck, Github, ExternalLink, Package, Cpu, Calendar } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import BackgroundFX from '../components/BackgroundFX.jsx'
import { SITE } from '../data/site.js'

const steps = [
  { num: '01', title: 'Download the APK', desc: 'Click the big purple button below to grab the latest release.' },
  { num: '02', title: 'Allow Unknown Sources', desc: 'Settings → Security → Allow installs from this source.' },
  { num: '03', title: 'Tap & Install', desc: 'Open the downloaded APK and tap Install.' },
  { num: '04', title: 'Sign in & Enjoy', desc: 'Sign in with Google and dive into your music.' }
]

const meta = [
  { icon: Package, label: 'Version', value: `v${SITE.version}` },
  { icon: Cpu, label: 'Platform', value: 'Android' },
  { icon: Smartphone, label: 'Min Android', value: '7.0+' },
  { icon: Calendar, label: 'Updated', value: SITE.lastUpdated }
]

export default function Download() {
  return (
    <PageWrapper>
      <BackgroundFX />

      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mb-12"
          >
            <span className="text-sm uppercase tracking-widest text-brand-purple font-semibold">Get Megit</span>
            <h1 className="text-5xl sm:text-6xl font-bold">
              One <span className="gradient-text">click</span> away.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Free. Open source. No ads. No tracking beyond what you sign in with.
            </p>
          </motion.div>

          {/* Big download card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-white shadow-2xl shadow-purple-500/40 mb-12"
            style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 60%, #4C1D95 100%)' }}
          >
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="relative grid sm:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="space-y-2">
                <div className="text-sm opacity-80 uppercase tracking-wider">Latest Release</div>
                <h2 className="text-3xl sm:text-4xl font-bold">Megit v{SITE.version}</h2>
                <p className="opacity-90">app-release.apk · Android 7.0+</p>
              </div>
              <a
                href={SITE.apkUrl}
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-brand-purple-dark font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                <DownloadIcon className="w-6 h-6 group-hover:animate-bounce" />
                Download APK
              </a>
            </div>

            <div className="relative mt-8 pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {meta.map(m => (
                <div key={m.label} className="text-center sm:text-left">
                  <m.icon className="w-5 h-5 mb-2 opacity-70 mx-auto sm:mx-0" />
                  <div className="text-xs uppercase opacity-70 tracking-wider">{m.label}</div>
                  <div className="font-bold">{m.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{s.num}</div>
                <h3 className="font-bold mb-1.5">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="card grid sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <ShieldCheck className="w-8 h-8 text-brand-purple flex-shrink-0" />
              <div>
                <div className="font-bold text-sm">Safe & Open Source</div>
                <div className="text-xs text-gray-500">MIT Licensed</div>
              </div>
            </div>
            <a href={SITE.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center sm:justify-start hover:text-brand-purple transition-colors">
              <Github className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="font-bold text-sm">Source Code</div>
                <div className="text-xs text-gray-500">github.com/Reddirector/Megit</div>
              </div>
            </a>
            <a href={SITE.releaseUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center sm:justify-start hover:text-brand-purple transition-colors">
              <ExternalLink className="w-8 h-8 flex-shrink-0" />
              <div>
                <div className="font-bold text-sm">All Releases</div>
                <div className="text-xs text-gray-500">View on GitHub</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
