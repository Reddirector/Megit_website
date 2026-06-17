import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Sparkles, Music, Palette, Mic2, BarChart3, Headphones, Wifi, ChevronRight, Github, Star } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import BackgroundFX from '../components/BackgroundFX.jsx'
import PhoneMockup from '../components/PhoneMockup.jsx'
import { SITE } from '../data/site.js'

const features = [
  { icon: Mic2, title: 'Synchronized Lyrics', desc: 'Real-time lyric sync with a soft purple glow on every active line.', img: '/Megit_website/screenshots/lyrics-sync.jpg' },
  { icon: Palette, title: 'Custom Accent Colors', desc: 'Pick any color — sliders, icons, and the entire UI adapt instantly.', img: '/Megit_website/screenshots/accent-picker.jpg' },
  { icon: Music, title: 'Vast Music Library', desc: 'Stream from YouTube Music — trending, global, and curated playlists.', img: '/Megit_website/screenshots/home-screen.jpg' },
  { icon: Wifi, title: 'Offline Downloads', desc: 'Download tracks to your device and listen anywhere, anytime.', img: '/Megit_website/screenshots/settings.jpg' },
  { icon: BarChart3, title: 'Listening Dashboard', desc: 'Beautiful stats — weekly, monthly, and yearly listening insights.', img: '/Megit_website/screenshots/dashboard.jpg' },
  { icon: Headphones, title: 'Crossfade & Hi-Fi Audio', desc: 'Gapless transitions and adjustable streaming quality up to High.', img: '/Megit_website/screenshots/now-playing.jpg' }
]

const stats = [
  { value: '1.2.0', label: 'Latest Release' },
  { value: '100%', label: 'Open Source' },
  { value: 'Flutter', label: 'Built With' },
  { value: 'India', label: 'Made in India' }
]

export default function Home() {
  return (
    <PageWrapper>
      <BackgroundFX />

      {/* HERO */}
      <section className="section-padding relative">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
              <Sparkles className="w-4 h-4 text-brand-purple" />
              <span className="gradient-text font-semibold">v{SITE.version} is here</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Your music,<br />
              <span className="gradient-text">synchronized.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Megit is a beautifully crafted music player for Android with real-time synced lyrics,
              custom accent themes, and YouTube Music integration. Premium sound, effortless flow.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/download" className="btn-primary">
                <Download className="w-5 h-5" />
                Download APK
              </Link>
              <a href={SITE.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            <div className="grid grid-cols-4 gap-3 pt-6 max-w-md">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-lg sm:text-xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 gradient-bg-purple opacity-30 blur-3xl rounded-full animate-pulse" />
            <div className="relative animate-float">
              <PhoneMockup src="./megit-lyrics-demo.mp4" isVideo />
            </div>
            {/* Floating tags */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-2 sm:left-4 top-1/4 glass px-4 py-2.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-2"
            >
              <Mic2 className="w-4 h-4 text-brand-purple" />
              <span className="text-sm font-semibold">Synced Lyrics</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-2 sm:right-4 bottom-1/4 glass px-4 py-2.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-2"
            >
              <Palette className="w-4 h-4 text-brand-purple" />
              <span className="text-sm font-semibold">Custom Themes</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="section-padding relative">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 space-y-3"
          >
            <span className="text-sm uppercase tracking-widest text-brand-purple font-semibold">Everything you need</span>
            <h2 className="text-4xl sm:text-5xl font-bold">Built for music lovers</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every detail is thoughtfully designed. From the way lyrics glow to how colors flow across the UI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08 }}
                className="card group cursor-default"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 relative bg-brand-purple/10">
                  <img
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 p-2.5 rounded-xl gradient-bg-purple shadow-lg">
                    <f.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features" className="btn-secondary">
              Explore all features
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="section-padding relative">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <span className="text-sm uppercase tracking-widest text-brand-purple font-semibold">See it live</span>
              <h2 className="text-4xl sm:text-5xl font-bold">A player that feels alive.</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Browse, discover, listen. Megit's home screen brings you trending playlists,
                global top songs, and curated picks — all wrapped in a smooth, glassmorphic UI
                that responds to your every tap.
              </p>
              <ul className="space-y-3">
                {['Smooth horizontal carousels', 'Instant theme color shifts', 'Beautiful Material Design 3 icons', 'Snappy bottom navigation'].map(p => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg-purple flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <PhoneMockup src="./megit-app-demo.mp4" isVideo />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl shadow-purple-500/40"
            style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 50%, #4C1D95 100%)' }}
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative space-y-6">
              <Star className="w-12 h-12 mx-auto opacity-90" />
              <h2 className="text-4xl sm:text-5xl font-bold">Ready to feel the flow?</h2>
              <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
                Download Megit v{SITE.version} — free, open source, made in India.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href={SITE.apkUrl}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-purple-dark font-semibold shadow-2xl hover:scale-105 transition-transform"
                >
                  <Download className="w-5 h-5" />
                  Download APK now
                </a>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/50 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
